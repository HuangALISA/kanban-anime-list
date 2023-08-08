import React, { useState } from "react"
import "./App.css"
import { animeMockData, headerInfoMockData } from "./mockData"
import cx from "classnames"
import { HeaderComponent } from "./HeaderComponent"
import { StarsCalculation } from "./StarsCalculation"
import { Layout, Menu } from "antd"
import { ReactComponent as Logo } from "./logo.svg"

const { Content, Footer, Sider } = Layout

interface UserData {
  size: string
  id: number
}

interface ShowData {
  state: boolean
  id: number
}

const AnimeList = () => {
  const [sizeObj, setSizeObj] = useState<UserData>({
    size: "100%",
    id: 0,
  })
  const [infoShown, setInfoShown] = useState<ShowData>({ state: false, id: 0 })
  const [query, setQuery] = useState("")
  const handleSearch = (query: string) => {
    setQuery(query)
  }
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme)
  }
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <Layout hasSider style={{ height: "1000%" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "#5e5df0",
        }}
      >
        <div className="main-page_site-info">
          <div className="main-page_organization-logo">
            <Logo
              className="main-page_header-logo"
              width="25px"
              height="25px"
            />
          </div>
          <div className="main-pager_site-name">
            {headerInfoMockData.siteName}
          </div>
        </div>
        <Menu
          mode="vertical"
          defaultSelectedKeys={["2"]}
          items={animeMockData?.map((el, index) => {
            const key = index + 1
            return {
              key,
              label: `${el?.name?.toUpperCase()}`,
            }
          })}
          style={{ backgroundColor: "#5e5df0", color: "#e5e5ff" }}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
          backgroundColor: !isDarkTheme ? "white" : "black",
        }}
      >
        <HeaderComponent
          onSubmit={handleSearch}
          onClick={changeTheme}
          isDarkTheme={isDarkTheme}
          onDoubleClick={handleReload}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <div
              className={cx({
                "main-page_content-container_light": !isDarkTheme,
                "main-page_content-container_dark": isDarkTheme,
              })}
            >
              {animeMockData
                .filter((anime) => anime.name.toLowerCase().includes(query))
                .map((el, idx) => (
                  <div
                    key={idx}
                    className={
                      isDarkTheme
                        ? "main-page_card_dark"
                        : "main-page_card_light"
                    }
                    onMouseOver={() => setSizeObj({ size: "100%", id: idx })}
                    onMouseLeave={() => setSizeObj({ size: "90%", id: idx })}
                  >
                    <img
                      id="main-page_anime-image"
                      alt="anime_image"
                      style={{
                        borderRadius: "12px",
                        cursor: "pointer",
                        width: `${sizeObj.id === idx ? sizeObj.size : "90%"}`,
                        marginTop: "10px",
                      }}
                      src={el.link}
                      onMouseOver={() => setInfoShown({ state: true, id: idx })}
                      onMouseLeave={() =>
                        setInfoShown({ state: false, id: idx })
                      }
                    />
                    <div className="main-page_anime-name" title="Anime Name">
                      {el.name}
                    </div>
                    <div className="main-page_main-info">
                      <span>{el?.information?.type}</span>
                      <span>{el?.information?.year}</span>
                    </div>
                    {infoShown.state && infoShown.id === idx && (
                      <div key={idx} className="main-page_message-box">
                        <div className="main-page_message-box_container">
                          <div>
                            <span className="main-page_message-box_anime-name">
                              {el.name}
                            </span>
                            <div className="main-page-rating">
                              <span className="wordMark">
                                {el?.rating?.wordMark}
                              </span>
                              <span>{el?.rating?.value}</span>
                              <StarsCalculation
                                pageRating={
                                  !el?.rating?.value ? 0 : el?.rating?.value
                                }
                              />
                            </div>
                            <div className="main-page_additional-info">
                              <span
                                className={cx({
                                  "main-page_additional-info_status": true,
                                  "main-page_additional-info_status--green":
                                    el?.information?.status,
                                  "main-page_additional-info_status--red":
                                    !el?.information?.status,
                                })}
                              >
                                {el?.information?.episodeAmount}
                              </span>
                              <span>{el.country}</span>
                            </div>
                            <div className="main-page_genre-info">
                              <span style={{ fontWeight: "bold" }}>
                                Genres:
                              </span>
                              <span> {el?.information?.genre.join(", ")}</span>
                            </div>
                            <div className="main-page_description">
                              <span>{el?.shortDescription}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: !isDarkTheme ? "lightgrey" : "black",
            color: !isDarkTheme ? "black" : "lightgrey",
          }}
        >
          Kanban AnimeList ©2023 Created by Alisa Suslova
        </Footer>
      </Layout>
    </Layout>
  )
}
export default AnimeList

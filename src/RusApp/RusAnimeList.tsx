import { HeaderComponent } from "../HeaderComponent"
import { Link } from "react-router-dom"
import "./rusApp.css"
import { useState } from "react"
import cx from "classnames"
import "../header.css"
import { Layout, Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { animeMockData, headerInfoMockData } from "../mockData"
import { ReactComponent as Logo } from "../logo.svg"

const RusAnimeList: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme)
  }

  const handleReload = () => {
    window.location.reload()
  }
  return (
    <Layout hasSider style={{ height: "100vh" }}>
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
        <div
          className={cx({
            "rus-page_wrapper_light": !isDarkTheme,
            "rus-page_wrapper_dark": isDarkTheme,
          })}
        >
          <HeaderComponent
            onSubmit={function (query: string): void {
              throw new Error("Function not implemented.")
            }}
            isDarkTheme
            onClick={changeTheme}
            onDoubleClick={handleReload}
          />

          <div className="rus-page_container">
            <h1 className="rus-page_heading">
              Sorry, the page isn't translated yet
            </h1>
            <img
              alt="there should be a cute girl apologizing"
              src="https://i.pinimg.com/736x/c3/5c/45/c35c4516c4d7eda5ac9a39c8d8b79151.jpg"
              className="rus-page_apology-image"
            />
            <Link className="rus-page_language-link" to="/">
              <button className="rus-page_back-button">Back</button>
            </Link>
          </div>
        </div>
      </Layout>
    </Layout>
  )
}

export default RusAnimeList

import { Column } from "@ant-design/charts"
import { HeaderComponent } from "../HeaderComponent"
import { animeMockData, headerInfoMockData } from "../mockData"
import { Layout, Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content, Footer } from "antd/es/layout/layout"
import { ReactComponent as Logo } from "../logo.svg"
import { useState } from "react"

function changeTheme(theme: string): void {
  throw new Error("Function not implemented.")
}

function handleReload(): void {
  throw new Error("Function not implemented.")
}

const RatingGraphics = () => {
  const data = animeMockData.map((el) => ({
    name: `${el?.name}`,
    value: parseFloat(`${el?.rating?.value}` || "0"),
  }))

  const config = {
    data,
    xField: "name",
    yField: "value",
    position: "middle",
    beginAtZero: true,
    color: "#5e5df0",
  }

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme)
  }
  const handleReload = () => {
    window.location.reload()
  }

  function handleSearch(query: string): void {
    throw new Error("Function not implemented.")
  }

  return (
    <>
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
            <Column {...config} />
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
    </>
  )
}

export default RatingGraphics

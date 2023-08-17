import React, { useState } from "react"
import { headerInfoMockData } from "./mockData"
import { ReactComponent as Avatar } from "./avatar.svg"
import "./header.css"
import { Link } from "react-router-dom"
import "./App.css"

type HeaderComponentProps = {
  onSubmit: (query: string) => void
  onClick: (theme: string) => void
  isDarkTheme: boolean
  onDoubleClick: () => void
}

export const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const [query, setQuery] = useState("")
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    props.onSubmit(query)
  }
  const changeTheme = () => {
    props.onClick("theme")
  }

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="main-page_header">
      <div className="main-page_header-info">
        <div className="main-page_central-search">
          <button
            className="main-page_list-button"
            onDoubleClick={handleReload}
          >
            {headerInfoMockData.buttonName}
          </button>

          <form className="main-page_search-structure" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="find your anime"
              className="main-page_search-input"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="main-page_search-button">
              Search
            </button>
          </form>
        </div>
        <div className="main-page_site-manipulation">
          <Avatar className="main-page_header-avatar" />
          <Link className="main-page_language-link" to={"/RusAnimeList"}>
            <button className="main-page_language">
              {headerInfoMockData.language}
            </button>
          </Link>
          <Link className="main-page_language-link" to={"/RatingGraphics"}>
            <button className="main-page_language">rate</button>
          </Link>
          <button className="main-page_mode " onClick={changeTheme}>
            mode
          </button>
        </div>
      </div>
    </div>
  )
}

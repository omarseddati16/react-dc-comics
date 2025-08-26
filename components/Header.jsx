import React from 'react'

const navBar = ["characters", "comics", "movies", "tv", "collectibles", "videos", "fans", "news", "shop"]

const Header = () => {
  return (
    <header>
      <img src="../img/dc-logo.png" alt="" />
      <ul id='headerMenu'>
        {navBar.map((item, index) => (
          <li key={index}>
            <a href="#">{item.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header

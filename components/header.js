import React from 'react';

const Header = () => {

  return (
    <header className="header main-grid">
      <nav className="nav-left">
        <ul>
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#discover">discover</a></li>
          <li><a href="#stores">stores</a></li>
        </ul>
      </nav>
      <nav className="nav-right">
        <ul>
          <li><a href="#search">search</a></li>
          <li><a href="#sign-in">sign in</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;


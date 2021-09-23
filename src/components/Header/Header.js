import React from 'react'
import './Header.css'


const Header = () => {
  return (
      <header className="header">
        <h1>✨ Astro-Reader ✨</h1>
        <button class="btn btn-success btn-lg float-right" type="submit">saved</button>
      </header>
    );
  }

export default Header

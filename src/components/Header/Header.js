import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
      <header className="header">
        <h1>✨ Astro-Reader ✨</h1>
        <Link to={'/astro-reader/saved'}>
        <button className="btn btn-success btn-lg float-right" type="submit">saved</button>
        </Link>
      </header>
    );
  }

export default Header

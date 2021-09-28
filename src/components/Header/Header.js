import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <h1>✨ Astro-Reader ✨</h1>
      </Link>
      <Link to={"/astro-reader/saved"}>
        <button className="saved-cards" type="submit">
          Saved Readings
        </button>
      </Link>
    </header>
  );
};

export default Header;

// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <a href="#top">
            <img src="/assets/logo.png" alt="Logo" />
          </a>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#top">Asosiy</a>
          </li>
          <li>
            <a href="#about">Biz xaqimizda</a>
          </li>
          <li>
            <a href="#services">Xizmatlar</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#uzbek">Uzbek</a>
          </li>
          <a href="#contact" className="navbar-button" id="navbar-button">
            Bog'lanish
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

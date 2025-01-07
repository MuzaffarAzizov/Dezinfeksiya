import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>

        <ul className="navbar-menu">
          <li>
            <a href="#home">Asosiy</a>
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
          <li>
            <a href="#contact">Bog'lanish</a>
          </li>
        </ul>

        <button className="navbar-toggle" aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

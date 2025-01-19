import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <a href="#top">
            <img src="/assets/logo.png" alt="Logo" />
          </a>
        </div>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
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

        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#top">{t("navbar.home")}</a>
          </li>
          <li>
            <a href="#about">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="#services">{t("navbar.services")}</a>
          </li>
          <li>
            <a href="#faq">{t("navbar.faq")}</a>
          </li>
          <li>
            <select
              className="language-selector"
              onChange={handleLanguageChange}
              defaultValue={i18n.language}
            >
              <option value="uz">{t("navbar.uzbek")}</option>
              <option value="en">{t("navbar.english")}</option>
              <option value="ru">{t("navbar.russian")}</option>
            </select>
          </li>
          <a href="#contact" className="navbar-button" id="navbar-button">
            {t("navbar.contact")}
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

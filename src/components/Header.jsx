import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-content">
          <h1>{t("header.title")}</h1>
          <p>
            {t("header.description1")} <br />
            {t("header.description2")}
          </p>
          <button>{t("header.contactButton")}</button>
        </div>
        <div className="header-image">
          <img src="/assets/Dezinfeksiya1.webp" alt="Dezinfektsiya" />
        </div>
      </div>
    </section>
  );
};

export default Header;

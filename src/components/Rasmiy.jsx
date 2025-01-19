import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import "./Rasmiy.css";

const Rasmiy = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="rasmiy-container">
      <div className="rasmiy-left">
        <img
          src="/assets/Dezinfeksiya3.jpg"
          alt="Image"
          className="rasmiy-image"
        />
      </div>
      <div className="rasmiy-right">
        <div className="rasmiy-icon">
          <img src="/assets/rasmiy.svg" alt="Icon" className="icon" />
        </div>
        <h2 className="rasmiy-title">{t("rasmiy.title")}</h2>
        <button className="rasmiy-button">{t("rasmiy.contactButton")}</button>
      </div>
    </div>
  );
};

export default Rasmiy;

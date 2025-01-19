import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <div className="footer-location">
          <div className="footer-icon-card">
            <img
              src="/assets/location.svg"
              alt={t("footer.locationIconAlt")}
              className="footer-icon"
            />
          </div>
          <span>{t("footer.location")}</span>
          <img
            src="/assets/arrow.svg"
            alt={t("footer.arrowIconAlt")}
            className="footer-arrow-icon"
          />
        </div>
        <div className="footer-phone">
          <div className="footer-icon-card">
            <img
              src="/assets/phone.svg"
              alt={t("footer.phoneIconAlt")}
              className="footer-icon"
            />
          </div>
          <span>{t("footer.phoneNumber")}</span>
          <img
            src="/assets/arrow.svg"
            alt={t("footer.arrowIconAlt")}
            className="footer-arrow-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

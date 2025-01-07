import React from "react";
import "./Footer.css";

const Footer = () => {
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
              alt="Location"
              className="footer-icon"
            />
          </div>
          <span>O'zbekiston, Buxoro shaxri</span>
          <img
            src="/assets/arrow.svg"
            alt="Arrow"
            className="footer-arrow-icon"
          />
        </div>
        <div className="footer-phone">
          <div className="footer-icon-card">
            <img src="/assets/phone.svg" alt="Phone" className="footer-icon" />
          </div>
          <span>+998 94 033 72 12</span>
          <img
            src="/assets/arrow.svg"
            alt="Arrow"
            className="footer-arrow-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

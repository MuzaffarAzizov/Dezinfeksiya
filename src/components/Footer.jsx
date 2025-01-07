import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import locationIcon from "../assets/location.svg";
import phoneIcon from "../assets/Phone.svg";
import arrowIcon from "../assets/Arrow.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <div className="footer-location">
          <div className="footer-icon-card">
            <img src={locationIcon} alt="Location" className="footer-icon" />
          </div>
          <span>O'zbekiston, Buxoro shaxri</span>
          <img src={arrowIcon} alt="Arrow" className="footer-arrow-icon" />
        </div>
        <div className="footer-phone">
          <div className="footer-icon-card">
            <img src={phoneIcon} alt="Phone" className="footer-icon" />
          </div>
          <span>+998 94 033 72 12</span>
          <img src={arrowIcon} alt="Arrow" className="footer-arrow-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <div className="contact-section" id="contact">
      <div className="contact-left">
        <h2 className="contact-title">
          {t("contact.title1")} <br />
          {t("contact.title2")}
        </h2>
        <p className="contact-text">{t("contact.text")}</p>
        <form className="contact-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("contact.namePlaceholder")}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={t("contact.phonePlaceholder")}
            required
          />
          <button type="submit" className="submit-button">
            {t("contact.submitButton")}
          </button>
        </form>
      </div>
      <div className="contact-right">
        <img
          src="/assets/Dezinfeksiya4.png"
          alt={t("contact.imageAlt")}
          className="contact-image"
        />
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2 className="contact-title">
          Malumotingizni <br />
          qoldiring
        </h2>
        <p className="contact-text">Malumotingizni qoldiring</p>
        <form className="contact-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ismingiz"
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+998-94-033-72-12"
            required
          />
          <button type="submit" className="submit-button">
            Yuborish
          </button>
        </form>
      </div>
      <div className="contact-right">
        <img
          src="/assets/Dezinfeksiya4.png"
          alt="Contact Us"
          className="contact-image"
        />
      </div>
    </div>
  );
};

export default Contact;

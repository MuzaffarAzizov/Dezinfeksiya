import React from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";

const Services = () => {
  const { t } = useTranslation(); // Using the useTranslation hook

  return (
    <div className="services" id="services">
      <h2>{t("services.title")}</h2>
      <p>{t("services.description")}</p>
      <div className="service__card">
        <img src="/assets/virus.png" alt="Service Image" />
        <div className="service__text">
          <h3>{t("services.service1.title")}</h3>
          <p>{t("services.service1.description")}</p>
        </div>
      </div>
      <div className="service__card">
        <img src="/assets/insects.png" alt="Service Image" />
        <div className="service__text">
          <h3>{t("services.service2.title")}</h3>
          <p>{t("services.service2.description")}</p>
        </div>
      </div>
      <div className="service__card">
        <img src="/assets/mice.png" alt="Service Image" />
        <div className="service__text">
          <h3>{t("services.service3.title")}</h3>
          <p>{t("services.service3.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

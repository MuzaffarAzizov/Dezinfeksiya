import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <h3>{t("about.title")}</h3>
      <div className="about__info">
        <div className="about__column">
          <img src="/assets/svg1.svg" alt="" />
          <h2>{t("about.service1.title")}</h2>
          <p>{t("about.service1.description")}</p>
        </div>
        <div className="about__column">
          <img src="/assets/svg2.svg" alt="" />
          <h2>{t("about.service2.title")}</h2>
          <p>{t("about.service2.description")}</p>
        </div>
        <div className="about__column">
          <img src="/assets/svg3.svg" alt="" />
          <h2>{t("about.service3.title")}</h2>
          <p>{t("about.service3.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

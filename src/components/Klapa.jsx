import React from "react";
import { useTranslation } from "react-i18next";
import "./Klapa.css";

const Klapa = () => {
  const { t } = useTranslation();

  return (
    <section className="klapa">
      <div className="klapa__content">
        <h2>{t("klapa.title")}</h2>
        <p>{t("klapa.description")}</p>
        <button className="klapa__button">{t("klapa.contactButton")}</button>
      </div>
    </section>
  );
};

export default Klapa;

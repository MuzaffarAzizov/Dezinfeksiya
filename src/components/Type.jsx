import React from "react";
import { useTranslation } from "react-i18next";
import "./Type.css";
import insect1 from "../assets/insect1.jpg";
import insect2 from "../assets/insect2.jpg";
import insect3 from "../assets/insect3.jpg";
import mouse from "../assets/mouse.jpg";
import insect4 from "../assets/insect4.jpg";

const Types = () => {
  const { t } = useTranslation();
  const typesData = [
    {
      image: insect1,
      title: t("types.type1.title"),
      description: t("types.type1.description"),
    },
    {
      image: insect2,
      title: t("types.type2.title"),
      description: t("types.type2.description"),
    },
    {
      image: insect3,
      title: t("types.type3.title"),
      description: t("types.type3.description"),
    },
    {
      image: mouse,
      title: t("types.type4.title"),
      description: t("types.type4.description"),
    },
    {
      image: insect4,
      title: t("types.type5.title"),
      description: t("types.type5.description"),
    },
  ];

  return (
    <div className="types">
      {typesData.map((type, index) => (
        <div key={index} className="type card">
          <h2 className="type__title">{type.title}</h2>
          <p className="type__description">{type.description}</p>
          <div className="type__image-container">
            <button className="type__button">{t("types.contactButton")}</button>
            <img src={type.image} alt={type.title} className="type__image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Types;

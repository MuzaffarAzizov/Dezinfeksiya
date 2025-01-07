import React from "react";
import "./Type.css";
import insect1 from "../assets/insect1.jpg";
import insect2 from "../assets/insect2.jpg";
import insect3 from "../assets/insect3.jpg";
import mouse from "../assets/mouse.jpg";
import insect4 from "../assets/insect4.jpg";

const Types = () => {
  const typesData = [
    {
      image: insect1,
      title: "KLAPALAR",
      description:
        "Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshiq romlari va deraz romlari ostida yashaydilar. Ular odamlar va issiq qo'ng'ivonlarning qoni bilan o'zlashadi. Allergiya va og'ir psixolik noqulaylikni qo'zg'atish...",
    },
    {
      image: insect2,
      title: "KLAPALAR",
      description:
        "Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshiq romlari va deraz romlari ostida yashaydilar. Ular odamlar va issiq qo'ng'ivonlarning qoni bilan o'zlashadi. Allergiya va og'ir psixolik noqulaylikni qo'zg'atish...",
    },
    {
      image: insect3,
      title: "KLAPALAR",
      description:
        "Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshiq romlari va deraz romlari ostida yashaydilar. Ular odamlar va issiq qo'ng'ivonlarning qoni bilan o'zlashadi. Allergiya va og'ir psixolik noqulaylikni qo'zg'atish...",
    },
    {
      image: mouse,
      title: "KLAPALAR",
      description:
        "Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshiq romlari va deraz romlari ostida yashaydilar. Ular odamlar va issiq qo'ng'ivonlarning qoni bilan o'zlashadi. Allergiya va og'ir psixolik noqulaylikni qo'zg'atish...",
    },
    {
      image: insect4,
      title: "KLAPALAR",
      description:
        "Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshiq romlari va deraz romlari ostida yashaydilar. Ular odamlar va issiq qo'ng'ivonlarning qoni bilan o'zlashadi. Allergiya va og'ir psixolik noqulaylikni qo'zg'atish...",
    },
  ];

  return (
    <div className="types">
      {typesData.map((type, index) => (
        <div key={index} className="type card">
          <h2 className="type__title">{type.title}</h2>
          <p className="type__description">{type.description}</p>
          <div className="type__image-container">
            <button className="type__button">Bog'lanish</button>
            <img src={type.image} alt={type.title} className="type__image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Types;

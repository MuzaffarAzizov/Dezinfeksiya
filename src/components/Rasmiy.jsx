import React from "react";
import "./Rasmiy.css";
import Dezinfeksiya3 from "../assets/Dezinfeksiya3.jpg";
import Rasmiysvg from "../assets/rasmiy.svg";

const Rasmiy = () => {
  return (
    <div className="rasmiy-container">
      <div className="rasmiy-left">
        <img src={Dezinfeksiya3} alt="Image" className="rasmiy-image" />
      </div>
      <div className="rasmiy-right">
        <div className="rasmiy-icon">
          <img src={Rasmiysvg} alt="Icon" className="icon" />
        </div>
        <h2 className="rasmiy-title">
          Rasmiy foydalanish - 1 yil. Biz xizmat va yuridik shaxslarga xizmat
          kursatamiz. Xizmatlar litsenziyalangan!!!
        </h2>
        <button className="rasmiy-button">Bog'lanish</button>
      </div>
    </div>
  );
};

export default Rasmiy;

import React from "react";
import "./Rasmiy.css";

const Rasmiy = () => {
  return (
    <div className="rasmiy-container">
      <div className="rasmiy-left">
        <img
          src="/assets/Dezinfeksiya3.jpg"
          alt="Image"
          className="rasmiy-image"
        />
      </div>
      <div className="rasmiy-right">
        <div className="rasmiy-icon">
          <img src="/assets/rasmiy.svg" alt="Icon" className="icon" />
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

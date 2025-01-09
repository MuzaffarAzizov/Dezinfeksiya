import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-content">
          <h1>Buxoro Dezinfektsiya xizmati</h1>
          <p>
            Biz Buxoroda 10 yildan beri professional dezinfeksiya <br />
            ishlarini olib boramiz, shuning uchun birinchi marta
            <br />
            zararkunandalardan qanday qutilishni bilamiz.
          </p>
          <button>Bog'lanish</button>
        </div>
        <div className="header-image">
          <img src="/assets/Dezinfeksiya1.webp" alt="Dezinfektsiya" />
        </div>
      </div>
    </section>
  );
};

export default Header;

import React from "react";
import "./About.css";
import Svg1 from "../assets/Svg1.svg";
import Svg2 from "../assets/Svg2.svg";
import Svg3 from "../assets/Svg3.svg";

const About = () => {
  return (
    <div className="about">
      <h3>Biz xaqimizda</h3>
      <div className="about__info">
        <div className="about__column">
          <img src={Svg1} alt="" />
          <h2>Tezda Xizmat Ko'rsatish</h2>
          <p>
            ARIZALAR KUNIGA 24 SOAT QABUL QILINADI. AGAR MUAMMO SHOSILINCH
            BO'lsa, BIZ DARHOL KETISHIMIZ MUMKIN. SHU BILAN BIRGA, SIFAT
            MUKAMMAL BO'LIB KOLADI.
          </p>
        </div>
        <div className="about__column">
          <img src={Svg2} alt="" />
          <h2>Yetuk mutaxasislarimiz</h2>
          <p>
            BIZNING HODIMLARIMIZ HAMMA NARSAGA G'AMXO'RLIK QILADI:
            HISOB-KITOBLAR, XONANI TAYYoRLash, QAYTA ISHLASH, YAKUNIY TOZALASH,
            VENTILYATSIYA VA NAZORAT TEKSHIRUVI.
          </p>
        </div>
        <div className="about__column">
          <img src={Svg3} alt="" />
          <h2>Sizga Maqul Vaqtda</h2>
          <p>
            SIZ O'ZINGIZ UCHUN MAQUL VA QULAY VAQTNI TALANG VA BIZGA MUROJAT
            QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIJANI OLIB BORAMIZ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

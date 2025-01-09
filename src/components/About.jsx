import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h3>Biz xaqimizda</h3>
      <div className="about__info">
        <div className="about__column">
          <img src="/assets/svg1.svg" alt="" />
          <h2>Tezda Xizmat Ko'rsatish</h2>
          <p>
            ARIZALAR KUNIGA 24 SOAT QABUL QILINADI. AGAR MUAMMO SHOSILINCH
            BO'lsa, BIZ DARHOL KETISHIMIZ MUMKIN. SHU BILAN BIRGA, SIFAT
            MUKAMMAL BO'LIB KOLADI.
          </p>
        </div>
        <div className="about__column">
          <img src="/assets/svg2.svg" alt="" />
          <h2>Yetuk mutaxasislarimiz</h2>
          <p>
            BIZNING HODIMLARIMIZ HAMMA NARSAGA G'AMXO'RLIK QILADI:
            HISOB-KITOBLAR, XONANI TAYYoRLash, QAYTA ISHLASH, YAKUNIY TOZALASH,
            VENTILYATSIYA VA NAZORAT TEKSHIRUVI.
          </p>
        </div>
        <div className="about__column">
          <img src="/assets/svg3.svg" alt="" />
          <h2>Sizga Maqul Vaqtda</h2>
          <p>
            SIZ O'ZINGIZ UCHUN MAQUL VA QULAY VAQTNI TALANG VA BIZGA MUROJAT
            QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIJANI OLIB BORAMIZ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

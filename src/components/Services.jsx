import React from "react";
import "./Services.css";
import Virus from "../assets/Virus.png";
import Insects from "../assets/Insects.png";
import Mice from "../assets/Mice.png";

const Services = () => {
  return (
    <div className="services">
      <h2>Xizmatlar</h2>
      <p>Biz sizga samarali va sifatli xizmat taqdim etamiz.</p>
      <div className="service__card">
        <img src={Virus} alt="Service Image" />
        <div className="service__text">
          <h3>Dezinfeksiya - zararli mikro organizmlarni yo'q qilish</h3>
          <p>
            Har qanday dezinfektsiyaning asosiy vazifalari infektsiyalar va
            kasalliklarga olib kelishi mumkin bo'lgan xavfli mikroorganizmlarni
            yo'q qilishdir. Dezinfeksiya choralari bu yerni mogor, virus,
            chiriyotgan va mikroblardan tozalaydi. Agar o'zingni yo'q qilish
            kerak, yoki sababsiz zaiflashsangiz kerak.
          </p>
        </div>
      </div>
      <div className="service__card">
        <img src={Insects} alt="Service Image" />
        <div className="service__text">
          <h3>Dezinseksiya - xasharotlarni yo'q qilish</h3>
          <p>
            Ko'p odamlar birinchi navbatda 'dezinfestatsiya' so'zini istalmagan
            qo'shnilaridan - choyshablar, barchamböcekler, chumolilar va boshqa
            hasharotlardan xalos bo'lish du yolini qidirganda. Ularning
            o'zlarini yo'qimsiz va ular ham ma'lum infeksiya tashuvchilari.
            Dezinseksiya - bu hasharotlarni: chivinlar, chivinlar, choyshablar,
            tarakanlar, kuya, shomil, qobiq qo'ng'izlari, yo'g'och bitlari va
            boshqa sudralib yuruvchi va uchuvchi jonzotlarni yo'q qilish. .
          </p>
        </div>
      </div>
      <div className="service__card">
        <img src={Mice} alt="Service Image" />
        <div className="service__text">
          <h3>Deratizatsiya - kemiruvchilarni yo'q qilish.</h3>
          <p>
            Toshkentda derat sifatida kamiruvchilarni yo'qotishga qaratiladigan
            kompleks chora-tadbirlarning butun majmuasidir. aniqki,
            kemiruvchilar juda qat'iy jonzotlar bo'lib, ular turli xavfli
            xavf-xatarlarga dosh beradilar. Shuning uchun ularni yo'q qilish
            uchun bir panel usullardan foydalanish kerak. Derat joyda Toshkent
            shaharlarida kemiruvchilar paydo bo'lgan ko'p qavmli uylar,
            omborlar, do'konlar, umumiy ovkatlanish korxonalari amalga
            o'chiriladi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

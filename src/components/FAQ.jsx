import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Zararkunandalarni yo'q qilish qanday amalga oshiriladi?",
      answer:
        "Maxsus devor-uskunalar yordamida insektitsidlar aerozolli tumanga aylantiradi va qo'g'ozi, devorlar va taxta plitalari orasidagi eng kichik bo'shliklarga, ko'zga ko'rinmas hasharotlar uchun potentsial 'yashirish joylari' ga kiradi.",
    },
    {
      question: "Siz foydalanilgan dorilar xavflilimi?",
      answer:
        "Dorilar odamlar, uyvonlari va o'simliklar uchun xavfli emas. Ammo davolishdan keyingi xonani 40 daqiqada ventilyatsiya qilish kerak.",
    },
    {
      question:
        "Menga uyimni davolishga tayyorlashning qandaydir usuli kerakmi?",
      answer:
        "Asosan, idish-tovoq va shaxsiy gigiena vositalarini izolyatsion qilishingiz kerak. Davolash vaqtida uyvonlari ham izolyatsiya qilinishi kerak. Mebel yoki maishiy texnikani ko'rishga xojat yo'q.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

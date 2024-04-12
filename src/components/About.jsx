import React from "react";
import { useTranslation } from "react-i18next";
function About() {
  const [t, i18n] = useTranslation();
  return (
    <div
      id="about"
      className="about  px-5 py-5 d-flex flex-column justify-content-center align-items-center"
    >
      <h5>{t('about.title')}</h5>
      <p data-aos="fade-up">
      {t('about.content')}</p>
    </div>
  );
}

export default About;

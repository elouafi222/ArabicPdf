import React from 'react'
import image from '../img/HowToUse.jpeg'
import { useTranslation } from "react-i18next";
function HowToUse() {
  const [t, i18n] = useTranslation();
  return (
    <div
    id="howtouse"
    className="about  px-5 py-5 d-flex flex-column justify-content-center align-items-center"
  >
    <h5>{t('howtouse.title')}</h5>
    <p data-aos="fade-up">{t('howtouse.content')} </p>
    <img src={image} className='img-fluid rounded-4' alt="" />
  </div>
  )
}

export default HowToUse
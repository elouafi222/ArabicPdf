import React from "react";
import { useTranslation } from "react-i18next";
 
function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <p className="m-0">
        2024 &copy; Copyright{" "}
        <strong>
          <span>arabicPDF</span>
        </strong>
        {" "}   {t('footer')}
      </p>
    </div>
  );
}

export default Footer;

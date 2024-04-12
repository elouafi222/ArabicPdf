import React from "react";
import { useTranslation } from "react-i18next";

function LanguageButtons() {
  const [t, i18n] = useTranslation();
  
  return (
    <>
      {i18n.language !== "ar" && (
        <button
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
          className="dropdown-item drop-btn"
          type="button"
        >
          العربية
        </button>
      )}
      {i18n.language !== "en" && (
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
          className="dropdown-item drop-btn "
          type="button"
        >
          English
        </button>
      )}
      {i18n.language !== "fr" && (
        <button
          onClick={() => {
            i18n.changeLanguage("fr");
          }}
          className="dropdown-item drop-btn"
          type="button"
        >
          Français
        </button>
      )}
    </>
  );
}

export default LanguageButtons;

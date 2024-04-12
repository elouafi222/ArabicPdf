import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import trasationAR from "./translate/ar.json";
import trasationEN from "./translate/en.json";
import trasationFR from "./translate/fr.json";
const resources = {
  en: { translation : trasationEN },
  fr: {translation : trasationFR},
  ar: {translation : trasationAR }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    },
    react : {
        useSuspense : false
    }
  });

  export default i18n;
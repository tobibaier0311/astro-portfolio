import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Initialize React bindings
  .init({
    fallbackLng: "en", // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
  });

export default i18n;

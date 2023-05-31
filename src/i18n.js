

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json"; // Import the translation files for each language
import frTranslation from "./locales/fr.json";
import esTranslation from "./locales/es.json";
import arTranslation from "./locales/ar.json";
// Import other translations as needed

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
    es: { translation: esTranslation },
    ar: { translation: arTranslation }
    // Add other language translations here
  },
  lng: "en", // Set the default language
  fallbackLng: "en", // Set the fallback language if translation is missing for a specific key
  interpolation: {
    escapeValue: false, // React already escapes strings
  },
});

export default i18n;
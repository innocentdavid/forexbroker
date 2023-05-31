
import React, { useState, createContext, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ defaultLanguage, children }) {
  const [language, setLanguage] = useState(defaultLanguage);

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
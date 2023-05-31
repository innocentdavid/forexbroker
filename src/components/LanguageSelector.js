// import React from "react";
// import { useLanguage } from "./langprov";

// function LanguageSelector() {
//   const { language, changeLanguage } = useLanguage();

//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     changeLanguage(selectedLanguage);
//   };

//   return (
//     <div>
//       <select value={language} onChange={handleLanguageChange}>
//         <option value="en">English</option>
//         <option value="es">Spanish</option>
//         <option value="fr">French</option>
//         <option value="ar">Arabic</option>
//         {/* Add more language options as needed */}
//       </select>
//     </div>
//   );
// }

// export default LanguageSelector;



import React, {useState} from "react";
import i18n from '../i18n';

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }

    return (
        <select defaultValue={selectedLanguage} onChange={chooseLanguage}>  
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
        </select>
    );
};

export default LanguageSelector;
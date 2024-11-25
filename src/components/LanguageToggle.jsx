import React, { useState } from 'react';

    function LanguageToggle() {
      const [language, setLanguage] = useState('en');

      const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'fr' : 'en');
      };

      return (
        <button onClick={toggleLanguage}>
          Switch to {language === 'en' ? 'French' : 'English'}
        </button>
      );
    }

    export default LanguageToggle;

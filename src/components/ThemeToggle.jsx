import React, { useState } from 'react';

    function ThemeToggle() {
      const [isDarkMode, setIsDarkMode] = useState(false);

      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
      };

      return (
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      );
    }

    export default ThemeToggle;

import React, { useState } from 'react';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
    return (
      <button onClick={toggleTheme} className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    );
  }
  
  export default ThemeToggle;
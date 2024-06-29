// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Footer = ({ toggleTheme, isDarkMode }) => {
  return (
    <footer className={`w-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} border-t border-gray-200 p-4 fixed bottom-0`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 text-sm font-semibold">
            {/* Navigation Links for Footer */}
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-700">About</Link>
            <Link to="/portfolio" className="text-gray-500 hover:text-gray-700">Portfolio</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-700">Contact</Link>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kaylee Chen. 
          </p> 
        
          {/* Theme Toggle Link*/}
          {/* <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />  */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

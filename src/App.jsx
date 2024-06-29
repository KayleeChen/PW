import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NavigationLinks from './components/NavigationLinks';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import './index.css';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 当主题状态改变时，切换根元素的类
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]); // 依赖于isDarkMode状态

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };


  return (
    

    
    <Router>
      <div className=".bg-page text-primary">
      {/* Mobile navigation links */}
      <div className="xl:hidden">
        <NavigationLinks />
      </div>

      <div className="flex h-screen">
        {/* Sidebar for larger screens */}
        <Navigation />

        {/* Routes for each page */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <button
        onClick={toggleTheme}
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 py-2 px-4 rounded-l cursor-pointer z-10
    ${isDarkMode ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}
      >
        Toggle Theme
      </button>

      {/* Footer */}
      <Footer />
      </div>
    </Router>

    
  );
}


export default App;

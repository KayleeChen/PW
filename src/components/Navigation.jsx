// Components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DownloadCVButton from './DownloadCVButton';

function Navigation() {
  return (
    <div className="hidden xl:block lg:flex-shrink-0 lg:order-first">
      <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white overflow-y-auto justify-center">
        <div className="p-20">
          <h1 className="text-5xl font-mono font-black">Content</h1>
          <ul className="mt-10 space-y-2">
            <li><Link to="/" className="text-gray-500 hover:text-gray-600">Home</Link></li>
            <li><Link to="/about" className="text-gray-500 hover:text-gray-600">About</Link></li>
            <li><Link to="/portfolio" className="text-gray-500 hover:text-gray-600">Portfolio</Link></li>
            <li><Link to="/contact" className="text-gray-500 hover:text-gray-600">Contact</Link></li>
            <li><DownloadCVButton /></li>
          </ul>
          <p className="text-gray-500 italic mt-5 text-sm">&copy; {new Date().getFullYear()} Kaylee Chen</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
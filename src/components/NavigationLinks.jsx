import React from 'react';
import { Link } from 'react-router-dom';
import DownloadCVButton from './DownloadCVButton';



const NavigationLinks = () => {
    return (
        <div className="xl:hidden flex flex-row bg-white items-center justify-between p-4">
            <h1 className="text-2xl leading-tight font-mono font-black p-4 mb-1">Content</h1>

            <div>
                <span className="inline-flex justify-center space-x-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    {/* Home Link */}
                    <Link to="/" className="hover:text-gray-500">
                        <span className="sr-only">Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Link>

                    {/* About Link */}
                    <Link to="/about" className="hover:text-gray-500">
                        <span className="sr-only">About</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </Link>

                    {/* Portfolio Link */}
                    <Link to="/portfolio" className="hover:text-gray-500">
                        <span className="sr-only">Portfolio</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fill-rule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                clip-rule="evenodd" />
                        </svg>
                    </Link>

                    {/* Contact Link */}
                    <Link to="/contact" className="hover:text-gray-500">
                        <span className="sr-only">Contact</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                clip-rule="evenodd" />
                        </svg>
                    </Link>

                    {/* Download CV Button */}
                    <DownloadCVButton />



                </span>
            </div>
        </div>
    );
};

export default NavigationLinks;

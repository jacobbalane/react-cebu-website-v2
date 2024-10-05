import React from 'react';
import { FaMedium } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md"; // Arrow icon for links
import logo from '../../assets/logo/r-logo(3).png'; // Import the logo image

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col min-h-screen relative">
      {/* Sky blue section - 80% of the screen */}
      <div className="bg-[#61DAFB] flex-grow-[8] py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-24 flex flex-col lg:flex-row justify-between items-center relative overflow-hidden">
        
        {/* Text section */}
        <div className="lg:w-1/2 z-10 text-center lg:text-left"> 
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-black">
            Stay Connected with Us!
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-10 text-black leading-relaxed">
            Follow us on social media for the latest updates, <br className="hidden lg:inline" /> events, and community highlights.
          </p>

          {/* Links Section */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            
            {/* First Link */}
            <a href="mailto:example@email.com" className="inline-block">
              <div className="border-b-2 border-black inline-flex items-center pb-1">
                <span className="text-base sm:text-lg text-black font-bold">Send us an email</span>
                <MdArrowOutward className="ml-2 text-black" size={24} />
              </div>
            </a>
            
            {/* Second Link */}
            <a href="#" className="inline-block">
              <div className="border-b-2 border-black inline-flex items-center pb-1">
                <span className="text-base sm:text-lg text-black font-bold">Join Newsletter</span>
                <MdArrowOutward className="ml-2 text-black" size={24} />
              </div>
            </a>
            
            {/* Third Link */}
            <a href="https://www.facebook.com/reactcebu" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="border-b-2 border-black inline-flex items-center pb-1">
                <span className="text-base sm:text-lg text-black font-bold">Follow us on Facebook</span>
                <MdArrowOutward className="ml-2 text-black" size={24} />
              </div>
            </a>
            
            {/* Fourth Link with extra margin */}
            <a href="#" className="inline-block mt-8 sm:mt-12">
              <div className="border-b-2 border-black inline-flex items-center pb-1">
                <span className="text-base sm:text-lg text-black font-bold">Go To Landing Page</span>
                <MdArrowOutward className="ml-2 text-black" size={24} />
              </div>
            </a>

          </div>
        </div>

        {/* React Logo Section */}
        <div className="absolute bottom-0 right-0 lg:w-[900px] md:w-[700px] sm:w-[500px] w-[300px] h-auto opacity-20 lg:opacity-100 flex justify-end">
          <img 
            src={logo.src} 
            alt="React Logo" 
            className="min-h-[200px] sm:min-h-[400px] lg:min-h-screen" 
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white flex-grow-[6] py-4 sm:py-6 px-4 sm:px-8 lg:px-24 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-center sm:text-left text-black mb-4 sm:mb-0">
          Copyright 2024 &copy; React Cebu. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://medium.com/react-cebu" aria-label="Medium" target="_blank" rel="noopener noreferrer" className="text-black">
            <FaMedium size={25} />
          </a>
          <a href="https://www.facebook.com/reactcebu" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-black">
            <FaFacebook size={25} />
          </a>
          <a href="https://x.com/reactcebu" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-black">
            <FaXTwitter size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

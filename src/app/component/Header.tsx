import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/logo/r-logo(2).png'
// Define the type for the component (optional, for better type inference)
const Header: React.FC = () => {
  return (
    <header className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo on the Left */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>
          
          {/* Centered Links */}
          <nav className="font-semibold hidden md:flex space-x-20 text-gray-600">
            <Link href="/#" className="hover:text-gray-900">
              About
            </Link>
            <Link href="/#" className="hover:text-gray-900">
              Events
            </Link>
            <Link href="/#" className="hover:text-gray-900">
              Connect
            </Link>
          </nav>
          
          {/* Support Us Button on the Right */}
          <div className="flex items-center">
            <Link href="/#" className="inline-flex items-center px-10 py-3 border border-transparent text-md font-large rounded-md text-white bg-black">
              Support Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { OktaLogo, ChevronDownIcon, LoginIcon, SearchIcon, ChatIcon, GlobeIcon } from '@/components/constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="bg-gray-100 text-sm text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
            <div>
                <span>Okta becomes an Official Partner of the McLaren Formula 1 Team.</span>
                <a href="#" className="ml-2 font-semibold text-blue-600 hover:underline">Learn more →</a>
            </div>
            <div className="flex items-center space-x-6">
                <span>+44 (800) 368-8930</span>
                <a href="#" className="flex items-center space-x-1 hover:text-blue-600"><ChatIcon /> <span>Chat with Sales</span></a>
                <a href="#" className="flex items-center space-x-1 hover:text-blue-600"><SearchIcon /> <span>Search</span></a>
                <a href="#" className="flex items-center space-x-1 hover:text-blue-600"><GlobeIcon /> <span>United Kingdom</span> <ChevronDownIcon className="h-4 w-4"/></a>
            </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="#"><OktaLogo /></a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">Products <ChevronDownIcon className="ml-1 h-4 w-4" /></a>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">Why Okta <ChevronDownIcon className="ml-1 h-4 w-4" /></a>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">Developers <ChevronDownIcon className="ml-1 h-4 w-4" /></a>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">Resources <ChevronDownIcon className="ml-1 h-4 w-4" /></a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-block bg-gray-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-700 transition-colors">Free trial</button>
            <button className="hidden md:inline-block border border-gray-300 px-4 py-2 rounded-md font-semibold hover:bg-gray-50 transition-colors">Contact us</button>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600"><LoginIcon /> <span className="ml-2">Login</span></a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


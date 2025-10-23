import React from 'react';
import { ArrowRightIcon, OktaLogo } from '@/components/constants';

const Auth0Logo: React.FC = () => (
    <svg viewBox="0 0 100 100" className="h-8 text-white" fill="currentColor">
        <path d="M50 0L93.3 25v50L50 100 6.7 75V25L50 0zm0 10.8L17.5 31.2v37.6L50 89.2l32.5-20.4V31.2L50 10.8z"/>
        <path d="M50 16.2L25 30.5v19l25 14.2 25-14.3v-19L50 16.2z"/>
    </svg>
);

const PlatformStats: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xl text-gray-600">
              Our platform is extensible, easy-to-use, neutral, and works with your existing solutions, so you're free to choose the best technology for now and the future. Here's how we do it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-left">
            <div>
              <p className="text-4xl font-bold text-gray-800">19,300+</p>
              <p className="text-gray-600">customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-800">7,000+</p>
              <p className="text-gray-600">integrations</p>
            </div>
            <div className="col-span-2">
              <p className="text-4xl font-bold text-gray-800">91%</p>
              <p className="text-gray-600">Willingness to Recommend in the 2023 Gartner® Peer Insights™ 'Customers' Choice in Access Management' report</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col">
            <div className="h-32 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
              <OktaLogo className="h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mt-6">Okta Platform</h3>
            <p className="mt-2 text-gray-600 flex-grow">
              Secure your employees, contractors, and partners — wherever they are. Covers every part of the identity lifecycle, from governance, to access, to privileged controls.
            </p>
            <a href="#" className="mt-6 font-semibold text-blue-600 hover:underline flex items-center">
              Explore <ArrowRightIcon />
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col">
            <div className="h-32 rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-4" style={{backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3e%3cpath d=\'M 0 50 L 50 0 L 100 50 L 50 100 Z\' fill=\'%23311B92\' fill-opacity=\'0.1\'/%3e%3cpath d=\'M 20 70 L 70 20 L 80 30 L 30 80 Z\' fill=\'%234527A0\' fill-opacity=\'0.1\'/%3e%3c/svg%3e"), linear-gradient(to bottom right, #2c1a5b, #4f46e5)'}}>
              <div className="flex items-center space-x-2">
                <Auth0Logo />
                <span className="text-white text-3xl font-bold">auth0</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-6">Auth0 Platform</h3>
            <p className="mt-2 text-gray-600 flex-grow">
              Built to tackle both Consumer and SaaS Apps across every industry. Authenticate, authorize, and secure access for applications, devices, and users.
            </p>
            <a href="#" className="mt-6 font-semibold text-blue-600 hover:underline flex items-center">
              Explore <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;


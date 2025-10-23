import React from 'react';
import { OktaLogo } from '@/components/constants';

const McLarenLogo: React.FC = () => (
    <svg width="150" height="36" viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="McLaren Formula 1 Team Logo">
        <path d="M0.20752 18.2526V11.1966H6.18352V18.2526H0.20752Z" fill="white"/>
        <path d="M6.35156 11.1966L15.4836 25.1646H8.42756L2.34356 15.2286V25.3326H-0.000439453V3.99658H2.43956L11.5716 17.9646H11.7396L5.65556 8.02858H8.25956L14.7756 18.4206V3.99658H17.2156V25.3326H16.8156L6.35156 11.1966Z" fill="white"/>
        <path d="M22.0628 25.3325H18.9188V3.99658H22.0628V6.63658H26.3708V3.99658H29.5148V25.3325H26.3708V22.6925H22.0628V25.3325ZM26.3708 20.0525V9.27658H22.0628V20.0525H26.3708Z" fill="white"/>
        <path d="M42.1064 25.3325H38.9624V3.99658H48.4904V6.63658H42.1064V13.8366H47.4184V16.4766H42.1064V22.6925H48.6584V25.3325H42.1064Z" fill="white"/>
        <path d="M57.6441 25.3325H54.4521L51.0561 17.1546H50.8401L50.5381 25.3325H47.5121L43.8681 3.99658H47.2161L49.5601 20.3586H49.7281L52.8241 3.99658H55.8801L58.9761 20.3586H59.1441L61.4881 3.99658H64.8361L57.6441 25.3325Z" fill="#FF8700"/>
        <text x="68" y="32" fontFamily="sans-serif" fontSize="6" fill="white">FORMULA 1 TEAM</text>
    </svg>
);


const McLarenAd: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-3xl p-12 md:p-16 bg-gradient-to-r from-black via-gray-900 to-yellow-900/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center space-y-8">
              <McLarenLogo />
              <div className="border-l h-8 border-gray-600"></div>
              <div>
                <OktaLogo className="h-8 text-white" />
                <p className="text-white text-center text-xs mt-1 tracking-widest">OFFICIAL PARTNER</p>
              </div>
            </div>
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold">Okta becomes an Official Partner of the McLaren Formula 1 Team</h2>
              <p className="mt-6 text-lg text-gray-300">
                Inside our multi-year partnership, supporting the team both on and off the track.
              </p>
              <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default McLarenAd;


import React from 'react';

const PartnerLogo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="h-8 md:h-10 object-contain grayscale" />
);


const Partners: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">We've got your back, no matter your stack</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're building a world where anyone can safely use any technology, powered by their Identity.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center">
            <PartnerLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hewlett-Packard_Enterprise_logo.svg/1280px-Hewlett-Packard_Enterprise_logo.svg.png" alt="Hewlett Packard Enterprise" />
            <PartnerLogo src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Navan%2C_Inc._logo.svg" alt="Navan" />
            <PartnerLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/S%26P_Global_logo.svg/1280px-S%26P_Global_logo.svg.png" alt="S&P Global" />
            <PartnerLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/NTT_Data_logo.svg/1280px-NTT_Data_logo.svg.png" alt="NTT Data" />
            <PartnerLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Takeda_Pharmaceutical_Company_logo.svg/1280px-Takeda_Pharmaceutical_Company_logo.svg.png" alt="Takeda" />
            <PartnerLogo src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Peloton_logo.svg/1280px-Peloton_logo.svg.png" alt="Peloton" />
            <PartnerLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express.svg/1280px-FedEx_Express.svg.png" alt="FedEx" />
        </div>
      </div>
    </section>
  );
};

export default Partners;


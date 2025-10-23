import React from 'react';

const Analysts: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">A proven leader in the eyes<br/>of top industry analysts</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12 text-center">
            <div>
                <p className="text-lg text-gray-600">Okta Recognised as a 2024 Gartner® Peer Insights™ Customers' Choice in Access Management.</p>
                <a href="#" className="mt-4 inline-block font-semibold text-gray-800 underline hover:text-black">
                    Read more
                </a>
            </div>
             <div>
                <p className="text-lg text-gray-600">Gartner® has recognised Okta as a Leader in the 2024 Magic Quadrant™ for Access Management.</p>
                <a href="#" className="mt-4 inline-block font-semibold text-gray-800 underline hover:text-black">
                    Read more
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Analysts;


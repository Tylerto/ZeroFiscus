import React from 'react';

const industries = [
  "Public Sector", "Retail", "Financial Services", "Healthcare", "Manufacturing",
  "Travel + Hospitality", "Technology", "Energy", "Nonprofit"
];

const Industries: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-200/50 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">The Identity solution for every industry</h2>
              <div className="mt-8 space-y-4">
                {industries.map(industry => (
                  <p key={industry} className="text-3xl text-gray-500 hover:text-black cursor-pointer">{industry}</p>
                ))}
              </div>
              <p className="mt-8 text-gray-600">See how Okta delivers a secure identity solution for federal agencies, local governments, and educational institutions.</p>
              <a href="#" className="mt-4 inline-block font-semibold text-gray-800 underline hover:text-black">
                Learn more
              </a>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Team collaborating in an office" className="rounded-2xl" />
              <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-xs">
                  <h3 className="font-bold text-gray-800">State of Illinois</h3>
                  <p className="mt-2 text-gray-600 text-sm">1.1 Million login accounts using Okta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;


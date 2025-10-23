import React from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@/components/constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">Here's what our awesome customers say</h2>
        <div className="mt-12 relative">
          <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
              <button className="text-gray-600 bg-white/70 rounded-full hover:text-black" aria-label="Previous testimonial">
                <ArrowLeftCircleIcon />
              </button>
              <button className="text-gray-600 bg-white/70 rounded-full hover:text-black" aria-label="Next testimonial">
                <ArrowRightCircleIcon />
              </button>
          </div>
          <div className="rounded-3xl overflow-hidden relative h-[500px]">
            <img src="https://images.unsplash.com/photo-1520039088-510636838a12?q=80&w=2070&auto=format&fit=crop" alt="Cityscape with a bridge" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-1/2 left-24 -translate-y-1/2 bg-stone-100/90 backdrop-blur-sm p-8 rounded-2xl max-w-md shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express.svg/440px-FedEx_Express.svg.png" alt="FedEx Logo" className="h-10"/>
                <blockquote className="mt-6 text-gray-700 text-lg">
                    "We have one place where we can validate our security posture. Dev teams now have just one token to worry about. They do authentication and authorisation in a consistent way no matter where they're deployed."
                </blockquote>
                <p className="mt-6 font-bold text-gray-800">Trey Ray</p>
                <p className="text-gray-600">Manager, Cybersecurity</p>
                <a href="#" className="mt-6 inline-block font-semibold text-gray-800 underline hover:text-black">
                    Read their story
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React from 'react';

const CtaFooter: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-700 text-white rounded-3xl p-12 md:p-20 text-center" style={{backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.9), rgba(99, 102, 241, 0.9)), url("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h2 className="text-5xl font-bold">Ready to put Identity first?</h2>
            <p className="mt-6 text-xl text-blue-200 max-w-2xl mx-auto">
                Get hands on with the free trial today, or get in touch with our team to discuss your unique needs.
            </p>
            <div className="mt-10 flex space-x-4 justify-center">
                <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition-colors">
                Get started
                </button>
                <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 transition-colors">
                Talk to us
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;


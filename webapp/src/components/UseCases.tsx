import React from 'react';

const UseCaseCard: React.FC<{ title: string; subtitle: string; description: string; linkText: string; }> = ({ title, subtitle, description, linkText }) => (
  <div className="bg-stone-200/50 rounded-2xl p-8 flex flex-col">
    <p className="text-sm text-gray-500 font-semibold">{subtitle}</p>
    <h3 className="text-2xl font-bold mt-2 text-gray-800">{title}</h3>
    <p className="mt-4 text-gray-600 flex-grow">{description}</p>
    <a href="#" className="mt-6 inline-block font-semibold text-gray-800 underline hover:text-black">
      {linkText}
    </a>
  </div>
);

const UseCases: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">We're here for you, from always-on customer support to thousands of integrations designed for every use case</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <UseCaseCard 
            subtitle="INNOVATION"
            title="Okta Secure Identity Commitment (OSIC)"
            description="OSIC is our long-term initiative to lead the industry in the fight against Identity attacks."
            linkText="Learn more"
          />
          <UseCaseCard 
            subtitle="WEBINARS"
            title="Webinar Hub"
            description="Our growing hub of on-demand webinars covers automation, compliance, IAM, zero trust, and more."
            linkText="Browse webinars"
          />
          <UseCaseCard 
            subtitle="INTEGRATIONS"
            title="Okta Integration Network (OIN)"
            description="Find thousands of ready-to-use, pre-built integrations for an ever-evolving tech stack."
            linkText="Learn more"
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;


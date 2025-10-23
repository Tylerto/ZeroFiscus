import React from 'react';
import { OktaLogo, GlobeIcon } from '@/components/constants';

const FooterLinkColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
    <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <ul className="mt-4 space-y-3">
            {links.map(link => (
                <li key={link}><a href="#" className="text-gray-400 hover:text-white hover:underline">{link}</a></li>
            ))}
        </ul>
    </div>
);

const Footer: React.FC = () => {
    const companyLinks = ["About us", "Our Customers", "Leadership", "Investors", "Careers", "Events", "Press Room", "Partners", "Responsibility", "Okta for Good", "Talent, Connection, and Community"];
    const startingLinks = ["The Okta Advantage", "Customer Identity Cloud", "Workforce Identity Cloud", "Free Trial", "Pricing", "Contact Sales", "Trust", "Accessibility"];
    const supportLinks = ["Help & Support", "Frequently Asked Questions", "Contact Us", "Customer Identity Cloud Status", "Workforce Identity Cloud Status"];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 sm:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 pr-8">
            <OktaLogo className="h-8 text-white" />
            <p className="mt-6 text-sm">To connect with a product expert today, use our <a href="#" className="underline hover:text-white">chat now</a>, <a href="#" className="underline hover:text-white">email us</a>, or call <a href="#" className="underline hover:text-white">+1-800-425-1267</a>.</p>
            <button className="mt-6 border border-gray-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">Contact us</button>
          </div>
          <FooterLinkColumn title="Company" links={companyLinks} />
          <FooterLinkColumn title="Starting with Okta" links={startingLinks} />
          <FooterLinkColumn title="Help & Support" links={supportLinks} />
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6">
                <p>&copy; 2025 Okta. All rights reserved.</p>
                <div className="flex space-x-4 text-sm flex-wrap">
                    <a href="#" className="hover:underline">Legal</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Site Terms</a>
                    <a href="#" className="hover:underline">Security</a>
                    <a href="#" className="hover:underline">Sitemap</a>
                    <a href="#" className="hover:underline">Cookie Preferences</a>
                    <a href="#" className="hover:underline">Your Privacy Choices</a>
                </div>
            </div>
            <div className="flex items-center space-x-6 mt-6 md:mt-0">
                <a href="#" className="hover:text-white" aria-label="Youtube">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>
                </a>
                <a href="#" className="hover:text-white" aria-label="Twitter">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg>
                </a>
                <a href="#" className="hover:text-white" aria-label="LinkedIn">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                </a>
                <div className="flex items-center space-x-2">
                    <GlobeIcon />
                    <span>United Kingdom</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


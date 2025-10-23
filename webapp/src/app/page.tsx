import React from 'react';
import { LawAINavbar } from '@/components/ui/navbar';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/ui/how-it-works';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import { Feature } from '@/components/ui/feature-with-advantages';
import { ImpactMetrics } from '@/components/ui/impact-metrics';
import { LawAIFAQ } from '@/components/ui/lawai-faq';
import { LawAIFooter } from '@/components/ui/footer-section';
import { ServiceSchema } from '@/components/seo/StructuredData';
import { LAWAIFAQSchema } from '@/components/seo/FAQSchema';

const testimonials = [
  {
    author: {
      name: "Leon Bloemenheuvel",
      handle: "Zelfstandig consultant",
      avatar: "/Leon Bloemenheuvel.png"
    },
    text: "Ik had de hoop al bijna opgegeven, maar dankzij de expertise hier, heb ik €3.850 aan belasting teruggekregen. Het 'no cure no pay' gaf me veel rust en het proces was verrassend eenvoudig. Absolute aanrader!"
  },
  {
    author: {
      name: "Lenny Jelsma",
      handle: "Marketing Specialist",
      avatar: "/Lenny Jelsma.png"
    },
    text: "De fiscale analyse was glashelder uitgelegd. Ik voelde me echt gehoord en begrepen. Dankzij hun advies en aanpak heb ik nu een veel beter overzicht van mijn financiën en een mooie teruggaaf van €1.475."
  },
  {
    author: {
      name: "Hamza Idrarri",
      handle: "IT Consultant - ZZP",
      avatar: "/Hamza Idrarri.png"
    },
    text: "Transparant, professioneel en ze komen hun belofte na! Vanaf de eerste check tot het adviesrapport: alles was top geregeld. Ik hoefde me nergens zorgen over te maken. Een zorg minder en €2.990 extra in de portemonnee."
  },
  {
    author: {
      name: "Christiaan Boom",
      handle: "DGA (Marketingbureau)",
      avatar: "/Christiaan Boom.png"
    },
    text: "Ik was sceptisch, maar het werkt echt! Geen verborgen kosten, alleen een duidelijke aanpak en een concrete besparing. Dankzij de optimalisatie heb ik in de VPB bijna €10.000 bespaard!"
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F7] text-[#1e293b] font-sans overflow-x-hidden">
      <ServiceSchema />
      <LAWAIFAQSchema />
      <LawAINavbar />
      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20"></div>
      <main>
        <Hero />
        <HowItWorks />
        <TestimonialsSection
          title="De resultaten spreken voor zich."
          description="Transparantie en succes, direct uit de mond van onze gebruikers"
          testimonials={testimonials}
        />
        <Feature />
        <ImpactMetrics />
        <LawAIFAQ />
      </main>
      <LawAIFooter />
    </div>
  );
};

export default HomePage;

import React from 'react'
import { StructuredData } from './StructuredData'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqItems: FAQItem[]
  pageUrl?: string
}

export function FAQSchema({ faqItems, pageUrl = 'https://lawai.nl' }: FAQSchemaProps) {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    })),
    "inLanguage": "nl-NL",
    "url": pageUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "LAWAI - Private AI voor Advocaten",
      "url": "https://lawai.nl"
    },
    "about": {
      "@type": "Service",
      "name": "Private AI voor Advocaten",
      "serviceType": "Legal Technology Software",
      "provider": {
        "@type": "Organization",
        "name": "LAWAI"
      }
    },
    "audience": {
      "@type": "BusinessAudience",
      "name": "Nederlandse Advocatenkantoren"
    }
  }

  return <StructuredData data={faqSchemaData} />
}

// Pre-configured FAQ schema for LAWAI main page
export function LAWAIFAQSchema() {
  const lawaiFAQs = [
    {
      question: "Hoe garandeert Private AI de veiligheid van onze vertrouwelijke juridische data?",
      answer: "Uw Private AI draait volledig op uw eigen infrastructuur of in een toegewijde private cloud binnen de EU. Alle data blijft binnen uw controle en wordt nooit gedeeld met externe AI-providers. We implementeren end-to-end encryptie, toegangscontroles en voldoen aan alle relevante compliance-eisen zoals AVG en ISO 27001."
    },
    {
      question: "Wat is het verschil tussen Private AI en ChatGPT/Claude voor juridisch werk?",
      answer: "Publieke AI-tools zoals ChatGPT zijn getraind op algemene data en delen uw input met externe servers. Private AI wordt specifiek getraind op uw juridische documenten en jurisprudentie, draait lokaal, en houdt alle data vertrouwelijk. Bovendien leert het systeem continu van uw kantoorspecifieke werkwijzen en terminologie."
    },
    {
      question: "Hoeveel tijd kost de implementatie van Private AI in ons kantoor?",
      answer: "De volledige implementatie duurt gemiddeld 4-6 weken, afhankelijk van de complexiteit van uw documentarchief en gewenste integraties. We beginnen met een grondige analyse (week 1), gevolgd door ontwikkeling en configuratie (week 2-4), uitgebreide testing (week 5) en go-live met training van uw team (week 6)."
    },
    {
      question: "Kunnen we Private AI integreren met onze bestaande juridische software?",
      answer: "Ja, Private AI kan worden geïntegreerd met de meeste juridische softwarepakketten zoals LexisNexis, Wolters Kluwer, en verschillende practice management systemen. We ontwikkelen API-koppelingen en zorgen voor naadloze workflows tussen uw bestaande tools en het AI-systeem."
    },
    {
      question: "Wat zijn de kosten en hoe schaalt de prijs met ons kantoor?",
      answer: "De kosten zijn gebaseerd op het aantal gebruikers en de complexiteit van uw setup. We bieden flexibele licentiemodellen vanaf €2.500 per maand voor kleinere kantoren tot enterprise-oplossingen voor grote kantoren. Alle implementatie, training en onderhoud zijn inbegrepen in de maandelijkse fee."
    },
    {
      question: "Hoe accuraat zijn de juridische documenten die Private AI genereert?",
      answer: "Private AI bereikt een accuraatheid van 95%+ voor standaard juridische documenten, omdat het specifiek is getraind op uw kantoordata en Nederlandse jurisprudentie. Het systeem wordt continu verbeterd door feedback van uw advocaten en bevat altijd een review-stap voor kwaliteitscontrole."
    }
  ]

  return <FAQSchema faqItems={lawaiFAQs} pageUrl="https://lawai.nl" />
}
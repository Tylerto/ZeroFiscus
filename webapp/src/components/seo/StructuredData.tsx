import React from 'react'

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

// Organization Schema for ZeroFiscus
export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZeroFiscus",
    "description": "Professioneel belastingadvies voor particulieren en ondernemers. Gratis belastingcheck en 'no cure, no pay' model.",
    "url": "https://zerofiscus.nl",
    "logo": {
      "@type": "ImageObject",
      "url": "https://zerofiscus.nl/logo.png",
      "width": 192,
      "height": 192
    },
    "foundingDate": "2025",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NL",
        "addressLocality": "Nederland"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nederland"
    },
    "industry": [
      "Tax Advisory",
      "Financial Services",
      "Accounting"
    ],
    "knowsAbout": [
      "Belastingadvies",
      "Belastingoptimalisatie",
      "Box 3 Belasting",
      "IB Ondernemer",
      "DGA Belasting",
      "Hypotheekrenteaftrek",
      "Zorgkosten Aftrek",
      "Giftenaftrek",
      "Belastingaangifte"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Nederland"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "NL",
      "availableLanguage": "Dutch",
      "email": "info@zerofiscus.nl"
    }
  }

  return <StructuredData data={organizationData} />
}

// Website Schema
export function WebsiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ZeroFiscus - Belastingbesparing Advies",
    "url": "https://zerofiscus.nl",
    "description": "Gratis belastingcheck voor particulieren en ondernemers. Ontdek binnen 2 minuten uw bespaarmogelijkheden voor 2024.",
    "inLanguage": "nl-NL",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "ZeroFiscus"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://zerofiscus.nl/assessment"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Gratis Belastingcheck",
      "description": "Professionele belastingcheck voor particulieren en ondernemers. No cure, no pay model.",
      "provider": {
        "@type": "Organization",
        "name": "ZeroFiscus"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Nederland"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Nederlandse Belastingplichtigen"
      }
    }
  }

  return <StructuredData data={websiteData} />
}

// Service Schema for Tax Advisory Service
export function ServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Belastingadvies & Optimalisatie",
    "description": "Professioneel belastingadvies met gratis intake. We helpen particulieren en ondernemers om belasting te besparen via slimme optimalisatie. No cure, no pay model.",
    "provider": {
      "@type": "Organization",
      "name": "ZeroFiscus",
      "url": "https://zerofiscus.nl"
    },
    "serviceType": "Tax Advisory Services",
    "audience": {
      "@type": "BusinessAudience",
      "name": "Nederlandse Belastingplichtigen en Ondernemers"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nederland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Belastingadvies Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gratis Belastingcheck",
            "description": "Ontdek binnen 2 minuten uw bespaarmogelijkheden"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Box 3 Optimalisatie",
            "description": "Maximaliseer uw vermogensrendementsheffing aftrek"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DGA Belastingadvies",
            "description": "Optimale fiscale structuur voor directeur-grootaandeelhouders"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hypotheekrenteaftrek",
            "description": "Maximaal profijt uit hypotheekrenteaftrek"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Professioneel belastingadvies met gratis intake. Alleen betalen bij daadwerkelijke besparing.",
      "seller": {
        "@type": "Organization",
        "name": "ZeroFiscus"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "Gratis intake - alleen betalen bij besparing (No Cure, No Pay)"
      }
    }
  }

  return <StructuredData data={serviceData} />
}

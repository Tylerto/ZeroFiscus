import React from 'react'
import { StructuredData } from './StructuredData'

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime?: string
  authorName?: string
  image?: {
    url: string
    width: number
    height: number
    alt: string
  }
  keywords?: string[]
  wordCount?: number
  timeToRead?: number
}

export function ArticleSchema({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  authorName = "LAWAI",
  image = {
    url: "https://lawai.nl/lawai-logo.png",
    width: 1200,
    height: 630,
    alt: title
  },
  keywords = [],
  wordCount,
  timeToRead
}: ArticleSchemaProps) {
  const articleSchemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://lawai.nl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LAWAI",
      "url": "https://lawai.nl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lawai.nl/lawai-logo.png",
        "width": 400,
        "height": 400
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": image.url,
      "width": image.width,
      "height": image.height,
      "alt": image.alt
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "inLanguage": "nl-NL",
    "about": {
      "@type": "Thing",
      "name": "Private AI voor Advocaten",
      "description": "Veilige AI-oplossingen voor Nederlandse advocatenkantoren"
    },
    "audience": {
      "@type": "BusinessAudience",
      "name": "Nederlandse Advocatenkantoren"
    },
    "articleSection": "Legal Technology",
    "genre": "Technology Guide",
    ...(keywords.length > 0 && { "keywords": keywords.join(", ") }),
    ...(wordCount && { "wordCount": wordCount }),
    ...(timeToRead && { "timeRequired": `PT${timeToRead}M` })
  }

  return <StructuredData data={articleSchemaData} />
}

// Pre-configured Article schemas for existing blog posts
export function GDPRCompliantAIArticleSchema() {
  return (
    <ArticleSchema
      title="GDPR-Compliant AI voor Advocatenkantoren: Complete Gids 2024"
      description="Volledige handleiding voor GDPR-compliant AI implementatie in Nederlandse advocatenkantoren. Privacy by design, data minimalisatie en compliance strategieën."
      url="https://lawai.nl/blog/gdpr-compliant-ai-advocatenkantoren"
      publishedTime="2024-12-01T00:00:00.000Z"
      keywords={[
        "gdpr compliant ai advocaten",
        "privacy by design ai",
        "data minimalisatie ai",
        "ai compliance advocatenkantoor",
        "gdpr ai implementation",
        "nederlandse privacy wet ai",
        "advocaten data protection ai",
        "private ai gdpr"
      ]}
      wordCount={3500}
      timeToRead={14}
    />
  )
}

export function ChatGPTRisksArticleSchema() {
  return (
    <ArticleSchema
      title="ChatGPT Risico's voor Advocaten: Waarom Private AI Veiliger Is"
      description="Ontdek de verborgen risico's van ChatGPT voor advocaten. Data lekken, compliance problemen en beroepsgeheim schendingen. Private AI als veilig alternatief."
      url="https://lawai.nl/blog/chatgpt-risicos-advocaten-private-ai"
      publishedTime="2024-12-02T00:00:00.000Z"
      keywords={[
        "chatgpt risicos advocaten",
        "private ai alternatief",
        "beroepsgeheim ai",
        "veilige ai advocaten",
        "chatgpt data lek",
        "advocaten ai privacy",
        "juridische ai veiligheid",
        "private ai voordelen"
      ]}
      wordCount={3200}
      timeToRead={13}
    />
  )
}

export function AIImplementationArticleSchema() {
  return (
    <ArticleSchema
      title="AI Implementatie in Juridische Praktijk: Complete Roadmap 2024"
      description="Stap-voor-stap gids voor AI implementatie in advocatenkantoren. Van strategie tot uitvoering, inclusief ROI berekening en best practices."
      url="https://lawai.nl/blog/ai-implementatie-juridische-praktijk"
      publishedTime="2024-12-03T00:00:00.000Z"
      keywords={[
        "ai implementatie advocatenkantoor",
        "juridische ai strategie",
        "ai roadmap advocaten",
        "legal tech implementatie",
        "ai transformation juridisch",
        "advocatenkantoor digitalisering",
        "juridische ai adoptie",
        "ai change management"
      ]}
      wordCount={4100}
      timeToRead={16}
    />
  )
}

export function NederlandseAIWetgevingArticleSchema() {
  return (
    <ArticleSchema
      title="Nederlandse AI Wetgeving en Advocatuur: Wat u Moet Weten 2024"
      description="Complete overzicht van Nederlandse AI wetgeving voor advocaten. EU AI Act, GDPR compliance, en tuchtregels. Praktische gids voor juridische AI implementatie."
      url="https://lawai.nl/blog/nederlandse-ai-wetgeving-advocatuur"
      publishedTime="2024-12-04T00:00:00.000Z"
      keywords={[
        "nederlandse ai wetgeving advocatuur",
        "ai act advocaten nederland",
        "ai wetgeving juridisch",
        "advocaten ai compliance",
        "ai tuchtregels advocatuur",
        "nederlandse ai regelgeving",
        "ai compliance advocatenkantoor",
        "juridische ai wetgeving"
      ]}
      wordCount={3800}
      timeToRead={15}
    />
  )
}

export function ROICalculatorArticleSchema() {
  return (
    <ArticleSchema
      title="ROI Calculator: Hoeveel Bespaart Private AI uw Advocatenkantoor?"
      description="Bereken de ROI van Private AI voor uw advocatenkantoor. Interactieve calculator, case studies en concrete besparingen van Nederlandse kantoren."
      url="https://lawai.nl/blog/roi-calculator-private-ai-advocatenkantoor"
      publishedTime="2024-12-04T00:00:00.000Z"
      keywords={[
        "roi calculator private ai advocatenkantoor",
        "ai roi advocaten",
        "private ai kostenbesparing",
        "advocatenkantoor ai investering",
        "juridische ai rendement",
        "ai efficiency advocaten",
        "private ai voordelen kosten",
        "advocaat ai productiviteit"
      ]}
      wordCount={3600}
      timeToRead={14}
    />
  )
}

export function CaseStudyTijdsbesparingArticleSchema() {
  return (
    <ArticleSchema
      title="Case Study: Nederlandse Advocaat Bespaart 40% Tijd met Private AI"
      description="Complete case study: hoe een Nederlands advocatenkantoor 40% tijd bespaart met Private AI. Inclusief ROI berekening en implementatie roadmap."
      url="https://lawai.nl/blog/case-study-advocaat-tijdsbesparing-private-ai"
      publishedTime="2024-12-05T00:00:00.000Z"
      keywords={[
        "nederlandse advocaat bespaart tijd",
        "private ai tijdsbesparing advocaten",
        "case study ai advocatenkantoor",
        "advocaat productiviteit ai",
        "juridische ai tijdwinst",
        "advocatenkantoor efficiency ai",
        "nederlandse advocaat ai succes",
        "private ai resultaten advocaten"
      ]}
      wordCount={4200}
      timeToRead={12}
    />
  )
}
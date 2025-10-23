import React from 'react'
import './globals.css'
import { DM_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/StructuredData'
import { GoogleAnalytics, SearchConsoleVerification, MicrosoftClarity, CookieConsent } from '@/components/seo/Analytics'
import { WebVitalsOptimization, CriticalCSS, ResourceHints } from '@/components/performance/WebVitalsOptimization'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: 'Box 3 Belasting Optimalisatie | Gratis Belastingcheck | ZeroFiscus',
    template: '%s | ZeroFiscus - Belastingadvies'
  },
  description: 'Specialist in Box 3 optimalisatie en belastingadvies voor particulieren en ZZP\'ers. Gratis belastingcheck ✓ No cure no pay ✓ Gemiddeld €1.163 besparing. Start vandaag!',
  keywords: [
    'box 3',
    'box 3 belasting',
    'box 3 optimalisatie',
    'box 3 vastgoed',
    'belastingadvies',
    'belastingdienst',
    'zzp belasting',
    'belasting',
    'belastingaangifte',
    'gratis belastingcheck',
    'belastingbesparing',
    'fiscaal advies',
    'belasting optimalisatie',
    'vermogensrendementsheffing',
    'box 3 besparen',
    'zzp belastingadvies',
    'ondernemer belasting',
    'particulier belasting',
    'belastingteruggave',
    'no cure no pay belasting'
  ],
  authors: [{ name: 'ZeroFiscus', url: 'https://zerofiscus.nl' }],
  creator: 'ZeroFiscus',
  publisher: 'ZeroFiscus',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://zerofiscus.nl',
    title: 'Box 3 Belasting Optimalisatie | Gratis Belastingcheck | ZeroFiscus',
    description: 'Specialist in Box 3 optimalisatie en belastingadvies voor particulieren en ZZP\'ers. Gratis belastingcheck ✓ No cure no pay ✓ Gemiddeld €1.163 besparing',
    siteName: 'ZeroFiscus',
    images: [
      {
        url: 'https://zerofiscus.nl/logo.png',
        width: 1200,
        height: 630,
        alt: 'ZeroFiscus - Belastingbesparing Advies',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Box 3 Belasting Optimalisatie | Gratis Belastingcheck',
    description: 'Specialist in Box 3 optimalisatie en ZZP belastingadvies. Gratis check ✓ No cure no pay ✓ Gemiddeld €1.163 besparing',
    images: ['https://zerofiscus.nl/logo.png'],
    creator: '@zerofiscus_nl',
    site: '@zerofiscus_nl',
  },
  verification: {
    google: 'ADD_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE',
    // Add Google Search Console verification code when setting up GSC
  },
  alternates: {
    canonical: 'https://zerofiscus.nl',
    languages: {
      'nl-NL': 'https://zerofiscus.nl',
    },
  },
  category: 'finance',
  classification: 'Tax Advisory, Financial Services, Accounting',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <CriticalCSS />
        <OrganizationSchema />
        <WebsiteSchema />
        <SearchConsoleVerification />
      </head>
      <body className={`${dmSans.variable} ${dmSans.className} overflow-x-hidden`}>
        {/* WebVitalsOptimization disabled to prevent network errors */}
        {/* <WebVitalsOptimization /> */}
        <GoogleAnalytics gaId="G-DE8RWJLT2P" />
        {/* Microsoft Clarity disabled until proper ID is configured */}
        {/* <MicrosoftClarity clarityId="xxxxxxxxx" /> */}
        <CookieConsent />
        {children}
      </body>
    </html>
  )
} 
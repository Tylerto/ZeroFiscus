import type { Metadata } from 'next'
import { LawAINavbar } from '@/components/ui/navbar'
import { LawAIFooter } from '@/components/ui/footer-section'
import { Button } from '@/components/ui/button'
import { ArrowRight, FileText, Calendar, CheckCircle2, AlertCircle, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Belastingaangifte 2024: Complete Stappenplan + Tips | ZeroFiscus',
  description: 'Alles over je belastingaangifte doen in 2024. Deadlines, benodigde documenten, veelgemaakte fouten en tips om maximaal terug te krijgen van de Belastingdienst.',
  keywords: [
    'belastingaangifte',
    'belastingaangifte 2024',
    'aangifte doen',
    'belastingaangifte tips',
    'deadline belastingaangifte',
    'belastingteruggaaf',
    'aangifte inkomstenbelasting',
    'belastingaangifte invullen',
  ],
  openGraph: {
    title: 'Belastingaangifte 2024: Complete Stappenplan + Tips',
    description: 'Doe je belastingaangifte foutloos met dit complete stappenplan. Maximaliseer je teruggaaf.',
    type: 'article',
    publishedTime: '2024-10-23T00:00:00Z',
    authors: ['ZeroFiscus'],
  },
}

export default function BelastingaangiftePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Belastingaangifte 2024: Complete Stappenplan + Tips',
    description: 'Alles over je belastingaangifte doen in 2024. Deadlines, benodigde documenten, veelgemaakte fouten en tips om maximaal terug te krijgen van de Belastingdienst.',
    datePublished: '2024-10-23',
    dateModified: '2024-10-23',
    author: {
      '@type': 'Organization',
      name: 'ZeroFiscus',
      url: 'https://zerofiscus.nl'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZeroFiscus',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zerofiscus.nl/ZeroFiscus.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://zerofiscus.nl/blog/belastingaangifte'
    },
    keywords: 'belastingaangifte, belastingaangifte 2024, aangifte doen, belastingaangifte tips, deadline belastingaangifte, belastingteruggaaf',
    articleSection: 'Belastingadvies',
    inLanguage: 'nl-NL'
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LawAINavbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Belastingaangifte 2024: Complete Gids
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stap-voor-stap uitleg om je belastingaangifte foutloos in te vullen en maximaal terug te krijgen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-gray-900 hover:bg-gray-800" asChild>
                <a href="/assessment">
                  Laat Expert Je Aangifte Doen <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Elk jaar weer: de belastingaangifte. Voor veel Nederlanders een onprettige plicht, maar het hoeft niet
            moeilijk te zijn. Met de juiste voorbereiding en kennis kun je je aangifte binnen een uur foutloos invullen
            én maximaal terugkrijgen van de Belastingdienst.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In deze complete gids leggen we stap-voor-stap uit hoe je je belastingaangifte doet, welke documenten je
            nodig hebt, en - cruciaal - hoe je alle mogelijke aftrekposten benut om zoveel mogelijk terug te krijgen. Ben je vooral geïnteresseerd in{' '}
            <a href="/blog/box-3-belasting" className="text-blue-600 hover:text-blue-800 underline">
              Box 3 optimalisatie
            </a>? Bekijk onze gespecialiseerde gids.
          </p>
        </section>

        {/* Deadlines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Belangrijke Deadlines 2024
          </h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Let Op: Boetes bij Te Laat!</h3>
                <p className="text-gray-700 mb-4">
                  Te late aangifte leidt tot directe boetes. Houd deze deadlines in de gaten:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>1 mei 2024:</strong> Deadline voor belastingjaar 2023 (zonder uitstel)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>1 september 2024:</strong> Met automatische uitstel van 4 maanden</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Extra uitstel:</strong> Bij bijzondere omstandigheden (overlijden, ziekte)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Boetes bij Te Late Aangifte:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 1e herinnering: geen boete, maar wel aanmaning</li>
              <li>• 2e herinnering: boete €369</li>
              <li>• Verdere vertraging: boete kan oplopen tot €5.514</li>
              <li>• Plus: rente over verschuldigde belasting (4% per jaar)</li>
            </ul>
          </div>
        </section>

        {/* What you need */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wat Heb Je Nodig voor Je Aangifte?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Goede voorbereiding scheelt veel tijd. Verzamel deze documenten voordat je begint:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Voor Werknemers
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Jaaropgaaf van werkgever(s)</li>
                <li>✓ Hypotheekrenteaftrek gegevens</li>
                <li>✓ Zorgpremie specificatie</li>
                <li>✓ Donaties aan goede doelen (ANBI)</li>
                <li>✓ Studiekosten (als aftrekbaar)</li>
                <li>✓ Alimentatie betalingen</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Voor Ondernemers/ZZP
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Jaarrekening of winst-verliesrekening</li>
                <li>✓ Overzicht bedrijfskosten</li>
                <li>✓ Investeringsoverzicht</li>
                <li>✓ Urenregistratie (voor zelfstandigenaftrek)</li>
                <li>✓ BTW-aangiftes (als BTW-plichtig)</li>
                <li>✓ Pensioenopbouw (FOR/lijfrente)</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3">
                Voor een complete gids specifiek voor zzp'ers, bekijk ons artikel over{' '}
                <a href="/blog/zzp-belasting" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  ZZP belasting optimalisatie
                </a>.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Box 3 (Vermogen)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Banksaldi per 1 januari</li>
                <li>✓ Beleggingsoverzichten</li>
                <li>✓ WOZ-waarde tweede woning(en)</li>
                <li>✓ Schulden (hypotheek, leningen)</li>
                <li>✓ Crypto portfolio waarde</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Overige Aftrekposten
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Weekenduitgaven bij scheiding</li>
                <li>✓ Levensonderhoud kinderen</li>
                <li>✓ Scholingsuitgaven</li>
                <li>✓ Ziektekosten boven drempel</li>
                <li>✓ Giften (minimaal €60/jaar)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step by step */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stap-voor-Stap: Je Belastingaangifte Invullen
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Inloggen bij Belastingdienst</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Ga naar <strong>mijn.belastingdienst.nl</strong> en log in met DigiD. Je komt op je persoonlijke
                dashboard.
              </p>
              <div className="bg-gray-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Geen DigiD? Vraag deze minimaal 2 weken voor de deadline aan. Aanvraag duurt
                  5-7 werkdagen.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Start Aangifte Inkomstenbelasting</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Klik op "Aangifte doen" en kies het juiste belastingjaar. De Belastingdienst heeft al veel gegevens
                vooringevuld.
              </p>
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Let op:</strong> Controleer ALTIJD de vooringevulde gegevens. Er staan regelmatig fouten in.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Box 1: Werk en Woning Invullen</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Vul in (of controleer):
              </p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Inkomen uit loondienst (jaaropgaaf werkgever)</li>
                <li>• Winst uit onderneming (voor zzp'ers)</li>
                <li>• Hypotheekrenteaftrek</li>
                <li>• Alimentatie betaald of ontvangen</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Box 2: Aanmerkelijk Belang</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Alleen van toepassing als je meer dan 5% aandelen hebt in een BV. Vul in:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Dividenden ontvangen</li>
                <li>• Verkoopwinst aandelen</li>
              </ul>
            </div>

            {/* Step 5 */}
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Box 3: Vermogen Opgeven</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Geef op wat je bezat op <strong>1 januari</strong>:
              </p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Banksaldi (alle rekeningen)</li>
                <li>• Beleggingen (aandelen, obligaties, crypto)</li>
                <li>• Tweede woningen (WOZ-waarde)</li>
                <li>• Schulden (hypotheek tweede woning, leningen)</li>
              </ul>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Heffingsvrij vermogen 2024 is €57.000 per persoon. Bij fiscaal partnerschap:
                  €114.000. Verdeel slim om belasting te besparen! Lees meer over{' '}
                  <a href="/blog/box-3-optimalisatie" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Box 3 optimalisatie strategieën
                  </a>.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Aftrekposten Claimen</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Vergeet geen aftrekposten! Check:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Giften aan ANBI (goede doelen, minimaal €60)</li>
                <li>✓ Zorgkosten boven drempel (€162 + 5,75% inkomen)</li>
                <li>✓ Alimentatie betaald</li>
                <li>✓ Scholingsuitgaven</li>
                <li>✓ Levensonderhoud kinderen (weekenduitgaven)</li>
              </ul>
            </div>

            {/* Step 7 */}
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Controleren en Indienen</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Voordat je indient:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Check alle bedragen nogmaals</li>
                <li>• Kijk naar het verwachte resultaat (teruggaaf/bijbetaling)</li>
                <li>• Print of download een kopie voor je administratie</li>
                <li>• Klik op "Definitief indienen"</li>
              </ul>
              <div className="bg-yellow-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Let op:</strong> Na indienen kun je binnen 48 uur nog wijzigen. Daarna moet je een
                  "verzoek tot nader onderzoek" indienen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            10 Veelgemaakte Fouten (en Hoe Ze Te Voorkomen)
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Box 3 Vermogen Verkeerd Opgeven</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Vermogen op 31 december opgeven i.p.v. 1 januari.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Noteer al je saldo's op 1 januari. Maak screenshot van je bankrekeningen op die datum.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Hypotheekrenteaftrek Vergeten</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Alleen eigen woning hypotheekrente is aftrekbaar, niet tweede woning.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Controleer je hypotheekspecificatie. Tweede woning gaat via Box 3 (schuld aftrek).
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Zelfstandigenaftrek Niet Claimen</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Als zzp'er de zelfstandigenaftrek vergeten (€5.030).
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Check of je aan het urencriterium voldoet (1.225 uur). Bewaar urenoverzicht!
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">4. Giften Onder €60 Opgeven</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Kleine giften aftrekken (moet minimaal €60 per ANBI zijn).
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Bundel giften of doe grotere gift aan één goed doel.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">5. Buitenlands Vermogen Niet Opgeven</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Denken dat buitenlandse rekeningen niet hoeven worden opgegeven.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Alle wereldwijde bezittingen moeten worden opgegeven. De Belastingdienst heeft
                internationale uitwisseling.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">6. Verkeerde Schulden Aftrekken</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Consumptief krediet aftrekken in Box 3 (mag niet).
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Alleen schulden voor Box 3 bezittingen zijn aftrekbaar (tweede woning, beleggingen).
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">7. Vooringevulde Gegevens Niet Controleren</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Blind vertrouwen op vooringevulde gegevens.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Check ALLES. Werkgevers maken fouten, WOZ-waardes kloppen niet altijd.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">8. Crypto Niet Opgeven</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Bitcoin en andere crypto vergeten op te geven.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Crypto valt onder Box 3. Geef de waarde op per 1 januari (in euro's).
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">9. Partneraftrek Verkeerd Verdelen</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Bij fiscaal partnerschap de aftrekposten niet optimaal verdelen.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Verdeel aftrekposten bij de partner met hoogste inkomen voor max. voordeel.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">10. Zonder Bewijs Aftrekken</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Fout:</strong> Kosten aftrekken zonder bonnetjes/bewijzen te bewaren.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> Bewaar alle bewijsstukken minimaal 7 jaar. De Belastingdienst kan altijd controleren.
              </p>
            </div>
          </div>
        </section>

        {/* Tips for max return */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tips om Maximaal Terug Te Krijgen
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Check Alle Aftrekposten
              </h3>
              <p className="text-gray-700 text-sm">
                Ga systematisch langs alle mogelijke aftrekposten. De meeste mensen vergeten er een paar en laten
                zo geld liggen.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Optimaliseer Box 3 Verdeling
              </h3>
              <p className="text-gray-700 text-sm">
                Bij fiscaal partnerschap: verdeel vermogen zo dat beide partners hun heffingsvrije voet (€57.000)
                optimaal benutten.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Claim Zorgkosten
              </h3>
              <p className="text-gray-700 text-sm">
                Boven de drempel (€162 + 5,75% van inkomen) zijn veel zorgkosten aftrekbaar: brillen, tandarts,
                medicijnen, etc.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Bundel Giften
              </h3>
              <p className="text-gray-700 text-sm">
                Kleinere giften zijn niet aftrekbaar. Bundel tot minimaal €60 per ANBI voor maximaal fiscaal voordeel.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Laat Een Expert Je Aangifte Doen
          </h2>
          <p className="text-lg mb-6 text-gray-200">
            Wil je zekerheid dat je aangifte 100% correct is én dat je maximaal terugkrijgt? Onze fiscalisten doen
            je complete aangifte en vinden gemiddeld €1.163 aan gemiste aftrekposten en besparingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-2" asChild>
              <a href="/assessment">
                Start Gratis Check <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="mailto:info@zerofiscus.nl">
                Vraag Advies
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>No cure no pay</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Snel en foutloos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Maximale teruggaaf</span>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusie: Doe Je Aangifte Slim
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Je belastingaangifte hoeft geen jaarlijkse frustratie te zijn. Met goede voorbereiding, de juiste
            documenten en kennis van alle aftrekposten kun je binnen een uur een perfecte aangifte doen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            De sleutel tot maximale teruggaaf ligt in drie dingen:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700 mb-6">
            <li><strong>Voorbereiding:</strong> Verzamel alle documenten vooraf</li>
            <li><strong>Grondigheid:</strong> Claim alle aftrekposten waar je recht op hebt</li>
            <li><strong>Controle:</strong> Check alles dubbel voordat je indient</li>
          </ol>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bij ZeroFiscus helpen we je graag. Of je nu vragen hebt over je aangifte, of het volledig uit handen
            wilt geven - we zorgen dat je maximaal terugkrijgt. Heb je vragen of moet je{' '}
            <a href="/blog/belastingdienst" className="text-blue-600 hover:text-blue-800 underline">
              contact opnemen met de Belastingdienst
            </a>? We begeleiden je door het hele proces. No cure no pay - je betaalt alleen bij bewezen
            resultaat.
          </p>
        </section>
      </article>

      <LawAIFooter />
    </div>
  )
}

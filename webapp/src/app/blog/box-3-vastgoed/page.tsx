import type { Metadata } from 'next'
import { LawAINavbar } from '@/components/ui/navbar'
import { LawAIFooter } from '@/components/ui/footer-section'
import { Button } from '@/components/ui/button'
import { ArrowRight, Home, TrendingDown, Calculator, AlertCircle, CheckCircle2, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Box 3 Vastgoed: Complete Gids voor Tweede Woningen | ZeroFiscus',
  description: 'Alles over Box 3 vastgoed: tweede woningen, vakantiehuizen, verhuurde panden. Leer hoe de WOZ-waarde werkt, wat je moet betalen en hoe je kunt optimaliseren.',
  keywords: [
    'box 3 vastgoed',
    'tweede woning box 3',
    'vakantiehuis belasting',
    'verhuurde woning box 3',
    'woz waarde box 3',
    'box 3 tweede woning',
    'vastgoed belasting',
    'box 3 onroerend goed',
  ],
  openGraph: {
    title: 'Box 3 Vastgoed: Belasting op Tweede Woningen',
    description: 'Volledige gids over Box 3 belasting op vastgoed, tweede woningen en verhuurde panden.',
    type: 'article',
    publishedTime: '2024-10-23T00:00:00Z',
    authors: ['ZeroFiscus'],
  },
}

export default function Box3VastgoedPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Box 3 Vastgoed: Complete Gids voor Tweede Woningen',
    description: 'Alles over Box 3 vastgoed: tweede woningen, vakantiehuizen, verhuurde panden. Leer hoe de WOZ-waarde werkt, wat je moet betalen en hoe je kunt optimaliseren.',
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
      '@id': 'https://zerofiscus.nl/blog/box-3-vastgoed'
    },
    keywords: 'box 3 vastgoed, tweede woning box 3, vakantiehuis belasting, verhuurde woning box 3, woz waarde box 3',
    articleSection: 'Box 3 Belasting',
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
              Box 3 Vastgoed: Complete Gids
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Alles over Box 3 belasting op tweede woningen, vakantiehuizen en verhuurde panden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-gray-900 hover:bg-gray-800" asChild>
                <a href="/assessment">
                  Bereken Jouw Vastgoed Belasting <ArrowRight className="w-5 h-5" />
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
            Bezit je een tweede woning, vakantiehuis of verhuurde pand? Dan valt dit vastgoed onder Box 3 en betaal
            je hier vermogensrendementsheffing over. Voor veel huizenbezitters is dit een aanzienlijke belastingpost,
            vooral met de stijgende WOZ-waardes van de afgelopen jaren. Wil je eerst de basics van{' '}
            <a href="/blog/box-3-belasting" className="text-blue-600 hover:text-blue-800 underline">
              Box 3 belasting
            </a>{' '}
            begrijpen? Lees onze complete introductiegids.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In deze uitgebreide gids leggen we precies uit hoe Box 3 vastgoed werkt, wat je moet betalen, en -
            cruciaal - hoe je legaal kunt optimaliseren en besparen.
          </p>
        </section>

        {/* What falls under Box 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Welk Vastgoed Valt Onder Box 3?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Belangrijk om te weten: je <strong>eigen woning</strong> (hoofdverblijf) valt NIET onder Box 3, maar
            onder Box 1. Box 3 geldt alleen voor overig vastgoed:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-gray-900">Wel Box 3</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Tweede woningen</li>
                <li>• Vakantiehuizen (NL en buitenland)</li>
                <li>• Verhuurde woningen</li>
                <li>• Beleggingspanden</li>
                <li>• Onbebouwde grond/bouwgrond</li>
                <li>• Erfpacht rechten</li>
                <li>• Aandelen in vastgoed BV</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-gray-900">Niet Box 3</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Eigen woning (hoofdverblijf)</li>
                <li>• Bedrijfspanden in eigen BV</li>
                <li>• Monumenten (onder voorwaarden)</li>
                <li>• Agrarische grond in bedrijf</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How it's calculated */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe Wordt Box 3 Vastgoed Berekend?
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Stap 1: WOZ-Waarde Bepalen
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              De grondslag voor Box 3 vastgoed is de <strong>WOZ-waarde per 1 januari</strong>. Let op:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Voor Nederlandse panden: officiële WOZ-beschikking</li>
              <li>Voor buitenlands vastgoed: marktwaarde of getaxeerde waarde</li>
              <li>De WOZ-waarde is vaak lager dan de marktwaarde</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingDown className="w-6 h-6" />
              Stap 2: Schulden Aftrekken
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hypotheekschuld op de tweede woning mag je aftrekken:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Volledige hypotheekschuld is aftrekbaar</li>
              <li>Ook andere leningen voor het vastgoed</li>
              <li>Verbouwingsleningen kunnen aftrekbaar zijn</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Rekenvoorbeeld:
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>WOZ-waarde vakantiehuis: <strong>€350.000</strong></p>
              <p>Hypotheekschuld: <strong>€200.000</strong></p>
              <p className="border-t pt-2 mt-2">Box 3 grondslag: <strong>€150.000</strong></p>
              <p className="text-sm text-gray-600 mt-4">
                Over deze €150.000 betaal je fictief rendement (afhankelijk van totaal vermogen), circa 1-2% effectief
                belastingtarief = <strong>€1.500 - €3.000 per jaar</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Common Scenarios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Veelvoorkomende Situaties
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Home className="w-6 h-6" />
                1. Vakantiehuis in Nederland
              </h3>
              <p className="text-gray-700 mb-3">
                Een vakantiehuis dat je zelf gebruikt valt volledig onder Box 3. Geen aftrek voor kosten, maar wel
                voor hypotheekschuld.
              </p>
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Verhuur je het (gedeeltelijk) via Airbnb? Dan blijft het in Box 3, maar kun
                  je wel een deel van de kosten aftrekken in Box 1 als je als ondernemer kwalificeert.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Building className="w-6 h-6" />
                2. Volledig Verhuurde Woning
              </h3>
              <p className="text-gray-700 mb-3">
                Een woning die je volledig verhuurt valt onder Box 3. De huurinkomsten hoef je niet op te geven (die
                zitten al verwerkt in het fictieve rendement).
              </p>
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Let op:</strong> Bij verhuur aan familie onder gunstige voorwaarden kan de Belastingdienst
                  dit aanmerken als schenking.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Vakantiehuis in het Buitenland
              </h3>
              <p className="text-gray-700 mb-3">
                Ook buitenlands vastgoed moet je opgeven in Box 3. De waarde bepaal je aan de hand van de lokale
                taxatie of aankoopprijs.
              </p>
              <div className="bg-yellow-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Dubbele Belasting?</strong> Sommige landen heffen ook lokale belasting. Via
                  belastingverdragen kun je voorkomen dat je dubbel betaalt.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Onbebouwde Grond / Bouwgrond
              </h3>
              <p className="text-gray-700 mb-3">
                Grond waarop je (nog) niet woont valt onder Box 3. Dit geldt ook voor erfpacht en opstal rechten.
              </p>
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Planning:</strong> Timing van aankoop en bebouwing kan impact hebben op je Box 3 druk over
                  meerdere jaren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Optimalisatie Strategieën voor Box 3 Vastgoed
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Naast deze vastgoed-specifieke strategieën zijn er nog meer manieren om je totale Box 3 belasting te verlagen. Bekijk onze{' '}
            <a href="/blog/box-3-optimalisatie" className="text-blue-600 hover:text-blue-800 underline font-medium">
              12 Box 3 optimalisatie strategieën
            </a>{' '}
            voor een compleet overzicht.
          </p>

          <div className="space-y-8">
            {/* Strategy 1 */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. Hypotheek Optimaliseren
              </h3>
              <p className="text-gray-700 mb-4">
                Schulden op Box 3 vastgoed zijn volledig aftrekbaar. Dit maakt een hypotheek op een tweede woning
                fiscaal aantrekkelijker dan je misschien denkt.
              </p>
              <div className="bg-white rounded p-4 border border-green-200">
                <p className="text-sm text-gray-700 mb-2"><strong>Voorbeeld:</strong></p>
                <p className="text-sm text-gray-700">
                  Hypotheek €200.000 tegen 3% rente = €6.000 rente per jaar<br />
                  Box 3 besparing op €200.000 = circa €3.600 per jaar<br />
                  <strong>Netto kosten hypotheek: €2.400 (effectief 1,2% rente)</strong>
                </p>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2. Timing van Aan- en Verkoop
              </h3>
              <p className="text-gray-700 mb-4">
                De peildatum is 1 januari. Door strategisch te plannen kun je een heel jaar Box 3 besparen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Verkoop tweede woning vóór 31 december: geen Box 3 dat jaar</li>
                <li>Koop tweede woning ná 1 januari: geen Box 3 dat jaar</li>
                <li>Bij erfenis: acceptatie ná 1 januari kan gunstig zijn</li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. Onderbrengen in BV (voor Beleggers)
              </h3>
              <p className="text-gray-700 mb-4">
                Voor professionele vastgoedbeleggers kan onderbrengen in een BV interessant zijn:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Geen Box 3, maar vennootschapsbelasting over werkelijke huur</li>
                <li>Kosten zijn volledig aftrekbaar</li>
                <li>Afschrijving mogelijk</li>
                <li><strong>Let op:</strong> Verhoogde overdrachtsbelasting (10,4% vs 2%)</li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                4. WOZ-Waarde Bezwaar
              </h3>
              <p className="text-gray-700 mb-4">
                Te hoge WOZ-waarde? Je kunt bezwaar maken:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Bezwaar binnen 6 weken na WOZ-beschikking</li>
                <li>Onderbouw met vergelijkbare woningen</li>
                <li>Lagere WOZ = direct lagere Box 3 belasting</li>
                <li>Ook voor voorgaande jaren mogelijk (onder voorwaarden)</li>
              </ul>
            </div>

            {/* Strategy 5 */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5. Schenking met Recht van Gebruik
              </h3>
              <p className="text-gray-700 mb-4">
                Schenk het vastgoed aan kinderen, maar behoud gebruiksrecht:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Vastgoed valt uit jouw Box 3</li>
                <li>Je mag het zelf blijven gebruiken</li>
                <li>Kinderen betalen Box 3 (maar vaak tegen lager tarief)</li>
                <li><strong>Voordeel:</strong> Samen minder Box 3 belasting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Veelgemaakte Fouten bij Box 3 Vastgoed
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">❌ Schuld niet aftrekken</h3>
              <p className="text-gray-700 text-sm">
                Hypotheekschuld op tweede woning vergeten af te trekken kost honderden euro's per jaar.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">❌ Buitenlands vastgoed niet opgeven</h3>
              <p className="text-gray-700 text-sm">
                Ook buitenlands vastgoed MOET je opgeven. De Belastingdienst heeft internationale uitwisseling van
                gegevens.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">❌ Verkeerde WOZ-waarde gebruiken</h3>
              <p className="text-gray-700 text-sm">
                Gebruik altijd de WOZ-waarde van 1 januari, niet de huidige marktwaarde of aankoopprijs.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">❌ Timing niet optimaal benutten</h3>
              <p className="text-gray-700 text-sm">
                Door aan- of verkoop 2 dagen later te plannen (na peildatum) een heel jaar Box 3 besparen.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Optimaliseer Jouw Box 3 Vastgoed Belasting
          </h2>
          <p className="text-lg mb-6 text-gray-200">
            Elk vastgoed is uniek, en dus ook de optimalisatiemogelijkheden. Onze experts analyseren jouw specifieke
            situatie en vinden de beste strategie voor jou. Gemiddeld besparen onze klanten €1.163 per jaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-2" asChild>
              <a href="/assessment">
                Start Gratis Vastgoed Check <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="mailto:info@zerofiscus.nl">
                Stel Een Vraag
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            No cure no pay - alleen betalen bij bewezen besparing
          </p>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusie
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Box 3 vastgoed is een aanzienlijke kostenpost voor veel huizenbezitters. Met de juiste kennis en planning
            kun je echter legaal honderden tot duizenden euro's besparen. De sleutel ligt in:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
            <li>Correcte waardering en opgave van je vastgoed</li>
            <li>Optimaal gebruik van hypotheekaftrek</li>
            <li>Strategische timing van transacties</li>
            <li>Bezwaar tegen te hoge WOZ-waardes</li>
            <li>Overwegen van alternatieve structuren (BV, schenking)</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bij ZeroFiscus hebben we veel ervaring met Box 3 vastgoed optimalisatie. We analyseren jouw situatie,
            vinden alle mogelijke besparingen, en begeleiden je bij de implementatie. Wil je weten hoe je dit correct opgeeft in je aangifte? Lees onze gids over{' '}
            <a href="/blog/belastingaangifte" className="text-blue-600 hover:text-blue-800 underline">
              belastingaangifte doen
            </a>. En vergeet niet: no cure no pay - je betaalt alleen bij bewezen resultaat.
          </p>
        </section>
      </article>

      <LawAIFooter />
    </div>
  )
}

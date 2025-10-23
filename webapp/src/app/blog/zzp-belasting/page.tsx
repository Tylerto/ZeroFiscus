import type { Metadata } from 'next'
import { LawAINavbar } from '@/components/ui/navbar'
import { LawAIFooter } from '@/components/ui/footer-section'
import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase, TrendingUp, FileText, Calculator, Lightbulb, Shield, DollarSign, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ZZP Belasting 2024: Complete Gids voor Zelfstandigen | ZeroFiscus',
  description: 'Alles over ZZP belasting: inkomstenbelasting, BTW, aftrekposten, zelfstandigenaftrek en meer. Maximaliseer je netto-inkomen als zzp\'er met expert tips.',
  keywords: [
    'zzp belasting',
    'zzp belastingadvies',
    'zelfstandigenaftrek',
    'zzp aftrekposten',
    'belasting zzp',
    'ondernemer belasting',
    'zzp btw',
    'zzp aangifte',
    'zzp belastingtips',
  ],
  openGraph: {
    title: 'ZZP Belasting 2024: Complete Gids voor Zelfstandigen',
    description: 'Bespaar belasting als zzp\'er met deze complete gids over belastingen, aftrekposten en optimalisatie.',
    type: 'article',
    publishedTime: '2024-10-23T00:00:00Z',
    authors: ['ZeroFiscus'],
  },
}

export default function ZZPBelastingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'ZZP Belasting 2024: Complete Gids voor Zelfstandigen',
    description: 'Alles over ZZP belasting: inkomstenbelasting, BTW, aftrekposten, zelfstandigenaftrek en meer. Maximaliseer je netto-inkomen als zzp\'er met expert tips.',
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
      '@id': 'https://zerofiscus.nl/blog/zzp-belasting'
    },
    keywords: 'zzp belasting, zzp belastingadvies, zelfstandigenaftrek, zzp aftrekposten, belasting zzp, ondernemer belasting',
    articleSection: 'ZZP Belasting',
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
              ZZP Belasting 2024: Complete Gids
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Alles wat je moet weten over belastingen als zzp'er - van inkomstenbelasting tot BTW en optimalisatie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-gray-900 hover:bg-gray-800" asChild>
                <a href="/assessment">
                  Ontdek Jouw ZZP Besparingen <ArrowRight className="w-5 h-5" />
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
            Als zzp'er heb je te maken met een complex belastingsysteem. Je bent zowel werknemer als werkgever, wat
            betekent dat je zelf verantwoordelijk bent voor je{' '}
            <a href="/blog/belastingaangifte" className="text-blue-600 hover:text-blue-800 underline">
              belastingaangifte
            </a>{' '}
            én optimalisatie. Voor veel zelfstandigen betekent dit dat ze jaarlijks te veel belasting betalen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In deze uitgebreide gids leggen we alle aspecten van ZZP belasting uit: van inkomstenbelasting en BTW tot
            alle aftrekposten en optimalisatiestrategieën. Door deze kennis toe te passen kun je gemiddeld €1.163 per
            jaar besparen op je belastingaanslag.
          </p>
        </section>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Overzicht: Welke Belastingen Betaalt Een ZZP'er?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Als zelfstandige betaal je verschillende soorten belasting. Hier is een volledig overzicht:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Inkomstenbelasting
              </h3>
              <p className="text-gray-700 mb-3">
                Je betaalt inkomstenbelasting over je winst uit onderneming (omzet minus kosten).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Eerste schijf (tot €75.624): 36,97%</li>
                <li>• Tweede schijf (boven €75.624): 49,50%</li>
                <li>• Algemene heffingskorting: tot €3.362</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                BTW (Omzetbelasting)
              </h3>
              <p className="text-gray-700 mb-3">
                Als je omzet boven €20.000 komt, ben je BTW-plichtig.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Algemeen tarief: 21%</li>
                <li>• Verlaagd tarief: 9% (voedsel, boeken)</li>
                <li>• Kleineondernemersregeling mogelijk</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Zorgverzekeringswet (ZVW)
              </h3>
              <p className="text-gray-700 mb-3">
                Premieheffing voor de zorgverzekering over je winst.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 5,43% over winst tot €66.956</li>
                <li>• Maximale premie: €3.636 per jaar</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Box 3 (Vermogensrendementsheffing)
              </h3>
              <p className="text-gray-700 mb-3">
                Over privévermogen boven de €57.000 (2024). Lees meer in onze gids over{' '}
                <a href="/blog/box-3-belasting" className="text-blue-600 hover:text-blue-800 underline">
                  Box 3 belasting
                </a>.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Fictief rendement: 0,92% - 5,88%</li>
                <li>• Tarief: 32% over fictief rendement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deductions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Alle ZZP Aftrekposten op Een Rij
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Het grote voordeel van zelfstandig ondernemerschap zijn de vele aftrekposten. Hieronder alle belangrijke
            aftrekken die je als zzp'er kunt claimen:
          </p>

          {/* Zelfstandigenaftrek */}
          <div className="mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Zelfstandigenaftrek (2024)
              </h3>
              <p className="text-gray-700 mb-4">
                De belangrijkste aftrek voor zzp'ers: <strong>€5.030</strong> per jaar als je voldoet aan het urencriterium
                (minimaal 1.225 uur per jaar aan je onderneming besteden).
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Rekenvoorbeeld:</strong></p>
                <p className="text-sm text-gray-700">
                  Winst: €50.000<br />
                  Zelfstandigenaftrek: -€5.030<br />
                  Belastbaar inkomen: €44.970<br />
                  <strong>Besparing: circa €1.850 per jaar</strong>
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>Let op:</strong> De zelfstandigenaftrek wordt de komende jaren afgebouwd naar €900 in 2027.
                Profiteer er nu maximaal van!
              </p>
            </div>
          </div>

          {/* MKB-winstvrijstelling */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. MKB-winstvrijstelling (14%)
              </h3>
              <p className="text-gray-700 mb-4">
                Over je winst (na aftrek van zelfstandigenaftrek) geldt een vrijstelling van <strong>14%</strong>.
                Dit betekent dat je maar over 86% van je winst belasting betaalt.
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Voorbeeld:</strong> Bij €40.000 winst betaal je alleen belasting over €34.400.
                  Dit bespaart circa €2.070 per jaar.
                </p>
              </div>
            </div>
          </div>

          {/* Startersaftrek */}
          <div className="mb-8">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Startersaftrek
              </h3>
              <p className="text-gray-700 mb-4">
                In je eerste 3 jaar als zzp'er kun je de startersaftrek claimen: <strong>€2.123</strong> per jaar
                (2024). Dit geldt alleen als je nog nooit ondernemer bent geweest.
              </p>
            </div>
          </div>

          {/* Bedrijfskosten */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Zakelijke Kosten (Volledig Aftrekbaar)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Kantoorkosten</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Kantoorhuur</li>
                  <li>• Thuiswerkplek (forfaitair €2,15/dag)</li>
                  <li>• Kantoorbenodigdheden</li>
                  <li>• Software en abonnementen</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Vervoerskosten</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Zakelijke kilometers (€0,23/km)</li>
                  <li>• Lease auto (zakelijk deel)</li>
                  <li>• OV-kosten</li>
                  <li>• Parkeerkosten</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Apparatuur</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Laptop en computer</li>
                  <li>• Telefoon en tablet</li>
                  <li>• Fotografie apparatuur</li>
                  <li>• Gereedschap en machines</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Diensten</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Boekhouder/accountant</li>
                  <li>• Webhosting en domeinen</li>
                  <li>• Marketing en advertenties</li>
                  <li>• Verzekeringen (zakelijk)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Scholing</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Cursussen en trainingen</li>
                  <li>• Boeken en vakliteratuur</li>
                  <li>• Seminars en conferenties</li>
                  <li>• Lidmaatschappen beroepsverenigingen</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Representatie</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Zakelijke diners (beperkt)</li>
                  <li>• Relatiegeschenken (max €227/jaar)</li>
                  <li>• Netwerkevents</li>
                  <li>• Bedrijfskleding</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Investment deductions */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Investeringsaftrekken
            </h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Kleinschaligheidsinvesteringsaftrek (KIA)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Bij investeringen tussen €2.400 en €344.052 krijg je extra aftrek:
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• €2.400 - €61.914: 28% aftrek</li>
                  <li>• €61.914 - €107.927: degressief aftrekpercentage</li>
                  <li>• €107.927 - €344.052: 13,5% aftrek</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Milieu-investeringsaftrek (MIA)</h4>
                <p className="text-sm text-gray-700">
                  Voor duurzame investeringen (elektrische auto, zonnepanelen, etc.) kun je tot 45% extra aftrek krijgen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BTW Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            BTW als ZZP'er: Wat Je Moet Weten
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            BTW kan complex zijn, maar met de juiste kennis kun je het in je voordeel laten werken:
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Wanneer Ben Je BTW-plichtig?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    <strong>Omzet boven €20.000:</strong> Verplicht BTW berekenen en afdragen
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    <strong>Vrijwillig BTW-plichtig:</strong> Ook onder €20.000 kun je kiezen voor BTW, vooral handig
                    bij hoge inkoop
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    <strong>Kleineondernemersregeling (KOR):</strong> Onder €20.000 geen BTW berekenen, maar ook geen
                    aftrek voorbelasting
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                BTW Terugvragen: Maximaliseer Je Voordeel
              </h3>
              <p className="text-gray-700 mb-4">
                Als BTW-plichtige ondernemer kun je BTW terugvragen op zakelijke aankopen:
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Voorbeeld:</strong></p>
                <p className="text-sm text-gray-700">
                  Laptop gekocht: €1.210 (€1.000 + €210 BTW)<br />
                  BTW teruggaaf: €210<br />
                  Werkelijke kosten: €1.000<br />
                  <br />
                  <strong>Dit werkt voor alle zakelijke uitgaven met BTW!</strong>
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Veelgemaakte BTW Fouten
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>❌ Te late BTW-aangiftes (boetes tot €5.514)</li>
                <li>❌ Privé en zakelijk niet gescheiden</li>
                <li>❌ Verkeerde tarieven gebruikt (21% vs 9%)</li>
                <li>❌ BTW op privégebruik auto vergeten</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            10 Optimalisatie Strategieën voor ZZP'ers
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Met deze strategieën kun je als zzp'er legaal honderden tot duizenden euro's besparen:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Maximaliseer Alle Aftrekposten</h3>
              <p className="text-gray-700 text-sm">
                Claim alles: thuiswerkplek (€2,15/dag), zakelijke kilometers, kantoorbenodigdheden, software. Veel
                zzp'ers laten 20-30% van mogelijke aftrek liggen.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Timing van Investeringen</h3>
              <p className="text-gray-700 text-sm">
                Doe grote investeringen eind december: je kunt de volledige investering direct aftrekken, terwijl je
                pas volgend jaar betaalt. Liquiditeitsvoordeel én belastingvoordeel.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Inkomen Spreiden over Jaren</h3>
              <p className="text-gray-700 text-sm">
                Bij variabel inkomen: probeer grote inkomsten te spreiden. €80.000 in één jaar betaalt meer belasting
                dan 2x €40.000 door de progressieve tarieven.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Pensioen in Eigen Beheer (FOR)</h3>
              <p className="text-gray-700 text-sm">
                Als zzp'er kun je via een FOR (fiscale oudedagsreserve) belastingvrij sparen voor je pensioen.
                Maximaal €10.049 of 9,44% van je winst per jaar aftrekbaar.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Partneraftrek Optimaal Benutten</h3>
              <p className="text-gray-700 text-sm">
                Als je partner meewerkt: claim arbeidskorting of meewerkaftrek. Dit kan €5.000+ per jaar schelen in
                het gezinsinkomen.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Auto van de Zaak Slim Kiezen</h3>
              <p className="text-gray-700 text-sm">
                Elektrische auto? 0% bijtelling t/m 2025 (bij aanschaf onder €30.000). Benzine auto heeft 22% bijtelling.
                Dit kan €3.000-5.000 per jaar schelen.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Urencriterium Bewaken</h3>
              <p className="text-gray-700 text-sm">
                Blijf boven 1.225 uur per jaar voor de zelfstandigenaftrek. Houd een urenoverzicht bij - de
                Belastingdienst controleert dit streng.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8. BTW Optimalisatie</h3>
              <p className="text-gray-700 text-sm">
                Bij hoge investeringen: word (tijdelijk) BTW-plichtig om voorbelasting terug te vragen. Na investering
                kun je weer naar KOR.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Eigen Woning Zakelijk Gebruiken</h3>
              <p className="text-gray-700 text-sm">
                Werk je thuis? Reserveer een kamer voor werk. Je mag een deel van hypotheekrente, energie, etc.
                aftrekken als bedrijfskosten.
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Vermogen Parkeren in BV</h3>
              <p className="text-gray-700 text-sm">
                Bij hoge winsten (boven €100.000): overweeg een BV. 19-25,8% vennootschapsbelasting vs 49,5%
                inkomstenbelasting. Winst blijft in BV valt niet onder Box 3.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            De 7 Duurste ZZP Belastingfouten
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Deze fouten kosten zzp'ers jaarlijks duizenden euro's:
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Geen Administratie Bijhouden</h3>
              <p className="text-gray-700 text-sm">
                Zonder bonnetjes geen aftrek. Digitale administratie (bijv. met app) voorkomt gemiste aftrekposten
                en discussies met Belastingdienst.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Te Laat Aangifte Doen</h3>
              <p className="text-gray-700 text-sm">
                Boetes lopen snel op: van €369 tot €5.514. Plus rente over belastingschuld. Doe je aangifte op tijd
                (vóór 1 mei).
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Privé en Zakelijk Door Elkaar</h3>
              <p className="text-gray-700 text-sm">
                Gebruik aparte bankrekening voor zakelijk. Anders geen aftrek en risico op naheffing + boete.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">4. Zelfstandigenaftrek Niet Claimen</h3>
              <p className="text-gray-700 text-sm">
                €5.030 per jaar laten liggen door urencriterium niet te halen of te vergeten te claimen. Bewaar
                urenoverzicht!
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">5. Geen Pensioen Opbouwen</h3>
              <p className="text-gray-700 text-sm">
                FOR niet gebruiken = dubbele miskleun: geen belastingvoordeel nu én geen pensioen later.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">6. Verkeerde Tarieven BTW</h3>
              <p className="text-gray-700 text-sm">
                9% vs 21% verkeerd toepassen leidt tot naheffing + boete. Check altijd welk tarief van toepassing is.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">7. Geen Reservering voor Belasting</h3>
              <p className="text-gray-700 text-sm">
                Reserveer 35-45% van je winst voor belasting. Anders krijg je in mei een vervelende verrassing.
              </p>
            </div>
          </div>
        </section>

        {/* Year Planning */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ZZP Belasting Jaarplanning
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Een slimme fiscale planning begint bij het begin van het jaar:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Januari - April</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Jaarcijfers afsluiten</li>
                <li>• Aangifte voorbereiden</li>
                <li>• Aangifte indienen (vóór 1 mei)</li>
                <li>• BTW aangiftes doen</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mei - Augustus</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Voorlopige aanslag ontvangen</li>
                <li>• Reservering belasting checken</li>
                <li>• Q2 cijfers analyseren</li>
                <li>• Investeringsplan maken</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">September - December</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Winstverwachting berekenen</li>
                <li>• Investeringen plannen</li>
                <li>• Grote uitgaven vóór 31 dec</li>
                <li>• Urenregistratie controleren</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Laat Een Expert Je ZZP Belastingen Optimaliseren
          </h2>
          <p className="text-lg mb-6 text-gray-200">
            Elke zzp'er heeft een unieke situatie met eigen optimalisatiemogelijkheden. Onze fiscalisten
            analyseren jouw specifieke situatie en vinden alle mogelijke besparingen. Gemiddeld besparen onze
            ZZP-klanten €1.163 per jaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-2" asChild>
              <a href="/assessment">
                Start Gratis ZZP Check <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="mailto:info@zerofiscus.nl">
                Vraag ZZP Advies
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>No cure no pay</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>Specialist in ZZP belasting</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>100% legale optimalisatie</span>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusie: Betaal Nooit Meer Te Veel Belasting
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Als zzp'er heb je veel mogelijkheden om legaal belasting te besparen. Van de zelfstandigenaftrek en
            MKB-winstvrijstelling tot slimme BTW-planning en investeringsaftrekken - de mogelijkheden zijn er.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            De sleutel tot succes ligt in drie dingen:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700 mb-6">
            <li><strong>Kennis:</strong> Weet welke aftrekposten en regelingen er zijn</li>
            <li><strong>Administratie:</strong> Houd alles goed bij en bewaar alle bonnetjes</li>
            <li><strong>Planning:</strong> Denk vooruit en plan je investeringen strategisch</li>
          </ol>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bij ZeroFiscus hebben we uitgebreide ervaring met ZZP belastingoptimalisatie. We analyseren je situatie,
            identificeren alle mogelijke besparingen, en helpen je bij de implementatie. Vragen over je specifieke situatie? Bekijk hoe je{' '}
            <a href="/blog/belastingdienst" className="text-blue-600 hover:text-blue-800 underline">
              contact opneemt met de Belastingdienst
            </a>. En remember: no cure no pay - je betaalt alleen als we daadwerkelijk geld voor je besparen.
          </p>
        </section>
      </article>

      <LawAIFooter />
    </div>
  )
}

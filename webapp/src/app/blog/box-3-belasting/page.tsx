import type { Metadata } from 'next'
import { LawAINavbar } from '@/components/ui/navbar'
import { LawAIFooter } from '@/components/ui/footer-section'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calculator, TrendingDown, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Box 3 Belasting: Alles Wat Je Moet Weten in 2024 | ZeroFiscus',
  description: 'Volledige uitleg over Box 3 belasting in Nederland. Leer hoe de vermogensrendementsheffing werkt, wat je moet betalen en hoe je legaal kunt besparen op jouw Box 3 aangifte.',
  keywords: [
    'box 3 belasting',
    'box 3',
    'vermogensrendementsheffing',
    'box 3 aangifte',
    'box 3 berekenen',
    'belasting vermogen',
    'heffingsvrij vermogen',
    'box 3 2024',
  ],
  openGraph: {
    title: 'Box 3 Belasting: Complete Gids 2024 | ZeroFiscus',
    description: 'Alles over Box 3 belasting: hoe het werkt, wat je betaalt en hoe je kunt besparen.',
    type: 'article',
    publishedTime: '2024-10-23T00:00:00Z',
    authors: ['ZeroFiscus'],
  },
}

export default function Box3BelastingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Box 3 Belasting: Alles Wat Je Moet Weten in 2024',
    description: 'Volledige uitleg over Box 3 belasting in Nederland. Leer hoe de vermogensrendementsheffing werkt, wat je moet betalen en hoe je legaal kunt besparen op jouw Box 3 aangifte.',
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
      '@id': 'https://zerofiscus.nl/blog/box-3-belasting'
    },
    keywords: 'box 3 belasting, box 3, vermogensrendementsheffing, box 3 aangifte, box 3 berekenen, belasting vermogen',
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
              Box 3 Belasting: Alles Wat Je Moet Weten
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe de vermogensrendementsheffing werkt en hoe je legaal kunt besparen op jouw Box 3 aangifte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-gray-900 hover:bg-gray-800" asChild>
                <a href="/assessment">
                  Start Gratis Belastingcheck <ArrowRight className="w-5 h-5" />
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
            Box 3 belasting, ook wel de vermogensrendementsheffing genoemd, is een belasting die je betaalt over je
            vermogen in Nederland. Voor veel Nederlanders is dit een complexe en vaak verwarrende belasting. In deze
            uitgebreide gids leggen we precies uit hoe Box 3 werkt, wat je moet betalen en - nog belangrijker - hoe
            je legaal kunt besparen.
          </p>
        </section>

        {/* What is Box 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wat is Box 3 Belasting?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Box 3 is één van de drie "boxen" in het Nederlandse belastingstelsel. Terwijl Box 1 gaat over je inkomen
            uit werk en woning, en Box 2 over aanmerkelijk belang, draait Box 3 volledig om je vermogen. Dit omvat:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li className="text-lg">
              <strong>Spaargeld en bankrekeningen:</strong> Al je saldo's op spaar- en betaalrekeningen
            </li>
            <li className="text-lg">
              <strong>Beleggingen:</strong> Aandelen, obligaties, beleggingsfondsen en ETF's
            </li>
            <li className="text-lg">
              <strong>Tweede woningen:</strong> Vakantiehuizen en verhuurde woningen (exclusief eigen woning). Lees meer in ons artikel over{' '}
              <a href="/blog/box-3-vastgoed" className="text-blue-600 hover:text-blue-800 underline">
                Box 3 en vastgoed
              </a>
            </li>
            <li className="text-lg">
              <strong>Crypto:</strong> Bitcoin en andere cryptocurrencies
            </li>
            <li className="text-lg">
              <strong>Edelmetalen:</strong> Goud, zilver en andere waardevolle bezittingen
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            De Belastingdienst gaat ervan uit dat je vermogen jaarlijks een bepaald rendement oplevert, en daar moet
            je belasting over betalen - ongeacht of je daadwerkelijk dit rendement hebt behaald.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe Werkt de Box 3 Berekening?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            De berekening van Box 3 belasting gebeurt in meerdere stappen:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Stap 1: Heffingsvrij Vermogen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              In 2024 is het heffingsvrij vermogen <strong>€57.000</strong> per persoon. Voor fiscale partners is
              dit dus €114.000. Over dit bedrag betaal je geen Box 3 belasting.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingDown className="w-6 h-6" />
              Stap 2: Fictief Rendement
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              De Belastingdienst verdeelt je vermogen boven het heffingsvrije bedrag in categorieën en kent hier
              een fictief rendement aan toe:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sparen: lager fictief rendement (circa 0,92%)</li>
              <li>Beleggen: hoger fictief rendement (circa 5,88%)</li>
              <li>Mix: afhankelijk van je verhouding sparen/beleggen</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Stap 3: Belastingtarief
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Over het fictieve rendement betaal je <strong>32% belasting</strong> (tarief 2024). Dit betekent dat
              je effectief tussen de 0,3% en 1,9% van je totale vermogen aan belasting betaalt.
            </p>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Veelvoorkomende Box 3 Problemen
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Veel belastingbetalers maken fouten bij hun Box 3 aangifte of missen kansen om te besparen:
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Verkeerde Peildatum
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Je vermogen wordt getaxeerd op 1 januari. Veel mensen vergeten dat grote uitgaven vóór deze datum
                je belastingdruk verlagen.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Schulden Niet Aftrekken
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Schulden die vallen onder Box 3 (zoals een lening voor een tweede woning) kun je aftrekken van je
                vermogen. Dit wordt vaak vergeten.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Geen Gebruik van Vrijstellingen
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bepaalde vormen van vermogen zijn vrijgesteld, zoals groene beleggingen en bepaalde
                pensioenopbouw. Deze vrijstellingen worden vaak niet benut.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Foutieve Categorisering
              </h3>
              <p className="text-gray-700 leading-relaxed">
                De verdeling tussen sparen en beleggen heeft grote impact op je belasting. Een verkeerde
                categorisering kan honderden euro's extra belasting betekenen.
              </p>
            </div>
          </div>
        </section>

        {/* Optimization Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe Kun Je Besparen op Box 3?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Er zijn legale manieren om je Box 3 belasting te verlagen. Voor een uitgebreide gids met 12 concrete strategieën, bekijk ons artikel over{' '}
            <a href="/blog/box-3-optimalisatie" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Box 3 optimalisatie
            </a>. Hieronder een korte samenvatting:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Timing van Uitgaven
              </h3>
              <p className="text-gray-700">
                Grote aankopen of investeringen plannen vóór 1 januari kan je belastingdruk significant verlagen.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Schulden Optimaliseren
              </h3>
              <p className="text-gray-700">
                Zorg dat alle aftrekbare schulden correct worden opgegeven en strategisch gebruik van leningen.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Groene Beleggingen
              </h3>
              <p className="text-gray-700">
                Investeren in groene projecten kan vrijstellingen opleveren en je belastingdruk verlagen.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bezwaar Indienen
              </h3>
              <p className="text-gray-700">
                Bij onterecht berekend fictief rendement kun je bezwaar maken en mogelijk belasting terugkrijgen.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ontdek Jouw Box 3 Bespaarpotentieel
          </h2>
          <p className="text-lg mb-6 text-gray-200">
            Gemiddeld vinden we €1.163 aan gemiste Box 3 besparingen. Doe binnen 2 minuten onze gratis check en
            ontdek wat jij kunt besparen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-2" asChild>
              <a href="/assessment">
                Start Gratis Check <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="mailto:info@zerofiscus.nl">
                Stel Een Vraag
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            No cure no pay - je betaalt alleen bij bewezen besparing
          </p>
        </section>

        {/* Conclusion */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusie
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Box 3 belasting is een complex onderwerp waar veel Nederlanders jaarlijks te veel voor betalen. Door
            goed te begrijpen hoe het systeem werkt en door strategisch te plannen, kun je legaal honderden tot
            duizenden euro's besparen. Wil je ook weten hoe je je{' '}
            <a href="/blog/belastingaangifte" className="text-blue-600 hover:text-blue-800 underline">
              belastingaangifte
            </a>{' '}
            correct invult? Bekijk onze complete gids.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bij ZeroFiscus helpen we je om alle mogelijke besparingen te identificeren. Onze fiscale experts
            analyseren jouw situatie en vinden gemiddeld €1.163 aan gemiste besparingen. En het mooie? Je betaalt
            alleen als we ook daadwerkelijk besparing voor je realiseren.
          </p>
        </section>
      </article>

      <LawAIFooter />
    </div>
  )
}

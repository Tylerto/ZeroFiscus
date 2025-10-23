import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { MoveRight, Phone, Mail, Globe, FileText, Clock, AlertCircle, CheckCircle2, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Belastingdienst: Alle Manieren + Handige Tips | ZeroFiscus',
  description: 'Alles over contact met de Belastingdienst: telefoonnummers, openingstijden, online mogelijkheden en tips voor effectieve communicatie. Inclusief bezwaarprocedure en wanneer je hulp moet inschakelen.',
  keywords: [
    'belastingdienst',
    'belastingdienst contact',
    'belastingdienst telefoonnummer',
    'belastingdienst bereikbaar',
    'mijn belastingdienst',
    'belastingdienst bezwaar',
    'belastingdienst hulp',
    'contact belastingdienst',
  ],
  openGraph: {
    title: 'Contact Belastingdienst: Alle Manieren + Handige Tips | ZeroFiscus',
    description: 'Alles over contact met de Belastingdienst: telefoonnummers, openingstijden, online mogelijkheden en tips voor effectieve communicatie.',
    type: 'article',
    publishedTime: '2024-10-23T00:00:00Z',
    authors: ['ZeroFiscus'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Belastingdienst: Alle Manieren + Handige Tips',
    description: 'Alles over contact met de Belastingdienst: telefoonnummers, openingstijden, online mogelijkheden en tips.',
  },
};

export default function BelastingdienstPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Contact Belastingdienst: Alle Manieren Om Te Bereiken + Tips',
    description: 'Alles over contact met de Belastingdienst: telefoonnummers, openingstijden, online mogelijkheden en tips voor effectieve communicatie. Inclusief bezwaarprocedure en wanneer je hulp moet inschakelen.',
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
      '@id': 'https://zerofiscus.nl/blog/belastingdienst'
    },
    keywords: 'belastingdienst, belastingdienst contact, belastingdienst telefoonnummer, belastingdienst bereikbaar, mijn belastingdienst, belastingdienst bezwaar',
    articleSection: 'Belastingadvies',
    inLanguage: 'nl-NL'
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="w-full pt-12 pb-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Contact Belastingdienst: Alle Manieren Om Te Bereiken + Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compleet overzicht van contactmogelijkheden, openingstijden en tips voor effectieve communicatie met de Belastingdienst
            </p>
            <div className="pt-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/assessment">
                  <span>Gratis Belastingcheck</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed">
              Contact opnemen met de Belastingdienst kan soms frustrerend zijn: lange wachttijden, onduidelijke informatie of geen antwoord op je vraag. Toch is het soms onvermijdelijk om contact op te nemen over je{' '}
              <a href="/blog/belastingaangifte" className="text-blue-600 hover:text-blue-800 underline">
                belastingaangifte
              </a>, een aanslag of een bezwaar.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              In deze gids lees je precies hoe je de Belastingdienst het beste kunt bereiken, welke contactmogelijkheden er zijn, en krijg je handige tips om sneller geholpen te worden. Ook leggen we uit wanneer het verstandig is om professionele hulp in te schakelen.
            </p>
          </section>

          {/* Contact Methods */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Phone className="w-8 h-8" />
              Alle Contactmogelijkheden Op Een Rij
            </h2>

            <div className="space-y-6">
              {/* 1. Online via Mijn Belastingdienst */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  1. Online via Mijn Belastingdienst (Aanbevolen)
                </h3>
                <p className="mb-4">
                  De snelste en meest efficiënte manier om contact op te nemen. Hier kun je:
                </p>
                <ul className="space-y-2">
                  <li>✓ Je aangiften bekijken en doen</li>
                  <li>✓ Aanslagen en betalingsregelingen bekijken</li>
                  <li>✓ Berichten sturen en ontvangen</li>
                  <li>✓ Bezwaar maken tegen een aanslag</li>
                  <li>✓ Je persoonlijke gegevens wijzigen</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                  <p className="font-semibold">Voordelen:</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Altijd beschikbaar (24/7)</li>
                    <li>• Snellere reactietijd dan telefoon</li>
                    <li>• Alles schriftelijk vastgelegd</li>
                    <li>• Geen wachttijden</li>
                  </ul>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Inloggen kan met DigiD via: <a href="https://mijn.belastingdienst.nl" className="underline">mijn.belastingdienst.nl</a>
                </p>
              </div>

              {/* 2. Telefonisch */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  2. Telefonisch Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Particulieren (privézaken):</p>
                    <p className="text-2xl font-bold text-primary">0800 - 0543</p>
                    <p className="text-sm text-muted-foreground">Gratis vanuit Nederland</p>
                  </div>
                  <div>
                    <p className="font-semibold">Ondernemers (zakelijke vragen):</p>
                    <p className="text-2xl font-bold text-primary">0800 - 0143</p>
                    <p className="text-sm text-muted-foreground">Gratis vanuit Nederland</p>
                  </div>
                  <div>
                    <p className="font-semibold">Vanuit het buitenland:</p>
                    <p className="text-xl font-bold">+31 55 - 538 53 85</p>
                    <p className="text-sm text-muted-foreground">Gewone belkosten</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded">
                  <p className="font-semibold flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Openingstijden:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• Maandag t/m donderdag: 08:00 - 20:00 uur</li>
                    <li>• Vrijdag: 08:00 - 17:00 uur</li>
                    <li>• Aangifteperiode (maart-mei): ook zaterdag 09:00 - 13:00 uur</li>
                  </ul>
                </div>
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-950 rounded">
                  <p className="font-semibold flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Let op:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• Wachttijden kunnen oplopen tot 30-45 minuten</li>
                    <li>• Drukste momenten: maandagochtend en donderdag</li>
                    <li>• Beste tijden om te bellen: dinsdagochtend en vrijdagmiddag</li>
                  </ul>
                </div>
              </div>

              {/* 3. Per post */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  3. Per Post
                </h3>
                <p className="mb-4">
                  Voor officiële bezwaren of documenten die je niet digitaal kunt indienen:
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border">
                  <p className="font-mono">
                    Belastingdienst<br />
                    Postbus 9050<br />
                    6400 GB Heerlen
                  </p>
                </div>
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950 rounded">
                  <p className="font-semibold">Tip:</p>
                  <p className="mt-2">
                    Stuur aangetekend als je een deadline hebt of als het om belangrijke documenten gaat. De reguliere post kan 2-4 weken duren voordat je antwoord krijgt.
                  </p>
                </div>
              </div>

              {/* 4. Belastingtelefoon app */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  4. Belastingtelefoon App
                </h3>
                <p className="mb-4">
                  De Belastingdienst heeft een officiële app waarmee je:
                </p>
                <ul className="space-y-2">
                  <li>✓ Direct kunt bellen zonder wachttijd (callback-functie)</li>
                  <li>✓ Actuele wachttijden kunt zien</li>
                  <li>✓ Een afspraak kunt maken voor terugbellen</li>
                  <li>✓ Mijn Belastingdienst kunt inloggen</li>
                </ul>
                <p className="mt-4 text-sm">
                  Beschikbaar voor <a href="#" className="underline">iOS</a> en <a href="#" className="underline">Android</a>
                </p>
              </div>
            </div>
          </section>

          {/* Common Questions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-8 h-8" />
              Meest Gestelde Vragen En Onderwerpen
            </h2>

            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">1. Vragen over je aangifte</h3>
                <ul className="space-y-2">
                  <li>• Hoe vul ik een specifiek veld in?</li>
                  <li>• Welke bijlagen moet ik meesturen?</li>
                  <li>• Kan ik mijn aangifte nog wijzigen?</li>
                  <li>• Wat gebeurt er als ik te laat ben?</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong>Beste contact:</strong> Online via Mijn Belastingdienst → "Stel een vraag"
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">2. Vragen over je aanslag</h3>
                <ul className="space-y-2">
                  <li>• Waarom is mijn aanslag zo hoog/laag?</li>
                  <li>• Wanneer krijg ik mijn teruggaaf?</li>
                  <li>• Kan ik in termijnen betalen?</li>
                  <li>• Hoe maak ik bezwaar?</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong>Beste contact:</strong> Telefonisch (voor directe uitleg) of online voor betalingsregeling
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">3. Box 3 gerelateerde vragen</h3>
                <ul className="space-y-2">
                  <li>• Moet ik mijn spaargeld/beleggingen opgeven?</li>
                  <li>• Hoe bereken ik mijn Box 3 vermogen?</li>
                  <li>• Wat is het heffingsvrij vermogen?</li>
                  <li>• Hoe kan ik bezwaar maken tegen de fictieve rendementen?</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong>Beste contact:</strong> Online voor algemene info, professionele hulp voor{' '}
                  <a href="/blog/box-3-optimalisatie" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Box 3 optimalisatie
                  </a>. Wil je eerst de basics begrijpen? Lees onze gids over{' '}
                  <a href="/blog/box-3-belasting" className="text-blue-600 hover:text-blue-800 underline">
                    Box 3 belasting
                  </a>.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">4. ZZP/Ondernemer vragen</h3>
                <ul className="space-y-2">
                  <li>• Welke kosten mag ik aftrekken?</li>
                  <li>• Hoe werkt de zelfstandigenaftrek?</li>
                  <li>• BTW-aangifte vragen</li>
                  <li>• Uitstel aangifte aanvragen</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong>Beste contact:</strong> Ondernemerstelefoon 0800-0143 of een fiscaal adviseur. Voor een complete gids, bekijk ons artikel over{' '}
                  <a href="/blog/zzp-belasting" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    ZZP belasting optimalisatie
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* Tips for Effective Communication */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8" />
              8 Tips Voor Effectieve Communicatie Met De Belastingdienst
            </h2>

            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">1. Heb je gegevens bij de hand</h3>
                <p>
                  Zorg dat je het volgende bij de hand hebt voordat je contact opneemt:
                </p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• Je BSN-nummer</li>
                  <li>• Aanslagbiljet of aanslagnummer</li>
                  <li>• Relevante brieven of documenten</li>
                  <li>• Exacte bedragen waar het over gaat</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">2. Wees specifiek in je vraag</h3>
                <p>
                  Hoe specifieker je vraag, hoe beter de Belastingdienst je kan helpen. Vermijd vage vragen zoals "Hoe zit het met mijn aanslag?" maar vraag bijvoorbeeld: "Waarom is het bedrag aan Box 3 belasting €1.200 hoger dan vorig jaar terwijl mijn vermogen nauwelijks is veranderd?"
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">3. Noteer wie je spreekt en wat er gezegd wordt</h3>
                <p>
                  Bij telefonisch contact: vraag de naam van de medewerker en noteer het tijdstip van je gesprek. Dit is handig als je later nog een keer contact moet opnemen over hetzelfde onderwerp.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">4. Gebruik de juiste kanalen</h3>
                <p>
                  Voor officiële zaken (bezwaar, klacht): gebruik altijd schriftelijk contact (online of per post). Voor vragen of uitleg: telefoon is vaak sneller.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">5. Bel op het juiste moment</h3>
                <p>
                  Vermijd maandagochtend en de laatste dagen voor deadlines. De beste tijden zijn dinsdagochtend vroeg (08:00-09:00) of vrijdagmiddag (15:00-17:00).
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">6. Gebruik de callback-functie</h3>
                <p>
                  Als de wachttijd langer dan 15 minuten is, gebruik dan de callback-functie in de app. Je wordt teruggebeld op het moment dat jij uitkomt zonder dat je in de wacht hoeft te staan.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">7. Blijf vriendelijk maar assertief</h3>
                <p>
                  De medewerkers van de Belastingdienst hebben een moeilijke taak. Blijf altijd vriendelijk, maar wees wel duidelijk over wat je wilt. Als je niet tevreden bent met het antwoord, vraag dan door of vraag om een supervisor.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">8. Bewaar alle correspondentie</h3>
                <p>
                  Sla alle e-mails, brieven en notities van telefoongesprekken op. Dit kan belangrijk zijn als er later discussie ontstaat over wat er is afgesproken.
                </p>
              </div>
            </div>
          </section>

          {/* Bezwaar Procedure */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-8 h-8" />
              Bezwaar Maken Tegen Een Aanslag
            </h2>

            <p className="mb-6">
              Als je het niet eens bent met je aanslag, kun je binnen 6 weken bezwaar maken. Dit doe je via Mijn Belastingdienst of per post.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Stappen Voor Een Bezwaarschrift:</h3>
              <ol className="space-y-3">
                <li>
                  <strong>1. Log in op Mijn Belastingdienst</strong>
                  <p className="text-sm mt-1">Ga naar 'Bezwaar maken' en selecteer de juiste aanslag</p>
                </li>
                <li>
                  <strong>2. Geef duidelijk aan waar je het niet mee eens bent</strong>
                  <p className="text-sm mt-1">Wees specifiek: welk onderdeel van de aanslag klopt niet en waarom niet?</p>
                </li>
                <li>
                  <strong>3. Voeg bewijs toe</strong>
                  <p className="text-sm mt-1">Upload documenten die je standpunt ondersteunen (rekeningafschriften, contracten, etc.)</p>
                </li>
                <li>
                  <strong>4. Verstuur je bezwaar</strong>
                  <p className="text-sm mt-1">Je ontvangt een ontvangstbevestiging. De Belastingdienst heeft daarna 8 weken (soms langer) om te reageren</p>
                </li>
                <li>
                  <strong>5. Afwachten</strong>
                  <p className="text-sm mt-1">Je hoeft tijdens de bezwaarprocedure meestal niet te betalen (vraag uitstel van betaling aan)</p>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded">
              <p className="font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Let op:
              </p>
              <p className="mt-2">
                Een bezwaarschrift schrijven kan ingewikkeld zijn, vooral bij complexe zaken zoals Box 3. Overweeg professionele hulp in te schakelen om je kansen op succes te vergroten.
              </p>
            </div>
          </section>

          {/* When to Get Professional Help */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Wanneer Professionele Hulp Inschakelen?
            </h2>

            <p className="mb-6">
              Sommige situaties zijn te complex om zelf op te lossen. Overweeg een fiscalist of belastingadviseur in te schakelen bij:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Complexe Situaties:</h3>
                <ul className="space-y-2">
                  <li>•{' '}
                    <a href="/blog/box-3-optimalisatie" className="text-blue-600 hover:text-blue-800 underline">
                      Box 3 optimalisatie
                    </a>{' '}
                    met groot vermogen
                  </li>
                  <li>• ZZP met hoge inkomsten/veel aftrekposten</li>
                  <li>•{' '}
                    <a href="/blog/box-3-vastgoed" className="text-blue-600 hover:text-blue-800 underline">
                      Vastgoed in Box 3
                    </a>
                  </li>
                  <li>• Buitenlands inkomen of vermogen</li>
                  <li>• Erfenis of schenking met fiscale gevolgen</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Juridische Procedures:</h3>
                <ul className="space-y-2">
                  <li>• Bezwaar tegen grote aanslagen (€5.000+)</li>
                  <li>• Beroep bij de rechtbank</li>
                  <li>• Boete of navordering van de Belastingdienst</li>
                  <li>• Ambtshalve vermindering aanvragen</li>
                  <li>• Herziening van oude aangiften</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg md:col-span-2">
                <h3 className="font-semibold text-lg mb-3">Tijdsbesparing:</h3>
                <p className="mb-3">
                  Als je het gevoel hebt dat je veel tijd kwijt bent aan je belastingzaken, of als je niet zeker weet of je alles goed doet, kan een adviseur je helpen. De kosten wegen vaak op tegen:
                </p>
                <ul className="space-y-2">
                  <li>✓ De tijdsbesparing (uren die je anders kwijt zou zijn)</li>
                  <li>✓ De extra besparingen die een expert kan vinden</li>
                  <li>✓ Het voorkomen van dure fouten</li>
                  <li>✓ De gemoedsrust van zekerheid</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="my-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-8 rounded-2xl">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">
                Blijf Hangen In Contact Met De Belastingdienst?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Laat ons je helpen. Binnen 2 minuten weten we of er voor jou belastingbesparing mogelijk is. Volledig gratis en vrijblijvend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/assessment">
                    <span>Start Gratis Belastingcheck</span>
                    <MoveRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Gemiddeld €1.163 besparing • No cure, no pay
              </p>
            </div>
          </section>

          {/* Response Times */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-8 h-8" />
              Verwachte Reactietijden
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Contactmethode</th>
                    <th className="border p-3 text-left">Reactietijd</th>
                    <th className="border p-3 text-left">Beste Voor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Telefonisch</td>
                    <td className="border p-3">Direct (na wachttijd van 5-45 min)</td>
                    <td className="border p-3">Urgente vragen, uitleg nodig</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">Online berichtendienst</td>
                    <td className="border p-3">1-5 werkdagen</td>
                    <td className="border p-3">Algemene vragen, niet urgent</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Per post</td>
                    <td className="border p-3">2-4 weken</td>
                    <td className="border p-3">Officiële documenten, bezwaren</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">Bezwaarschrift</td>
                    <td className="border p-3">8-26 weken</td>
                    <td className="border p-3">Formeel bezwaar</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Rechtbank (beroep)</td>
                    <td className="border p-3">6-18 maanden</td>
                    <td className="border p-3">Na afwijzing bezwaar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-muted rounded">
              <p className="font-semibold">Tip:</p>
              <p className="mt-2">
                Als de Belastingdienst niet binnen de gestelde termijn reageert op je bezwaar, kun je dit opvatten als een stilzwijgende weigering. Je kunt dan direct beroep aantekenen bij de rechtbank.
              </p>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              5 Veelgemaakte Fouten Bij Contact Met De Belastingdienst
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  1. Te laat bezwaar maken
                </h3>
                <p>
                  Je hebt maar 6 weken na dagtekening van de aanslag om bezwaar te maken. Mis je deze deadline? Dan kun je alleen nog in zeer uitzonderlijke gevallen bezwaar maken.
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Oplossing: Zet de deadline direct in je agenda zodra je de aanslag ontvangt.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  2. Onvoldoende onderbouwing van bezwaar
                </h3>
                <p>
                  Een bezwaar met alleen "Ik vind het te hoog" wordt altijd afgewezen. Je moet concrete argumenten en bewijs aanleveren waarom de aanslag niet klopt.
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Oplossing: Verzamel alle relevante documenten en leg exact uit wat er fout is.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  3. Tijdens telefoongesprek akkoord gaan met iets waar je het niet mee eens bent
                </h3>
                <p>
                  Laat je niet overdonderen. Als je het niet eens bent met de uitleg of de beslissing, zeg dan dat je er nog over na wilt denken en vraag om schriftelijke bevestiging.
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Oplossing: Vraag altijd bedenktijd en schriftelijke bevestiging bij belangrijke zaken.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  4. Betalen terwijl je bezwaar maakt
                </h3>
                <p>
                  Als je bezwaar maakt, kun je meestal uitstel van betaling aanvragen. Heb je al betaald en win je het bezwaar? Dan duurt het langer voordat je je geld terug krijgt.
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Oplossing: Vraag direct uitstel van betaling aan wanneer je bezwaar maakt.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  5. Informele afspraken niet schriftelijk vastleggen
                </h3>
                <p>
                  Telefonische afspraken of toezeggingen zijn lastig te bewijzen. Als er later discussie ontstaat, staat het woord van de Belastingdienst tegen het jouwe.
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Oplossing: Vraag altijd om schriftelijke bevestiging van afspraken of toezeggingen.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <p className="text-lg leading-relaxed mb-4">
              Contact opnemen met de Belastingdienst hoeft geen nachtmerrie te zijn als je weet hoe je het het beste kunt aanpakken. Gebruik waar mogelijk de online kanalen (Mijn Belastingdienst), bereid je goed voor met alle benodigde gegevens, en wees helder in wat je wilt.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Voor complexe situaties, grote bedragen of juridische procedures is het vaak verstandig om professionele hulp in te schakelen. Een goede belastingadviseur kan je niet alleen tijd besparen, maar ook geld - door optimalisaties te vinden die je zelf over het hoofd had gezien.
            </p>
            <p className="text-lg leading-relaxed">
              Ben je benieuwd of er voor jou belastingbesparing mogelijk is? Start dan vandaag nog onze gratis belastingcheck. Binnen 2 minuten weet je of wij je kunnen helpen, volledig vrijblijvend en zonder risico. No cure, no pay!
            </p>
          </section>

          {/* Final CTA */}
          <div className="text-center py-8">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/assessment">
                <span>Start Gratis Belastingcheck</span>
                <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Geen creditcard nodig • 100% gratis • 2 minuten
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

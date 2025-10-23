import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Algemene Voorwaarden | ZeroFiscus',
  description: 'Algemene voorwaarden van ZeroFiscus - No Cure No Pay belastingadvies',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" asChild className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Terug naar homepage
            </Link>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Algemene Voorwaarden
          </h1>

          {/* Artikel 1 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 1: Definities
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li><strong>AV:</strong> Deze Algemene Voorwaarden.</li>
              <li><strong>Opdrachtnemer:</strong> ZeroFiscus, ingeschreven bij de Kamer van Koophandel onder KVK-nummer: 88209865, de leverancier van de Dienst.</li>
              <li><strong>Opdrachtgever:</strong> De onderneming (rechtspersoon of natuurlijk persoon in de uitoefening van een beroep of bedrijf) die een Overeenkomst aangaat met Opdrachtnemer.</li>
              <li><strong>Overeenkomst:</strong> De schriftelijke Overeenkomst van Opdracht tussen Opdrachtnemer en Opdrachtgever, waarop deze AV van toepassing zijn.</li>
              <li><strong>Dienst:</strong> De door Opdrachtnemer uit te voeren fiscale analyse met als doel het identificeren van besparingen, resulterend in een Adviesrapport.</li>
              <li><strong>Besparing:</strong> De in de Overeenkomst nader gedefinieerde, gerealiseerde en/of geprognosticeerde netto belastingbesparing voor Opdrachtgever.</li>
              <li><strong>Adviesrapport:</strong> Het schriftelijke verslag van Opdrachtnemer waarin de resultaten van de analyse en de geïdentificeerde Besparingsmogelijkheden zijn vastgelegd.</li>
            </ol>
          </section>

          {/* Artikel 2 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 2: Toepasselijkheid
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>Deze AV zijn van toepassing op alle aanbiedingen, offertes en Overeenkomsten tussen Opdrachtnemer en Opdrachtgever.</li>
              <li>Afwijkingen van deze AV zijn slechts geldig indien deze uitdrukkelijk en schriftelijk zijn overeengekomen in de Overeenkomst.</li>
              <li>De toepasselijkheid van eventuele inkoop- of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen.</li>
            </ol>
          </section>

          {/* Artikel 3 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 3: Totstandkoming van de Overeenkomst
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>Alle offertes en aanbiedingen van Opdrachtnemer zijn vrijblijvend.</li>
              <li>De Overeenkomst komt uitsluitend tot stand door schriftelijke ondertekening van de Overeenkomst van Opdracht door beide Partijen.</li>
            </ol>
          </section>

          {/* Artikel 4 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 4: Uitvoering van de Dienst
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>Opdrachtnemer zal de Dienst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren. Dit betreft een inspanningsverplichting.</li>
              <li>Opdrachtnemer is gerechtigd om bij de uitvoering van de Dienst derden in te schakelen.</li>
              <li>De termijnen waarbinnen de Dienst dient te worden uitgevoerd, zijn indicatief en geen fatale termijnen, tenzij uitdrukkelijk anders overeengekomen.</li>
            </ol>
          </section>

          {/* Artikel 5 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 5: Verplichtingen Opdrachtgever
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>Opdrachtgever is gehouden alle gegevens en bescheiden, welke Opdrachtnemer naar haar oordeel nodig heeft voor het correct uitvoeren van de Dienst, tijdig, in de gewenste vorm en op de gewenste wijze ter beschikking te stellen.</li>
              <li>Opdrachtgever staat in voor de juistheid, volledigheid en betrouwbaarheid van de aan Opdrachtnemer ter beschikking gestelde gegevens en bescheiden.</li>
              <li>De uit de vertraging in de uitvoering van de Dienst voortvloeiende extra kosten en extra honorarium, ontstaan door het niet, niet tijdig of niet behoorlijk ter beschikking stellen van de verlangde gegevens, zijn voor rekening van Opdrachtgever.</li>
              <li>Opdrachtgever is gehouden aan de Informatieplicht zoals nader omschreven in de Overeenkomst, betreffende het aanleveren van toekomstige belastingaangiftes en -aanslagen.</li>
            </ol>
          </section>

          {/* Artikel 6 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 6: Beloning en Betaling
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>De beloning voor de Dienst is gebaseerd op het 'No Cure No Pay' principe en wordt berekend als een percentage van de Besparing, zoals gespecificeerd in de Overeenkomst.</li>
              <li>De beloning wordt opeisbaar en gefactureerd op de momenten en onder de voorwaarden zoals vastgelegd in de Overeenkomst.</li>
              <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum. Bij niet-tijdige betaling is Opdrachtgever van rechtswege in verzuim en is de wettelijke handelsrente verschuldigd over het openstaande bedrag.</li>
              <li>Alle gerechtelijke en buitengerechtelijke (incasso)kosten die Opdrachtnemer maakt als gevolg van de niet-nakoming door Opdrachtgever, komen ten laste van Opdrachtgever.</li>
            </ol>
          </section>

          {/* Artikel 7 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 7: Duur en Beëindiging
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>De Overeenkomst wordt aangegaan voor de duur zoals daarin omschreven.</li>
              <li>Indien Opdrachtgever de Overeenkomst tussentijds opzegt nadat Opdrachtnemer specifieke schriftelijke besparingsindicaties of een (concept) Adviesrapport heeft verstrekt, is Opdrachtgever een vergoeding voor de verrichte werkzaamheden verschuldigd op basis van een uurtarief van € 150,- exclusief BTW of de 'No Cure No Pay' fee op basis van het tot dan gecommuniceerde advies indien hoger.</li>
              <li>Opdrachtnemer is bevoegd de Overeenkomst met onmiddellijke ingang te beëindigen indien Opdrachtgever in staat van faillissement wordt verklaard, surseance van betaling aanvraagt, of anderszins de vrije beschikking over zijn vermogen verliest.</li>
            </ol>
          </section>

          {/* Artikel 8 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 8: Aansprakelijkheid
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>De dienstverlening van Opdrachtnemer betreft een advies. Opdrachtgever blijft te allen tijde zelf verantwoordelijk voor de implementatie van adviezen en de gevolgen daarvan.</li>
              <li>De totale aansprakelijkheid van Opdrachtnemer wegens een toerekenbare tekortkoming in de nakoming van de Overeenkomst is beperkt tot maximaal het bedrag van de voor die Overeenkomst gefactureerde beloning.</li>
              <li>Aansprakelijkheid van Opdrachtnemer voor indirecte schade, daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie, is te allen tijde uitgesloten.</li>
            </ol>
          </section>

          {/* Artikel 9 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 9: Geheimhouding
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van hun Overeenkomst van elkaar of uit andere bron hebben verkregen. Informatie geldt als vertrouwelijk als dit door de andere partij is medegedeeld of als dit voortvloeit uit de aard van de informatie.</li>
            </ol>
          </section>

          {/* Artikel 10 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 10: Intellectueel Eigendom
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>Alle intellectuele eigendomsrechten op het Adviesrapport en andere in het kader van de Dienst ontwikkelde materialen berusten uitsluitend bij Opdrachtnemer.</li>
              <li>Opdrachtgever verkrijgt een niet-exclusief en niet-overdraagbaar gebruiksrecht op het Adviesrapport, uitsluitend voor intern gebruik binnen de eigen onderneming.</li>
            </ol>
          </section>

          {/* Artikel 11 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Artikel 11: Toepasselijk Recht en Forumkeuze
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>Op alle Overeenkomsten tussen Opdrachtgever en Opdrachtnemer is uitsluitend Nederlands recht van toepassing.</li>
              <li>Alle geschillen die verband houden met Overeenkomsten tussen Opdrachtgever en Opdrachtnemer worden voorgelegd aan de bevoegde rechter van de Rechtbank Midden-Nederland.</li>
            </ol>
          </section>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen via{' '}
              <a href="mailto:contact@zerofiscus.nl" className="text-gray-900 hover:underline font-medium">
                contact@zerofiscus.nl
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

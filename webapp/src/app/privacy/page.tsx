import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacybeleid | ZeroFiscus',
  description: 'Privacyverklaring en gegevensbescherming van ZeroFiscus',
}

export default function PrivacyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacyverklaring
          </h1>
          <p className="text-gray-600 mb-8">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {/* Introductie */}
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              ZeroFiscus hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze privacyverklaring
              informeren wij u over hoe wij omgaan met persoonsgegevens die wij van u verzamelen en gebruiken.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wij verwerken uw persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR)
              en andere toepasselijke wet- en regelgeving op het gebied van gegevensbescherming.
            </p>
          </section>

          {/* Artikel 1 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              1. Wie is verantwoordelijk voor de verwerking van uw gegevens?
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>ZeroFiscus</strong></p>
              <p>KVK-nummer: 88209865</p>
              <p>E-mail: <a href="mailto:privacy@zerofiscus.nl" className="text-gray-900 hover:underline">privacy@zerofiscus.nl</a></p>
            </div>
          </section>

          {/* Artikel 2 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              2. Welke persoonsgegevens verwerken wij?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij kunnen de volgende persoonsgegevens van u verwerken:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Voor- en achternaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Bedrijfsgegevens (indien van toepassing)</li>
              <li>Financiële gegevens (inkomen, belastingaangiftes, aanslagen)</li>
              <li>Vermogensgegevens (voor Box 3 analyse)</li>
              <li>Vastgoedgegevens (indien van toepassing)</li>
              <li>Correspondentie en communicatie met u</li>
              <li>IP-adres en browsergegevens (via website gebruik)</li>
            </ul>
          </section>

          {/* Artikel 3 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              3. Waarvoor gebruiken wij uw persoonsgegevens?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
            </p>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium mb-1">Fiscale dienstverlening:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Het uitvoeren van fiscale analyses</li>
                  <li>Het identificeren van belastingbesparingen</li>
                  <li>Het opstellen van adviesrapporten</li>
                  <li>Het onderhouden van contact over uw dossier</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Contractuele verplichtingen:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Het uitvoeren van de overeenkomst tussen u en ZeroFiscus</li>
                  <li>Facturering en administratie</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Wettelijke verplichtingen:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Voldoen aan fiscale bewaarplichten</li>
                  <li>Voldoen aan administratieve verplichtingen</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Artikel 4 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              4. Op welke grondslag verwerken wij uw gegevens?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij verwerken uw persoonsgegevens op basis van:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Overeenkomst:</strong> De verwerking is noodzakelijk voor de uitvoering van de overeenkomst die wij met u hebben gesloten</li>
              <li><strong>Wettelijke verplichting:</strong> De verwerking is noodzakelijk om te voldoen aan een wettelijke verplichting (zoals fiscale bewaarplicht)</li>
              <li><strong>Gerechtvaardigd belang:</strong> De verwerking is noodzakelijk voor onze gerechtvaardigde belangen, zoals bedrijfsvoering en kwaliteitsverbetering</li>
              <li><strong>Toestemming:</strong> In specifieke gevallen vragen wij uw expliciete toestemming voor bepaalde verwerkingen</li>
            </ul>
          </section>

          {/* Artikel 5 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              5. Hoe lang bewaren wij uw gegevens?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor deze zijn verzameld:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Fiscale dossiers:</strong> 7 jaar na afloop van het belastingjaar (wettelijke bewaarplicht)</li>
              <li><strong>Administratieve gegevens:</strong> 7 jaar (wettelijke bewaarplicht)</li>
              <li><strong>Contactgegevens:</strong> Tot 2 jaar na beëindiging van de relatie, tenzij langer bewaren noodzakelijk is</li>
              <li><strong>Website bezoekersinformatie:</strong> Maximaal 2 jaar</li>
            </ul>
          </section>

          {/* Artikel 6 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              6. Delen wij uw gegevens met derden?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij verstrekken uw persoonsgegevens alleen aan derden indien dit noodzakelijk is voor de uitvoering van onze diensten
              of om te voldoen aan een wettelijke verplichting. Wij kunnen uw gegevens delen met:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>IT-dienstverleners:</strong> Voor het hosten van onze systemen en gegevensopslag</li>
              <li><strong>Belastingdienst:</strong> Indien noodzakelijk voor de uitvoering van onze diensten</li>
              <li><strong>Accountants en adviseurs:</strong> Voor professionele ondersteuning</li>
              <li><strong>Wettelijk verplichte partijen:</strong> Indien wij wettelijk verplicht zijn informatie te verstrekken</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Wij sluiten met alle verwerkers een verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging
              en vertrouwelijkheid van uw gegevens. ZeroFiscus blijft verantwoordelijk voor deze verwerkingen.
            </p>
          </section>

          {/* Artikel 7 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              7. Waar worden uw gegevens opgeslagen?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wij streven ernaar uw persoonsgegevens binnen de Europese Economische Ruimte (EER) op te slaan.
              Indien gegevens buiten de EER worden verwerkt, zorgen wij ervoor dat passende waarborgen aanwezig zijn
              conform de AVG, zoals het gebruik van standaard contractuele clausules of andere goedgekeurde mechanismen.
            </p>
          </section>

          {/* Artikel 8 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              8. Hoe beveiligen wij uw gegevens?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij nemen de bescherming van uw gegevens serieus en nemen passende technische en organisatorische
              maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik, ongeautoriseerde toegang en
              openbaarmaking. Deze maatregelen omvatten:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Versleuteling van gevoelige gegevens</li>
              <li>Beveiligde verbindingen (SSL/TLS)</li>
              <li>Toegangscontroles en autorisatie</li>
              <li>Regelmatige beveiligingsupdates</li>
              <li>Bewustwording en training van medewerkers</li>
              <li>Back-up procedures</li>
            </ul>
          </section>

          {/* Artikel 9 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              9. Cookies en vergelijkbare technologieën
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Onze website maakt gebruik van cookies. Cookies zijn kleine tekstbestanden die op uw apparaat worden
              geplaatst om de website goed te laten functioneren en om uw gebruikservaring te verbeteren.
            </p>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-medium mb-1">Functionele cookies:</p>
                <p>Noodzakelijk voor het functioneren van de website (geen toestemming vereist)</p>
              </div>
              <div>
                <p className="font-medium mb-1">Analytische cookies:</p>
                <p>Voor het analyseren van websitegebruik en optimalisatie (alleen met uw toestemming)</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              U kunt cookies weigeren of verwijderen via uw browserinstellingen. Let op: het uitschakelen van cookies
              kan invloed hebben op de functionaliteit van de website.
            </p>
          </section>

          {/* Artikel 10 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              10. Wat zijn uw rechten?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Recht op inzage:</strong> U kunt opvragen welke persoonsgegevens wij van u verwerken</li>
              <li><strong>Recht op rectificatie:</strong> U kunt verzoeken om correctie van onjuiste of onvolledige gegevens</li>
              <li><strong>Recht op vergetelheid:</strong> U kunt onder bepaalde omstandigheden verzoeken om verwijdering van uw gegevens</li>
              <li><strong>Recht op beperking:</strong> U kunt verzoeken om beperking van de verwerking</li>
              <li><strong>Recht op dataportabiliteit:</strong> U kunt uw gegevens in een gestructureerd formaat opvragen</li>
              <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen de verwerking van uw gegevens</li>
              <li><strong>Recht om toestemming in te trekken:</strong> Indien verwerking op basis van toestemming plaatsvindt</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Om gebruik te maken van deze rechten kunt u contact met ons opnemen via{' '}
              <a href="mailto:privacy@zerofiscus.nl" className="text-gray-900 hover:underline font-medium">
                privacy@zerofiscus.nl
              </a>.
              Wij zullen binnen één maand op uw verzoek reageren.
            </p>
          </section>

          {/* Artikel 11 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              11. Klacht indienen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Als u niet tevreden bent over de manier waarop wij met uw persoonsgegevens omgaan, horen wij dit graag.
              U kunt contact met ons opnemen via{' '}
              <a href="mailto:privacy@zerofiscus.nl" className="text-gray-900 hover:underline font-medium">
                privacy@zerofiscus.nl
              </a>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              U heeft ook altijd het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.
              Dit is de toezichthouder op het gebied van privacybescherming in Nederland.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm font-medium text-gray-900 mb-2">Autoriteit Persoonsgegevens</p>
              <p className="text-sm text-gray-700">Postbus 93374</p>
              <p className="text-sm text-gray-700">2509 AJ Den Haag</p>
              <p className="text-sm text-gray-700">Website:{' '}
                <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">
                  www.autoriteitpersoonsgegevens.nl
                </a>
              </p>
            </div>
          </section>

          {/* Artikel 12 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              12. Wijzigingen in deze privacyverklaring
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. Wijzigingen worden op deze pagina gepubliceerd.
              Wij raden u aan om deze privacyverklaring regelmatig te raadplegen, zodat u op de hoogte blijft van eventuele wijzigingen.
            </p>
          </section>

          {/* Artikel 13 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              13. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Voor vragen over deze privacyverklaring of over de verwerking van uw persoonsgegevens kunt u contact met ons opnemen:
            </p>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm font-medium text-gray-900 mb-2">ZeroFiscus</p>
              <p className="text-sm text-gray-700">E-mail:{' '}
                <a href="mailto:privacy@zerofiscus.nl" className="text-gray-900 hover:underline">
                  privacy@zerofiscus.nl
                </a>
              </p>
              <p className="text-sm text-gray-700">Algemeen:{' '}
                <a href="mailto:contact@zerofiscus.nl" className="text-gray-900 hover:underline">
                  contact@zerofiscus.nl
                </a>
              </p>
              <p className="text-sm text-gray-700 mt-2">KVK-nummer: 88209865</p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Deze privacyverklaring is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

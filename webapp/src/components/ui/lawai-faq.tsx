import { FaqSection } from "@/components/ui/faq-section";

const TAX_FAQS = [
  {
    question: "Hoe werkt de 'No Cure No Pay' garantie precies?",
    answer: "Onze service is volledig risicovrij. Je betaalt ons uitsluitend een percentage van de daadwerkelijke belastingbesparing die we voor jou realiseren. Indien er geen besparing plaatsvindt, betaal je ons absoluut niets. Dit wordt contractueel vastgelegd voordat we starten.",
  },
  {
    question: "Zijn er verborgen kosten of verplichtingen vooraf?",
    answer: "Nee, er zijn geen verborgen kosten, abonnementskosten of verplichtingen vooraf. De initiële besparingscheck is gratis en je betaalt pas als wij een aantoonbare besparing voor jou hebben gerealiseerd, conform onze 'No Cure No Pay' belofte.",
  },
  {
    question: "Wat gebeurt er als er geen belastingbesparing mogelijk is in mijn situatie?",
    answer: "Als onze analyse uitwijst dat er geen of onvoldoende besparing mogelijk is, laten we je dit direct weten. Er zijn dan geen kosten aan verbonden. Je hebt geen verplichtingen en bent geen geld kwijt.",
  },
  {
    question: "Welke soorten belastingbesparing kunnen jullie voor mij identificeren?",
    answer: "Wij richten ons op diverse belastingbesparingsmogelijkheden voor zowel particulieren, ZZP'ers, MKB-ondernemers & DGA's. Dit kan variëren van optimalisatie in de inkomstenbelasting, vennootschapsbelasting, BTW of specifieke aftrekposten, afhankelijk van jouw unieke situatie.",
  },
  {
    question: "Hoe snel weet ik of ik in aanmerking kom voor een potentiële besparing?",
    answer: "Na het invullen van ons korte online formulier ontvang je binnen 2 minuten een eerste indicatie van jouw besparingsmogelijkheden. De diepgaande analyse door onze experts volgt binnen 48 uur na ontvangst van de benodigde documenten.",
  },
  {
    question: "Welke documenten heb ik nodig om een besparingscheck te starten?",
    answer: "Om een grondige analyse te kunnen doen, vragen we je om relevante documenten zoals recente belastingaangiftes (particulier en/of zakelijk), jaarrekeningen (voor ondernemers), inkomensgegevens en eventuele specificaties van eerdere teruggaven. Wij begeleiden je stap voor stap bij het veilig uploaden hiervan in jouw persoonlijke portal.",
  },
  {
    question: "Hoe wordt mijn privacy en de veiligheid van mijn gegevens gewaarborgd?",
    answer: "Jouw privacy en de veiligheid van je gegevens staan bij ons voorop. We werken conform de AVG richtlijnen, WWFT en gebruiken end-to-end encryptie. Al jouw documenten en informatie worden veilig opgeslagen in een beveiligde omgeving. We delen nooit informatie met derden zonder jouw expliciete toestemming.",
  },
  {
    question: "Wat is de rol van AI in jullie service en is er ook menselijk contact?",
    answer: "AI stelt ons in staat om snel en efficiënt complexe besparingsmogelijkheden te identificeren en de administratieve processen te stroomlijnen. Echter, elke analyse wordt altijd gevalideerd en gecontroleerd door ervaren fiscale experts. Bovendien heb je de mogelijkheid voor persoonlijk contact en toelichting via een call met een van onze fiscalisten.",
  },
];

export function LawAIFAQ() {
  return (
    <FaqSection
      id="faq"
      title="Veelgestelde vragen"
      description="De antwoorden op al jouw vragen over onze No Cure No Pay service."
      items={TAX_FAQS}
      contactInfo={{
        title: "Nog vragen over de belastingcheck?",
        description: "Wij helpen u graag verder met een persoonlijk gesprek",
        buttonText: "Start gratis check",
        buttonUrl: "/assessment",
      }}
    />
  );
} 
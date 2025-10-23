import { FeatureSteps } from "./feature-section"

const implementationSteps = [
  { 
    step: 'Stap 1', 
    title: 'Consultatie met document- en behoefteanalyse',
    content: 'Alles begint met luisteren. We voeren vertrouwelijke gesprekken om uw juridische landschap te begrijpen, oriënteren op uw documentatie en schetsen zo de ideale AI-configuratie voor uw kantoor. Dit vormt de solide basis voor een succesvolle implementatie.', 
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080' 
  },
  { 
    step: 'Stap 2',
    title: 'Op Maat Gebouwd: Ontwikkeling & Integratie',
    content: 'Ons team ontwikkelt en configureert uw Private AI-systeem specifiek voor uw kantoor, inclusief de integratie met uw bestaande documenten. Uw data wordt veilig gestructureerd voor optimale prestaties.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080'
  },
  { 
    step: 'Stap 3',
    title: 'Go-Live, training & continue optimalisatie',
    content: 'Na uitgebreide tests zetten we uw Private AI live. We voorzien uw team van trainingen en workshops, zodat zij direct productief kunnen werken. Hierna stellen wij een interne handleiding op zodat de training niet verloren gaat en nieuwe medewerkers ook maximaal gebruik kunnen maken.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080'
  },
]

export function ImplementationJourney() {
  return (
    <div id="implementatie" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <FeatureSteps 
        features={implementationSteps}
        title="Ons implementatietraject: Snelheid en precisie voor uw kantoor"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    </div>
  )
} 
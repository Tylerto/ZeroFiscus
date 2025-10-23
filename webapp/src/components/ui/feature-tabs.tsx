import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { FileText, Server, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface FeatureTabsProps {
  description?: string;
  tabs?: Tab[];
}

const FeatureTabs = ({
  description = "Ontdek hoe onze AI-oplossing uw advocatenpraktijk transformeert met complete controle over uw data en beroepsgeheim.",
  tabs = [
    {
      value: "tab-1",
      icon: <FileText className="h-auto w-4 shrink-0" />,
      label: "AI-gestuurde Drafting",
      content: {
        badge: "Automatisering",
        title: "AI-gestuurde drafting: van idee naar concept in minuten",
        description:
          "Transformeer uw documentcreatieproces. Uw AI genereert accurate en consistente concepten voor diverse juridische stukken, van eerste aanmaningen tot complexe pleitnota's, waardoor de doorlooptijd aanzienlijk wordt verkort en de focus op detail blijft. Uw AI-systeem kan een juridisch document, zoals een dagvaarding of verweerschriften, in minuten schrijven. Gemiddeld schrijft een advocaat 200-800 woorden per uur, uw AI-systeem daarentegen 8000-13.000. Laat de advocaat alleen focussen op de details en verhoog zo de effectiveit.",
        buttonText: "Plan uw vertrouwelijke demo",
        imageSrc:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "Legal documents and law office workspace",
      },
    },
    {
      value: "tab-2",
      icon: <Server className="h-auto w-4 shrink-0" />,
      label: "Data Hosting",
      content: {
        badge: "Privacy & Veiligheid",
        title: "Volledige controle over uw Data Hosting",
        description:
          "U bepaalt waar uw juridische data fysiek wordt opgeslagen: veilig in uw eigen infrastructuur (on-premise) of binnen een toegewijde, private cloudomgeving in de EU. Deze flexibiliteit garandeert data-soevereiniteit en voldoet aan de strengste compliance-eisen.",
        buttonText: "Plan uw vertrouwelijke demo",
        imageSrc:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "Secure data center and server infrastructure",
      },
    },
    {
      value: "tab-3",
      icon: <TrendingUp className="h-auto w-4 shrink-0" />,
      label: "Concurrentiepositie",
      content: {
        badge: "Marktvoordeel",
        title: "Verhoog uw concurrentiepositie met intelligente AI",
        description:
          "Zet uw ruime ervaring en documenten in! Geef uw kantoor een significant voordeel in de markt. Uw private AI stelt u in staat om sneller, slimmer en met meer zekerheid te werken, waardoor u meer cliënten kunt bedienen en complexere zaken efficiënter kunt aanpakken. Laat uw kantoor de voorkeur worden voor cliënten die waarde hechten aan innovatie, privacy & kwaliteit.",
        buttonText: "Plan uw vertrouwelijke demo",
        imageSrc:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "Business growth and competitive advantage",
      },
    },
  ],
}: FeatureTabsProps) => {
  return (
    <section className="pt-2 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 max-w-xl leading-relaxed mx-auto px-4 sm:px-0">
            {description}
          </p>
        </div>
        
        <Tabs defaultValue={tabs[0].value} className="mt-0">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold text-gray-600 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 transition-all duration-200 hover:bg-gray-50"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-gray-50/50 p-4 sm:p-8 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-16 lg:grid-cols-2 lg:gap-12"
              >
                <div className="flex flex-col gap-6">
                  <Badge variant="outline" className="w-fit bg-white border-gray-200 text-gray-700">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-medium lg:text-4xl text-gray-900 leading-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-gray-600 lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Button className="mt-4 w-fit gap-2 bg-gray-900 hover:bg-gray-800 text-white" size="lg" asChild>
                    <a href="https://calendly.com/lexisai/30min" target="_blank" rel="noopener noreferrer">
                      {tab.content.buttonText}
                    </a>
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { FeatureTabs }; 
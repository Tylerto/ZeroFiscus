"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  source: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const data = [
  {
    id: "profit-pressure",
    title: "Winst advocatenkantoren staat onder druk ondanks omzetstijgingen",
    description:
      "Grote Nederlandse advocatenkantoren zien weliswaar omzetgroei, maar deze is grotendeels het gevolg van doorberekende kostenstijgingen. Winstmarges komen onder druk te staan - AI-automatisering biedt de oplossing voor efficiëntieverbetering.",
    href: "https://fd.nl/bedrijfsleven/1563022/winst-advocatenkantoren-staat-onder-druk-ondanks-omzetstijgingen",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "FD",
  },
  {
    id: "labor-shortage",
    title: "Krappe arbeidsmarkt remt groei accountancy, advocatuur en notarissen",
    description:
      "De krapte op de arbeidsmarkt beperkt de groei in de juridische sector, terwijl de vraag naar diensten toeneemt. Tarieven stijgen voor het derde jaar op rij met minimaal 4% - AI is de logische oplossing voor deze uitdaging.",
    href: "https://fd.nl/financiele-markten/1527054/krappe-arbeidsmarkt-remt-groei-accountants-advocaten-en-notarissen",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "FD",
  },
  {
    id: "ai-routine-tasks",
    title: "Advocaat ziet in AI vooral een hulpmiddel voor routineklusjes",
    description:
      "Juristen verwachten dat AI het saaie deel van hun werk overneemt, waardoor minder junior advocaten en ondersteunend personeel nodig zijn. Strategisch denken blijft mensenwerk, maar experts zien een grotere invloed van AI dan advocaten denken.",
    href: "https://fd.nl/tech-en-innovatie/1483767/advocaat-ziet-in-ai-vooral-een-hulpmiddel-voor-routineklusjes",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNjh8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "FD",
  },
  {
    id: "ai-lawyer-day",
    title: "Wat doet een kunstmatig intelligente advocaat nu eigenlijk de hele dag?",
    description:
      "Allen & Overy positioneert zich wereldwijd als first mover in AI, terwijl Nederlandse kantoren afwachtend zijn. Experts voorzien dat AI op termijn de bijl zal zijn aan de wortel van het traditionele uurtje-factuurtjemodel.",
    href: "https://fd.nl/bedrijfsleven/1501818/wat-doet-zon-kunstmatig-intelligente-advocaat-nu-eigenlijk-de-hele-dag",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "FD",
    },
  {
    id: "ai-backbone-law",
    title: "AI als ruggengraat van de advocatuur",
    description:
      "De AI-revolutie wordt AI-first. Met nieuwe tools red je het niet meer - je zult je organisatie opnieuw uit moeten vinden. AI verandert niet alleen hoe we werken, maar wat werk ís. De tijd van 'copilots en contractbots' is voorbij.",
    href: "https://www.advocatie.nl/column/ai-als-ruggengraat-van-de-advocatuur-wie-durft/",
    image:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNDB8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "Advocatie",
  },
];

const Gallery4 = ({
  title = "AI in de advocatuur",
  description = "Blijf op de hoogte van de laatste ontwikkelingen in de juridische sector. Ontdek hoe AI de advocatuur transformeert en welke uitdagingen en kansen dit met zich meebrengt voor Nederlandse kantoren.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between md:mb-14 lg:mb-16 gap-4 sm:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-medium md:text-4xl lg:text-5xl text-gray-900">
              {title}
            </h2>
            <p className="max-w-lg text-gray-600 text-sm sm:text-base px-4 sm:px-0">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent 
            className="!ml-0 2xl:!ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]"
          >
            {items.map((item, index) => (
              <CarouselItem
                key={item.id}
                className={`min-w-0 max-w-[280px] lg:max-w-[360px] pl-4 sm:pl-6 lg:pl-8 ${index === 0 ? 'lg:pl-0' : 'lg:pl-[20px]'}`}
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl cursor-pointer block">
                  <div className="group relative h-full min-h-[27rem] w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                    
                    {/* Source branding */}
                    <div className="absolute bottom-4 right-4 z-10">
                      <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-sm">
                        {item.source}
                      </div>
                    </div>
                    
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8 pr-24">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 text-gray-200 md:mb-12 lg:mb-9 overflow-hidden">
                        <p className="line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center text-sm">
                        Lees artikel{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-gray-900" : "bg-gray-300"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Ga naar slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 }; 
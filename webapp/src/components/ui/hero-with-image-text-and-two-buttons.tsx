import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full pt-2 sm:pt-4 lg:pt-12 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-6 lg:gap-8 items-stretch lg:grid-cols-2">
          {/* Content Column */}
          <div className="flex gap-4 sm:gap-4 flex-col justify-center order-1 lg:order-1 items-center lg:items-start">
            <div className="flex items-center gap-3 justify-center lg:justify-start w-full">
              <div className="z-10 flex -space-x-4 rtl:space-x-reverse">
                <img
                  className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="/Lenny Jelsma.png"
                  width={40}
                  height={40}
                  alt="Lenny Jelsma"
                />
                <img
                  className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="/Leon Bloemenheuvel.png"
                  width={40}
                  height={40}
                  alt="Leon Bloemenheuvel"
                />
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                1.200+ belastingbetalers geholpen
              </p>
            </div>
            <div className="flex gap-3 sm:gap-3 md:gap-4 flex-col">
              <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl max-w-full lg:max-w-lg tracking-tight text-center lg:text-left font-regular leading-tight">
                Ontdek jouw onbenutte belastingbesparing
              </h1>
              <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl max-w-full lg:max-w-lg tracking-tight text-center lg:text-left font-regular leading-tight">
                No cure = no pay.
              </h2>
              <p className="text-base sm:text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-full lg:max-w-md text-center lg:text-left">
                Benieuwd naar jouw maximale belastingbesparing? Onze fiscale experts achterhalen binnen 2 minuten of er voor jou een potentiële teruggaaf is. Gratis én zonder enig risico – wij regelen alles en je betaalt ons alleen bij bewezen winst.
              </p>
            </div>
            <div className="w-full sm:w-fit">
              <div className="flex flex-col gap-2 items-center">
                <Button
                  size="default"
                  className="gap-2 bg-black text-white hover:bg-gray-800 text-base px-6 py-6 w-full sm:w-auto min-h-[48px]"
                  asChild
                >
                  <a href="/assessment" className="flex items-center justify-center">
                    <span>Start jouw gratis belastingcheck</span>
                    <MoveRight className="w-4 h-4" />
                  </a>
                </Button>
                <p className="text-sm sm:text-sm text-muted-foreground">
                  Gemiddeld €1.163 besparing
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full min-h-[280px] sm:min-h-[350px] lg:min-h-0 lg:h-full flex items-end justify-center lg:justify-end order-2 lg:order-2">
            <Image
              src="/Aanslag 2024-2.png"
              alt="Belastingdienst Aanslag 2024 - Teruggaaf voorbeeld"
              width={1200}
              height={1600}
              className="w-full sm:w-auto h-auto max-h-[350px] sm:max-h-[450px] lg:h-full lg:max-h-none max-w-full object-contain object-center lg:object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
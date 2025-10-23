import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

function Feature() {
  return (
    <div id="waarom" className="w-full bg-background py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Jouw voordelen op een rij:
              <br />
              Zo bespaar je belasting zonder risico.
            </h2>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8">
              <p className="text-base sm:text-lg text-foreground flex-1">
                Ontdek hoe wij de drempel voor fiscaal advies wegnemen, dankzij slimme systemen en expertise.
              </p>
              <Link
                href="/assessment"
                className="hidden lg:flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors whitespace-nowrap min-h-[44px]"
              >
                Start jouw gratis belastingcheck
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
              De onzekerheid over kosten weerhoudt veel mensen ervan fiscaal advies in te winnen. Wij hebben die barrière doorbroken. Door een unieke combinatie van geavanceerde AI en de diepgaande kennis van onze fiscale experts, bieden wij een volledig risicovrije oplossing: je betaalt ons alleen bij daadwerkelijke, aantoonbare belastingbesparing.
            </p>
            {/* Mobile CTA Button */}
            <div className="lg:hidden pt-2">
              <Link
                href="/assessment"
                className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors min-h-[48px] text-base sm:text-lg"
              >
                Start jouw gratis belastingcheck
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 text-foreground flex-shrink-0" strokeWidth={2} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Volledig risicovrij advies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Betaal ons uitsluitend als we daadwerkelijk een besparing voor jou realiseren. Geen resultaat, geen kosten. Zo loop je nooit het risico meer te betalen dan je terugkrijgt.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 text-foreground flex-shrink-0" strokeWidth={2} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Kracht van AI & fiscale experts
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Onze geavanceerde AI-systemen identificeren snel complexe bespaarmogelijkheden, waarna onze ervaren fiscalisten de definitieve analyse en controle uitvoeren. Een slimme combinatie voor jouw voordeel.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 text-foreground flex-shrink-0" strokeWidth={2} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Jouw maximale belastingvoordeel
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Van de initiële check tot de afhandeling van je teruggaaf, alles wordt efficiënt en met minimale inspanning van jouw kant geregeld.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

// The main props for the HowItWorks component
interface HowItWorksProps {
  className?: string;
}

// The props for a single step
interface StepProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  subtitle?: string;
  imageSize?: number;
}

/**
 * A single step within the "How It Works" section.
 */
const Step = ({
  imageSrc,
  imageAlt,
  description,
  subtitle,
  imageSize = 64,
}: StepProps) => (
  <div className="flex gap-3 sm:gap-4 items-start">
    {/* Image */}
    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: imageSize, height: imageSize }}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageSize}
        height={imageSize}
        className="object-contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </div>
    {/* Description */}
    <div className="flex-1">
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
      {subtitle && (
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground italic">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

/**
 * A responsive "How It Works" section that displays a 3-step process.
 * It is styled with shadcn/ui theme variables to support light and dark modes.
 */
export const HowItWorks = ({
  className,
}: HowItWorksProps) => {
  const stepsData = [
    {
      imageSrc: "/Hoe het werkt 1.png",
      imageAlt: "Formulier invullen",
      description:
        "Vul een kort formulier in en kom er in 2 minuten achter of besparing mogelijk is.",
      imageSize: 64,
    },
    {
      imageSrc: "/Hoe het werkt 2.png",
      imageAlt: "Fiscale experts analyseren",
      description:
        "Fiscale experts kijken op de achtergrond samen met AI naar wat mogelijk is en nemen binnen 48 uur contact op",
      imageSize: 80,
    },
    {
      imageSrc: "/Hoe het werkt 3.png",
      imageAlt: "Adviesrapport ontvangen",
      description:
        "Wij doen de definitieve berekeningen en indien er besparing mogelijk is ontvangt u het adviesrapport in combinatie met de mogelijkheid voor een call met een fiscalist om het door te lichten.",
      subtitle: "(Jij betaalt alleen bij succes)",
      imageSize: 80,
    },
  ];

  return (
    <section
      id="hoe-werkt-het"
      className={cn("w-full bg-background py-12 sm:py-16", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 sm:mb-10 max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Hoe het werkt.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-foreground">
            Jouw simpele route naar maximaal belastingvoordeel
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 sm:mb-10 w-full max-w-5xl px-4 sm:px-0">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-border"
          ></div>
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center justify-self-center rounded-full bg-background border-2 border-border font-semibold text-foreground text-base sm:text-lg"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10 lg:gap-16 xl:gap-24 mb-8 sm:mb-10">
          {stepsData.map((step, index) => (
            <Step
              key={index}
              imageSrc={step.imageSrc}
              imageAlt={step.imageAlt}
              description={step.description}
              subtitle={step.subtitle}
              imageSize={step.imageSize}
            />
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-muted-foreground">
            Geniet van je belastingvoordeel!
          </p>
        </div>
      </div>
    </section>
  );
};

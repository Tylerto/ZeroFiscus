'use client';

import { useEffect, useState, useRef } from 'react';

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, value, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('nl-NL');
  };

  return <span ref={elementRef}>{formatNumber(displayValue)}</span>;
}

function ImpactMetrics() {
  return (
    <div className="w-full bg-[#FAF9F7] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Onze impact in cijfers
            </h2>
            <p className="text-base text-muted-foreground">
              Samen met onze cliënten hebben we al aanzienlijke successen geboekt.
            </p>
          </div>

          {/* Metrics */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* Main Metric: Total amount - Large and prominent */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-baseline gap-2 sm:gap-4">
              <div className="flex items-baseline gap-2" style={{ letterSpacing: '0.05em' }}>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">€</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  <AnimatedNumber value={1432890} />
                </span>
              </div>
              <p className="text-base sm:text-lg text-foreground">
                totale bedrag aan belastingvoordeel dat we al realiseerden.
              </p>
            </div>

            {/* Secondary Metrics: Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Metric: Number of clients */}
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline" style={{ letterSpacing: '0.05em' }}>
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">
                    <AnimatedNumber value={1200} />
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">+</span>
                </div>
                <p className="text-base sm:text-lg text-foreground">
                  Cliënten die wij al hebben geholpen naar fiscaal voordeel.
                </p>
              </div>

              {/* Metric: Average savings per client */}
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2" style={{ letterSpacing: '0.05em' }}>
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">€</span>
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">
                    <AnimatedNumber value={1163} />
                  </span>
                </div>
                <p className="text-base sm:text-lg text-foreground">
                  Gemiddeld bespaard per cliënt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ImpactMetrics };

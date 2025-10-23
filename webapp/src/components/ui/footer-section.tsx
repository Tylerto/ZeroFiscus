"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Send,
  Sun,
  Twitter,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

function LawAIFooter() {
  const handleAssessmentClick = () => {
    window.location.href = "/assessment";
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (targetId === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t bg-[#FAF9F7] text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Start vandaag section */}
          <div className="relative">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold tracking-tight">Start jouw gratis check</h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ontdek binnen 2 minuten jouw belastingbespaarmogelijkheden.<br />
              Volledig gratis en vrijblijvend.
            </p>
            <Button
              size="lg"
              className="gap-3 bg-gray-900 hover:bg-gray-800 text-white min-h-[48px] text-base w-full sm:w-auto"
              onClick={handleAssessmentClick}
            >
              Start Gratis Belastingcheck <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigatie section */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Navigatie</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-foreground inline-block py-1"
                  onClick={(e) => handleSmoothScroll(e, "/")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#voordelen"
                  className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-foreground inline-block py-1"
                  onClick={(e) => handleSmoothScroll(e, "#voordelen")}
                >
                  Voordelen
                </a>
              </li>
              <li>
                <a
                  href="/assessment"
                  className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-foreground inline-block py-1"
                >
                  Gratis Check
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-foreground inline-block py-1"
                  onClick={(e) => handleSmoothScroll(e, "#faq")}
                >
                  Veelgestelde vragen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-muted-foreground">
              <li>ZeroFiscus</li>
              <li>KVK-nummer 88209865</li>
              <li className="pt-2">
                <a
                  href="mailto:info@zerofiscus.nl"
                  className="transition-colors hover:text-foreground inline-block py-1 min-h-[44px] flex items-center"
                >
                  info@zerofiscus.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 sm:mt-12 border-t pt-6 sm:pt-8">
          <div className="flex flex-col gap-4 sm:gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © 2025 ZeroFiscus. Alle rechten voorbehouden.
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-xs sm:text-sm items-center">
              <a
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center"
              >
                Privacybeleid
              </a>
              <a
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center"
              >
                Algemene Voorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { LawAIFooter }; 
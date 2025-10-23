"use client"

import { TrendingDown, Shield, Clock } from "lucide-react";

function Risks() {
  return (
    <div id="risicos" className="w-full py-6 sm:py-8 lg:py-12 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 sm:gap-4 py-6 sm:py-8 lg:py-12 flex-col items-center">
          <div className="flex gap-2 flex-col text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter lg:max-w-4xl font-regular">
              De risico's van niets doen
            </h2>
            <p className="text-base sm:text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground mx-auto px-4 sm:px-0">
              Terwijl u twijfelt, lopen concurrenten voorop en ontstaan er onacceptabele privacyrisico's binnen uw kantoor.
            </p>
          </div>
          <div className="flex gap-6 sm:gap-10 pt-8 sm:pt-12 flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Container 1: Competitive Disadvantage */}
              <div className="group bg-slate-50/40 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                      <TrendingDown className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                      Concurrerende achterstand
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-slate-600 leading-relaxed text-base sm:text-sm">
                      Uw concurrenten omarmen geavanceerde technologieën om hun efficiëntie te verhogen en strategisch voordeel te behalen.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-sm">
                      Dit resulteert in hogere operationele kosten en het mislopen van talent en marktaandeel.
                    </p>
                  </div>
                </div>
              </div>
        
              {/* Container 2: Privacy Risks */}
              <div className="group bg-slate-50/40 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                      <Shield className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                      Privacyrisico's van publieke AI
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-slate-600 leading-relaxed text-base sm:text-sm">
                      De publieke AI-tools bieden gemak, maar tegen een onacceptabele prijs. Uw vertrouwelijke cliëntgegevens worden verwerkt op externe servers.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-sm">
                      Dit vormt een directe schending van het beroepsgeheim en de AVG, en maakt uw kantoor kwetsbaar voor datalekken.
                    </p>
                  </div>
                </div>
              </div>

              {/* Container 3: Time and Cost Inefficiency */}
              <div className="group bg-slate-50/40 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                      <Clock className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                      Tijdverspilling en inefficiëntie
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-slate-600 leading-relaxed text-base sm:text-sm">
                      Handmatige processen kosten onnodig veel tijd en geld. Elk uur dat juristen besteden aan routinework is verloren productiviteit.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-sm">
                      Zonder automatisering blijft uw kantoor achter en worden kosten en doorlooptijden onnodig hoog.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Risks };
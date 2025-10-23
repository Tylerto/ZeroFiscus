import { CheckCircle2, Shield, Clock, Calculator, Users, Award } from 'lucide-react'

export function BenefitsTrustSignals() {
  const benefits = [
    {
      icon: Calculator,
      title: 'Gratis Belastingcheck',
      description: 'Ontdek binnen 2 minuten uw bespaarmogelijkheden voor 2024 zonder kosten.'
    },
    {
      icon: Shield,
      title: 'Vertrouwelijk & Veilig',
      description: 'Uw gegevens worden vertrouwelijk behandeld volgens de laatste privacy-wetgeving.'
    },
    {
      icon: Clock,
      title: '24 Uur Response',
      description: 'Binnen 24 uur neemt een van onze belastingexperts contact met u op.'
    },
    {
      icon: Users,
      title: 'Persoonlijk Advies',
      description: 'Geen standaard antwoorden, maar advies op maat voor uw specifieke situatie.'
    },
    {
      icon: Award,
      title: 'Gecertificeerde Experts',
      description: 'Al onze adviseurs zijn gecertificeerd en hebben jarenlange ervaring.'
    },
    {
      icon: CheckCircle2,
      title: 'Geen Verplichtingen',
      description: 'Vrijblijvend advies. U bepaalt zelf of u verdere samenwerking aangaat.'
    }
  ]

  const trustSignals = [
    {
      number: '500+',
      label: 'Tevreden klanten',
      description: 'Particulieren en ondernemers'
    },
    {
      number: '€2.8M',
      label: 'Totaal bespaard',
      description: 'Voor onze klanten in 2023'
    },
    {
      number: '15+',
      label: 'Jaar ervaring',
      description: 'In Nederlands belastingrecht'
    },
    {
      number: '4.8/5',
      label: 'Klantbeoordeling',
      description: 'Gemiddelde waardering'
    }
  ]

  return (
    <section id="voordelen" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Waarom kiezen voor onze gratis belastingcheck?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek uw belasting bespaarmogelijkheden met vertrouwelijk, persoonlijk advies van gecertificeerde experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust Signals */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Vertrouwd door honderden klanten
            </h3>
            <p className="text-lg text-gray-600">
              Onze resultaten spreken voor zich
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {signal.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {signal.label}
                </div>
                <div className="text-sm text-gray-600">
                  {signal.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                100% GDPR-compliant • Vertrouwelijk behandeld • Geen spam
              </span>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Zo werkt het
            </h3>
            <p className="text-lg text-gray-600">
              In 3 eenvoudige stappen naar uw belastingbesparing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Vul de check in',
                description: 'Beantwoord 5 korte vragen over uw belastingsituatie (duurt 2 minuten)'
              },
              {
                step: '2',
                title: 'Ontvang persoonlijk contact',
                description: 'Binnen 24 uur belt een expert u op het door u gewenste moment'
              },
              {
                step: '3',
                title: 'Krijg gratis advies',
                description: 'Ontdek uw exacte bespaarmogelijkheden en de stappen om dit te realiseren'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 relative">
                    <span className="text-2xl font-bold text-green-700">
                      {process.step}
                    </span>
                    {index < 2 && (
                      <div className="hidden md:block absolute -right-16 top-1/2 w-16 h-0.5 bg-gray-200 transform -translate-y-1/2">
                        <div className="absolute right-0 top-1/2 w-2 h-2 bg-gray-300 rounded-full transform translate-x-1 -translate-y-1/2"></div>
                      </div>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ArrowLeft, Search, FileText, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina Niet Gevonden - LAWAI Private AI voor Advocaten",
  description: "De pagina die u zoekt bestaat niet. Ontdek onze Private AI-oplossingen voor Nederlandse advocatenkantoren of neem contact met ons op.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-200 mb-4">404</h1>
          <Badge variant="outline" className="mb-6">
            Pagina Niet Gevonden
          </Badge>
        </div>

        {/* Main Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Deze pagina bestaat niet (meer)
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            De pagina die u zoekt is mogelijk verplaatst, hernoemd of bestaat niet. 
            Geen zorgen - wij helpen u graag verder met uw zoektocht naar Private AI voor advocaten.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <Home className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Hoofdpagina</h3>
            <p className="text-gray-600 text-sm mb-4">Ontdek onze Private AI oplossingen</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/">
                Naar Hoofdpagina
              </Link>
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <FileText className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Blog & Inzichten</h3>
            <p className="text-gray-600 text-sm mb-4">AI trends voor advocaten</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/blog/ai-impact-advocatuur">
                Naar Blog
              </Link>
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <Search className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliance</h3>
            <p className="text-gray-600 text-sm mb-4">Veilige AI implementatie</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/blog/gdpr-compliant-ai-advocatenkantoren">
                Meer Info
              </Link>
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <Mail className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Demo Aanvragen</h3>
            <p className="text-gray-600 text-sm mb-4">Vertrouwelijke demonstratie</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://calendly.com/lexisai/30min" target="_blank" rel="noopener noreferrer">
                Plan Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Popular Blog Posts */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Populaire Artikelen</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">AI Impact op de Advocatuur</h4>
              <p className="text-gray-600 text-sm mb-4">Concrete cijfers over tijdsbesparing en efficiëntie</p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/blog/ai-impact-advocatuur">
                  Lees meer →
                </Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">ChatGPT Risico's Advocaten</h4>
              <p className="text-gray-600 text-sm mb-4">Waarom Private AI noodzakelijk is</p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/blog/chatgpt-risicos-advocaten-private-ai">
                  Lees meer →
                </Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">AI Implementatie Gids</h4>
              <p className="text-gray-600 text-sm mb-4">Stap-voor-stap implementatie in juridische praktijk</p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/blog/ai-implementatie-juridische-praktijk">
                  Lees meer →
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Search Suggestions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Misschien zoekt u naar:</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="bg-white border border-blue-300 text-blue-800 px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition-colors">
              Private AI voor Advocaten
            </Link>
            <Link href="/blog/gdpr-compliant-ai-advocatenkantoren" className="bg-white border border-blue-300 text-blue-800 px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition-colors">
              GDPR Compliant AI
            </Link>
            <Link href="/blog/chatgpt-risicos-advocaten-private-ai" className="bg-white border border-blue-300 text-blue-800 px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition-colors">
              ChatGPT Alternatief
            </Link>
            <Link href="/blog/ai-implementatie-juridische-praktijk" className="bg-white border border-blue-300 text-blue-800 px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition-colors">
              AI Implementatie
            </Link>
            <Link href="/" className="bg-white border border-blue-300 text-blue-800 px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition-colors">
              Nederlandse AI Advocaten
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-900 text-white rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold mb-4">Heeft u Hulp Nodig?</h3>
          <p className="text-gray-300 mb-6">
            Kunt u niet vinden wat u zoekt? Neem direct contact met ons op voor persoonlijke ondersteuning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <a href="https://calendly.com/lexisai/30min" target="_blank" rel="noopener noreferrer">
                <Mail className="w-4 h-4 mr-2" />
                Plan Gesprek
              </a>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <a href="mailto:info@lawai.nl">
                <Phone className="w-4 h-4 mr-2" />
                Email Ons
              </a>
            </Button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="flex justify-center">
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar Hoofdpagina
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
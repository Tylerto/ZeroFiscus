import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface MetricItem {
  number: string;
  label: string;
  blogUrl?: string;
}

interface MetricsSectionProps {
  metrics?: MetricItem[];
}

const MetricsSection = ({
  metrics = [
    {
      number: "7 uur",
      label: "per week bespaard per advocaat",
      blogUrl: "/blog/ai-impact-advocatuur",
    },
    {
      number: "↑ 20%",
      label: "Declarabele uren",
      blogUrl: "/blog/ai-impact-advocatuur",
    },
    {
      number: "1.5 FTE",
      label: "per 5 advocaten bespaard gemiddeld",
      blogUrl: "/blog/ai-impact-advocatuur",
    },
  ],
}: MetricsSectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Left column - First metric pushed to the right */}
      <div className="flex flex-col items-end text-center">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-2xl md:text-4xl tracking-tighter font-regular text-gray-900 leading-tight">
            {metrics[0].number}
          </span>
          <Link 
            href={metrics[0].blogUrl || "#"} 
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-xs text-center">
          {metrics[0].label}
        </p>
      </div>
      
      {/* Right column - Second and third metrics stacked */}
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-2xl md:text-4xl tracking-tighter font-regular text-gray-900 leading-tight">
              {metrics[1].number}
            </span>
            <Link 
              href={metrics[1].blogUrl || "#"} 
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-xs">
            {metrics[1].label}
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-2xl md:text-4xl tracking-tighter font-regular text-gray-900 leading-tight">
              {metrics[2].number}
            </span>
            <Link 
              href={metrics[2].blogUrl || "#"} 
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-xs">
            {metrics[2].label}
          </p>
        </div>
      </div>
    </div>
  );
};

export { MetricsSection }; 
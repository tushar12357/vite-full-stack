import { Shield } from "lucide-react";

export interface HowItWorksStep {
  title: string;
  description: string;
  icon?: string;
}

export interface HowItWorksData {
  tag: string;
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
}

interface HowItWorksSectionProps {
  data: HowItWorksData;
}

const HowItWorksSection = ({ data }: HowItWorksSectionProps) => {
  const { tag, title, subtitle, steps } = data;

  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          {/* Tag */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white font-medium">
              {tag}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-white">{title}</h2>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 max-w-3xl">{subtitle}</p>
        </div>

        {/* Steps Grid - 2 rows x 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border min-w-5xl border-gray-800 rounded-xl overflow-hidden">
          {steps.map((step, idx) => {
            const isFirstRow = idx < 3;
            const isLastRow = idx >= steps.length - 3;
            const isFirstCol = idx % 3 === 0;
            const isLastCol = idx % 3 === 2;

            return (
              <div
                key={idx}
                className={`
                bg-black p-4 hover:bg-gray-900 transition-all
                ${!isFirstRow ? 'border-t border-gray-800' : ''}
                ${!isFirstCol ? 'border-l border-gray-800' : ''}
                ${steps.length === 4 && idx === 3 ? 'lg:col-span-3' : ''}
              `}
              >
                {/* Icon at top - Shield icon only */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gray-800 border border-gray-700 mb-4 flex items-center justify-center">
                    {step.icon ? (
                      <img src={step.icon} alt={step.title} className="w-7 h-7 object-contain" />
                    ) : (
                      <Shield className="w-7 h-7 text-white stroke-2" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white mb-3 text-center">{step.title}</h3>

                {/* Description */}
                <p className="text-sm mb-10 text-gray-400 text-center">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;


import { useState } from "react";
import { LucideIcon } from "lucide-react";

export interface Feature {
  number: string;
  title: string;
  description: string;
}

export interface TwoColumnFeatureSectionData {
  tag: string;
  mainTitle: string;
  subtitle: string;
  leftColumn: {
    title: string;
    titleHighlight: string;
    description: string;
  };
  features: Feature[];
  rightImage?: string;
  rightImageAlt?: string;
}

interface TwoColumnFeatureSectionProps {
  data: TwoColumnFeatureSectionData;
  rightContent?: React.ReactNode;
}

const TwoColumnFeatureSection = ({ data, rightContent }: TwoColumnFeatureSectionProps) => {
  const { tag, mainTitle, subtitle, leftColumn, features, rightImage, rightImageAlt } = data;
  // All features are expanded by default - show all descriptions
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  // Show description if expanded OR if no feature is expanded (default state)
  const shouldShowDescription = (index: number) => {
    return expandedFeature === null || expandedFeature === index;
  };

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-sm md:text-base text-white font-medium">
            {tag}
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-4 max-w-4xl mx-auto leading-tight">
          {mainTitle}
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
          {/* Left Column - Features */}
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {leftColumn.title}{" "}
              <span className="text-purple-600">{leftColumn.titleHighlight}</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              {leftColumn.description}
            </p>

            {/* Features List */}
            <div className="space-y-0">
              {features.map((feature, index) => {
                const isExpanded = shouldShowDescription(index);
                const isLast = index === features.length - 1;
                return (
                  <div key={index}>
                    <div className="flex gap-4 py-4">
                      <div className="flex-shrink-0">
                        <span className="text-2xl md:text-3xl font-bold text-gray-500">
                          {feature.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <button
                          onClick={() => toggleFeature(index)}
                          className="text-left w-full"
                        >
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-2 hover:text-purple-400 transition-colors cursor-pointer">
                            {feature.title}
                          </h4>
                        </button>
                        {feature.description && isExpanded && (
                          <p className="text-base md:text-lg text-gray-400 leading-relaxed mt-2">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {!isLast && (
                      <div className="border-t border-gray-800 my-2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image or Custom Content */}
          <div className="relative lg:sticky lg:top-20">
            {rightContent ? (
              rightContent
            ) : rightImage ? (
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={rightImage}
                  alt={rightImageAlt || "Feature Image"}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnFeatureSection;


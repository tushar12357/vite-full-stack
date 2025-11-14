import { useState, useEffect, useRef } from "react";
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
  // Track which feature is expanded (null means none are expanded)
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  // Show description only if this specific feature is expanded
  const shouldShowDescription = (index: number) => {
    return expandedFeature === index;
  };

  // Intersection Observer for rise-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`bg-white py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24 transition-all duration-[1500ms] ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-gray-800 rounded-full text-sm md:text-base text-white font-medium">
            {tag}
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black text-center mb-4 max-w-3xl mx-auto leading-tight">
          {mainTitle}
        </h2>

        {/* Subtitle */}
        <p className="text-small md:text-base lg:text-base text-black text-center mb-8 md:mb-12 max-w-xl mx-auto">
          {subtitle}
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-8 items-start relative">
          {/* Left Column - Features */}
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
              {leftColumn.title}{" "}
              <span className="text-purple-600">{leftColumn.titleHighlight}</span>
            </h3>
            <p className="text-lg md:text-xl text-black mb-12">
              {leftColumn.description}
            </p>

            {/* Features List */}
            <div className="space-y-0">
              {features.map((feature, index) => {
                const isExpanded = shouldShowDescription(index);
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
                          <h4 className="text-xl md:text-2xl font-bold text-black mb-2 hover:text-purple-400 transition-colors cursor-pointer">
                            {feature.title}
                          </h4>
                        </button>
                        {feature.description && isExpanded && (
                          <p className="text-base md:text-lg text-black leading-relaxed mt-2">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
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
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={rightImage}
                  alt={rightImageAlt || "Feature Image"}
                  className="w-full max-w-[100%] h-auto object-contain"
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


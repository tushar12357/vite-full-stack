import { useState, useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";
import Website from "@/assets/Website.png";

export interface Feature {
  number: string;
  title: string;
  description: string;
  iconUrl?: string;
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
  className?: string;
  disableAnimation?: boolean;
}

const TwoColumnFeatureSection = ({ data, rightContent, className = "", disableAnimation = false }: TwoColumnFeatureSectionProps) => {
  const { tag, mainTitle, subtitle, leftColumn, features, rightImage, rightImageAlt } = data;
  // Track which feature is expanded (null means none are expanded)
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(disableAnimation);
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
    if (disableAnimation) return;

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
  }, [disableAnimation]);

  const baseBgClass = className.includes('bg-') ? '' : 'bg-white';
  const hasBlackBg = className.includes('bg-black') || className.includes('!bg-black');
  const sectionStyle = {
    ...(!disableAnimation && { transitionDuration: '1500ms' }),
    ...(hasBlackBg && { backgroundColor: '#000000' })
  };

  const animationClasses = disableAnimation
    ? 'opacity-100 translate-y-0'
    : `transition-all ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section
      ref={sectionRef}
      className={`${baseBgClass} py-16 md:py-24 px-4 sm:px-6 lg:px-16 xl:px-24 font-poppins ${animationClasses} ${className}`}
      style={sectionStyle}
    >
      <div className="max-w-5xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 rounded text-xs text-gray-800 font-medium font-poppins">
            {tag}
          </span>
        </div>

        {/* Main Title */}
        <h2
          className="text-black text-center mb-4 mx-auto font-poppins text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight max-w-[600px]"
        >
          {mainTitle}
        </h2>

        {/* Subtitle */}
        <p
          className="text-black text-center mb-8 md:mb-12 mx-auto font-poppins text-sm sm:text-base font-light leading-relaxed max-w-[480px]"
        >
          {subtitle}
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center justify-items-center relative">
          {/* Left Column - Features */}
          <div className="relative font-poppins text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-black mb-2 font-poppins">
              {leftColumn.title}{" "}
              <span className="text-purple-600 font-poppins">{leftColumn.titleHighlight}</span>
            </h3>
            <p className="text-3xl sm:text-4xl lg:text-[40px] text-black mb-8 lg:mb-12 font-poppins">
              {leftColumn.description}
            </p>

            {/* Features List */}
            <div className="space-y-0">
              {features.map((feature, index) => {
                const isExpanded = shouldShowDescription(index);
                return (
                  <div key={index}>
                    <div className="flex gap-4 py-4 flex-col lg:flex-row items-start">

                      <div className="flex-1">
                        <button
                          onClick={() => toggleFeature(index)}
                          className="text-left w-full font-poppins flex items-center gap-3"
                        >
                          {feature.iconUrl && (
                            <img
                              src={feature.iconUrl}
                              alt=""
                              className="w-8 h-8 object-contain"
                            />
                          )}
                          <h4 className="text-[18px] font-medium text-black mb-0 hover:text-purple-400 transition-colors cursor-pointer font-poppins">
                            {!feature.iconUrl && feature.number} {feature.title}
                          </h4>
                        </button>
                        {feature.description && isExpanded && (
                          <p className="text-[14px] md:text-[14px] font-thin text-black leading-relaxed mt-2 font-poppins">
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
          <div className="relative lg:sticky lg:top-20 flex justify-center w-full">
            {rightContent ? (
              rightContent
            ) : rightImage ? (
              <div className="relative w-full overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
                <img
                  src={Website}
                  alt={rightImageAlt || "Feature Image"}
                  className="w-full h-full object-contain rounded-3xl"
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


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
  className?: string;
}

const TwoColumnFeatureSection = ({ data, rightContent, className = "" }: TwoColumnFeatureSectionProps) => {
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

  const baseBgClass = className.includes('bg-') ? '' : 'bg-white';
  const hasBlackBg = className.includes('bg-black') || className.includes('!bg-black');
  const sectionStyle = {
    transitionDuration: '1500ms',
    ...(hasBlackBg && { backgroundColor: '#000000' })
  };
  
  return (
    <section 
      ref={sectionRef}
      className={`${baseBgClass} py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24 transition-all ease-in-out font-poppins ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
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
          className="text-black text-center mb-4 mx-auto font-poppins"
          style={{
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0%',
            width: '600px',
            height: '120px',
            opacity: 1,
          }}
        >
          {mainTitle}
        </h2>

        {/* Subtitle */}
        <p 
          className="text-black text-center mb-8 md:mb-12 mx-auto font-poppins"
          style={{
            fontWeight: 200,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0%',
            width: '400px',
            height: '42px',
            opacity: 1,
          }}
        >
          {subtitle}
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center justify-items-center relative">
          {/* Left Column - Features */}
          <div className="relative font-poppins">
            <h3 className="text-5xl md:text-[40px] font-semibold text-black mb-2 font-poppins">
              {leftColumn.title}{" "}
              <span className="text-purple-600 font-poppins">{leftColumn.titleHighlight}</span>
            </h3>
            <p className="text-5xl md:text-[40px] text-black mb-12 font-poppins">
              {leftColumn.description}
            </p>

            {/* Features List */}
            <div className="space-y-0">
              {features.map((feature, index) => {
                const isExpanded = shouldShowDescription(index);
                return (
                  <div key={index}>
                    <div className="flex gap-4 py-4">
                     
                      <div className="flex-1">
                        <button
                          onClick={() => toggleFeature(index)}
                          className="text-left w-full font-poppins"
                        >
                          
                          <h4 className="text-[18px] md:text-[18px] font-medium text-black mb-2 hover:text-purple-400 transition-colors cursor-pointer font-poppins">
                           {feature.number} {feature.title}
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
          <div className="relative lg:sticky lg:top-20 flex justify-center">
            {rightContent ? (
              rightContent
            ) : rightImage ? (
              <div className="relative w-full overflow-hidden min-h-[500px] lg:min-h-[600px]">
                <img
                  src={rightImage}
                  alt={rightImageAlt || "Feature Image"}
                  className="w-full h-full min-h-[500px] lg:min-h-[600px] object-contain"
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


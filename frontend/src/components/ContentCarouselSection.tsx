import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ContentCarouselSectionProps<T> {
  tag: string;
  title: string;
  description: string;
  items: T[];
  itemsPerView?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  showNavigation?: boolean;
  backgroundColor?: string;
}

const ContentCarouselSection = <T,>({
  tag,
  title,
  description,
  items,
  itemsPerView = 4,
  renderItem,
  showNavigation = true,
  backgroundColor = "bg-black",
}: ContentCarouselSectionProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, items.length - itemsPerView);
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const maxIndex = Math.max(0, items.length - itemsPerView);

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-5xl mx-auto  lg:px-2">
        <div className="relative mb-16">
          {/* Tag */}
          <div className="flex justify-start mb-6">
            <span className="inline-block px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white font-medium">
              {tag}
            </span>
          </div>

          {/* Title and Description with Navigation */}
          <div className="flex items-start justify-between gap-8 mb-12">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
              <p className="text-base md:text-sm text-white/80 max-w-3xl leading-relaxed">{description}</p>
            </div>

            {/* Navigation Arrows */}
            {showNavigation && items.length > itemsPerView && (
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous items"
                  className={`w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-white hover:bg-gray-700 transition-all ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  type="button"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next items"
                  className={`w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-white hover:bg-gray-700 transition-all ${
                    currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  type="button"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Cards Grid with Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                willChange: "transform",
              }}
            >
              {items.map((item, idx) => {
                const cardWidth = 100 / itemsPerView;
                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 p-1 flex"
                    style={{
                      width: `${cardWidth}%`,
                      minWidth: `${cardWidth}%`,
                    }}
                  >
                    <div className="w-full">
                      {renderItem(item, idx)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCarouselSection;


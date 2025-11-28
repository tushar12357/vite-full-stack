import { useState } from "react";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

interface ProblemCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  date: string;
  videoUrl?: string;
}

interface ProblemSectionProps {
  title: string;
  problems: ProblemCard[];
}

const ProblemSection = ({ title, problems }: ProblemSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const maxIndex = Math.max(0, problems.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with Title and Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Problem Cards Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="flex-shrink-0 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
                style={{ width: `calc((100% - ${(itemsPerView - 1) * 16}px) / ${itemsPerView})` }}
              >
                {/* Top Section - White Background with Video */}
                <div className="relative bg-white aspect-square flex items-center justify-center overflow-hidden">
                  {/* Tag Overlay - Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                      {problem.tag}
                    </span>
                  </div>

                  {/* Video Embed or Globe Icon */}
                  {problem.videoUrl ? (
                    <div className="w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={problem.videoUrl}
                        title={problem.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      <Globe className="w-24 h-24 text-gray-300" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Bottom Section - Black Background with Text */}
                <div className="bg-black p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>

                  {/* Subtitle and Date */}
                  <p className="text-sm text-gray-400">
                    {problem.subtitle} . {problem.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;


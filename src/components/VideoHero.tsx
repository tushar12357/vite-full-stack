import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

interface VideoHeroProps {
  hero: {
    title: string;
    description: string;
    buttonText: string;
  };
  uiScreenshot: string;
  videoId?: string;
  videoUrl?: string;
}

const VideoHero = ({ hero, uiScreenshot, videoId, videoUrl }: VideoHeroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative bg-black py-16 md:py-20 overflow-hidden mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Main Title - Large and Bold */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
              {hero.description}
            </p>

            {/* CTA Button - Centered */}
            <div className="flex justify-start">
              <Button
                size="lg"
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm rounded-lg border border-white transition-all duration-300"
                onClick={handlePlay}
              >
                {hero.buttonText}
              </Button>
            </div>
          </div>

          {/* Right Column - Video or UI Screenshot */}
          <div className="relative">
            {videoUrl ? (
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300" style={{ height: '360px' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title={hero.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                ></iframe>
              </div>
            ) : (
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src={uiScreenshot}
                  alt="Video Tutorial Dashboard"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>



      {/* Fullscreen Video Overlay */}
      {
        isPlaying && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="w-full max-w-7xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`${videoUrl}?autoplay=1`}
                title={hero.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )
      }
    </section >
  );
};

export default VideoHero;


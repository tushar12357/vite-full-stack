import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import AgencyMarque from "./AgencyMarque";
import heroBackgroundVideo from "@/assets/video/herobackground.mov";

const hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set playback speed to 50% (slow)
    }
  }, []);

  const stats = [
    { value: "10M+", label: "Calls Processed" },
    { value: "500+", label: "Active Partners" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "99.9%", label: "Uptime SLA" },
  ];
  return (
    <>
      <main className="relative pt-32 pb-32 overflow-x-hidden bg-black">
        <div className="max-w-9xl mx-auto relative z-10">
          {/* hero heading and description */}
          <div className="relative text-center py-20 mb-20 overflow-hidden ">
            {/* Background Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            >
              <source src={heroBackgroundVideo} type="video/mp4" />
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0"></div>
            
            {/* Content */}
            <div className="relative z-10">         
              <h1 className="text-6xl lg:text-9xl font-black text-white mb-8 tracking-wide max-w-6xl mx-auto">
                Launch Your Own
                <br />
                <span className="text-white">
                  AI Calling Platform
                </span>
              </h1>

              <p className="text-base lg:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                White-label AI voice agents that handle{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text">
                  10,000+ calls/day
                </span>
                <br />
                Fully branded. Fully yours. Launch in 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
                <button className="group relative flex items-center gap-0 px-0 py-0 bg-purple-600 text-white text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <span className="px-6 py-3">Try Live Demo</span>
                  <span className="w-10 h-10 flex items-center justify-center bg-purple-700 rounded-full">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </button>
                <button className="flex items-center gap-2 px-0 py-0 bg-transparent text-white text-base font-semibold hover:text-white/80 transition-colors">
                  <span>Schedule a Demo</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
        <AgencyMarque />
        </div>
      </main>
    </>
  );
};

export default hero;

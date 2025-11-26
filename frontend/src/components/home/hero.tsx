import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import AgencyMarque from "./AgencyMarque";

import DemoModal from "@/components/DemoModal";

const hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Set playback speed to 30% (slower)
    }
  }, []);


  return (
    <>
      <main className="relative overflow-x-hidden bg-black py-8">
        <section className="relative flex min-h-screen md:min-h-[100vh] lg:min-h-[105svh] w-full items-center justify-center overflow-hidden">
          {/* Background Video covering entire section */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          >
            <source src="https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/6926e54f1a0c180b83dd621e.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />

          <div className="max-w-9xl mx-auto relative z-10 w-full px-4 sm:px-6 lg:px-12 py-32 md:py-24">
            {/* hero heading and description */}
            <div className="text-center w-full">
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-8 tracking-wide max-w-6xl mx-auto">
                  Launch Your Own
                  <br />
                  <span className="text-white">AI Calling Platform</span>
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
                  <DemoModal
                    buttonClassName="group relative flex items-center gap-0 px-0 py-0 bg-purple-600 text-white text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  >
                    <span className="px-6 py-3">Try Live Demo</span>
                    <span className="w-10 h-10 flex m-2 items-center justify-center bg-purple-700 rounded-full">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </DemoModal>
                  <DemoModal
                    buttonClassName="flex items-center gap-2 px-0 py-0 bg-transparent text-white text-base font-semibold hover:text-white/80 transition-colors"
                  >
                    <span>Schedule a Demo</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </DemoModal>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-9xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 -mt-12">
          <AgencyMarque />
        </div>
      </main>
    </>
  );
};

export default hero;

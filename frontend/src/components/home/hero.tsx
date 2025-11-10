import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";
import FeatureGrid from "@/pages/featureGrid";
import FeatureCards from "@/components/home/FeatureCards";

const hero = () => {
  const stats = [
    { value: "10M+", label: "Calls Processed" },
    { value: "500+", label: "Active Partners" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "99.9%", label: "Uptime SLA" },
  ];
  return (
    <>
      <main className="relative pt-40 pb-32 px-4 overflow-x-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center py-20 mb-20">
            {/* <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border-2 border-purple-500/30 rounded-full mb-8 hover:scale-105 transition-transform shadow-lg backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
              <span className="text-sm font-bold text-white">
                Trusted by 500+ agencies worldwide
              </span>
            </div> */}

            <h4 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-wide  max-w-6xl mx-auto">
              Launch Your Own
              <br />
              <span className="text-white">
                AI Calling Platform
              </span>
            </h4>

            <p className="text-x lg:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
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

            {/* <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Launch in 24 hours
              </span>
            </div> */}
          </div>

          {/* Agencies Section */}
          <div className="bg-black py-6 mb-12 rounded-3xl">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold text-white">
                Be part of the 500+ Agencies transforming their digital
                presence.
              </p>
            </div>
            <div className="overflow-hidden relative w-full">
              <div
                className="flex animate-marquee"
                style={{ width: "max-content" }}
              >
                {/* All logos in continuous row - multiple duplicates to fill entire width */}
                {[
                  ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4],
                  ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4],
                  ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4],
                ].map((logo, idx) => (
                  <div
                    key={`logo-${idx}`}
                    className={`flex items-center justify-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity ${
                      idx < 11 ? "mr-6 lg:mr-8" : ""
                    }`}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(1352%) hue-rotate(258deg) brightness(101%) contrast(101%)",
                    }}
                  >
                    <img
                      src={logo}
                      alt={`Partner Logo ${(idx % 4) + 1}`}
                      className="h-12 lg:h-16 w-auto object-contain max-w-[180px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
           
        </div>
      </main>
    </>
  );
};

export default hero;

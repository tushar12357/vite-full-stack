import React from "react";
import partnerLogo1 from "@/assets/AgencyMarque/aispeky.webp";
import partnerLogo2 from "@/assets/AgencyMarque/executivehomehuahin.webp";
import partnerLogo3 from "@/assets/AgencyMarque/loomcrm.png";
import partnerLogo4 from "@/assets/AgencyMarque/palldiumgroup.svg";
import partnerLogo5 from "@/assets/AgencyMarque/reiunlock.webp";
import partnerLogo6 from "@/assets/AgencyMarque/unicorn.webp";
import partnerLogo7 from "@/assets/AgencyMarque/zbotai.webp";

const AgencyMarque = () => {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-20%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="bg-black py-6 mb-12 rounded-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-white">
            Be part of the 500+ Agencies transforming their digital presence.
          </p>
        </div>
        <div className="overflow-hidden relative w-full max-w-9xl mx-auto">
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {/* All logos in continuous row - multiple duplicates to fill entire width */}
            {[
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7],
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7],
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7],
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7],
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7],
            ].map((logo, idx) => (
              <div
                key={`logo-${idx}`}
                className="flex items-center justify-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity mr-8 lg:mr-12"
              >
                <img
                  src={logo}
                  alt={`Partner Logo ${(idx % 7) + 1}`}
                  className="h-12 lg:h-16 w-auto object-contain max-w-[180px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgencyMarque;


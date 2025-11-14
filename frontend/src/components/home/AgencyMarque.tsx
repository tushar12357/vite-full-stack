import React from "react";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";

const AgencyMarque = () => {
  return (
    <div className="bg-black py-6 mb-12 rounded-3xl">
      <div className="text-center mb-4">
        <p className="text-sm font-semibold text-white">
          Be part of the 500+ Agencies transforming their digital presence.
        </p>
      </div>
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
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
  );
};

export default AgencyMarque;


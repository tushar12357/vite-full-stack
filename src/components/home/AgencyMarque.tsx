import React from "react";
import partnerLogo1 from "@/assets/AgencyMarque/aispeky.webp";
import partnerLogo2 from "@/assets/AgencyMarque/executivehomehuahin.webp";
import partnerLogo3 from "@/assets/AgencyMarque/loomcrm.png";
import partnerLogo4 from "@/assets/AgencyMarque/palldiumgroup.svg";
import partnerLogo5 from "@/assets/AgencyMarque/reiunlock.webp";
import partnerLogo6 from "@/assets/AgencyMarque/unicorn.webp";
import partnerLogo7 from "@/assets/AgencyMarque/zbotai.webp";

const partnerLogo8 = "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/692eb2852b865ef37d51dab5.jpg";
const partnerLogo9 = "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/692eb285fd073a016acf2d4d.jpg";
const partnerLogo10 = "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/692eb285fd073a0973cf2d4c.jpg";

const AgencyMarque = () => {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-20%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="bg-black py-6 mb-12 rounded-3xl">
        <div className="text-center mb-16">
          <p className="text-2xl font-semibold text-white">
            Be part of the 500+ Agencies transforming their digital presence.
          </p>
        </div>
        <div className="overflow-hidden relative w-full max-w-9xl mx-auto">
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {/* All logos in continuous row - multiple duplicates to fill entire width */}
            {[
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7, partnerLogo8, partnerLogo9, partnerLogo10],
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7, partnerLogo8, partnerLogo9, partnerLogo10],
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7, partnerLogo8, partnerLogo9, partnerLogo10],
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7, partnerLogo8, partnerLogo9, partnerLogo10],
              ...[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7, partnerLogo8, partnerLogo9, partnerLogo10],
            ].map((logo, idx) => (
              <div
                key={`logo-${idx}`}
                className="flex items-center justify-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity mr-20 lg:mr-32"
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


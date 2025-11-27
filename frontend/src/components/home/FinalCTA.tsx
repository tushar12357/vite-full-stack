import purpleBackgroundVideo from "@/assets/video/purpleBackground.mp4";
import DemoModal from "@/components/DemoModal";

const FinalCTA = () => {
  return (
    <section className="bg-white pb-16 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden mx-auto w-full max-w-[1248px] h-auto min-h-[260px] mt-20 rounded-xl border border-gray-200"
        >
          {/* Video Background */}
          <div className="relative w-full h-full p-8 md:p-12 flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-150"
            >
              <source src={purpleBackgroundVideo} type="video/mp4" />
            </video>



            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <h2 className="text-[32px] leading-[100%] text-white font-medium font-['Poppins'] mb-4 max-w-[675px] mx-auto">
                Ready to Launch Your AI Calling Platform?
              </h2>

              {/* Subheading */}
              <p className="text-base text-[#A1A1AA] mb-6 md:mb-6 max-w-2xl mx-auto">
                Join 500+ agencies building their white-label business
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col mx-auto sm:flex-row items-center mb-8 justify-center mt-8" style={{ width: '212.0092010498047px', height: '41.003543853759766px', gap: '12px', opacity: 1 }}>
                <a href="https://offer.closerx.ai?utm_source=website&utm_medium=button&utm_campaign=final_cta" target="_blank" rel="noopener noreferrer" className="w-full sm:w-40 md:p-2 py-3 md:py-4 bg-[#8B5CF6] hover:bg-[#4F46E5] text-white font-normal text-sm md:text-[14px] rounded-full transition-all duration-300 hover:shadow-lg hover:scale-100 text-center">
                  Get Started
                </a>
                <DemoModal buttonClassName="w-full sm:w-40 p-2 bg-transparent border border-white/50 hover:border-white text-white font-normal text-sm md:text-[14px] rounded-full transition-all duration-300 hover:bg-white/10 text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

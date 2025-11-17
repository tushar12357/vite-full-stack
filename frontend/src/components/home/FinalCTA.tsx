import purpleBackgroundVideo from "@/assets/video/purpleBackground.mp4";

const FinalCTA = () => {
  return (
    <section className="bg-white pb-16 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative overflow-hidden mx-auto w-full max-w-[1248px] h-auto min-h-[300px] mt-20 rounded-xl border border-gray-200"
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
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-purple-900/60 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <h2 className="text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
                Ready to Launch Your AI Calling Platform?
        </h2>

              {/* Subheading */}
              <p className="text-base text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto">
                Join 500+ agencies building their white-label business
        </p>

        {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-purple-500 hover:bg-purple-600 text-white font-semibold text-lg md:text-xl rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Get Started
          </button>
                <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold text-lg md:text-xl rounded-xl transition-all duration-300 hover:bg-white/10">
                  Book Demo
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

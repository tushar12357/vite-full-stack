const FinalCTA = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Purple Background */}
          <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 p-12 md:p-16 lg:p-20">

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
                Ready to Launch Your AI Calling Platform?
              </h2>

              {/* Subheading */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto">
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

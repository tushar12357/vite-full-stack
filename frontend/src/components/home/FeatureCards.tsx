import { Clock, Sparkles } from "lucide-react";
import cardImage from "@/assets/card.png";

const FeatureCards = () => {
  const features = [
    {
      icon: Clock,
      title: "Digital Signing",
    },
    {
      icon: Clock,
      title: "Digital Signing",
    },
    {
      icon: Clock,
      title: "Digital Signing",
    },
  ];

  return (
    <section className="relative bg-black">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center py-16">
          {/* Intelligent Automation Tag */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-black border border-white rounded-lg">
              <span className="text-sm font-semibold text-white">Intelligent Automation</span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Everything You Need in One Place
          </h2>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to make teamwork seamless
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative">
          {[1, 2, 3, 4].map((cardIndex) => {
            const index = cardIndex - 1;
            
            return (
              <div
                key={cardIndex}
                className="h-screen snap-start flex items-center justify-center p-8 sticky top-0"
                style={{ zIndex: 10 + index }}
              >
                <div className="grid h-100 p-2 lg:grid-cols-2 border-2 border-white/20 rounded-2xl gap-4 lg:gap-6 items-start w-full max-w-6xl transform transition-all duration-300 bg-black">
              {/* Left Column - Text Content */}
              <div className="space-y-2 p-4">
                {/* Heading */}
                <div className="mb-48 w-3/4">
                  <h6 className="text-left lg:text-xl font-bold mb-4 text-white leading-tight">
                    Watch Your Calls in Real-Time
                  </h6>

                  {/* Description */}
                  <p className="text-small text-white font-thin leading-relaxed">
                    Beautiful analytics that update as your AI agents work
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-4 py-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-900 flex items-start justify-center border border-white/20">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Dashboard Image */}
              <div className="relative overflow-hidden">
                {/* Purple Glow Behind Image */}
                {/* <div className="absolute -left-8 -bottom-8 w-60 h-60 bg-purple-500/30 rounded-full blur-3xl"></div> */}
                
                {/* Image Container */}
                <div className="relative bg-white/10 rounded-lg p-1 overflow-hidden">
                  <img 
                    src={cardImage} 
                    alt="Dashboard Screenshot" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
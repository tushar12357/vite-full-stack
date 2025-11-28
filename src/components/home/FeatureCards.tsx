import { Clock, Zap, Shield, Target } from "lucide-react";
import imageOne from "@/assets/whyChooseCloserX/1.png";
import imageTwo from "@/assets/whyChooseCloserX/2.png";
import imageThree from "@/assets/whyChooseCloserX/3.png";
import imageFour from "@/assets/whyChooseCloserX/4.png";

const FeatureCards = () => {
  const cardData = [
    {
      icon: Clock,
      title: "Watch Your Calls in Real-Time",
      description: "Beautiful analytics that update as your AI agents work",
      features: [
        { icon: Clock, title: "Live Call Monitoring" },
        { icon: Zap, title: "Instant Notifications" },
        { icon: Shield, title: "Secure Data Handling" },
      ],
      imageUrl: imageOne
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Experience blazing fast speeds with our optimized infrastructure",
      features: [
        { icon: Zap, title: "99.9% Uptime" },
        { icon: Target, title: "Global CDN" },
        { icon: Shield, title: "Auto-scaling" },
      ],
      imageUrl: imageTwo
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with industry-leading security measures",
      features: [
        { icon: Shield, title: "End-to-End Encryption" },
        { icon: Clock, title: "24/7 Monitoring" },
        { icon: Target, title: "Compliance Ready" },
      ],
      imageUrl: imageThree
    },
    {
      icon: Target,
      title: "Smart AI Integration",
      description: "Powerful AI tools that enhance your workflow automatically",
      features: [
        { icon: Target, title: "Smart Routing" },
        { icon: Zap, title: "Predictive Analytics" },
        { icon: Clock, title: "Auto-optimization" },
      ],
      imageUrl: imageFour
    },
  ];

  return (
    <section className="relative bg-black w-full pt-32 bg-gradient-to-b from-purple-950 to-purple-750 font-poppins">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center py-16 px-4 relative">
          {/* Divider Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          {/* Intelligent Automation Tag */}
          <div className="flex justify-center mb-6">
          <span className="px-4 py-2 border border-[#1f1f1f] bg-[#121212] rounded-sm text-sm font-medium text-white font-poppins">
            Intelligent Automation
          </span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl font-black text-white mb-6 leading-tight font-poppins">
            Everything You <br/> Need in One Place
          </h2>

          {/* Subtitle */}
          <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed font-poppins">
            Powerful features designed to make teamwork seamless
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative" style={{ height: `${cardData.length * 100}vh` }}>
          {cardData.map((card, cardIndex) => {
            const IconComponent = card.icon;
            
            return (
            <div
                key={cardIndex}
                className="sticky top-0 w-full flex items-center justify-center p-4 sm:p-6 lg:p-8"
              style={{ 
                  zIndex: 10 + cardIndex,
                  minHeight: '100vh'
                }}
              >
                <div className="grid lg:grid-cols-2 border border-white/20 rounded-[16px] gap-6 lg:gap-8 items-start w-full max-w-[998px] min-h-[520px] lg:h-[488px] mx-auto transform rotate-0 opacity-100 transition-all duration-300 bg-black p-6 lg:p-8 shadow-2xl">
                  {/* Left Column - Text Content */}
                  <div className="space-y-6 font-poppins">
                    {/* Heading */}
                    <div className="mb-8 lg:mb-48">
                      <h3 className="text-[20px] sm:text-[24px] font-normal mb-4 text-white leading-tight font-poppins">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed font-poppins">
                        {card.description}
                      </p>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-4 lg:mt-10">
                      {card.features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                              <FeatureIcon className="w-4 h-4 text-white" />
                      </div>
                            <span className="text-[14px] font-normal text-white font-poppins">{feature.title}</span>
                      </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column - Visual Content */}
                  <div className="relative overflow-hidden w-full h-[230px] sm:h-[320px] lg:h-full flex items-center justify-center">
                    {/* Image Card Visual */}
                    <div className="relative rounded-[12px] w-full h-full flex items-center justify-center shadow-2xl bg-white overflow-hidden">
                      <img 
                        src={card.imageUrl} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Spacing */}
        <div className="h-20 bg-black"></div>
      </div>
    </section>
  );
};

export default FeatureCards;
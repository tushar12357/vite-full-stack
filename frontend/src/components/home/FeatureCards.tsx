import { Clock, Zap, Shield, Target } from "lucide-react";

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
      gradient: "from-blue-500 to-cyan-500"
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
      gradient: "from-purple-500 to-pink-500"
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
      gradient: "from-green-500 to-emerald-500"
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
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="relative bg-black w-full pt-32 bg-gradient-to-b from-purple-950 to-purple-750">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center py-16 px-4 relative">
          {/* Divider Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          {/* Intelligent Automation Tag */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-black border border-white rounded-lg">
              <span className="text-sm font-semibold text-white">Intelligent Automation</span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl font-black text-white mb-6 leading-tight">
            Everything You <br/> Need in One Place
          </h2>

          {/* Subtitle */}
          <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                className="sticky top-0 w-full flex items-center justify-center p-4 lg:p-8"
              style={{ 
                  zIndex: 10 + cardIndex,
                  minHeight: '100vh'
                }}
              >
                <div className="grid lg:grid-cols-2 border border-white/20 rounded-[12px] gap-4 lg:gap-8 items-start w-[998px] h-[488px] max-w-full mx-auto transform rotate-0 opacity-100 transition-all duration-300 bg-black p-6 lg:p-8 shadow-2xl">
                  {/* Left Column - Text Content */}
                  <div className="space-y-6 ">
                    {/* Heading */}
                    <div className="mb-48">
                      <h3 className="text-[20px] font-normal mb-4 text-white leading-tight">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[16px] text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-4 mt-10">
                      {card.features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                              <FeatureIcon className="w-4 h-4 text-white" />
                      </div>
                            <span className="text-[14px] font-normal text-white">{feature.title}</span>
                      </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column - Visual Content */}
                  <div className="relative overflow-hidden h-full">
                    {/* Gradient Card Visual */}
                    <div className={`relative bg-gradient-to-br ${card.gradient} rounded-[12px] p-8 lg:p-12 h-full flex items-center justify-center shadow-2xl`}>
                      <div className="absolute inset-0 bg-black/20 rounded-[12px]"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-10 h-10 lg:w-16 lg:h-16 text-white" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-32 lg:w-48 bg-white/30 rounded mx-auto"></div>
                          <div className="h-2 w-24 lg:w-32 bg-white/30 rounded mx-auto"></div>
                          <div className="h-2 w-40 lg:w-56 bg-white/30 rounded mx-auto"></div>
                        </div>
                      </div>
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
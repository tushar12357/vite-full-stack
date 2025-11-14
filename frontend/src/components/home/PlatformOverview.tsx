import { Clock, Zap, Shield, Target, LayoutDashboard, Calendar, Clock3, Folder, Users, Puzzle, Star, FileText, Settings, Headphones, Grid3x3 } from "lucide-react";

const PlatformOverview = () => {
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
    <section className="relative bg-black w-full pt-32 bg-gradient-to-b from-black to-purple-750">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center py-16 px-4 relative">
          {/* Divider Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          {/* Platform Overview Tag */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-black border border-white rounded-lg">
              <span className="text-sm font-semibold text-white">Platform Overview</span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl font-black text-white mb-6 leading-tight">
            Everything You Need to Scale
          </h2>

          {/* Subtitle */}
          <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A complete platform with all the tools your business needs to succeed
          </p>
        </div>

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 pb-20">
          {cardData.map((card, cardIndex) => {
            const IconComponent = card.icon;
            
            return (
              <div
                key={cardIndex}
                className="grid lg:grid-cols-2 rounded-2xl overflow-hidden w-full transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Left Column - Dark Text Content */}
                <div className="bg-black p-8 lg:p-12 flex flex-col justify-center space-y-8">
                  {/* Small Category Label */}
                  <div className="text-sm text-white">
                    {card.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                  
                  {/* Main Title */}
                  <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base text-white leading-relaxed">
                    {card.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-8 pt-4">
                    {/* First Feature with repeated description */}
                    {card.features[0] && (
                      <div className="space-y-3">
                        <div className="text-base font-bold text-white">
                          {card.features[0].title}
                        </div>
                        <div className="text-sm text-white leading-relaxed">
                          Ultra-realistic speech synthesis Ultra-realistic speech synthesis Ultra-realistic speech synthesis Ultra-realistic speech synthesis Ultra-realistic speech synthesis Ultra-realistic speech synthesis
                        </div>
                      </div>
                    )}
                    
                    {/* Other Features as headings only */}
                    {card.features.slice(1).map((feature, index) => {
                      return (
                        <div key={index + 1} className="text-base font-bold text-white">
                          {feature.title}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column - Light UI Mockup */}
                <div className="bg-black rounded-r-2xl p-6 lg:p-8 shadow-xl">
                  <div className="bg-white rounded-xl p-6 h-full flex flex-col">
                    {/* Mockup Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Dashboard</div>
                        <div className="text-xs text-gray-500">Manage your platform</div>
                      </div>
                    </div>
                    
                    {/* Mockup Content */}
                    <div className="space-y-4 flex-1">
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mt-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-purple-100 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-300 rounded w-1/2 mb-1"></div>
                              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-100 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-300 rounded w-1/2 mb-1"></div>
                              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default PlatformOverview;


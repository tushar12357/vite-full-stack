import React from 'react'
import { Waves, Globe, Activity, Shield } from "lucide-react";

const featureGrid = () => {
  const features = [
    {
      icon: <Waves className="w-6 h-6" />,
      title: "AI Voice Agents",
      description: "Human-like conversations in 50+ languages with advanced natural language processing",
      video: "https://storage.googleapis.com/msgsndr/KUu5UkTcHdHgg0RsAb37/media/692856cb8f8797520b97318d.mp4"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full White-Label",
      description: "Complete customization of colors, logos, domains - make it truly yours",
      video: "https://storage.googleapis.com/msgsndr/KUu5UkTcHdHgg0RsAb37/media/692856cb571896b6aa5fcc3a.mp4"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Launch in 24 Hours",
      description: "Pre-built platform ready to deploy with zero technical hassle",
      video: "https://storage.googleapis.com/msgsndr/KUu5UkTcHdHgg0RsAb37/media/692856cb3080d30a2d80305c.mp4"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II, GDPR, and HIPAA compliant with bank-level encryption",
      video: "https://storage.googleapis.com/msgsndr/KUu5UkTcHdHgg0RsAb37/media/692856cbfa305597a0740dc7.mp4"
    },
  ];
  return (
    <>
      {/* Features Grid */}
      <div className="bg-black py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-purple-950">
        <div className="max-w-7xl mx-auto px-4">
          {/* Intelligent Automation Tag */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-2 border border-[#1f1f1f] bg-[#121212] rounded-sm text-sm font-medium text-white">
              Intelligent Automation
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-black text-white text-center mb-6">
            Everything You Need to Scale
          </h2>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            A complete platform with all the tools your business needs to succeed
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 py-10 bg-black border-2 border-purple-500/30 rounded-xl hover:border-purple-500/50 transition-all overflow-hidden group"
              >
                {/* Purple Glow Effect on Hover - Gradient Background from black to purple */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(139, 92, 246, 0.4) 100%)'
                  }}
                ></div>

                {/* Enhanced Purple Glow at Bottom Right Corner */}
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-purple-600/60 via-purple-500/40 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-1/4 translate-y-1/4"></div>

                {/* Icon or Video Container */}
                <div className={`rounded-lg bg-slate-900 flex items-center justify-center text-white mb-8 relative z-10 ${feature.video ? 'w-full aspect-video overflow-hidden' : 'w-10 h-10'}`}>
                  {feature.video ? (
                    <video
                      src={feature.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    feature.icon
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>

                {/* Description */}
                <p className="text-base text-gray-400 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default featureGrid

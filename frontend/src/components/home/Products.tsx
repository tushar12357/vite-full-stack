import { useState } from "react";
import { productsData, type ProductCard } from "@/data/productsData";

interface ProductsProps {
  data?: ProductCard[];
  showHeader?: boolean;
  className?: string;
  sectionClassName?: string;
}

const Products = ({ 
  data = productsData, 
  showHeader = true,
  className = "",
  sectionClassName = ""
}: ProductsProps) => {
  const [openFeature, setOpenFeature] = useState<{ card: number; feature: number } | null>(null);

  const toggleFeature = (cardIndex: number, featureIndex: number) => {
    setOpenFeature((current) =>
      current?.card === cardIndex && current?.feature === featureIndex
        ? null
        : { card: cardIndex, feature: featureIndex }
    );
  };

  return (
    <section className={`relative bg-black w-full pt-32 bg-gradient-to-b from-black to-purple-750 ${sectionClassName}`}>
      <div className={`max-w-7xl mx-auto px-4 ${className}`}>
        {/* Section Header */}
        {showHeader && (
          <div className="text-center py-16 px-4 relative">
            {/* Divider Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        )}

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 pb-20">
          {data.map((card, cardIndex) => {
            const IconComponent = card.icon;
            
            return (
              <div key={cardIndex} className="space-y-8">
                <div
                  className="grid lg:grid-cols-2 rounded-2xl overflow-hidden w-full transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Left Column - Dark Text Content */}
                  <div className="bg-black p-8 lg:p-12 flex flex-col justify-center space-y-4">
                    {/* Small Category Label */}
                    <div className="text-sm text-white">
                      {card.title.split(' ').slice(0, 2).join(' ')}
                    </div>
                    
                    {/* Main Title */}
                    <h3 className="text-3xl lg:text-4xl font-normal text-white mb-2">
                      {card.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-base text-white leading-relaxed">
                      {card.description}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-4 pt-[230px]">
                      {card.features.map((feature, index) => {
                        const isOpen = openFeature?.card === cardIndex && openFeature?.feature === index;
                        return (
                          <div key={`${card.title}-${index}`} className="space-y-2">
                            <button
                              className="text-base font-bold text-white text-left w-full focus:outline-none flex items-center justify-between"
                              onClick={() => toggleFeature(cardIndex, index)}
                            >
                              {feature.title}
                              <span className="text-sm text-white/60">{isOpen ? "–" : "+"}</span>
                            </button>
                            {feature.description && isOpen && (
                              <div className="text-sm text-white/80 leading-relaxed">
                                {feature.description}
                              </div>
                            )}
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
                
                {/* Divider Line after each card */}
                {cardIndex < data.length - 1 && (
                  <div className="w-full flex justify-center py-8">
                    <div 
                      className="w-full h-px"
                      style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                        backgroundSize: '12px 1px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat-x'
                      }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;


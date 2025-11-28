import { useState } from "react";
import { productsData, type ProductCard } from "@/data/productsData";
import FAQ from "./FAQ";

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
    <section className={`relative bg-black w-full max-w-5xl mx-auto pt-32 bg-gradient-to-b from-black to-purple-750 ${sectionClassName}`}>
      <div className={`max-w-7xl mx-auto px-4 ${className}`}>
        {/* Section Header */}
        {showHeader && (
          <div className="text-center py-16 px-4 relative">
            {/* Divider Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        )}

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 gap-6 lg:gap-4 pb-20">
          {data.map((card, cardIndex) => {
            const IconComponent = card.icon;
            
            return (
              <div key={cardIndex} className="space-y-8">
                <div
                  className="grid lg:grid-cols-2 gap-6 w-full"
                >
                  {/* Left Column - Dark Text Content */}
                  <div className="bg-black p-8 lg:p-12 flex flex-col justify-center space-y-4 rounded-2xl min-h-[600px]">
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
                    <div className="space-y-4 pt-20">
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

                  {/* Right Column - Product Image/Video */}
                  <div className="bg-black rounded-2xl p-6 lg:p-8 flex items-center justify-center min-h-[600px]">
                    {card.image?.endsWith('.webm') || card.image?.endsWith('.mp4') ? (
                      <video 
                        src={card.image} 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <img 
                        src={card.image || "/placeholder-product.jpg"} 
                        alt={card.title}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    )}
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


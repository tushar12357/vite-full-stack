import { Shield } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="bg-black border border-gray-900 rounded-xl p-6 hover:border-gray-800 transition-all h-full flex flex-col">
      {/* Icon at top - Shield icon only, centered */}
      <div className="flex justify-center mb-16">
        <div className="w-14 h-14 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center justify-center">
          <Shield className="w-7 h-7 text-white stroke-2" />
        </div>
      </div>
      
      {/* Title - Centered */}
      <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
      
      {/* Description - Centered */}
      <p className="text-sm text-white/90 text-center leading-relaxed flex-1">{description}</p>
    </div>
  );
};

export default FeatureCard;


import { Shield, Check } from "lucide-react";

interface CriteriaCardProps {
  title: string;
  description: string;
}

const CriteriaCard = ({ title, description }: CriteriaCardProps) => {
  return (
    <div className="bg-black border border-gray-900 rounded-xl p-6 hover:border-gray-800 transition-all h-full flex flex-col">
      {/* Icon at top - Shield with checkmark, centered */}
      <div className="flex justify-center mb-16">
        <div className="w-14 h-14 rounded-full bg-gray-900/80 border border-gray-800 flex items-center justify-center relative">
          <Shield className="w-7 h-7 text-white" />
          <Check className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={3} />
        </div>
      </div>
      
      {/* Title - Centered */}
      <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
      
      {/* Description - Centered */}
      <p className="text-sm text-white/90 text-center leading-relaxed flex-1">{description}</p>
    </div>
  );
};

export default CriteriaCard;


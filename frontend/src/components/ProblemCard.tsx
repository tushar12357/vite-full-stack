import { Shield, Check } from "lucide-react";

interface ProblemCardProps {
  icon?: any;
  title: string;
  description: string;
}

const ProblemCard = ({ title, description }: ProblemCardProps) => {
  return (
    <div className="bg-black border border-gray-900 rounded-xl p-6 hover:border-gray-800 transition-all h-full flex flex-col">
      {/* Icon at top-left - Shield with checkmark */}
      <div className="mb-12">
        <div className="w-14 h-14 rounded-full bg-gray-900/80 border border-gray-800 flex items-center justify-center relative">
          <Shield className="w-7 h-7 text-white" />
          <Check className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={3} />
        </div>
      </div>
      
      {/* Main Heading */}
      <h3 className="text-xl font-normal text-white mb-4 leading-tight">{title}</h3>
      
      {/* Descriptive Text - Left-aligned, two lines */}
      <p className="text-sm text-white/90 leading-relaxed flex-1">{description}</p>
    </div>
  );
};

export default ProblemCard;


import { Stat } from "@/data/leadQualificationData";

interface StatsSectionProps {
  stats: Stat[];
  description?: string;
}

const StatsSection = ({ stats, description = "Proven voice AI performance across real, high-volume phone operations." }: StatsSectionProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-gray-800">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`
                py-4 px-4
                ${idx !== 0 ? 'border-l border-gray-800' : ''}
              `}
            >
              {/* Main Value */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-3">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-lg md:text-sm text-white mb-4">
                {stat.label}
              </div>
              
              {/* Description */}
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


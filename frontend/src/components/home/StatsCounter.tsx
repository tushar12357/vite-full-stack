import { useEffect, useState, useRef } from "react";
import { Phone, Users, Zap, TrendingUp } from "lucide-react";

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Phone, value: 50, suffix: "M+", label: "Calls Processed", color: "from-primary to-purple-600" },
    { icon: Users, value: 500, suffix: "+", label: "Active Agencies", color: "from-secondary to-cyan-600" },
    { icon: Zap, value: 99.9, suffix: "%", label: "Uptime Guarantee", color: "from-accent to-orange-600" },
    { icon: TrendingUp, value: 35, suffix: "%", label: "Avg. Conversion Increase", color: "from-green-500 to-emerald-600" },
  ];

  const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots-dark" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" style={{ animation: 'glow-pulse 2s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" style={{ animation: 'glow-pulse 2s ease-in-out infinite', animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 mb-6 group-hover:rotate-[360deg] transition-transform duration-1000">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon size={32} className="text-white" />
                </div>
              </div>

              {/* Number */}
              <div className="text-5xl font-extrabold text-white mb-2">
                {isVisible && <Counter end={stat.value} />}
                <span className="text-3xl font-semibold text-primary">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-base font-medium text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
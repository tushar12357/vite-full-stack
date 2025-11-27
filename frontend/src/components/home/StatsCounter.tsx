import { useEffect, useState, useRef } from "react";

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of component is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const stats = [
    {
      value: 10,
      suffix: "M+",
      label: "Calls Processed",
      isDecimal: false,
      description: "Proven voice AI performance across real, high-volume phone operations."
    },
    {
      value: 500,
      suffix: "+",
      label: "Partner Agencies",
      isDecimal: false,
      description: "Trusted by leading agencies to power their voice automation."
    },
    {
      value: 4.9,
      suffix: "/5",
      label: "Average Rating",
      isDecimal: true,
      description: "Consistently rated highly for voice quality and reliability."
    },
    {
      value: 99.9,
      suffix: "%",
      label: "System Uptime",
      isDecimal: true,
      description: "Enterprise-grade infrastructure ensuring your agents are always available."
    },
  ];



  const Counter = ({
    end,
    suffix,
    isDecimal,
    duration = 2000
  }: {
    end: number;
    suffix: string;
    isDecimal: boolean;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      // Reset count when component goes out of view
      if (!isVisible) {
        setCount(0);
        return;
      }

      // Start counting animation when component comes into view
      let startTime: number;
      let animationFrameId: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = progress * end;
        setCount(isDecimal ? parseFloat(currentCount.toFixed(1)) : Math.floor(currentCount));
        if (progress < 1 && isVisible) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, [isVisible, end, duration, isDecimal]);

    return (
      <span>
        {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="relative bg-black pt-20 pb-16 lg:pt-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between gap-4 border border-[#1f1f1f] bg-gradient-to-b from-purple-500/10 to-transparent p-8 text-left shadow-lg shadow-purple-500/10"
            >
              {/* Large Number */}
              <div className="text-5xl font-bold text-white lg:text-6xl">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>

              {/* Label */}
              <p className="text-base font-medium text-white lg:text-lg">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
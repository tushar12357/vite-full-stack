import { useState, useEffect, useRef } from "react";
import workflowImage from "@/assets/image.png";

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

const IntelligentAutomation = () => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const steps: WorkflowStep[] = [
    {
      number: 1,
      title: "Lead Captured",
      description: "Instant trigger to captured lead captured lead",
    },
    {
      number: 2,
      title: "AI Calls",
      description: "Instant trigger to captured lead captured lead",
    },
    {
      number: 3,
      title: "CRN Sync",
      description: "Instant trigger to captured lead captured lead",
    },
    {
      number: 4,
      title: "Follow-Up SMS",
      description: "Instant trigger to captured lead captured lead",
    },
    {
      number: 5,
      title: "Analytics",
      description: "Instant trigger to captured lead captured lead",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only animate when section is in viewport
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionHeight = rect.height;
      
      // Check if section is visible in viewport
      if (sectionTop > windowHeight) {
        // Section is below viewport, not visible yet - no steps active
        setActiveSteps([]);
        return;
      }
      
      if (sectionBottom < 0) {
        // Section is above viewport, already scrolled past - all steps active
        setActiveSteps([1, 2, 3, 4, 5]);
        return;
      }
      
      // Section is in viewport - calculate progress based on scroll position
      // Animation starts when section top enters viewport (sectionTop = windowHeight)
      // Animation completes when section bottom reaches viewport top (sectionBottom = 0)
      const animationStart = windowHeight; // When section top is at viewport top
      const animationEnd = -sectionHeight; // When section bottom is at viewport top
      const animationRange = animationStart - animationEnd;
      
      // Current position: how far we've scrolled through the animation
      const currentPosition = animationStart - sectionTop;
      
      // Calculate progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, currentPosition / animationRange));
      
      // Activate steps progressively based on scroll progress
      // Each step activates at 20% intervals (0%, 20%, 40%, 60%, 80%)
      // Ensure at least step 1 is active when section is visible
      const activeCount = Math.min(
        steps.length,
        Math.max(1, Math.ceil(scrollProgress * steps.length))
      );
      
      const newActiveSteps = Array.from({ length: activeCount }, (_, i) => i + 1);
      setActiveSteps(newActiveSteps);
    };

    // Throttle scroll events
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white md:py-32 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-sm md:text-base text-gray-300 font-medium">
            Intelligent Automation
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center mb-4 max-w-4xl mx-auto leading-tight">
          Build Powerful Workflows Without Writing Code
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-400 text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          Drag, drop, and connect. Your automation is live in minutes.
        </p>

        {/* Workflow Steps */}
        <div className="relative pt-10 pb-10">
          {/* Connecting Line - Desktop */}
          <div className="absolute top-[40px] left-0 right-0 h-0.5 hidden md:block z-0">
            <div className="relative h-full">
              {/* Active line (purple) */}
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-500 ease-out"
                style={{
                  width: activeSteps.length > 0 
                    ? `${((activeSteps.length - 1) / (steps.length - 1)) * 100}%` 
                    : "0%",
                  boxShadow: activeSteps.length > 0 
                    ? "0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)" 
                    : "none",
                }}
              />
              {/* Inactive line (white/light gray) */}
              <div
                className="absolute top-0 h-full bg-white/30 transition-all duration-500"
                style={{
                  left: activeSteps.length > 0 
                    ? `${((activeSteps.length - 1) / (steps.length - 1)) * 100}%` 
                    : "0%",
                  width: activeSteps.length > 0 
                    ? `${100 - ((activeSteps.length - 1) / (steps.length - 1)) * 100}%` 
                    : "100%",
                }}
              />
            </div>
          </div>

          {/* Mobile connecting line */}
          <div className="absolute top-[32px] left-1/2 -translate-x-1/2 w-0.5 h-full md:hidden z-0">
            <div className="relative h-full">
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-purple-400 transition-all duration-500 ease-out"
                style={{
                  height: activeSteps.length > 0 
                    ? `${((activeSteps.length - 1) / (steps.length - 1)) * 100}%` 
                    : "0%",
                }}
              />
              <div
                className="absolute top-0 left-0 w-full bg-white/30 transition-all duration-500"
                style={{
                  top: activeSteps.length > 0 
                    ? `${((activeSteps.length - 1) / (steps.length - 1)) * 100}%` 
                    : "0%",
                  height: activeSteps.length > 0 
                    ? `${100 - ((activeSteps.length - 1) / (steps.length - 1)) * 100}%` 
                    : "100%",
                }}
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeSteps.includes(step.number);
              
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div
                    className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-purple-500 shadow-lg shadow-purple-500/50"
                        : "bg-white"
                    }`}
                  >
                    <span
                      className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                        isActive ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 md:mt-8 text-lg md:text-xl font-bold text-gray-200 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentAutomation;


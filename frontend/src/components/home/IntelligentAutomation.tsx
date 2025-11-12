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
      title: "CRM Sync",
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
      
      // Only animate when section is clearly visible in viewport
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionHeight = rect.height;
      
      // Threshold: only start animation when section is clearly visible (not just barely entering)
      const visibilityThreshold = windowHeight * 0.3; // Section must be 30% visible
      const step5ActivationTop = 10; // Step 5 activates when section top is 10px from viewport top
      
      // Check if section is below viewport - no steps active
      if (sectionTop > windowHeight - visibilityThreshold) {
        setActiveSteps([]);
        return;
      }
      
      // Check if section top is at or above 10px from viewport top - activate step 5
      if (sectionTop <= step5ActivationTop) {
        setActiveSteps([1, 2, 3, 4, 5]);
        return;
      }
      
      // Section is in viewport - calculate progress based on scroll position
      // Animation starts when section top is clearly visible (30% threshold)
      // Step 5 activates when section top reaches 10px from viewport top
      const animationStart = windowHeight - visibilityThreshold; // When section is clearly visible
      const animationEnd = step5ActivationTop; // When section top reaches 10px from top
      const animationRange = animationStart - animationEnd;
      
      // Current position: how far we've scrolled through the animation
      const currentPosition = animationStart - sectionTop;
      
      // Calculate progress (0 to 1) - only when section is clearly in viewport
      const scrollProgress = Math.max(0, Math.min(1, currentPosition / animationRange));
      
      // Activate steps progressively based on scroll progress
      // Step 1 activates when section becomes visible, step 5 activates when section top is 10px from viewport top
      let activeCount: number;
      
      if (scrollProgress <= 0.05) {
        // At the start, only step 1 is active
        activeCount = 1;
      } else if (scrollProgress >= 0.95 || sectionTop <= step5ActivationTop + 50) {
        // At the end or when close to 10px, all steps including step 5 are active
        activeCount = steps.length;
      } else {
        // Progressive activation: map progress to step count
        // 0-0.2: step 1, 0.2-0.4: steps 1-2, 0.4-0.6: steps 1-3, 0.6-0.8: steps 1-4, 0.8-1: steps 1-5
        activeCount = Math.min(
          steps.length,
          Math.max(1, Math.ceil(scrollProgress * steps.length))
        );
      }
      
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
      className="bg-white md:py-32 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Tag */}
        <div className="flex justify-center mb-4">
          <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 rounded text-xs text-gray-800 font-medium">
            Intelligent Automation
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-6xl font-bold text-black text-center mb-3 max-w-3xl mx-auto leading-tight">
          Build Powerful Workflows Without Writing Code
        </h2>

        {/* Subtitle */}
        <p className="text-base text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto leading-relaxed">
          Automate your entire sales process, from lead capture to follow-up, with AI-powered workflows that adapt to your business needs.
        </p>

        {/* Workflow Steps */}
        <div className="relative pt-10 pb-10">
          {/* Connecting Line - Desktop (only connects steps 1-4) */}
          <div className="absolute top-[40px] left-0 right-0 h-0.5 hidden md:block z-0">
            <div className="relative h-full">
              {/* Calculate line width based on first 4 steps only */}
              <div className="absolute left-0 right-0" style={{ width: '80%' }}>
                {/* Active line (purple) - only goes up to step 4 */}
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-500 ease-out"
                  style={{
                    width: activeSteps.length > 0 
                      ? `${((Math.min(activeSteps.length, 4) - 1) / 3) * 100}%` 
                      : "0%",
                    boxShadow: activeSteps.length > 0 
                      ? "0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)" 
                      : "none",
                  }}
                />
                {/* Inactive line (light gray) */}
                <div
                  className="absolute top-0 h-full bg-gray-200 transition-all duration-500"
                  style={{
                    left: activeSteps.length > 0 
                      ? `${((Math.min(activeSteps.length, 4) - 1) / 3) * 100}%` 
                      : "0%",
                    width: activeSteps.length > 0 
                      ? `${100 - ((Math.min(activeSteps.length, 4) - 1) / 3) * 100}%` 
                      : "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile connecting line (only connects steps 1-4) */}
          <div className="absolute top-[32px] left-1/2 -translate-x-1/2 w-0.5 md:hidden z-0" style={{ height: '80%' }}>
            <div className="relative h-full">
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-purple-400 transition-all duration-500 ease-out"
                style={{
                  height: activeSteps.length > 0 
                    ? `${((Math.min(activeSteps.length, 4) - 1) / 3) * 100}%` 
                    : "0%",
                }}
              />
              <div
                className="absolute top-0 left-0 w-full bg-gray-200 transition-all duration-500"
                style={{
                  top: activeSteps.length > 0 
                    ? `${((Math.min(activeSteps.length, 4) - 1) / 3) * 100}%` 
                    : "0%",
                  height: activeSteps.length > 0 
                    ? `${100 - ((Math.min(activeSteps.length, 4) - 1) / 3) * 100}%` 
                    : "100%",
                }}
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeSteps.includes(step.number);
              const isStep5 = step.number === 5;
              
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle (only for steps 1-4) */}
                  {!isStep5 ? (
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-purple-500 shadow-lg shadow-purple-500/50"
                          : "bg-gray-100 border-2 border-gray-300"
                      }`}
                    >
                      <span
                        className={`text-lg font-bold transition-colors duration-500 ${
                          isActive ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                  ) : (
                    /* Step 5 - Background with number, glow when active */
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-purple-500 shadow-lg shadow-purple-500/50"
                          : "bg-gray-100 border-2 border-gray-300"
                      }`}
                    >
                      <span
                        className={`text-2xl font-bold transition-colors duration-500 ${
                          isActive ? "text-white" : "text-gray-800"
                        }`}
                        style={
                          isActive
                            ? {
                                textShadow:
                                  "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
                              }
                            : {}
                        }
                      >
                        {step.number}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="mt-6 md:mt-6 text-lg font-bold text-gray-800 mb-1.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed">
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


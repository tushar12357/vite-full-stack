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
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      const windowHeight = window.innerHeight;
      const activeStepsList: number[] = [];
      
      // Trigger points for each step (as percentage of screen height)
      const triggerPoints = {
        1: windowHeight * 0.9,  // Step 1 at 80%
        2: windowHeight * 0.75, // Step 2 at 65%
        3: windowHeight * 0.6,  // Step 3 at 50%
        4: windowHeight * 0.45, // Step 4 at 35%
        5: windowHeight * 0.3,  // Step 5 at 20%
      };
      
      // Check each step individually
      steps.forEach((step) => {
        const stepRef = stepRefs.current[step.number - 1];
        if (!stepRef) return;
        
        const stepRect = stepRef.getBoundingClientRect();
        const stepCenter = stepRect.top + stepRect.height / 2;
        const triggerPoint = triggerPoints[step.number as keyof typeof triggerPoints];
        
        // Step is active when its center reaches or passes its trigger point
        if (stepCenter <= triggerPoint) {
          activeStepsList.push(step.number);
        }
      });
      
      setActiveSteps(activeStepsList);
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
      className="bg-white px-4 md:px-8 overflow-hidden"
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
          {/* Connecting Line - Desktop (connects all 5 steps) */}
          <div className="absolute top-[40px] left-0 right-0 h-0.5 hidden md:block z-0">
            <div className="relative h-full">
              {/* Line spans from step 1 to step 5 */}
              <div className="absolute left-0 right-0" style={{ width: '100%' }}>
                {/* Active line (purple) - progresses from left to right */}
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-500 ease-out"
                  style={{
                    width: activeSteps.length > 0 
                      ? `${((activeSteps.length - 1) / 4) * 100}%` 
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
                      ? `${((activeSteps.length - 1) / 4) * 100}%` 
                      : "0%",
                    width: activeSteps.length > 0 
                      ? `${100 - ((activeSteps.length - 1) / 4) * 100}%` 
                      : "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile connecting line (connects all 5 steps) */}
          <div className="absolute top-[32px] left-1/2 -translate-x-1/2 w-0.5 md:hidden z-0" style={{ height: '100%' }}>
            <div className="relative h-full">
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-purple-400 transition-all duration-500 ease-out"
                style={{
                  height: activeSteps.length > 0 
                    ? `${((activeSteps.length - 1) / 4) * 100}%` 
                    : "0%",
                }}
              />
              <div
                className="absolute top-0 left-0 w-full bg-gray-200 transition-all duration-500"
                style={{
                  top: activeSteps.length > 0 
                    ? `${((activeSteps.length - 1) / 4) * 100}%` 
                    : "0%",
                  height: activeSteps.length > 0 
                    ? `${100 - ((activeSteps.length - 1) / 4) * 100}%` 
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
                  ref={(el) => {
                    stepRefs.current[step.number - 1] = el;
                  }}
                >
                  {/* Circle with purple glow */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-purple-500"
                        : "bg-gray-100 border-2 border-gray-300"
                    }`}
                    style={
                      isActive
                        ? {
                            boxShadow:
                              "0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(168, 85, 247, 0.3)",
                          }
                        : {}
                    }
                  >
                    <span
                      className={`text-lg font-bold transition-colors duration-500 ${
                        isActive ? "text-white" : "text-gray-700"
                      }`}
                      style={
                        isActive
                          ? {
                              textShadow:
                                "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(168, 85, 247, 0.8)",
                            }
                          : {}
                      }
                    >
                      {step.number}
                    </span>
                  </div>

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


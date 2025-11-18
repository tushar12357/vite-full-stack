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
        <h2 className="text-6xl font-semibold text-black text-center mb-3 max-w-3xl mx-auto leading-tight">
          Build Powerful Workflows Without Writing Code
        </h2>

        {/* Subtitle */}
        <p 
          className="text-center mb-12 md:mb-16 mx-auto"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0%',
            width: '228.0404052734375px',
            height: '42px',
            opacity: 1,
          }}
        >
          Drag, drop, and connect. Your automation is live in minutes.
        </p>

        <div className="relative pt-10 pb-10">
          {/* SVG line that connects all steps */}
          <div className="absolute inset-x-0 top-10 hidden md:block">
            <svg viewBox="0 0 1000 80" className="w-full" preserveAspectRatio="none">
              <path
                d="M40 40 C 150 20, 250 20, 360 40 S 570 60, 680 40 S 890 20, 960 40"
                className="stroke-purple-600/20"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M40 40 C 150 20, 250 20, 360 40 S 570 60, 680 40 S 890 20, 960 40"
                className="stroke-purple-500"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset:
                    activeSteps.length > 0
                      ? 1000 - (activeSteps.length / steps.length) * 1000
                      : 1000,
                  transition: "stroke-dashoffset 600ms ease-out",
                  filter: "drop-shadow(0 0 8px rgba(168,85,247,0.6))",
                }}
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4 lg:gap-8">
            {steps.map((step) => {
              const isActive = activeSteps.includes(step.number);

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                  ref={(el) => {
                    stepRefs.current[step.number - 1] = el;
                  }}
                >
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-b from-purple-400 to-purple-600 shadow-[0_15px_40px_rgba(126,34,206,0.35)]"
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

                  <h3 className="mt-6 text-lg font-bold text-gray-800">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-400">
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


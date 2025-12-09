import { useEffect, useRef, useState, CSSProperties } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plug, Shield, Clock } from "lucide-react";
import imageOne from "@/assets/whyChooseCloserX/1.png";
import imageTwo from "@/assets/whyChooseCloserX/2.png";
import imageThree from "@/assets/whyChooseCloserX/3.png";
import Website from "@/assets/Website.png";

const WhyChooseCloserX = () => {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const featureBox1Ref = useRef<HTMLDivElement>(null);
  const featureBox2Ref = useRef<HTMLDivElement>(null);
  const featureBox3Ref = useRef<HTMLDivElement>(null);
  const [areFeaturesVisible, setAreFeaturesVisible] = useState(false);

  const featureGridLayout: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gridTemplateRows: "auto auto",
    gap: "1.5rem",
    gridTemplateAreas: `"div1 div1 div2"
                        "div3 div4 div5"`,
  };

  const gridAreaStyles: Record<string, CSSProperties> = {
    div1: { gridArea: "div1" },
    div2: { gridArea: "div2" },
    div3: { gridArea: "div3" },
    div4: { gridArea: "div4" },
    div5: { gridArea: "div5" },
  };

  useEffect(() => {
    document.title = "Why Leading Teams Choose CloserX | CloserX.ai";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (leftCardRef.current) {
      observer.observe(leftCardRef.current);
    }
    if (rightCardRef.current) {
      observer.observe(rightCardRef.current);
    }

    return () => {
      if (leftCardRef.current) {
        observer.unobserve(leftCardRef.current);
      }
      if (rightCardRef.current) {
        observer.unobserve(rightCardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAreFeaturesVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (featureBox1Ref.current) {
      featureObserver.observe(featureBox1Ref.current);
    }
    if (featureBox2Ref.current) {
      featureObserver.observe(featureBox2Ref.current);
    }
    if (featureBox3Ref.current) {
      featureObserver.observe(featureBox3Ref.current);
    }

    return () => {
      if (featureBox1Ref.current) {
        featureObserver.unobserve(featureBox1Ref.current);
      }
      if (featureBox2Ref.current) {
        featureObserver.unobserve(featureBox2Ref.current);
      }
      if (featureBox3Ref.current) {
        featureObserver.unobserve(featureBox3Ref.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col overflow-x-hidden bg-gradient-to-b from-black to-gray-900">
      
      <main className="flex-1 pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Intelligent Automation Tag */}
        <div className="flex justify-center mb-8">
          <span className="px-4 py-2 border border-[#1f1f1f] bg-[#121212] rounded-sm text-sm font-medium text-white">
            Intelligent Automation
          </span>
        </div>

        {/* Main Title and Subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold  text-white mb-6">
            Why Leading Teams <br /> <span className="mt-3 inline-block">Choose CloserX</span>
          </h1>
          <p className="text-sm md:text-sm text-gray-300 max-w-sm mx-auto">
            Automate, manage, and scale thousands of calls from one unified Voice AI Operating System.
          </p>
        </div>

        {/* Two Content Blocks */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-4 p-3">
          {/* Left Content Block: Chat Interface */}
          <div 
            ref={leftCardRef}
            className={`flex flex-col border-2 border-[#1f1f1f] rounded-xl overflow-hidden lg:col-span-7 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="w-full">
              <img 
                src="https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69208a782965fa23dfc3dc78.png" 
                alt="CloserX Platform Interface" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Title and Description */}
            <div className="p-6">
              <h3 className="text-2xl font-normal text-white mb-2">Launch in 24 Hours</h3>
              <p className="text-gray-300 text-sm">
                From signup to fully branded platform.<br /> No technical skills, no setup headaches, no delays.
              </p>
            </div>
          </div>

          {/* Right Content Block: Scale Without Limits */}
          <div 
            ref={rightCardRef}
            className={`flex flex-col border-2 border-[#1f1f1f] rounded-xl overflow-hidden lg:col-span-3 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="w-full">
              <img 
                src={Website}
                alt="Scale Without Limits" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Title and Description */}
            <div className="p-6">
              <h3 className="text-2xl font-normal text-left text-white mb-2">Scale Without Limits</h3>
              <p className="text-gray-300 text-left text-sm">
                Multi-tenant architecture supporting unlimited clients and 10,000+ concurrent calls. Built for enterprise scale.
              </p>
            </div>
          </div>
        </div>

        {/* Three Feature Boxes */}
        <div className="max-w-6xl mt-10 mx-auto">
  {/* Outer grid: first two cards combined = 70% (lg:col-span-7), last card = 30% (lg:col-span-3) */}
  <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 items-stretch">
    {/* LEFT: container for the first two cards (combined 70% on lg) */}
    <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Integrations Box (first card) */}
      <div
        ref={featureBox1Ref}
        className={`border-2 border-[#1f1f1f] rounded-xl p-6 bg-gray-900 transition-all duration-1000 ease-out h-full flex flex-col ${
          areFeaturesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        <div className="rounded-lg mb-6 flex items-center justify-center h-[250px]">
          <img 
            src={imageOne} 
            alt="Integrations" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Plug className="w-5 h-5 text-purple-400" />
          <h3 className="text-xl font-bold text-white">Integrations</h3>
        </div>
        <p className="text-gray-300 text-sm">CRMs, calendars, and business tools. All connected.</p>
      </div>

      {/* Enterprise Security Box (second card) */}
      <div
        ref={featureBox2Ref}
        className={`border-2 border-[#1f1f1f] rounded-xl p-6 bg-gray-900 transition-all duration-1000 ease-out h-full flex flex-col ${
          areFeaturesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        <div className="rounded-lg mb-6 flex items-center justify-center h-[250px]">
          <img 
            src={imageTwo} 
            alt="Enterprise Security" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-purple-400" />
          <h3 className="text-xl font-bold text-white">Enterprise Security</h3>
        </div>
        <p className="text-gray-300 text-sm">Bank-level encryption with industry-leading compliance</p>
      </div>
    </div>

    {/* RIGHT: single card that takes 30% on large screens */}
    <div
      ref={featureBox3Ref}
      className={`col-span-1 lg:col-span-3 border-2 border-[#1f1f1f] rounded-xl p-6 bg-gray-900 transition-all duration-1000 ease-out h-full flex flex-col ${
        areFeaturesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}
    >
      <div className="rounded-lg mb-6 flex items-center justify-center h-[250px]">
        <img 
          src={imageThree} 
          alt="24/7 Support" 
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-5 h-5 text-purple-400" />
        <h3 className="text-xl font-bold text-white">24/7</h3>
      </div>
      <p className="text-gray-300 text-sm">Dedicated success manager, technical support, and exclusive partner community access.</p>
    </div>
  </div>
</div>

      </main>

    </div>
  );
};

export default WhyChooseCloserX;


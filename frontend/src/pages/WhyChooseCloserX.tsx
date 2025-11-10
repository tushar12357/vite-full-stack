import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, Image, Globe, Send, ChevronDown, Plug, Shield, Clock } from "lucide-react";

const WhyChooseCloserX = () => {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const featureBox1Ref = useRef<HTMLDivElement>(null);
  const featureBox2Ref = useRef<HTMLDivElement>(null);
  const featureBox3Ref = useRef<HTMLDivElement>(null);
  const [areFeaturesVisible, setAreFeaturesVisible] = useState(false);

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
    <div className="min-h-screen bg-black flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Intelligent Automation Tag */}
        <div className="flex justify-center mb-8">
          <span className="px-4 py-2 border border-white rounded-full text-sm font-medium text-white">
            Intelligent Automation
          </span>
        </div>

        {/* Main Title and Subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Why Leading Teams <br /> Choose CloserX
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Automate, manage, and scale thousands of calls from one unified Voice AI Operating System.
          </p>
        </div>

        {/* Two Content Blocks */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-12  p-3">
          {/* Left Content Block: Chat Interface */}
          <div 
            ref={leftCardRef}
            className={`flex flex-col border-2 border-purple-500/30 rounded-xl p-3 lg:col-span-7 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 w-full">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                <div className="flex items-center gap-2 px-4 py-2 text-blue-600 border-b-2 border-blue-600">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-semibold text-sm">Chat with assistant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 text-gray-500">
                  <Image className="w-5 h-5" />
                  <span className="text-sm">Generate photos</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 text-gray-500">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm">Web search</span>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-end">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-[70%] text-sm">
                    Wow, thank you!
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-[70%] text-sm">
                    You're welcome! If you need any more help or have any other questions, feel free to ask.
                  </div>
                </div>
              </div>
              
              {/* Input Field */}
              <div className="border-t border-gray-200 pt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask something..."
                    className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                  />
                  <Send className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ChatGPT can make mistakes. Consider checking important information.
                </p>
              </div>
            </div>
            
            {/* Title and Description */}
            <h3 className="text-3xl font-bold text-white mt-8 mb-2">Launch in 24 Hours</h3>
            <p className="text-gray-300">
              From signup to fully branded platform. No technical skills, no setup headaches, no delays.
            </p>
          </div>

          {/* Right Content Block: Scale Without Limits */}
          <div 
            ref={rightCardRef}
            className={`flex flex-col items-center border-2 border-purple-500/30 rounded-xl p-3 lg:col-span-3 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex items-center justify-center h-[350px]">
              {/* Wireframe Globe Graphic */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300"
              >
                {/* Main circle */}
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Horizontal ellipses */}
                {Array.from({ length: 10 }).map((_, i) => {
                  const angle = (i / 10) * Math.PI / 2;
                  const rx = 90 * Math.cos(angle);
                  return (
                    <ellipse
                      key={`h-ellipse-${i}`}
                      cx="100"
                      cy="100"
                      rx={rx}
                      ry="90"
                      transform={`rotate(${i * 18} 100 100)`}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.6"
                    />
                  );
                })}
                
                {/* Vertical ellipses */}
                {Array.from({ length: 10 }).map((_, i) => {
                  const angle = (i / 10) * Math.PI / 2;
                  const ry = 90 * Math.cos(angle);
                  return (
                    <ellipse
                      key={`v-ellipse-${i}`}
                      cx="100"
                      cy="100"
                      rx="90"
                      ry={ry}
                      transform={`rotate(${i * 18} 100 100)`}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.6"
                    />
                  );
                })}
                
                {/* Additional grid lines for more detail */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <line
                    key={`line-${i}`}
                    x1="100"
                    y1="10"
                    x2="100"
                    y2="190"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.4"
                    transform={`rotate(${i * 36} 100 100)`}
                  />
                ))}
              </svg>
            </div>
            
            {/* Title and Description */}
            <h3 className="text-3xl font-bold text-left text-white mt-2 mb-2">Scale Without Limits</h3>
            <p className="text-gray-300 text-left max-w-sm">
              Multi-tenant architecture supporting unlimited clients and 10,000+ concurrent calls. Built for enterprise scale.
            </p>
          </div>
        </div>

        {/* Three Feature Boxes */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Integrations Box */}
          <div 
            ref={featureBox1Ref}
            className={`border-2 border-purple-500/30 rounded-xl p-6 bg-black/50 transition-all duration-1000 ease-out ${
              areFeaturesVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-800">Change mode</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-800">Customized</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Chat with assistant</span>
                  <span className="text-xs">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Generate image</span>
                  <span className="text-xs">500 Credits</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Web search</span>
                  <span className="text-xs">Unlimited</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Plug className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Integrations</h3>
            </div>
            <p className="text-gray-300 text-sm">CRMs, calendars, and business tools. All connected.</p>
          </div>

          {/* Enterprise Security Box */}
          <div 
            ref={featureBox2Ref}
            className={`border-2 border-purple-500/30 rounded-xl p-6 bg-black/50 transition-all duration-1000 ease-out ${
              areFeaturesVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="space-y-2">
                <div className="text-xs text-gray-400 p-2 bg-gray-50 rounded">our above recommendations {'{'} temp</div>
                <div className="text-xs text-gray-400 p-2 bg-gray-50 rounded">te two [ define technology ] tests for the above</div>
                <div className="text-xs text-gray-400 p-2 bg-gray-50 rounded">write the above text to be more verbose and inclu</div>
                <div className="flex gap-2 mt-3">
                  <button className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded">ESLinter prompt</button>
                  <button className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded">Find array la</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Enterprise Security</h3>
            </div>
            <p className="text-gray-300 text-sm">Bank-level encryption with industry-leading compliance</p>
          </div>

          {/* 24/7 Support Box */}
          <div 
            ref={featureBox3Ref}
            className={`border-2 border-purple-500/30 rounded-xl p-6 bg-black/50 transition-all duration-1000 ease-out ${
              areFeaturesVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-center h-[200px] relative">
              {/* Wireframe Head Illustration */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                {/* Head outline */}
                <path
                  d="M60 20 C45 20, 30 30, 30 50 C30 70, 40 85, 60 90 C80 85, 90 70, 90 50 C90 30, 75 20, 60 20"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Maze-like lines inside head */}
                <path d="M45 35 L55 45 L50 55 L60 60" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.6" />
                <path d="M75 35 L65 45 L70 55 L60 60" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.6" />
                <path d="M50 70 L60 75 L55 80 L60 85" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.6" />
                <path d="M70 70 L60 75 L65 80 L60 85" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.6" />
                {/* Additional maze lines */}
                <circle cx="50" cy="40" r="2" fill="#3B82F6" opacity="0.4" />
                <circle cx="70" cy="40" r="2" fill="#3B82F6" opacity="0.4" />
                <path d="M45 50 Q60 55 75 50" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.4" />
              </svg>
              {/* Speech bubbles */}
              <div className="absolute top-8 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-lg">Kate</div>
              <div className="absolute bottom-8 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-lg">Jake</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">24/7</h3>
            </div>
            <p className="text-gray-300 text-sm">Dedicated success manager, technical support, and exclusive partner community access.</p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default WhyChooseCloserX;


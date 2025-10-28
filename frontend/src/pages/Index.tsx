import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestFreeCall from "@/components/home/TestFreeCall";
import LogoCloud from "@/components/home/LogoCloud";
import StatsCounter from "@/components/home/StatsCounter";
import FeatureCards from "@/components/home/FeatureCards";
import WorkflowShowcase from "@/components/home/WorkflowShowcase";
import CallDashboard from "@/components/home/CallDashboard";
import CustomizationPreview from "@/components/home/CustomizationPreview";
import MetricsComparison from "@/components/home/MetricsComparison";
import MobileAppShowcase from "@/components/home/MobileAppShowcase";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FAQAccordion from "@/components/home/FAQAccordion";
import FinalCTA from "@/components/home/FinalCTA";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { GradientOrbs } from "@/components/ui/gradient-orbs";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Globe, Shield } from "lucide-react";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";

const Index = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Voice Agents",
      description: "Human-like conversations in 50+ languages with advanced natural language processing",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full White-Label",
      description: "Complete customization of colors, logos, domains - make it truly yours",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Launch in 24 Hours",
      description: "Pre-built platform ready to deploy with zero technical hassle",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II, GDPR, and HIPAA compliant with bank-level encryption",
    },
  ];

  const stats = [
    { value: "10M+", label: "Calls Processed" },
    { value: "500+", label: "Active Partners" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "99.9%", label: "Uptime SLA" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Enhanced Background */}
      <main className="relative pt-40 pb-32 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots-animated opacity-60" />
        
        {/* Mesh Gradient Orbs */}
        <GradientOrbs count={4} colors={['#6366F1', '#06B6D4', '#8B5CF6', '#EC4899']} />
        
        {/* Floating Geometric Shapes */}
        <FloatingShapes count={12} theme="color" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200/60 rounded-full mb-8 hover:scale-105 transition-transform shadow-lg backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
              <span className="text-sm font-bold bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent">Trusted by 500+ agencies worldwide</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              Launch Your Own<br />
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] blur-2xl opacity-30 animate-pulse"></span>
                <span className="relative bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  AI Calling Platform
                </span>
              </span>
              <br />in Minutes
            </h1>
            
            <p className="text-2xl lg:text-3xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              White-label AI voice agents that handle <span className="font-bold text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text">10,000+ calls/day</span>
              <br />Fully branded. Fully yours. Launch in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
              <button className="group relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.6)] hover:-translate-y-1 hover:scale-105 transition-all overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative">Try Live Demo</span>
                <ArrowRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="flex items-center gap-3 px-10 py-5 bg-white border-3 border-[#6366F1] text-[#6366F1] text-xl font-bold rounded-2xl hover:bg-[#6366F1] hover:text-white hover:-translate-y-1 hover:scale-105 transition-all shadow-xl">
                Schedule a Demo
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Launch in 24 hours
              </span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 p-10 bg-gradient-to-br from-white to-indigo-50 rounded-3xl border-2 border-indigo-100 shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)] transition-all backdrop-blur-sm">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform">
                <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mb-32">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 text-center mb-6">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-slate-700 text-center mb-16 max-w-3xl mx-auto font-medium">
              A complete platform with all the tools your business needs to succeed
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative p-8 bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-3xl hover:border-[#6366F1] hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)] hover:-translate-y-2 transition-all group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-base text-slate-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Propositions - Why Choose CloserX */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6">
                Why Choose CloserX.ai?
              </h2>
              <p className="text-2xl text-slate-700 max-w-4xl mx-auto font-medium">
                The complete white-label solution built for enterprise scale
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Large Feature Card - Launch Fast */}
              <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] hover:p-[4px] transition-all hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.6)]">
                <div className="h-full bg-white rounded-[calc(2rem-3px)] p-10 lg:p-12 relative overflow-hidden hover:bg-gradient-to-br hover:from-white hover:to-indigo-50 transition-all">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-300/40 to-purple-300/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
                      <Zap className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-bold text-indigo-900">Lightning Fast</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                      Launch in<br />24 Hours
                    </h3>
                    <p className="text-slate-600 text-lg mb-6 max-w-md">
                      From signup to fully branded platform. No technical skills, no setup headaches, no delays.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">Pre-configured platform</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">White-label ready</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">Zero coding required</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medium Feature Card - Scale */}
              <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 p-8 lg:p-10">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold text-white">∞</div>
                      <div className="text-white/80 text-sm font-medium">Unlimited</div>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Scale Without Limits
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Multi-tenant architecture supporting unlimited clients and 10,000+ concurrent calls. Built for enterprise scale.
                  </p>
                </div>
              </div>

              {/* Small Feature Card - White Label */}
              <div className="group relative overflow-hidden rounded-3xl bg-slate-900 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    100% White-Label
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Your logo, colors, and domain. Make it truly yours.
                  </p>
                </div>
              </div>

              {/* Small Feature Card - Integrations */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 p-8 border-2 border-purple-200">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-purple-900">50+</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-2">
                    Integrations
                  </h3>
                  <p className="text-purple-700 text-sm">
                    CRMs, calendars, and business tools. All connected.
                  </p>
                </div>
              </div>

              {/* Medium Feature Card - Security */}
              <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-white border-2 border-slate-200 p-8 lg:p-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                        Enterprise Security
                      </h3>
                      <p className="text-slate-600">
                        Bank-level encryption with industry-leading compliance
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 rounded-xl bg-slate-50">
                      <div className="text-sm font-bold text-slate-900">SOC 2</div>
                      <div className="text-xs text-slate-600">Type II</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-slate-50">
                      <div className="text-sm font-bold text-slate-900">GDPR</div>
                      <div className="text-xs text-slate-600">Compliant</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-slate-50">
                      <div className="text-sm font-bold text-slate-900">HIPAA</div>
                      <div className="text-xs text-slate-600">Ready</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Feature Card - Support */}
              <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-green-500 p-8">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white font-bold text-4xl">24/7</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Priority Support
                  </h3>
                  <p className="text-white/90 text-sm">
                    Dedicated success manager, technical support, and exclusive partner community access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
              {[partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4].map((logo, idx) => (
                <img 
                  key={idx}
                  src={logo} 
                  alt={`Partner Logo ${idx + 1}`}
                  className="h-12 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all hover:scale-110 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* New Homepage Sections */}
      <TestFreeCall />
      <LogoCloud />
      <StatsCounter />
      <FeatureCards />
      <WorkflowShowcase />
      <CallDashboard />
      <CustomizationPreview />
      <MetricsComparison />
      <MobileAppShowcase />
      <TestimonialsCarousel />
      <FAQAccordion />
      <FinalCTA />

      <Footer />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Index;

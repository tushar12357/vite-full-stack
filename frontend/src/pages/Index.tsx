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
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { GradientOrbs } from "@/components/ui/gradient-orbs";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Globe, Shield, MessageSquare, Image, Send } from "lucide-react";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";
import WhyChooseCloserX from "./WhyChooseCloserX";
import FeatureGrid from "./featureGrid";
import Hero from "@/components/home/hero";
import PlugAndPlay from "@/components/home/PlugAndPlay";
import IntelligentAutomation from "@/components/home/IntelligentAutomation";
import DiscoverCloserX from "@/components/home/DiscoverCloserX";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <WhyChooseCloserX />  
      <FeatureGrid/>
      <FeatureCards/>
      <StatsCounter/>
      <PlugAndPlay/>
      <IntelligentAutomation/>
      <DiscoverCloserX/>
      <Testimonials/>
      <FAQ/>
      <FinalCTA/>
      <Footer/>

      {/* New Homepage Sections */}
      {/* <TestFreeCall />
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
      <Footer /> */}


      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes purple-wave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee 3s linear infinite;
          will-change: transform;
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

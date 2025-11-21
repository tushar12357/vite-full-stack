import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/home/StatsCounter";
import FeatureCards from "@/components/home/FeatureCards";

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
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseCloserX />
      <FeatureGrid />
      <FeatureCards />
      <StatsCounter />
      <PlugAndPlay />
      <IntelligentAutomation />
      <DiscoverCloserX />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes purple-wave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// 🧩 Import your pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Platform from "./pages/Platform";
import VoiceAgents from "./pages/VoiceAgents";
import WhiteLabel from "./pages/WhiteLabel";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import AcceptableUse from "./pages/AcceptableUse";
import OutboundSales from "./pages/OutboundSales";
import InboundSupport from "./pages/InboundSupport";
import AppointmentScheduling from "./pages/AppointmentScheduling";
import LeadQualification from "./pages/LeadQualification";
import FollowUpAutomation from "./pages/FollowUpAutomation";
import ForAgencies from "./pages/ForAgencies";
import RealEstate from "./pages/RealEstate";
import Healthcare from "./pages/Healthcare";
import FinancialServices from "./pages/FinancialServices";
import Ecommerce from "./pages/Ecommerce";
import CallCenters from "./pages/CallCenters";
import ForEnterprises from "./pages/ForEnterprises";
import ForResellers from "./pages/ForResellers";
import ROICalculator from "./pages/ROICalculator";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import HelpCenter from "./pages/HelpCenter";
import HelpArticle from "./pages/HelpArticle";
import VideoTutorials from "./pages/VideoTutorials";
import VideoDetail from "./pages/VideoDetail";
import Templates from "./pages/Templates";
import TrustCenter from "./pages/TrustCenter";
import Integrations from "./pages/Integrations";
import UptimeSLA from "./pages/UptimeSLA";
import Partners from "./pages/Partners";
import WhyChooseCloserX from "./pages/WhyChooseCloserX";
import Careers from "./pages/Careers";

// 🧩 Import LunaWidget (the floating chat button)
import LunaWidget from "@/components/LunaWidget";
import CallManagement from "./pages/CallManagement";
import Automation from "./pages/Automation";

const queryClient = new QueryClient();

// 🔄 Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ExternalRedirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.open(to, "_blank", "noopener,noreferrer");
      navigate("/", { replace: true });
    }
  }, [navigate, to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Opening CloserX API docs in a new tab...
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/voice-agents" element={<VoiceAgents />} />
          <Route path="/white-label" element={<WhiteLabel />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-choose-closerx" element={<WhyChooseCloserX />} />

          {/* Legal */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          {/* Resources */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/success-stories" element={<CaseStudies />} />
          <Route path="/success-stories/:id" element={<CaseStudy />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/help/:category" element={<HelpCenter />} />
          <Route path="/help/article/:id" element={<HelpArticle />} />
          <Route path="/videos" element={<VideoTutorials />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/security" element={<TrustCenter />} />
          <Route path="/uptime-sla" element={<UptimeSLA />} />

          {/* Coming Soon placeholders */}
          <Route path="/docs" element={<ComingSoon />} />
          <Route path="/call-management" element={<CallManagement />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/api-docs" element={<ExternalRedirect to="https://docs.closerx.ai/api-reference/introduction" />} />
          <Route path="/solutions/*" element={<ComingSoon />} />
          <Route path="/industries/*" element={<ComingSoon />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partner-program" element={<ComingSoon />} />
          <Route path="/affiliate" element={<ComingSoon />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/compliance" element={<ComingSoon />} />
          <Route path="/press" element={<ComingSoon />} />
          <Route path="/login" element={<ComingSoon />} />

          {/* Use Cases */}
          <Route path="/use-cases/outbound-sales" element={<OutboundSales />} />
          <Route path="/use-cases/inbound-support" element={<InboundSupport />} />
          <Route path="/use-cases/appointment-scheduling" element={<AppointmentScheduling />} />
          <Route path="/use-cases/lead-qualification" element={<LeadQualification />} />
          <Route path="/use-cases/follow-up-automation" element={<FollowUpAutomation />} />

          {/* Industries */}
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />
          <Route path="/industries/call-centers" element={<CallCenters />} />

          {/* Teams */}
          <Route path="/teams/agencies" element={<ForAgencies />} />
          <Route path="/teams/enterprises" element={<ForEnterprises />} />
          <Route path="/teams/resellers" element={<ForResellers />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* 🟣 Luna floating widget */}
      <LunaWidget />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

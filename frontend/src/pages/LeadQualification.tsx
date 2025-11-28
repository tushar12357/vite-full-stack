import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { leadQualificationData } from "@/data/leadQualificationData";
import uiScreenshot from "@/assets/solution/lead qaulification/1.png";
import workflowImage from "@/assets/solution/lead qaulification/2.png";
import SolutionHero from "@/components/SolutionHero";
import ProblemCard from "@/components/ProblemCard";
import CriteriaCard from "@/components/CriteriaCard";
import FeatureCard from "@/components/FeatureCard";
import TwoColumnFeatureSection from "@/components/TwoColumnFeatureSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import ContentCarouselSection from "@/components/ContentCarouselSection";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

const LeadQualification = () => {
  useEffect(() => {
    document.title = "AI Lead Qualification | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Stop wasting time on bad leads. AI agents call, qualify, and score every lead automatically so your sales team only talks to ready-to-buy prospects."
      );
    }
  }, []);

  const { hero, stats, problems, solutions, criteria, features, videoSection, problemSection, solutionSection, howItWorks, qualificationCriteria, featuresSection, customerStorySection, results, cta, twoColumnSection } = leadQualificationData;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section - Two Column Layout */}
      <SolutionHero hero={hero} uiScreenshot={uiScreenshot} imageAlt="Lead Qualification Dashboard" />


      {/* Problem Section */}
      <ContentCarouselSection
        tag="Intelligent Automation"
        title={problemSection.title}
        description={problemSection.description}
        items={problems}
        itemsPerView={4}
        renderItem={(problem) => (
          <ProblemCard
            title={problem.title}
            description={problem.description}
            iconUrl={problem.iconUrl}
          />
        )}
        showNavigation={true}
        backgroundColor="bg-black"
      />

      {/* Two Column Feature Section */}
      {twoColumnSection && (
        <TwoColumnFeatureSection
          data={{
            ...twoColumnSection,
            rightImage: workflowImage,
          }}
          className="!bg-black [&_*]:!text-white [&_span]:!bg-gray-800 [&_span]:!border-gray-700 [&_span]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_p]:!text-white/80 [&_h4:hover]:!text-purple-400"
          disableAnimation={true}
        />
      )}



      {/* How It Works */}
      <HowItWorksSection data={howItWorks} />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Qualification Criteria */}
      <ContentCarouselSection
        tag="Intelligent Automation"
        title={qualificationCriteria.title}
        description={qualificationCriteria.description}
        items={criteria}
        itemsPerView={4}
        renderItem={(criterion) => (
          <CriteriaCard
            title={criterion.title}
            description={criterion.description}
          />
        )}
        showNavigation={true}
        backgroundColor="bg-black"
      />

      {/* Features */}
      <ContentCarouselSection
        tag="Intelligent Automation"
        title={featuresSection.title}
        description={featuresSection.description}
        items={features}
        itemsPerView={4}
        renderItem={(feature) => (
          <FeatureCard
            title={feature.title}
            description={feature.description}
            iconUrl={feature.iconUrl}
          />
        )}
        showNavigation={true}
        backgroundColor="bg-black"
      />

      {/* Customer Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              {/* Tag */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white font-medium">
                  {customerStorySection.tag}
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                {customerStorySection.title}
              </h2>

              {/* Statistics */}
              <div className="flex items-center gap-8 mb-8">
                {/* Left Stat */}
                <div className="flex-1">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {customerStorySection.stats.left.value}
                  </div>
                  <div className="text-base text-white/80">
                    {customerStorySection.stats.left.label}
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="h-16 w-px bg-white/20"></div>

                {/* Right Stat */}
                <div className="flex-1">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {customerStorySection.stats.right.value}
                  </div>
                  <div className="text-base text-white/80">
                    {customerStorySection.stats.right.label}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {customerStorySection.primaryButton.text === "Try For Free" ? (
                  <a
                    href="https://luna.closerx.ai/talk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300 text-center block"
                  >
                    {customerStorySection.primaryButton.text}
                  </a>
                ) : (
                  <Button
                    size="lg"
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300"
                  >
                    {customerStorySection.primaryButton.text}
                  </Button>
                )}
                {customerStorySection.secondaryButton.text && customerStorySection.secondaryButton.text !== "" && (
                  customerStorySection.secondaryButton.text === "Talk To Sales" ? (
                    <Link
                      to="/contact"
                      className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-base rounded-full border border-gray-700 transition-all duration-300 text-center block"
                    >
                      {customerStorySection.secondaryButton.text}
                    </Link>
                  ) : (
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-base rounded-full border-gray-700 transition-all duration-300"
                    >
                      {customerStorySection.secondaryButton.text}
                    </Button>
                  )
                )}
              </div>
            </div>

            {/* Right Column - UI Screenshot */}
            <div className="relative lg:sticky lg:top-20">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src={uiScreenshot}
                  alt="Customer Story Dashboard"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default LeadQualification;

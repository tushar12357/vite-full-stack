import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import type { SolutionData } from "@/data/solutionDataTypes";
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
import { useLuna } from "@/contexts/LunaContext";

interface SolutionPageProps {
  data: SolutionData;
  images: {
    uiScreenshot: string;
    workflowImage: string;
    calendar: string;
    calendar1: string;
    tirado: string;
  };
  pageTitle: string;
  metaDescription: string;
}

const SolutionPage = ({ data, images, pageTitle, metaDescription }: SolutionPageProps) => {
  useEffect(() => {
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", metaDescription);
    }
  }, [pageTitle, metaDescription]);

  const {
    hero,
    stats,
    problems,
    criteria,
    features,
    problemSection,
    howItWorks,
    qualificationCriteria,
    featuresSection,
    customerStorySection,
    twoColumnSection,
  } = data;

  const { openLuna } = useLuna();

  return (
    <div className="min-h-screen  flex flex-col bg-background">
      <Header />

      {/* Hero Section - Two Column Layout */}
      <SolutionHero hero={hero} uiScreenshot={images.calendar} imageAlt={`${hero.title} Dashboard`} />

      {/* Problem Section */}
      <ContentCarouselSection
        tag="Intelligent Automation"
        title={problemSection.title}
        description={problemSection.description}
        items={problems}
        itemsPerView={4}
        renderItem={(problem) => (
          <ProblemCard title={problem.title} description={problem.description} iconUrl={problem.iconUrl} />
        )}
        showNavigation={true}
        backgroundColor="bg-black"
      />

      {/* Two Column Feature Section */}
      {twoColumnSection && (
        <TwoColumnFeatureSection
          data={{
            ...twoColumnSection,
            rightImage: images.calendar1,
          }}
          className="!bg-black [&_*]:!text-white [&_span]:!bg-gray-800 [&_span]:!border-gray-700 [&_span]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_p]:!text-white/80 [&_h4:hover]:!text-purple-400"
          disableAnimation={true}
        />
      )}

      {/* How It Works */}
      {howItWorks && <HowItWorksSection data={howItWorks} />}

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Qualification Criteria */}
      {criteria && qualificationCriteria && (
        <ContentCarouselSection
          tag="Intelligent Automation"
          title={qualificationCriteria.title}
          description={qualificationCriteria.description}
          items={criteria}
          itemsPerView={4}
          renderItem={(criterion) => (
            <CriteriaCard title={criterion.title} description={criterion.description} />
          )}
          showNavigation={true}
          backgroundColor="bg-black"
        />
      )}

      {/* Features */}
      <ContentCarouselSection
        tag="Intelligent Automation"
        title={featuresSection.title}
        description={featuresSection.description}
        items={features}
        itemsPerView={4}
        renderItem={(feature) => (
          <FeatureCard title={feature.title} description={feature.description} iconUrl={feature.iconUrl} />
        )}
        showNavigation={true}
        backgroundColor="bg-black"
      />

      {/* Customer Story Section */}
      {customerStorySection && (
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left">
                {/* Tag */}
                <div className="mb-6">
                  <span className="inline-block p-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white font-medium">
                    {customerStorySection.tag}
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 leading-tight">
                  {customerStorySection.title}
                </h2>

                {/* Testimonial Quote */}
                {customerStorySection.testimonial && (
                  <div className="mb-8">
                    <blockquote className="text-base md:text-sm text-white/90 italic leading-relaxed mb-4">
                      "{customerStorySection.testimonial}"
                    </blockquote>
                    {(customerStorySection.author || customerStorySection.company) && (
                      <div className="text-sm text-white/70">
                        {customerStorySection.author && <span className="font-semibold">{customerStorySection.author}</span>}
                        {customerStorySection.author && customerStorySection.company && <span> — </span>}
                        {customerStorySection.company && <span>{customerStorySection.company}</span>}
                      </div>
                    )}
                  </div>
                )}

                {/* Statistics */}
                <div className="flex items-center gap-8 mb-8">
                  {/* Left Stat */}
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-2">
                      {customerStorySection.stats.left.value}
                    </div>
                    <div className="text-base text-white/80">
                      {customerStorySection.stats.left.label}
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="h-8 w-px bg-white/20"></div>

                  {/* Right Stat */}
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-2">
                      {customerStorySection.stats.right.value}
                    </div>
                    <div className="text-sm text-white/80">
                      {customerStorySection.stats.right.label}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {customerStorySection.primaryButton.text.includes("Get Started") || customerStorySection.primaryButton.text.includes("Start") ? (
                    <a
                      href="https://offer.closerx.ai?utm_source=website&utm_medium=button&utm_campaign=solution_page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300 whitespace-nowrap text-center"
                    >
                      {customerStorySection.primaryButton.text}
                    </a>
                  ) : (
                    <Button
                      size="lg"
                      className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300 whitespace-nowrap"
                    >
                      {customerStorySection.primaryButton.text}
                    </Button>
                  )}
                  {customerStorySection.secondaryButton.text === "Talk To Sales" || customerStorySection.secondaryButton.text.includes("Sales") || customerStorySection.secondaryButton.text.includes("Demo") ? (
                    customerStorySection.secondaryButton.text.includes("Demo") ? (
                      <button
                        onClick={openLuna}
                        className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-base rounded-full border border-gray-700 transition-all duration-300 whitespace-nowrap text-center"
                      >
                        {customerStorySection.secondaryButton.text}
                      </button>
                    ) : (
                      <a
                        href="/contact"
                        className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-base rounded-full border border-gray-700 transition-all duration-300 whitespace-nowrap text-center"
                      >
                        {customerStorySection.secondaryButton.text}
                      </a>
                    )
                  ) : (
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-base rounded-full border-gray-700 transition-all duration-300 whitespace-nowrap"
                    >
                      {customerStorySection.secondaryButton.text}
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Column - UI Screenshot */}
              <div className="relative lg:sticky lg:top-20">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={images.tirado}
                    alt="Customer Story Dashboard"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default SolutionPage;


import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import globePlaceholder from "@/assets/placeholder.svg";
import { CASE_STUDIES_DATA, getAllCaseStudyIds } from "@/data/caseStudiesData";
import video from '../assets/video/purpleBackground.mp4'
import DemoModal from "@/components/DemoModal";

// Featured stories - using real case studies
const FEATURED_STORIES = [
  {
    id: "mike-craft-tradeshow",
    title: "1,500 Daily Calls & 30% Increase in Vendor Participation",
    description:
      "Mike Craft's trade show company client achieved remarkable success, making 1,500 daily calls and increasing vendor participation by 30% year-over-year with CloserX.",
    cta: "View Success Story",
    image: CASE_STUDIES_DATA["mike-craft-tradeshow"]?.image || "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80",
    video: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69271311fbd34495ad12017d.mp4"
  },
  {
    id: "bill-data-agency",
    title: "From Setup to Essential Tool: AI Agency Launches in 30 Minutes",
    description:
      "Bill Data, an AI agency for car dealerships, set up their first AI agent in just 30 minutes. CloserX AI became an essential cornerstone of their technology stack.",
    cta: "Read Success Story",
    image: CASE_STUDIES_DATA["bill-data-agency"]?.image || "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80",
    video: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/692713111e784c250a29b774.mp4"
  },
  {
    id: "enix-ai-whitelabel",
    title: "Building a White-Label AI Calling Service with Unmatched Support",
    description:
      "Enix AI successfully launched their white-label AI calling service with CloserX's unmatched customer service, earning a solid five stars and 100% recommendation.",
    cta: "Explore Story",
    image: CASE_STUDIES_DATA["enix-ai-whitelabel"]?.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    video: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69271311fbd344030312017e.mp4"
  },
  {
    id: "webnamaste-agency",
    title: "Creating Inbound AI Voice Agent in 8 Minutes",
    description:
      "Radha Krishnan created a fully functional inbound AI voice agent in just 8 minutes, discovering endless possibilities with CloserX's extensive platform capabilities.",
    cta: "Watch Story",
    image: CASE_STUDIES_DATA["webnamaste-agency"]?.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    video: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/692713121a0c186be6e3400e.mp4"
  },
  {
    id: "german-terado-business",
    title: "Smooth Onboarding Experience with Dedicated Support",
    description:
      "German Terado praises CloserX's dedicated support team, particularly Ankit, for making the complex onboarding process easy, smooth, and successful.",
    cta: "See Story",
    image: CASE_STUDIES_DATA["german-terado-business"]?.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    video: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69271311cb7a792160b578dc.mp4"
  }
];

const LOGOS = ["Bill Data", "Enix AI", "WebNamaste", "Mike Craft", "German Terado"];

// Convert case studies data to stories format
const STORIES = FEATURED_STORIES.map((story) => {
  const study = CASE_STUDIES_DATA[story.id];
  return {
    id: story.id,
    industry: study?.industry || "Success Story",
    title: story.title,
    action: "Read Now",
    video: story.video,
    image: story.image,
  };
});

export default function CaseStudies() {
  const [storyIdx, setStoryIdx] = useState(0);
  const [query, setQuery] = useState("");
  const [showAllStories, setShowAllStories] = useState(false);

  const featuredStory = FEATURED_STORIES[storyIdx];

  const filteredStories = useMemo(() => {
    if (!query.trim()) return STORIES;
    return STORIES.filter((story) =>
      story.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  // Show only 9 stories initially, or all if showAllStories is true
  const displayedStories = showAllStories ? filteredStories : filteredStories.slice(0, 9);
  const hasMoreStories = filteredStories.length > 9;

  const changeStory = (dir: "prev" | "next") => {
    setStoryIdx((prev) => {
      const max = FEATURED_STORIES.length - 1;
      if (dir === "prev") {
        return prev === 0 ? max : prev - 1;
      }
      return prev === max ? 0 : prev + 1;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-28 pb-24 space-y-20">
        {/* Hero */}
        <section className="px-4">
          <div className="relative max-w-6xl mx-auto bg-[#0B0B0B] border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center overflow-hidden">
            <div className="flex-1 space-y-6">
              <p className="text-sm text-white/60 uppercase tracking-[0.35em]">
                Featured Success Story
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                {featuredStory.title}
              </h1>
              <p className="text-white/70 text-base leading-relaxed">
                {featuredStory.description}
              </p>
              <Link
                to={`/success-stories/${featuredStory.id}`}
                className="mt-4 inline-flex items-center gap-3 bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 py-3 rounded-full text-sm font-semibold transition-colors w-fit"
              >
                {featuredStory.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-[28px] overflow-hidden border border-white/10 aspect-[4/3]">
                {featuredStory.video ? (
                  <video
                    key={featuredStory.video}
                    src={featuredStory.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={featuredStory.image}
                    alt="Featured story visual"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <button
              onClick={() => changeStory("prev")}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 transition-colors z-10"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => changeStory("next")}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 transition-colors z-10"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </section>

        {/* Logo Marquee */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center gap-4 flex-wrap">
              {LOGOS.map((logo, idx) => (
                <div
                  key={`${logo}-${idx}`}
                  className="text-white/70 text-lg font-semibold tracking-wide"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stories grid */}
        <section id="stories" className="px-4 space-y-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Our customers, their stories
              </h2>
              <p className="text-white/60">
                Explore how teams across industries launch with CloserX Voice.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  className="bg-[#0F0F0F] border border-white/10 text-white rounded-full pl-10 py-2"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
            {displayedStories.map((story) => {
              const caseStudy = CASE_STUDIES_DATA[story.id];
              return (
                <Link
                  key={story.id}
                  to={`/success-stories/${story.id}`}
                  className="rounded-[28px] overflow-hidden border border-white/5 flex flex-col bg-transparent hover:border-white/20 transition-colors group"
                >
                  <div className="bg-white/5 flex items-center justify-center aspect-[4/3] overflow-hidden">
                    {story.video ? (
                      <video
                        src={story.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={story.image || caseStudy?.image || globePlaceholder}
                        alt={caseStudy?.company || story.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="bg-[#101010] p-6 flex flex-col gap-4 flex-1">
                    <span className="inline-flex px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] text-white bg-white/10 w-fit">
                      {story.industry}
                    </span>
                    <p className="text-lg font-semibold text-white leading-snug flex-1">
                      {story.title}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70 hover:text-white inline-flex items-center gap-2">
                      {story.action}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {displayedStories.length === 0 && (
            <div className="text-center text-white/60">No stories found.</div>
          )}

          {hasMoreStories && !showAllStories && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAllStories(true)}
                className="px-6 py-3 border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/5 transition-colors"
              >
                Show More +
              </button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto bg-[#0B001A] rounded-[32px] overflow-hidden border border-[#7C3AED]/40 relative">
            <div className="absolute inset-0 opacity-60">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="relative z-10 p-10 text-left space-y-6">
              <h3 className="text-3xl font-semibold">
                Ready to Launch Your AI Calling Platform?
              </h3>
              <p className="text-white/70 max-w-2xl">
                Join 500+ Agencies Building their White-label Business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold w-full sm:w-auto"
                >
                  Get Stories
                </button>
                <DemoModal buttonClassName="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
                  Book Demo
                </DemoModal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

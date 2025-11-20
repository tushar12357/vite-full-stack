import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import globePlaceholder from "@/assets/placeholder.svg";

const FEATURED_STORIES = [
  {
    title: "Adopted agentic RAG to strengthen self-service offerings",
    description:
      "CloserX Voice Agents helped SprintX unify their customer support flows, boosting containment and response times across 2M+ conversations per month.",
    cta: "View Success Story",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Scaled AI phone teams in less than 30 days",
    description:
      "XO Assist deployed multilingual voice agents across sales, support, and renewals to unlock 24/7 coverage without increasing headcount.",
    cta: "Read Success Story",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Transformed onboarding with AI-driven IVR automation",
    description:
      "Delta Care automated 80% of repetitive intake calls, freeing teams to focus on complex patient journeys and premium service moments.",
    cta: "Explore Story",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
  },
];

const LOGOS = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

const STORIES = Array.from({ length: 12 }).map((_, i) => ({
  id: `story-${i + 1}`,
  industry: "Healthcare",
  title: "Transforming voice at scale with AI-driven IVR automation",
  action: "Read Now",
}));

export default function CaseStudies() {
  const [storyIdx, setStoryIdx] = useState(0);
  const [query, setQuery] = useState("");

  const featuredStory = FEATURED_STORIES[storyIdx];

  const filteredStories = useMemo(() => {
    if (!query.trim()) return STORIES;
    return STORIES.filter((story) =>
      story.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

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
              <button className="mt-4 inline-flex items-center gap-3 bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 py-3 rounded-full text-sm font-semibold transition-colors w-fit">
                {featuredStory.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-[28px] overflow-hidden border border-white/10">
                <img
                  src={featuredStory.image}
                  alt="Featured story visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <button
              onClick={() => changeStory("prev")}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => changeStory("next")}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 transition-colors"
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
        <section className="px-4 space-y-10">
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
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className="rounded-[28px] overflow-hidden border border-white/5 flex flex-col bg-transparent"
              >
                <div className="bg-white flex items-center justify-center py-10">
                  <img
                    src={globePlaceholder}
                    alt=""
                    className="w-32 h-32 opacity-60"
                  />
                </div>
                <div className="bg-[#101010] p-6 flex flex-col gap-4 flex-1">
                  <span className="inline-flex px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] text-white bg-white/10 w-fit">
                    {story.industry}
                  </span>
                  <p className="text-lg font-semibold text-white leading-snug flex-1">
                    {story.title}
                  </p>
                  <button className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70 hover:text-white inline-flex items-center gap-2">
                    {story.action}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center text-white/60">No stories found.</div>
          )}

          <div className="flex justify-center">
            <button className="px-6 py-3 border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/5">
              Show More +
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto bg-[#0B001A] rounded-[32px] overflow-hidden border border-[#7C3AED]/40 relative">
            <div className="absolute inset-0 opacity-60">
              <img
                src="https://images.unsplash.com/photo-1527449992864-7fc6f6f5550a?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 p-10 text-center space-y-6">
              <h3 className="text-3xl font-semibold">
                Ready to Launch Your AI Calling Platform?
              </h3>
              <p className="text-white/70">
                Join 500+ agencies building their white-label business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 rounded-full bg-white text-black font-semibold">
                  Get Stories
                </button>
                <button className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10">
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

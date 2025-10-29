import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const VIDEOS = [
  {
    id: "closerx-overview",
    title: "CloserX Overview",
    description: "Get a complete walkthrough of how CloserX works and how you can get started in minutes.",
    embedUrl: "https://www.youtube.com/embed/dfi5YTc3_xE?si=oIgyDutp1fYiZwNk",
    category: "Getting Started",
    featured: true
  },
  {
    id: "ai-call-demo",
    title: "CloserX AI Call Demo",
    description: "Watch a real AI-powered sales conversation handled by CloserX’s intelligent voice agent.",
    embedUrl: "https://www.youtube.com/embed/NQn7KwU-D-4?si=Dq6jBoLuHibcXr3E",
    category: "Demo",
    featured: true
  }
];

const CATEGORIES = ["All", "Getting Started", "Demo"];

export default function VideoTutorials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = VIDEOS.filter(video => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredVideos = VIDEOS.filter(v => v.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">🎥</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Video Tutorials
          </h1>

          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Learn CloserX with step-by-step video guides from our experts
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search video tutorials..."
              className="pl-12 h-14 text-lg bg-card border-2 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-accent text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Featured Tutorials</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredVideos.map(video => (
                <div
                  key={video.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <iframe
                      width="100%"
                      height="315"
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3">{video.category}</Badge>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {video.description}
                    </p>
                    {/* Views removed intentionally */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tutorials */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">All Tutorials</h2>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No videos found. Try a different search.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map(video => (
                <div
                  key={video.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <iframe
                      width="100%"
                      height="315"
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <Badge className="w-fit mb-2 text-xs">{video.category}</Badge>
                    <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 flex-1">
                      {video.description}
                    </p>
                    {/* Duration and views intentionally removed */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

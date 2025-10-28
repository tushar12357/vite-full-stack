import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Play, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const VIDEOS = [
  {
    id: "quick-start-guide",
    title: "Quick Start: Your First AI Agent in 10 Minutes",
    description: "Complete walkthrough of setting up your first voice agent from scratch",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    duration: "10:24",
    category: "Getting Started",
    views: "45K",
    featured: true
  },
  {
    id: "advanced-scripts",
    title: "Advanced Call Script Techniques",
    description: "Learn how to create dynamic, engaging conversations that convert",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    duration: "15:37",
    category: "Advanced",
    views: "32K",
    featured: true
  },
  {
    id: "crm-integration",
    title: "Integrating with Popular CRMs",
    description: "Step-by-step guide to connecting Salesforce, HubSpot, and more",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    duration: "12:15",
    category: "Integrations",
    views: "28K",
    featured: false
  },
  {
    id: "whitelabel-setup",
    title: "White Label Setup for Agencies",
    description: "Complete guide to branding and reselling CloserX",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    duration: "18:42",
    category: "White Label",
    views: "24K",
    featured: false
  },
  {
    id: "optimization-tips",
    title: "Optimizing Call Quality and Performance",
    description: "Best practices for reducing latency and improving voice quality",
    thumbnail: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&q=80",
    duration: "14:28",
    category: "Optimization",
    views: "19K",
    featured: false
  },
  {
    id: "analytics-deep-dive",
    title: "Analytics Dashboard Deep Dive",
    description: "Understanding your metrics and making data-driven decisions",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    duration: "16:54",
    category: "Analytics",
    views: "17K",
    featured: false
  },
  {
    id: "multilingual-setup",
    title: "Setting Up Multilingual Voice Agents",
    description: "Reach global audiences with multi-language support",
    thumbnail: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=800&q=80",
    duration: "11:33",
    category: "Advanced",
    views: "15K",
    featured: false
  },
  {
    id: "appointment-automation",
    title: "Automating Appointment Scheduling",
    description: "Connect your calendar and let AI handle all booking logistics",
    thumbnail: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80",
    duration: "13:20",
    category: "Use Cases",
    views: "21K",
    featured: false
  }
];

const CATEGORIES = ["All", "Getting Started", "Advanced", "Integrations", "White Label", "Optimization", "Analytics", "Use Cases"];

export default function VideoTutorials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = VIDEOS.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
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
                <Link key={video.id} to={`/videos/${video.id}`} className="group">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-sm rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3">{video.category}</Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {video.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Videos Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">All Tutorials</h2>
          
          {filteredVideos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No videos found. Try a different search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map(video => (
                <Link key={video.id} to={`/videos/${video.id}`} className="group">
                  <article className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="h-6 w-6 text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <Badge className="w-fit mb-2 text-xs">{video.category}</Badge>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 flex-1">
                        {video.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3 border-t border-border">
                        <Clock className="h-3 w-3" />
                        <span>{video.duration}</span>
                        <span className="ml-auto">{video.views} views</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

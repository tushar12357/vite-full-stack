import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import VideoHero from "@/components/VideoHero";
import ProblemSection from "@/components/ProblemSection";
import { videoHeroData, sampleVideos, videoCategories, problemSectionData, solutionSectionData, benefitsSectionData } from "@/data/videoData";
import uiScreenshot from "@/assets/image copy.png";
import FinalCTA from "@/components/home/FinalCTA";
export default function VideoTutorials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get featured video for hero
  const featuredVideo = sampleVideos.find(v => v.featured);

  // Use featured video data if available, otherwise use static data
  const heroData = featuredVideo
    ? {
        title: featuredVideo.title,
        description: featuredVideo.description,
        buttonText: videoHeroData.buttonText,
      }
    : videoHeroData;

  const filteredVideos = sampleVideos.filter(video => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || 
      selectedCategory === "All Videos" ||
      video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* HERO SECTION */}
      <VideoHero
        hero={heroData}
        uiScreenshot={uiScreenshot}
        videoId={featuredVideo?.id}
        videoUrl={featuredVideo?.embedUrl}
      />

      {/* Featured Tutorials */}
      <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-white text-lg font-semibold mb-6 text-center">Watch Featured Tutorials</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleVideos.map((video) => (
              <div key={video.id} className="space-y-3">
                <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-white/70 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION WITH SEARCH */}
      <section className="sticky top-24 z-40 bg-black py-4 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Categories on Left */}
            <div className="flex items-center gap-2">
              {videoCategories.map((category) => {
                const isActive = 
                  (selectedCategory === "All" && category.id === "all") ||
                  selectedCategory === category.label;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id === "all" ? "All" : category.label);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Search on Right */}
            <div className="relative flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                placeholder="Search"
                className="pl-10 h-10 w-64 bg-gray-800 border-gray-700 text-white placeholder:text-white/60 focus:border-purple-600 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <ProblemSection
        title={problemSectionData.title}
        problems={problemSectionData.problems}
      />

      {/* SOLUTION SECTION */}
      <ProblemSection
        title={solutionSectionData.title}
        problems={solutionSectionData.solutions}
      />

      {/* BENEFITS SECTION */}
      <ProblemSection
        title={benefitsSectionData.title}
        problems={benefitsSectionData.benefits}
      />


      {/* ALL VIDEOS GRID */}
      <FinalCTA/>

      <Footer />
    </div>
  );
}

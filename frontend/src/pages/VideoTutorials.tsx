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
  const [showMore, setShowMore] = useState(false);

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

      {/* SHOW MORE Button */}
      <section className="bg-black py-8 px-4">
        <div className="max-w-5xl mx-auto flex justify-center">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all duration-300"
          >
            {showMore ? "SHOW LESS -" : "SHOW MORE +"}
          </button>
        </div>
      </section>

      {/* Additional Content When Show More is Clicked */}
      {showMore && (
        <>
          {/* Additional Problem Section */}
          <ProblemSection
            title="More Problems"
            problems={[
              {
                id: "data-quality",
                tag: "Analytics & ROI",
                title: "Data Quality Issues",
                subtitle: "VIDEO",
                date: "7 March 2025",
                videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              },
              {
                id: "lack-insights",
                tag: "Analytics & ROI",
                title: "Lack of Insights",
                subtitle: "VIDEO",
                date: "7 March 2025",
                videoUrl: "https://www.youtube.com/embed/4u8IxN0u3z4",
              },
              {
                id: "inefficient-process",
                tag: "Analytics & ROI",
                title: "Inefficient Process",
                subtitle: "VIDEO",
                date: "7 March 2025",
                videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
              },
              {
                id: "poor-segmentation",
                tag: "Analytics & ROI",
                title: "Poor Segmentation",
                subtitle: "VIDEO",
                date: "7 March 2025",
                videoUrl: "https://www.youtube.com/embed/5YbK0J8Z5X4",
              },
            ]}
          />

          {/* Additional Solution Section */}
          <ProblemSection
            title="More Solutions"
            problems={[
              {
                id: "predictive-analytics",
                tag: "AI Automation",
                title: "Predictive Analytics",
                subtitle: "VIDEO",
                date: "8 March 2025",
                videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
              },
              {
                id: "machine-learning",
                tag: "AI Automation",
                title: "Machine Learning",
                subtitle: "VIDEO",
                date: "8 March 2025",
                videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
              },
              {
                id: "automated-reporting",
                tag: "AI Automation",
                title: "Automated Reporting",
                subtitle: "VIDEO",
                date: "8 March 2025",
                videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
              },
              {
                id: "data-visualization",
                tag: "AI Automation",
                title: "Data Visualization",
                subtitle: "VIDEO",
                date: "8 March 2025",
                videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
              },
            ]}
          />
        </>
      )}

      {/* ALL VIDEOS GRID */}
      <FinalCTA/>

      <Footer />
    </div>
  );
}

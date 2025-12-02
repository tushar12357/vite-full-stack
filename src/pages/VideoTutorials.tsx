import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import ProblemSection from "@/components/ProblemSection";
import { videoHeroData, sampleVideos, problemSectionData, solutionSectionData, benefitsSectionData } from "@/data/videoData";
import uiScreenshot from "@/assets/image copy.png";
import FinalCTA from "@/components/home/FinalCTA";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const VideoCard = ({ video }: { video: any }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="space-y-3">
      <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-gray-900" style={{ paddingTop: "56.25%" }}>
        {isLoading && (
          <Skeleton className="absolute inset-0 w-full h-full bg-gray-800 animate-pulse" />
        )}
        <iframe
          src={video.embedUrl}
          title={video.title}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>
      <div className="text-white">
        <h3 className="text-lg font-semibold">{video.title}</h3>
        <p className="text-white/70 text-sm">{video.description}</p>
      </div>
    </div>
  );
};

export default function VideoTutorials() {
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
              <VideoCard key={video.id} video={video} />
            ))}
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
      <FinalCTA />

      <Footer />
    </div>
  );
}

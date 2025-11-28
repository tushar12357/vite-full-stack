import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BlogHeroProps {
  hero: {
    tag: string;
    title: string;
    description: string;
    buttonText: string;
    author?: string;
    createdAt?: string;
    image?: string;
  };
  uiScreenshot: string;
  featuredPostSlug?: string;
}

const BlogHero = ({ hero, uiScreenshot, featuredPostSlug }: BlogHeroProps) => {
  return (
    <section className="relative bg-black py-16 md:py-16 overflow-hidden min-h-screen mt-16 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Tag */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs text-white font-medium">
                {hero.tag}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed max-w-lg">
              {hero.description}
            </p>

            {/* CTA Button */}
            {featuredPostSlug ? (
              <Link to={`/blog/${featuredPostSlug}`}>
                <Button
                  size="lg"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all duration-300"
                >
                  {hero.buttonText}
                </Button>
              </Link>
            ) : (
              <Button
                size="lg"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all duration-300"
              >
                {hero.buttonText}
              </Button>
            )}
          </div>

          {/* Right Column - UI Screenshot */}
          <div className="relative lg:sticky lg:top-20">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src={hero.image || uiScreenshot}
                alt={hero.title}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;


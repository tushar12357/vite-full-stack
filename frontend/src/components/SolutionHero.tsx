import { Button } from "@/components/ui/button";

interface SolutionHeroProps {
  hero: {
    tag: string;
    title: string;
    titleHighlight?: string;
    description: string;
    primaryButton: {
      text: string;
      variant: "primary" | "secondary";
    };
    secondaryButton: {
      text: string;
      variant: "primary" | "secondary";
    };
  };
  uiScreenshot: string;
  imageAlt?: string;
}

const SolutionHero = ({ hero, uiScreenshot, imageAlt = "Solution Dashboard" }: SolutionHeroProps) => {
  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Tag */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white font-medium">
                {hero.tag}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {hero.title} {hero.titleHighlight && <span className="text-purple-400">{hero.titleHighlight}</span>}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {hero.primaryButton.text === "Try For Free" ? (
                <a
                  href="https://luna.closerx.ai/talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300 whitespace-nowrap text-center"
                >
                  {hero.primaryButton.text}
                </a>
              ) : hero.primaryButton.text.includes("Get Started") || hero.primaryButton.text.includes("Start") ? (
                <a
                  href="https://offer.closerx.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300 whitespace-nowrap text-center"
                >
                  {hero.primaryButton.text}
                </a>
              ) : (
                <Button 
                  size="lg" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300 whitespace-nowrap"
                >
                  {hero.primaryButton.text}
                </Button>
              )}
              {hero.secondaryButton.text === "Talk To Sales" || hero.secondaryButton.text.includes("Sales") ? (
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-base rounded-full border border-gray-700 transition-all duration-300 whitespace-nowrap text-center"
                >
                  {hero.secondaryButton.text}
                </a>
              ) : (
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-base rounded-full border-gray-700 transition-all duration-300 whitespace-nowrap"
                >
                  {hero.secondaryButton.text}
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - UI Screenshot */}
          <div className="relative lg:sticky lg:top-20">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src={uiScreenshot}
                alt={imageAlt}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;


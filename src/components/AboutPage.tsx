import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BorderedButton from "@/components/BorderedButton";
import ContentCarouselSection from "@/components/ContentCarouselSection";
import { Link } from "react-router-dom";
import dashboardImage from "@/assets/image.png";

export interface AboutPageData {
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    icon: string;
  };
  aboutSection: {
    title: string;
    paragraphs: string[];
    buttonText: string;
    buttonLink: string;
  };
  mission: {
    title: string;
    description: string;
  };
  featureCards?: {
    title: string;
    description: string;
    items: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
  };
  coreValues: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

interface AboutPageProps {
  data: AboutPageData;
  pageTitle: string;
  metaDescription: string;
}

const AboutPage = ({ data, pageTitle, metaDescription }: AboutPageProps) => {
  useEffect(() => {
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", metaDescription);
    }
  }, [pageTitle, metaDescription]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-black min-h-screen py-10 md:py-16 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Circular Purple Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-white">{data.hero.icon}</span>
              </div>
            </div>
            
            {/* Tag Button */}
            <div className="flex justify-center mb-6">
              <button className="px-4 py-2 bg-gray-800 rounded-lg text-white text-sm font-semibold uppercase tracking-wide">
                {data.hero.tag}
              </button>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-3 leading-tight">
              {data.hero.title}
            </h1>
            
            {/* Tagline */}
            <p className="text-xs md:text-sm text-white/70 max-w-xl mx-auto">
              {data.hero.subtitle}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            <div 
              className="grid md:grid-cols-2 gap-12 bg-[#121212] lg:gap-16 items-center"
              style={{
                width: '1131px',
                height: '620px',
                opacity: 1,
                transform: 'rotate(0deg)',
                borderRadius: '12px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#1F1F1F'
              }}
            >
              {/* Left Column - Text */}
              <div className="p-6">
                <h2 className="text-4xl md:text-5xl font-normal text-white mb-8">
                  {data.aboutSection.title}
                </h2>
                {data.aboutSection.paragraphs.map((paragraph, index) => (
                  <p key={index} className={`text-lg md:text-[16px] font-medium text-white/80 leading-relaxed ${index === 0 ? 'mb-4' : 'mb-16'}`}>
                    {paragraph}
                  </p>
                ))}
                <Link to={data.aboutSection.buttonLink}>
                  <BorderedButton text={data.aboutSection.buttonText} />
                </Link>
              </div>
              
              {/* Right Column - Dashboard Screenshot */}
              <div className="relative h-[280px] sm:h-[400px] md:h-[620px] lg:h-[620px] xl:h-[620px]">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 h-full">
                  <img 
                    src={dashboardImage} 
                    alt="Dashboard Screenshot" 
                    className="w-[603px] h-[604px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="flex flex-col"
              style={{
                width: '839px',
                height: '143px',
                opacity: 1,
                transform: 'rotate(0deg)',
                gap: '20px',
                margin: '0 auto'
              }}
            >
              <h2 className="text-4xl md:text-5xl font-normal text-white">
                {data.mission.title}
              </h2>
              <p className="text-[14px] md:text-[14px] font-medium text-white/80 leading-relaxed">
                {data.mission.description}
              </p>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        {data.featureCards && (
          <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
                  {data.featureCards.title}
                </h2>
                <p className="text-base text-white/70 max-w-3xl">
                  {data.featureCards.description}
                </p>
              </div>
              {/* Cards Grid - 3 cards per row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.featureCards.items.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-transparent border border-gray-800 p-6"
                    style={{
                      width: '400px',
                      height: '346px',
                      borderRadius: '12px',
                      borderWidth: '1px',
                      opacity: 1,
                      transform: 'rotate(0deg)'
                    }}
                  >
                    <div 
                      className="flex flex-col gap-3 mb-4"
                      style={{
                        width: '256px',
                        height: '113px',
                        opacity: 1,
                        transform: 'rotate(0deg)'
                      }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-medium text-white">{item.title}</h3>
                    </div>
                    <p 
                      className="text-sm text-gray-400 leading-relaxed"
                      style={{
                        width: '334px',
                        height: '72px',
                        opacity: 1,
                        transform: 'rotate(0deg)',
                        marginTop: '100px',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Core Values Section */}
        <ContentCarouselSection
          tag="Our Values"
          title="Our Values"
          description="The principles that guide everything we do"
          items={data.coreValues}
          itemsPerView={4}
          showNavigation={false}
          backgroundColor="bg-black"
          renderItem={(item) => (
            <div className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          )}
        />

        {/* CTA Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div 
              className="bg-[#121212] border border-gray-800 p-12 md:p-16 relative"
              style={{
                width: '1247px',
                height: '213px',
                left: '96px',
                borderRadius: '24px',
                opacity: 1,
                transform: 'rotate(0deg)'
              }}
            >
              <div className="flex flex-col justify-center h-full">
                <div
                  className="flex flex-col"
                  style={{
                    width: '503px',
                    height: '108px',
                    opacity: 1,
                    transform: 'rotate(0deg)',
                    gap: '12px'
                  }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white">
                    {data.cta.title}
                  </h2>
                  <p className="text-base md:text-base text-white/70">
                    {data.cta.description}
                  </p>
                </div>
                <Link to="/contact">
                  <button 
                    className="bg-purple-600 text-[14px] px-6 py-2 hover:bg-purple-700 text-white rounded-full font-normal transition-colors whitespace-nowrap"
                    style={{
                      marginTop: '12px'
                    }}
                  >
                    {data.cta.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;


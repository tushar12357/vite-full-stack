import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Products from "@/components/home/Products";
import { useLuna } from "@/contexts/LunaContext";

const Platform = () => {
  const { openLuna } = useLuna();
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-40 pb-32 px-4 sm:px-6 lg:px-6 ">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center my-20">
            {/* Main Title - H1: Larger size */}
            <h1 className="text-9xl font-bold text-white mb-6 leading-tight">
              The CloserX.ai
              <br />
              Agent Platform
            </h1>

            {/* Subtitle - Body: 16px */}
            <p className="text-base text-white mb-12 max-w-4xl mx-auto leading-relaxed">
              A complete AI calling solution with white-label capabilities,<br />  advanced analytics, and seamless integrations.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-row items-center justify-center gap-6">
              {/* Talk To Sales Button - Pill-shaped with purple background */}
              <a href="/contact" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                Talk To Sales
              </a>

              {/* Create an AI Agent - Text link (not a button) */}
              <button onClick={openLuna} className="text-purple-400 hover:text-purple-500 font-bold text-base transition-colors duration-300">
                Create an AI Agent
              </button>
            </div>
          </div>


        </div>
      </main>

      <Products />
      <FAQ />
      <FinalCTA />

      <Footer />
    </div>
  );
};

export default Platform;

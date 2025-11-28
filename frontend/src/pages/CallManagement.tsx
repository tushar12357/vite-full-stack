import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/home/Products";
import { callManagementProductCards, callManagementHero } from "@/data/callManagementData";

import { Link } from "react-router-dom";

export default function CallManagement() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-40 pb-32 px-4 sm:px-6 lg:px-6 ">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center my-20">
            {/* Main Title - H1: Larger size */}
            <h1 className="text-9xl font-bold text-white mb-6 leading-tight">
              {callManagementHero.titleLines[0]}
              <br />
              {callManagementHero.titleLines[1]}
            </h1>

            {/* Subtitle - Body: 16px */}
            <p className="text-base text-white mb-12 max-w-4xl mx-auto leading-relaxed">
              {callManagementHero.description}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-row items-center justify-center gap-6">
              {/* Talk To Sales Button - Pill-shaped with purple background */}
              <Link
                to={callManagementHero.primaryCta.href}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                {callManagementHero.primaryCta.label}
              </Link>

              {/* View Integrations - Text link (not a button) */}
              <Link to={callManagementHero.secondaryCta.href} className="text-purple-400 hover:text-purple-500 font-bold text-base transition-colors duration-300">
                {callManagementHero.secondaryCta.label}
              </Link>
            </div>
          </div>


        </div>
      </main>

      <Products data={callManagementProductCards} showHeader={false} />

      <Footer />
    </div>
  );
}

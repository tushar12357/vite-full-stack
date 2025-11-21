import { useState } from "react";
import { Search, Zap, ChevronRight, Star, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { integrations, categories, marqueeIntegrations } from "@/data/integrationsData";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

const Integrations = () => {
  const [activeTab, setActiveTab] = useState("crm");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = activeTab === "all" || integration.category === activeTab;
    const matchesSearch =
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* 🎯 NEW HERO SECTION - Dark Theme */}
      <section className="relative bg-black pt-32 pb-48 overflow-hidden my-20">
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text and Buttons */}
            <div>
              {/* Tag */}
              <div className="inline-block px-3 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-white font-medium mb-6">
                Integrations
              </div>
              
              {/* Main Title */}
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Connect CloserX to your Tech{" "}
                
              </h1>
              
              {/* Subtitle */}
              <p className="text-base text-white mb-8 leading-relaxed">
                Connect to any CRM, telephony, automation platform
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/integrations" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-xl transition-all duration-300 text-center">
                  Check Integrations
                </a>
                <a href="/contact" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-base rounded-xl transition-all duration-300 text-center">
                  Talk To Sales
                </a>
              </div>
            </div>
            
            {/* Right Section - Integrations List with Marquee Animation */}
            <div className="relative h-[400px] overflow-hidden">
              <div 
                className="space-y-4 animate-marquee-up"
                style={{
                  animation: 'marqueeUp 8s linear infinite',
                }}
              >
                {/* First set of items */}
                {marqueeIntegrations.map((integration, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 border border-gray-700"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                      {integration.logoImage ? (
                        <img 
                          src={integration.logoImage} 
                          alt={integration.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-2xl">{integration.logo}</div>
                      )}
                    </div>
                    <div className="text-white font-semibold text-base">{integration.name}</div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {marqueeIntegrations.map((integration, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 border border-gray-700"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                      {integration.logoImage ? (
                        <img 
                          src={integration.logoImage} 
                          alt={integration.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-2xl">{integration.logo}</div>
                      )}
                    </div>
                    <div className="text-white font-semibold text-base">{integration.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>



      {/* 🧭 CATEGORY SECTION - Dark Theme with Left Navigation */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Navigation Menu */}
            <div className="md:col-span-3">
              <div className="sticky top-24 space-y-2">
                {categories.filter(c => c.id !== "all").map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-base transition-all ${
                      activeTab === category.id
                        ? "bg-purple-600 text-white"
                        : "text-white hover:bg-gray-800"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="md:col-span-9">
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-6xl font-bold text-white mb-4">
                  {categories.find((c) => c.id === activeTab)?.label || "All Integrations"}
                </h2>
                <p className="text-base text-white/80 leading-relaxed">
                  {activeTab === "crm" 
                    ? "Connect your CRM to streamline customer interactions and data management."
                    : activeTab === "payment"
                    ? "Secure payment processing and financial integrations."
                    : activeTab === "automation"
                    ? "Automate workflows and connect with automation platforms."
                    : activeTab === "communication"
                    ? "Enhance communication with messaging and voice platforms."
                    : activeTab === "scheduling"
                    ? "Schedule appointments and manage calendars seamlessly."
                    : activeTab === "analytics"
                    ? "Track performance and gain insights with analytics tools."
                    : "Seamlessly integrate CloserX.ai with the tools you already use."}
                </p>
              </div>

              {/* Integration Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIntegrations.map((integration, index) => (
                  <IntegrationCard 
                    key={index} 
                    integration={integration}
                    onConnect={(integration) => {
                      // Handle connection - you can customize this
                      console.log(`Connecting to ${integration.name}...`);
                      // Example: Open connection modal, navigate to setup page, or call API
                      // window.location.href = `/integrations/connect/${integration.name.toLowerCase().replace(/\s+/g, '-')}`;
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚡ CTA SECTION */}
      <section className="bg-gradient-to-br from-black to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Zap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold text-white mb-4">Don't See Your Tool?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're constantly adding new integrations. Request yours and we'll prioritize it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Request Integration
            </button>
            <Link
              to="/api-docs"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all"
            >
              View API Docs
            </Link>
          </div>
        </div>
      </section>
      <FAQ/>
      <FinalCTA/>
      <Footer />
    </div>
  );
};

/* 🧩 COMPONENTS */
const IntegrationCard = ({ integration, onConnect }) => {
  const handleConnect = (e) => {
    e.stopPropagation();
    if (onConnect) {
      onConnect(integration);
    } else {
      // Default connection handler - you can customize this
      console.log(`Connecting to ${integration.name}...`);
      // You can add navigation, API call, or modal here
      // Example: window.open(`/connect/${integration.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank');
    }
  };

  return (
    <div 
      onClick={handleConnect}
      className="group bg-black rounded-xl p-6 border border-gray-700 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/20 transition-all cursor-pointer flex flex-col items-center text-center"
    >
      {/* Logo - Square icon with rounded corners, dark background, centered */}
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform p-2">
          {integration.logoImage ? (
            <img 
              src={integration.logoImage} 
              alt={integration.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-4xl">{integration.logo}</div>
          )}
        </div>
      </div>

      {/* Brand Name - Large white text, centered */}
      <h3 className="text-xl font-bold text-white mb-3">{integration.name}</h3>

      {/* Description - Smaller white text, multiple lines, centered */}
      <p className="text-sm text-gray-300 leading-relaxed mb-4">{integration.description}</p>

      {/* Popular Badge - Optional */}
      {integration.popular && (
        <div className="mt-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
            <TrendingUp className="w-3 h-3" />
            Popular
          </span>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ value, label, color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
    <div className={`text-3xl font-bold mb-1 ${color}`}>{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

export default Integrations;

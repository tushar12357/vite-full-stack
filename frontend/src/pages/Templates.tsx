import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Star, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { templateHeroData, sampleTemplates, templateCategories } from "@/data/templatesData";
import FinalCTA from "@/components/home/FinalCTA";
export default function Templates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All templates");
  const [displayCount, setDisplayCount] = useState(9);

  const displayedTemplates = sampleTemplates.slice(0, displayCount);

  const filteredTemplates = displayedTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All templates" ||
      selectedCategory === "All" ||
      template.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-[50vh] bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 px-4 bg-black mt-16">
        <div className="max-w-5xl mx-auto min-h-screen">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 text-center">
            {templateHeroData.title}
          </h1>

          <p className="text-sm md:text-base text-white/70 text-center max-w-xl mx-auto mb-8">
            {templateHeroData.subtitle}
          </p>

          {/* Featured Template Card */}
          <div className="bg-black ">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Application Preview */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg p-6">
                  {/* Background window (slightly behind) */}
                  <div className="absolute left-0 top-3 w-[90%] bg-white rounded-lg shadow-2xl transform -rotate-2 opacity-80">
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-purple-600 rounded"></div>
                        <span className="font-semibold text-gray-800 text-sm">Sprint</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-gray-600 mb-1">MAIN</div>
                        <div className="text-xs text-gray-700">Dashboard</div>
                        <div className="text-xs text-gray-700">Calendar</div>
                        <div className="text-xs text-gray-700">Time Off</div>
                        <div className="text-xs text-gray-700">Projects</div>
                      </div>
                    </div>
                  </div>

                  {/* Foreground window */}
                  <div className="relative bg-white rounded-lg shadow-2xl transform rotate-1">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-4 h-4 bg-purple-600 rounded"></div>
                        <span className="font-semibold text-gray-800 text-sm">Sprint</span>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] gap-4">
                        {/* Sidebar */}
                        <div>
                          <div className="text-xs font-semibold text-gray-600 mb-2">MAIN</div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-700">Dashboard</div>
                            <div className="text-xs text-gray-700">Calendar</div>
                            <div className="text-xs text-gray-700">Time Off</div>
                            <div className="text-xs text-gray-700">Projects</div>
                            <div className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">Teams</div>
                            <div className="text-xs text-gray-700">Integrations</div>
                          </div>
                        </div>
                        {/* Main Content */}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="text-xs font-semibold text-gray-800">Teams</div>
                          </div>
                          <div className="text-xs text-gray-600 mb-3">Manage and...</div>
                          <div className="text-xs font-semibold text-gray-800 mb-1">Members</div>
                          <div className="text-xs text-gray-600 mb-3">Display all the team...</div>
                          <button className="text-xs bg-gray-100 px-2 py-1 rounded mb-3">All</button>
                          <div className="text-xs text-gray-600 mb-1">Member Na...</div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-orange-400 rounded-full"></div>
                            <span className="text-xs text-gray-600">Ja...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Template Information */}
              <div className="flex flex-col justify-center bg-black">
                {/* Category Tag */}
                <Badge className="bg-gray-800 text-white mb-3 w-fit px-2 py-1 rounded-md text-xs">
                  {templateHeroData.featuredTemplate.category}
                </Badge>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {templateHeroData.featuredTemplate.name}
                </h2>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed mb-6">
                  {templateHeroData.featuredTemplate.description}
                </p>

                {/* USE TEMPLATE Button */}
                <div className="mb-6">
                  <Link
                    to={`/templates/${templateHeroData.featuredTemplate.id}`}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-md font-semibold text-sm inline-block"
                  >
                    USE TEMPLATE
                  </Link>
                </div>

                {/* Ratings and Downloads - Bottom Right */}
                <div className="flex items-center gap-4">
                  {templateHeroData.featuredTemplate.rating && (
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-green-500 text-green-500" />
                      <span className="text-white font-semibold text-sm">{templateHeroData.featuredTemplate.rating}</span>
                    </div>
                  )}
                  {templateHeroData.featuredTemplate.downloads && (
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-white" />
                      <span className="text-white text-sm">{templateHeroData.featuredTemplate.downloads}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters with Search */}
      <section className="sticky top-24 z-40 bg-black py-4 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap">
              {templateCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id === "all" ? "All templates" : category.label)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.label || (selectedCategory === "All templates" && category.id === "all")
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                placeholder="Search..."
                className="pl-10 h-10 w-64 bg-gray-800 border-gray-700 text-white placeholder:text-white/60 focus:border-purple-600 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-12 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-base text-white/60">No templates found. Try a different search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map(template => (
                <div key={template.id} className="bg-black rounded-xl overflow-hidden hover:border-gray-800 transition-all h-full flex flex-col">
                  {/* Image/Preview Area - White Background */}
                  <div className="relative aspect-video overflow-hidden bg-white rounded-t-xl">
                    {/* Badges - Top Left */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <Badge className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                        {template.category}
                      </Badge>
                      <Badge className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                        {template.isFree ? "Free" : "Premium"}
                      </Badge>
                    </div>
                    {/* Image */}
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content - Black Background */}
                  <div className="p-5 flex flex-col flex-1 bg-black">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{template.name}</h3>
                    <p className="text-sm text-white/70 mb-4 flex-1 leading-relaxed">{template.description}</p>

                    {/* Stats - Rating and Downloads */}
                    <div className="mb-4 flex items-center gap-4">
                      {template.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-green-500 text-green-500" />
                          <span className="text-white text-sm font-semibold">{template.rating}</span>
                        </div>
                      )}
                      {template.downloads && (
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4 text-white" />
                          <span className="text-white text-sm">{template.downloads}</span>
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <div className="pt-2">
                      <Link
                        to={`/templates/${template.id}`}
                        className=" text-white text-xs font-semibold rounded-lg p-3 transition-all uppercase tracking-wider cursor-pointer hover:bg-white hover:text-purple-600 active:bg-black active:text-white focus:outline-none block text-center"
                        style={{
                          background: 'black',
                          border: '1px solid white',
                          outline: 'none',
                          letterSpacing: '0.08em',
                          fontFamily: 'sans-serif',
                        }}
                      >
                        USE TEMPLATE
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More Button */}
      {displayCount < sampleTemplates.length && (
        <section className="pb-12 px-4 bg-black">
          <div className="max-w-5xl mx-auto flex justify-center">
            <button
              onClick={() => setDisplayCount(prev => Math.min(prev + 9, sampleTemplates.length))}
              className="px-8 py-3 bg-transparent border border-white/30 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Load more
            </button>
          </div>
        </section>
      )}
      <FinalCTA />
      <Footer />
    </div>
  );
}

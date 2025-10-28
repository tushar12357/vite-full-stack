import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Download, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TEMPLATES = [
  {
    id: "appointment-scheduler",
    name: "Appointment Scheduler",
    description: "Automated booking and calendar management for any industry",
    category: "Scheduling",
    downloads: "12.5K",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&q=80",
    isFree: true,
    featured: true
  },
  {
    id: "lead-qualifier",
    name: "Lead Qualification",
    description: "Intelligent lead screening and qualification with CRM sync",
    category: "Sales",
    downloads: "10.2K",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    isFree: true,
    featured: true
  },
  {
    id: "customer-support",
    name: "Customer Support",
    description: "24/7 support handling with smart ticket routing",
    category: "Support",
    downloads: "9.8K",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    isFree: true,
    featured: false
  },
  {
    id: "order-tracking",
    name: "Order Tracking",
    description: "Real-time order status updates and delivery info",
    category: "E-commerce",
    downloads: "8.4K",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    isFree: true,
    featured: false
  },
  {
    id: "payment-reminders",
    name: "Payment Reminders",
    description: "Automated payment follow-ups and collection",
    category: "Finance",
    downloads: "7.9K",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    isFree: true,
    featured: false
  },
  {
    id: "survey-feedback",
    name: "Survey & Feedback",
    description: "Collect customer feedback with conversational surveys",
    category: "Research",
    downloads: "6.5K",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80",
    isFree: true,
    featured: false
  }
];

const CATEGORIES = ["All", "Scheduling", "Sales", "Support", "E-commerce", "Finance", "Research"];

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = TEMPLATES.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
            <Badge variant="secondary" className="text-xs font-semibold">50+ FREE</Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Templates & Tools
          </h1>
          
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Pre-built AI voice agent templates ready to deploy in minutes
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search templates..."
              className="pl-12 h-14 text-lg bg-card border-2 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-accent text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Most Popular</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {TEMPLATES.filter(t => t.featured).map(template => (
                <div key={template.id} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge>{template.category}</Badge>
                      {template.isFree && <Badge variant="outline">FREE</Badge>}
                      <div className="flex items-center gap-1 ml-auto text-sm">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-semibold">{template.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{template.name}</h3>
                    <p className="text-muted-foreground mb-4">{template.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Download className="h-4 w-4" />
                        {template.downloads} downloads
                      </div>
                      <Button className="gap-2">
                        Use Template
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Templates Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">All Templates</h2>
          
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No templates found. Try a different search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map(template => (
                <div key={template.id} className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="text-xs">{template.category}</Badge>
                      {template.isFree && <Badge variant="outline" className="text-xs">FREE</Badge>}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{template.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{template.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        <span className="font-semibold">{template.rating}</span>
                      </div>
                      <Button size="sm" variant="ghost" className="gap-2 text-primary font-semibold">
                        Use Template
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Template CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Template?</h2>
            <p className="text-lg mb-6 text-white/90">
              Our team can create a custom AI voice agent tailored specifically to your business needs
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Request Custom Template
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

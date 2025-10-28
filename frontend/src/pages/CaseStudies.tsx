import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, TrendingUp, ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CASE_STUDIES = [
  {
    id: "real-estate-empire",
    company: "Empire Realty Group",
    industry: "Real Estate",
    title: "How Empire Realty Automated 1,000+ Monthly Showings",
    challenge: "Manual appointment scheduling consuming 40+ hours weekly",
    result: "95% automation rate, 40 hours saved per week, 23% increase in bookings",
    metrics: {
      timeSaved: "40 hrs/week",
      roi: "430%",
      automation: "95%"
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    featured: true
  },
  {
    id: "healthcare-clinic",
    company: "MediCare Plus",
    industry: "Healthcare",
    title: "Reducing No-Shows by 67% with AI Reminders",
    challenge: "High patient no-show rates and manual reminder calls",
    result: "67% reduction in no-shows, 98% patient satisfaction",
    metrics: {
      noShowReduction: "67%",
      satisfaction: "98%",
      callsAutomated: "5,000/mo"
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    featured: true
  },
  {
    id: "ecommerce-scale",
    company: "TechGear Direct",
    industry: "E-commerce",
    title: "Scaling Customer Support from 100 to 10,000 Calls",
    challenge: "Unable to handle rapid growth in support inquiries",
    result: "10x increase in call capacity, 45% reduction in support costs",
    metrics: {
      capacity: "10,000 calls/mo",
      costReduction: "45%",
      responseTime: "<30 sec"
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    featured: false
  },
  {
    id: "financial-advisory",
    company: "WealthPath Advisors",
    industry: "Financial Services",
    title: "Qualifying 500 Leads Monthly with Zero Manual Effort",
    challenge: "Lead qualification taking 30+ hours per week",
    result: "100% lead qualification automation, 3x more qualified meetings",
    metrics: {
      leadsQualified: "500/mo",
      meetingsBooked: "3x increase",
      timeToQualify: "2 min avg"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false
  },
  {
    id: "agency-whitelabel",
    company: "Digital Growth Agency",
    industry: "Marketing Agency",
    title: "Building a $50K/Month AI Voice Division in 90 Days",
    challenge: "Wanted to add new revenue stream without hiring",
    result: "$50K monthly recurring revenue, 12 active clients",
    metrics: {
      mrr: "$50K",
      clients: "12",
      profitMargin: "73%"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: false
  },
  {
    id: "automotive-dealership",
    company: "AutoMax Motors",
    industry: "Automotive",
    title: "Doubling Test Drive Bookings with AI Follow-Ups",
    challenge: "Losing leads due to slow manual follow-up",
    result: "2x test drive bookings, 89% lead response rate",
    metrics: {
      bookingIncrease: "2x",
      responseRate: "89%",
      followUpTime: "<5 min"
    },
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    featured: false
  }
];

const INDUSTRIES = ["All", "Real Estate", "Healthcare", "E-commerce", "Financial Services", "Marketing Agency", "Automotive"];

export default function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredStudies = CASE_STUDIES.filter(study => {
    const matchesSearch = study.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Case Studies
          </h1>
          
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Real results from real companies using CloserX AI voice technology
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search case studies..."
              className="pl-12 h-14 text-lg bg-card border-2 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Industry Filters */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {INDUSTRIES.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedIndustry === industry
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-accent text-foreground"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {selectedIndustry === "All" && !searchQuery && (
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Featured Success Stories</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {CASE_STUDIES.filter(s => s.featured).map(study => (
                <Link key={study.id} to={`/case-studies/${study.id}`} className="group">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.company}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                        <span className="font-semibold">{study.company}</span>
                        <Badge variant="outline" className="ml-auto">{study.industry}</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{study.result}</p>
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-2xl font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">All Case Studies</h2>
          
          {filteredStudies.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No case studies found. Try a different search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudies.map(study => (
                <Link key={study.id} to={`/case-studies/${study.id}`} className="group">
                  <article className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.company}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{study.industry}</Badge>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {study.company}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {study.title}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary font-semibold pt-4 border-t border-border">
                        Read Case Study <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

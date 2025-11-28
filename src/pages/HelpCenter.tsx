import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, BookOpen, MessageCircle, Video, FileText, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const CATEGORIES = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Zap,
    description: "Everything you need to launch your first AI agent",
    articleCount: 12,
    color: "text-blue-500"
  },
  {
    id: "voice-agents",
    title: "Voice Agents",
    icon: MessageCircle,
    description: "Configuring and optimizing your AI voice agents",
    articleCount: 18,
    color: "text-purple-500"
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: Zap,
    description: "Connect with your favorite tools and platforms",
    articleCount: 24,
    color: "text-green-500"
  },
  {
    id: "white-label",
    title: "White Label",
    icon: BookOpen,
    description: "Reselling and customizing for your clients",
    articleCount: 15,
    color: "text-orange-500"
  },
  {
    id: "billing",
    title: "Billing & Plans",
    icon: FileText,
    description: "Subscriptions, credits, and payment information",
    articleCount: 8,
    color: "text-pink-500"
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: Video,
    description: "Common issues and how to resolve them",
    articleCount: 20,
    color: "text-red-500"
  }
];

const POPULAR_ARTICLES = [
  {
    id: "setup-first-agent",
    title: "How to Set Up Your First AI Voice Agent",
    category: "Getting Started",
    views: "12.5K",
    readTime: "5 min"
  },
  {
    id: "integrate-crm",
    title: "Integrating CloserX with Your CRM",
    category: "Integrations",
    views: "8.2K",
    readTime: "7 min"
  },
  {
    id: "whitelabel-setup",
    title: "White Label Setup Guide for Agencies",
    category: "White Label",
    views: "6.8K",
    readTime: "10 min"
  },
  {
    id: "optimize-scripts",
    title: "10 Tips for Optimizing Call Scripts",
    category: "Voice Agents",
    views: "5.4K",
    readTime: "6 min"
  },
  {
    id: "call-quality",
    title: "Improving Call Quality and Reducing Latency",
    category: "Troubleshooting",
    views: "4.9K",
    readTime: "8 min"
  }
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = POPULAR_ARTICLES.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">❓</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Help Center
          </h1>
          
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Find answers, guides, and resources to make the most of CloserX
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              className="pl-12 h-14 text-lg bg-card border-2 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg transition-all">
              Contact Support
            </Link>
            <Link to="/videos" className="px-6 py-3 bg-card hover:bg-accent border border-border rounded-xl font-semibold transition-all">
              Watch Tutorials
            </Link>
            <a 
              href="https://docs.closerx.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card hover:bg-accent border border-border rounded-xl font-semibold transition-all"
            >
              API Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map(category => {
              const Icon = category.icon;
              return (
                <Link key={category.id} to={`/help/${category.id}`} className="group">
                  <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${category.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm text-muted-foreground">{category.articleCount} articles</span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {category.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm text-primary font-semibold pt-4">
                        View Articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Popular Articles</h2>
          </div>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found. Try a different search.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArticles.map(article => (
                <Link 
                  key={article.id} 
                  to={`/help/article/${article.id}`}
                  className="group block"
                >
                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="px-3 py-1 bg-accent rounded-full">{article.category}</span>
                          <span>{article.views} views</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg mb-6 text-white/90">
              Our support team is here to assist you 24/7
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-xl font-semibold hover:shadow-xl transition-all">
              Contact Support Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

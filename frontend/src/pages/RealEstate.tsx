import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Calendar, Flame, TrendingUp, CheckCircle2, XCircle, Phone } from "lucide-react";

const RealEstate = () => {
  useEffect(() => {
    document.title = "AI Calling for Real Estate | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Close more real estate deals with AI agents. Call 1,000+ leads per day, schedule showings automatically, and never miss a buyer. Purpose-built for real estate."
      );
    }
  }, []);

  const stats = [
    { value: "87%", label: "faster lead response" },
    { value: "3x", label: "more showings booked" },
    { value: "45%", label: "increase in closings" },
    { value: "TCPA", label: "Compliant" },
  ];

  const challenges = [
    {
      icon: XCircle,
      title: "Slow Response Times",
      description: "By the time you call back, they've already booked with another agent.",
    },
    {
      icon: XCircle,
      title: "After-Hours Leads",
      description: "50% of leads come in evenings and weekends when you're off.",
    },
    {
      icon: XCircle,
      title: "Showing Coordination Nightmare",
      description: "Playing phone tag to schedule one showing wastes hours.",
    },
    {
      icon: XCircle,
      title: "Inconsistent Follow-up",
      description: "You forget to follow up, they work with someone else.",
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: "5-Minute Response Time",
      description: "AI calls new leads instantly",
      highlight: true,
    },
    {
      icon: CheckCircle2,
      title: "24/7 Lead Capture",
      description: "Never lose after-hours leads again",
      highlight: true,
    },
    {
      icon: CheckCircle2,
      title: "One-Call Showing Schedule",
      description: "Books showings in 2 minutes",
      highlight: true,
    },
    {
      icon: CheckCircle2,
      title: "Automated Nurture",
      description: "Follows up until they're ready",
      highlight: true,
    },
  ];

  const useCases = [
    { icon: "📞", title: "New Lead Follow-up", description: "AI calls Zillow, Realtor.com leads within 5 minutes" },
    { icon: "🏠", title: "Showing Scheduling", description: "Coordinates buyer schedule + property availability" },
    { icon: "🔔", title: "Open House Invitations", description: "Invites 500+ prospects to your open house" },
    { icon: "💰", title: "Seller Lead Qualification", description: "Qualifies home sellers before you invest time" },
    { icon: "🎯", title: "Expired Listing Outreach", description: "Calls expired listings to win new business" },
    { icon: "📅", title: "Buyer Follow-up", description: "Stays in touch until they're ready to buy" },
  ];

  const features = [
    { icon: "🗓️", title: "MLS Integration", description: "Syncs with property data" },
    { icon: "📍", title: "Location Intelligence", description: "Discusses neighborhoods" },
    { icon: "💵", title: "Price Range Qualification", description: "Qualifies budget" },
    { icon: "🏡", title: "Property Matching", description: "Recommends listings" },
    { icon: "📅", title: "Showing Coordination", description: "Checks your calendar" },
    { icon: "📝", title: "Buyer Questionnaire", description: "Asks bedrooms, location, etc." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative gradient-dark py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Home className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Industry • Real Estate</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 animate-pulse">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">Hot</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Close More Deals with <span className="text-primary">AI Real Estate Agents</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Call 1,000+ leads per day, schedule showings automatically, and never miss a buyer again. Purpose-built for real estate agents, brokers, and teams. TCPA compliant with instant lead response and 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale text-foreground">
                See Real Estate Demo
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover-scale">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loom Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">See How It Works for Real Estate</h2>
            <p className="text-lg text-muted-foreground">Watch a real AI agent schedule a showing in under 2 minutes</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Loom Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Real estate demo video will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Challenges */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Real Estate Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Why leads slip through the cracks. In real estate, speed wins. The first agent to respond gets the listing. But most agents are too busy showing properties to answer every call immediately.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <challenge.icon className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-display font-bold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CloserX for Real Estate */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">CloserX for Real Estate</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-card border border-primary/20 rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <solution.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-display font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Real Estate Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Features for Real Estate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Everything you need to dominate your local market. Integrates with your MLS, CRM, and calendar for seamless operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover-scale animate-fade-in text-foreground" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12 hover-scale">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Keller Williams Team</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Before</div>
                <div className="text-2xl font-bold">50 leads/month → 6 closings</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">After</div>
                <div className="text-2xl font-bold text-primary">50 leads/month → 18 closings</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-4">3x closing rate, $450K additional revenue</div>
              <blockquote className="text-lg text-muted-foreground italic">
                "I used to spend 20 hours a week on the phone. Now my AI agent handles it all, and I just show properties to qualified buyers. My income tripled."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-4">— Sarah Chen, Realtor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Start Closing More Deals Today</h2>
          <p className="text-xl text-slate-300 mb-8">Join hundreds of top-performing real estate agents using CloserX. No credit card required to start your free trial.</p>
          <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">No credit card required • Setup in 10 minutes</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstate;

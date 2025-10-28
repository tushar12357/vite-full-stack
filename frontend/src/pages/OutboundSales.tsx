import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Target, TrendingUp, Zap, CheckCircle2, XCircle } from "lucide-react";

const OutboundSales = () => {
  useEffect(() => {
    document.title = "Outbound Sales AI Calling | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Turn cold calls into closed deals with AI. Make 10,000+ outbound calls per day with AI voice agents that convert 3x better than human teams."
      );
    }
  }, []);

  const stats = [
    { value: "10,000+", label: "calls/day per agent" },
    { value: "35%", label: "average conversion rate" },
    { value: "3x", label: "faster than human teams" },
    { value: "$0.20", label: "per call" },
  ];

  const problems = [
    {
      icon: XCircle,
      title: "Limited Capacity",
      description: "Your sales team can only make 50-80 calls per day. You're leaving money on the table.",
    },
    {
      icon: XCircle,
      title: "Inconsistent Quality",
      description: "Different reps, different scripts, different results. No standardization.",
    },
    {
      icon: XCircle,
      title: "High Costs",
      description: "Hiring, training, and managing sales reps costs $60K+ per year per rep.",
    },
    {
      icon: XCircle,
      title: "Slow Follow-ups",
      description: "Leads go cold while your team is busy. 80% of leads need 5+ follow-ups.",
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: "Unlimited Scale",
      description: "AI agents make 10,000+ calls/day. Scale your outreach 100x without hiring.",
    },
    {
      icon: CheckCircle2,
      title: "Perfect Consistency",
      description: "Every call follows your proven script. Same quality, every time.",
    },
    {
      icon: CheckCircle2,
      title: "97% Cost Reduction",
      description: "$0.20 per call vs. $8.50 with human reps. Save $153K+ per year.",
    },
    {
      icon: CheckCircle2,
      title: "Instant Follow-ups",
      description: "AI never forgets. Automatic follow-ups at the perfect time, every time.",
    },
  ];

  const steps = [
    { number: "01", title: "Upload Your List", description: "Import leads from CSV, CRM, or any source. We integrate with 50+ platforms." },
    { number: "02", title: "Customize Your Script", description: "Train your AI agent with your best sales script. Add objection handling." },
    { number: "03", title: "Launch Campaigns", description: "Set your daily call volume, target hours, and goals. Hit start." },
    { number: "04", title: "Watch Sales Roll In", description: "Real-time dashboard shows calls, conversions, and revenue. Optimizes automatically." },
  ];

  const features = [
    { icon: "📞", title: "Parallel Dialing", description: "Make 100+ simultaneous calls" },
    { icon: "🎯", title: "Lead Scoring", description: "AI qualifies leads in real-time" },
    { icon: "📝", title: "CRM Auto-Update", description: "Logs every call instantly" },
    { icon: "🔄", title: "Auto Follow-up", description: "Never miss a callback" },
    { icon: "📊", title: "A/B Testing", description: "Test scripts automatically" },
    { icon: "💬", title: "SMS Integration", description: "Follow calls with texts" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative gradient-dark py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Use Case</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Turn Cold Calls Into <span className="text-primary">Closed Deals</span> with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Make 10,000+ outbound calls per day with AI voice agents that never get tired, never miss a follow-up, and convert 3x better than human teams. Scale your outreach 100x without hiring a single sales rep. Perfect for B2B companies, sales teams, and agencies looking to dominate their market with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale text-foreground">
                See Live Demo
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">See It In Action</h2>
            <p className="text-lg text-muted-foreground">Watch how CloserX transforms outbound sales in under 2 minutes</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Loom Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Your demo video will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Outbound Sales Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Traditional outbound sales is broken. Your sales team is limited, expensive, and inconsistent. While your competitors are making thousands of calls, you're stuck with manual dialing and missed opportunities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <problem.icon className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-display font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How CloserX Solves It</h2>
            <p className="text-xl text-muted-foreground">AI-powered solutions for modern sales teams</p>
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

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">From Lead to Sale in 4 Steps</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="text-6xl font-display font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-8 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Outbound Sales Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Everything you need to dominate outbound sales. Our AI-powered platform gives you enterprise-level capabilities at a fraction of the cost.</p>
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

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Start Making More Sales Today</h2>
          <p className="text-xl text-slate-300 mb-8">Join 500+ sales teams crushing their quotas with CloserX. No credit card required to start your free trial.</p>
          <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
            Start Free 14-Day Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">No credit card required • Setup in 10 minutes</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutboundSales;

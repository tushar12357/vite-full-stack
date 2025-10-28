import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Zap, CheckCircle2, XCircle, FileText } from "lucide-react";

const LeadQualification = () => {
  useEffect(() => {
    document.title = "AI Lead Qualification | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Stop wasting time on bad leads. AI agents call, qualify, and score every lead automatically so your sales team only talks to ready-to-buy prospects."
      );
    }
  }, []);

  const stats = [
    { value: "1,000+", label: "leads qualified daily" },
    { value: "90%", label: "accuracy rate" },
    { value: "5-min", label: "qualification process" },
    { value: "4x", label: "more qualified leads" },
  ];

  const problems = [
    {
      icon: XCircle,
      title: "Unqualified Leads",
      description: "Sales team wastes 60% of time on bad leads",
    },
    {
      icon: XCircle,
      title: "Slow Response",
      description: "48-hour response time means lost deals",
    },
    {
      icon: XCircle,
      title: "Inconsistent Qualification",
      description: "Different reps, different standards",
    },
    {
      icon: XCircle,
      title: "Manual Data Entry",
      description: "CRM data is incomplete or wrong",
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: "AI-Powered Scoring",
      description: "Every lead scored 0-100 automatically",
    },
    {
      icon: CheckCircle2,
      title: "Instant Response",
      description: "Leads contacted within 5 minutes",
    },
    {
      icon: CheckCircle2,
      title: "Consistent Process",
      description: "Same questions, every time",
    },
    {
      icon: CheckCircle2,
      title: "Perfect Data",
      description: "CRM auto-updated with qualification details",
    },
  ];

  const steps = [
    { number: "01", title: "Lead Enters System", description: "New lead from website, ad, or any source" },
    { number: "02", title: "AI Calls Within 5 Minutes", description: "Instant follow-up while interest is hot" },
    { number: "03", title: "Asks Qualification Questions", description: "BANT, pain points, decision process" },
    { number: "04", title: "Scores Lead (0-100)", description: "Based on your ideal customer profile" },
    { number: "05", title: "Routes to Sales or Nurture", description: "Hot leads to sales, cold to nurture" },
    { number: "06", title: "Logs Everything in CRM", description: "Complete conversation notes and scoring" },
  ];

  const criteria = [
    { title: "Budget", description: "Does the prospect have budget allocated?" },
    { title: "Authority", description: "Are they the decision maker?" },
    { title: "Need", description: "Do they have a clear pain point?" },
    { title: "Timeline", description: "When are they looking to buy?" },
    { title: "Company Size", description: "Does it match your ICP?" },
    { title: "Current Solution", description: "What are they using now?" },
    { title: "Pain Points", description: "What challenges are they facing?" },
    { title: "Decision Process", description: "Who else is involved?" },
  ];

  const features = [
    { icon: "🎯", title: "Custom Scoring Models", description: "Define your ideal customer" },
    { icon: "🔄", title: "Automatic Routing", description: "Hot leads to sales, cold to nurture" },
    { icon: "📝", title: "Call Transcripts", description: "Every conversation recorded" },
    { icon: "📊", title: "Lead Insights", description: "Identifies patterns in good leads" },
    { icon: "🚀", title: "Speed-to-Lead", description: "Contact within 5 minutes" },
    { icon: "💬", title: "SMS Follow-up", description: "Text unqualified leads" },
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
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Use Case • Lead Qualification</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Stop Wasting Time on <span className="text-primary">Bad Leads</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              AI agents call, qualify, and score every lead automatically. Your sales team only talks to ready-to-buy prospects. Increase conversion rates by 4x with instant lead response, consistent qualification, and perfect CRM data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale text-foreground">
                See Qualification Demo
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Watch AI Qualify A Lead</h2>
            <p className="text-lg text-muted-foreground">See how our AI qualifies and scores a prospect in 5 minutes</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Loom Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Your qualification demo video will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Lead Qualification Problem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Your sales team spends most of their time chasing unqualified leads while hot prospects go cold. Manual qualification is slow, inconsistent, and expensive.</p>
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
            <p className="text-xl text-muted-foreground">Automated lead qualification that works 24/7</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">From raw lead to qualified opportunity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-6xl font-display font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Criteria */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">AI Qualification Criteria</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Our AI asks the right questions to identify your ideal customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((item, idx) => (
              <div key={idx} className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover-scale animate-fade-in text-foreground" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Qualification Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12 hover-scale">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Real Results</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Before CloserX</div>
                <div className="text-2xl font-bold">100 leads → 8 sales (8%)</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">After CloserX</div>
                <div className="text-2xl font-bold text-primary">100 leads → 32 sales (32%)</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">4x Conversion Rate Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Start Qualifying Leads Automatically</h2>
          <p className="text-xl text-muted-foreground mb-8">Free your sales team to focus on closing deals, not chasing bad leads</p>
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

export default LeadQualification;

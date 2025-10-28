import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, Clock, TrendingUp, CheckCircle2, XCircle, Bell } from "lucide-react";

const FollowUpAutomation = () => {
  useEffect(() => {
    document.title = "AI Follow-Up Automation | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Never let a lead go cold again. Automated follow-up calls that nurture prospects from first contact to closed deal with perfect timing and persistence."
      );
    }
  }, []);

  const stats = [
    { value: "80%", label: "of sales need 5+ follow-ups" },
    { value: "92%", label: "of reps give up after 4 attempts" },
    { value: "AI", label: "never gives up" },
    { value: "3x", label: "higher conversion rate" },
  ];

  const problems = [
    {
      icon: XCircle,
      title: "Reps Forget",
      description: "Busy reps forget to follow up",
    },
    {
      icon: XCircle,
      title: "Inconsistent Timing",
      description: "Follow-ups too early or too late",
    },
    {
      icon: XCircle,
      title: "No Persistence",
      description: "Reps give up after 2-3 attempts",
    },
    {
      icon: XCircle,
      title: "Not Personalized",
      description: "Generic 'just checking in' messages",
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: "Never Forgets",
      description: "AI tracks every prospect automatically",
    },
    {
      icon: CheckCircle2,
      title: "Perfect Timing",
      description: "Calls at optimal times based on data",
    },
    {
      icon: CheckCircle2,
      title: "Unlimited Persistence",
      description: "Will follow up 20+ times if needed",
    },
    {
      icon: CheckCircle2,
      title: "Hyper-Personalized",
      description: "References previous conversations",
    },
  ];

  const sequence = [
    { day: "Day 1", title: "Initial Call", description: "First contact and qualification" },
    { day: "Day 3", title: "First Follow-up", description: "Address objections, provide value" },
    { day: "Day 7", title: "Second Follow-up", description: "Share case study or social proof" },
    { day: "Day 14", title: "Value-add Call", description: "Provide industry insights" },
    { day: "Day 21", title: "Special Offer", description: "Limited-time promotion" },
    { day: "Day 30", title: "Final Attempt", description: "Last chance to engage" },
    { day: "Day 45", title: "Re-engagement", description: "Restart the conversation" },
  ];

  const features = [
    { icon: "📅", title: "Smart Scheduling", description: "Optimal call times" },
    { icon: "🎯", title: "Behavior Triggers", description: "Follows up based on actions" },
    { icon: "📧", title: "Multi-channel", description: "Call, SMS, email" },
    { icon: "🔄", title: "Automatic Re-engagement", description: "Wins back lost leads" },
    { icon: "📊", title: "Sequence Analytics", description: "Optimize timing" },
    { icon: "💬", title: "Personalization", description: "Uses lead data" },
  ];

  const useCases = [
    { title: "Post-Demo Follow-ups", description: "Nurture prospects after sales demos" },
    { title: "Abandoned Cart Recovery", description: "Re-engage customers who didn't complete purchase" },
    { title: "Proposal Follow-ups", description: "Follow up on quotes and proposals" },
    { title: "Event Follow-ups", description: "Contact attendees after webinars/events" },
    { title: "Cold Lead Warming", description: "Re-engage old leads in your database" },
    { title: "Customer Win-back", description: "Bring back churned customers" },
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
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Use Case • Follow-Up</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Never Let a Lead Go <span className="text-primary">Cold Again</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Automated follow-up calls that nurture prospects from first contact to closed deal. Persistent, personalized, and perfectly timed. Our AI never forgets, never gives up, and converts 3x more leads than manual follow-up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale text-foreground">
                See Follow-Up Demo
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Watch AI Follow-Up In Action</h2>
            <p className="text-lg text-muted-foreground">See how our AI nurtures a lead through multiple touch points</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Loom Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Your follow-up demo video will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Follow-Up Problem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Most sales are made after the 5th follow-up, but 92% of reps give up after just 4 attempts. Manual follow-up is inconsistent, forgettable, and impossible to scale.</p>
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
            <p className="text-xl text-muted-foreground">Automated follow-up that never stops</p>
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

      {/* Follow-Up Sequence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Example Follow-Up Sequence</h2>
            <p className="text-xl text-muted-foreground">Automated nurture campaign that converts cold leads</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sequence.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-primary font-bold mb-2">{item.day}</div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Follow-Up Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Everything you need to automate lead nurturing</p>
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

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Perfect For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-xl font-display font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Never Lose Another Lead</h2>
          <p className="text-xl text-muted-foreground mb-8">Start automating your follow-up process today</p>
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

export default FollowUpAutomation;

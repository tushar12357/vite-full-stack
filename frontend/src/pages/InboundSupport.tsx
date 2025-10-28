import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield, Headphones, CheckCircle2, XCircle } from "lucide-react";

const InboundSupport = () => {
  useEffect(() => {
    document.title = "Inbound Support AI | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Never miss another customer call. Answer every inbound call instantly, 24/7 with AI that resolves 90% of issues without human agents."
      );
    }
  }, []);

  const stats = [
    { value: "100%", label: "of calls answered" },
    { value: "< 3 sec", label: "wait time" },
    { value: "24/7/365", label: "availability" },
    { value: "90%", label: "issues resolved by AI" },
  ];

  const problems = [
    {
      icon: XCircle,
      title: "Missed Revenue",
      description: "67% of customers hang up if not answered in 30 seconds",
    },
    {
      icon: XCircle,
      title: "After-Hours Chaos",
      description: "50% of calls come outside business hours. You're closed.",
    },
    {
      icon: XCircle,
      title: "Long Wait Times",
      description: "Average hold time: 8 minutes. Customers are frustrated.",
    },
    {
      icon: XCircle,
      title: "High Staff Costs",
      description: "Support agents cost $40K/year + benefits + training",
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: "Zero Wait Time",
      description: "Every call answered in < 3 seconds. No hold music.",
    },
    {
      icon: CheckCircle2,
      title: "24/7 Coverage",
      description: "Never close. AI works weekends, holidays, 3 AM.",
    },
    {
      icon: CheckCircle2,
      title: "Instant Resolution",
      description: "90% of common issues resolved without human handoff",
    },
    {
      icon: CheckCircle2,
      title: "95% Cost Savings",
      description: "Replace expensive call center with AI",
    },
  ];

  const steps = [
    { number: "01", title: "Route Intelligently", description: "AI understands caller intent and routes to right department or resolves instantly" },
    { number: "02", title: "Access Knowledge Base", description: "AI pulls from your docs, FAQs, policies instantly" },
    { number: "03", title: "Take Action", description: "Book appointments, process returns, update accounts" },
    { number: "04", title: "Escalate When Needed", description: "Complex issues go to human agents with full context" },
  ];

  const features = [
    { icon: "🎙️", title: "Natural Conversations", description: "Sounds completely human" },
    { icon: "🧠", title: "Smart Routing", description: "Directs to right department" },
    { icon: "📚", title: "Knowledge Integration", description: "Access all your docs" },
    { icon: "📅", title: "Appointment Booking", description: "Checks calendar, books slots" },
    { icon: "🔄", title: "Multi-language", description: "Support in 50+ languages" },
    { icon: "📊", title: "Call Analytics", description: "Track resolution rates" },
  ];

  const useCases = [
    { title: "Customer Support Hotlines", description: "Handle all inbound support calls automatically" },
    { title: "Order Status Inquiries", description: "Check order status, tracking, delivery dates" },
    { title: "Appointment Scheduling", description: "Book, reschedule, cancel appointments" },
    { title: "Returns & Refunds", description: "Process returns, initiate refunds instantly" },
    { title: "Technical Support (Tier 1)", description: "Resolve common technical issues" },
    { title: "After-Hours Support", description: "Provide support when your team is offline" },
  ];

  const metrics = [
    { label: "Customer Satisfaction", value: "↑ 42%" },
    { label: "Average Handle Time", value: "↓ 78%" },
    { label: "Cost Per Call", value: "↓ 92%" },
    { label: "First Call Resolution", value: "↑ 65%" },
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
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Use Case • Inbound Support</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Never Miss Another <span className="text-primary">Customer Call</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Answer every inbound call instantly, 24/7. Route to the right department, resolve issues, and book appointments—all without human agents. Eliminate wait times, reduce costs by 95%, and deliver exceptional customer service around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale text-foreground">
                See Support Demo
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">See AI Support In Action</h2>
            <p className="text-lg text-muted-foreground">Watch how our AI handles a real customer support call</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Loom Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Your support demo video will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Cost of Missed Calls</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Every unanswered call is lost revenue. Every minute on hold is a frustrated customer. Traditional support can't keep up with customer expectations for instant, 24/7 service.</p>
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
            <p className="text-xl text-muted-foreground">AI-powered inbound support that never sleeps</p>
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
            <p className="text-xl text-muted-foreground">From call to resolution in seconds</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Inbound Support Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Everything you need to deliver world-class customer support</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Use Cases</h2>
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

      {/* Results */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Real Results</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl font-display font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-lg text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Transform Your Support Today</h2>
          <p className="text-xl text-muted-foreground mb-8">Join hundreds of companies delivering exceptional customer service with AI</p>
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

export default InboundSupport;

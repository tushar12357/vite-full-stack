import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap, TrendingDown, Users, CheckCircle2, BarChart, Award } from "lucide-react";

const CallCenters = () => {
  useEffect(() => {
    document.title = "AI Agents for Call Centers | Scale Instantly, Save 90% | CloserX";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Augment your call center with unlimited AI agents. Handle overflow, reduce wait times, and cut costs by 90%. Enterprise-grade platform trusted by Fortune 500s."
      );
    }
  }, []);

  const stats = [
    { value: "90%", label: "reduction in per-call costs" },
    { value: "Zero", label: "training or ramp-up time" },
    { value: "Instant", label: "scalability to 1000+ agents" },
    { value: "24/7", label: "consistent quality" },
  ];

  const challenges = [
    "Unpredictable call volume makes staffing impossible",
    "High turnover means constant recruiting and training",
    "Rising labor costs eat into profit margins",
    "Peak times create unacceptable wait times"
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Infinite Scalability",
      description: "Deploy 1 or 1,000 agents instantly. Handle seasonal spikes effortlessly with no training or ramp-up time. Consistent quality at any volume."
    },
    {
      icon: Phone,
      title: "Seamless Integration",
      description: "Works alongside human agents with intelligent call routing and real-time handoff capabilities. Complete integration with your existing tech stack."
    },
    {
      icon: TrendingDown,
      title: "Cost Transformation",
      description: "90% reduction in per-call costs. No benefits, overtime, or turnover. Pay only for productive talk time with predictable, scalable pricing."
    },
    {
      icon: Users,
      title: "The Call Center Revolution",
      description: "Traditional call centers face impossible math. CloserX breaks this cycle with AI agents that scale instantly, never quit, and cost 90% less."
    },
  ];

  const deploymentOptions = [
    {
      title: "Overflow Handling",
      items: ["Eliminate hold times during peaks", "After-hours coverage", "Weekend and holiday support", "Disaster recovery backup"]
    },
    {
      title: "First-Tier Support",
      items: ["FAQ and common inquiries", "Account information updates", "Payment processing", "Appointment scheduling"]
    },
    {
      title: "Outbound Campaigns",
      items: ["Lead qualification", "Survey and feedback collection", "Appointment confirmations", "Collections and reminders"]
    },
  ];

  const analytics = [
    { icon: BarChart, title: "Real-time Monitoring", description: "Campaign performance at a glance" },
    { icon: Award, title: "Conversation Intelligence", description: "Extract insights from every call" },
    { icon: CheckCircle2, title: "Quality Assurance", description: "Automated QA scoring" },
    { icon: TrendingDown, title: "Performance Benchmarking", description: "Track KPIs and trends" },
  ];

  const caseStudy = {
    company: "Global Telecom Provider",
    results: [
      { metric: "8min → 30sec", detail: "average wait time reduced" },
      { metric: "$2.3M saved", detail: "annually in labor costs" },
      { metric: "94%", detail: "first-call resolution rate" },
      { metric: "50 → 500", detail: "concurrent call capacity" },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative gradient-dark py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Industry • Call Centers</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Augment Your Call Center <span className="text-primary">with Unlimited AI Agents</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Handle overflow, reduce wait times, and scale operations instantly—without hiring, training, or managing additional staff. Traditional call centers face impossible math: unpredictable volume, high turnover, and rising labor costs. CloserX breaks this cycle with AI agents that scale instantly, never quit, and cost 90% less than human agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Schedule Enterprise Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
                Download ROI Calculator
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover-scale">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Call Center Revolution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Traditional call centers face impossible math. CloserX breaks this cycle with AI agents that scale instantly, never quit, and cost 90% less than human agents.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <p className="text-muted-foreground">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">CloserX for Call Centers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-card border border-primary/20 rounded-xl p-8 hover-scale">
                <solution.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-lg">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Deployment Options</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-display font-bold mb-4">{option.title}</h3>
                <ul className="space-y-3">
                  {option.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Analytics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Performance Analytics</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analytics.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center hover-scale">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Case Study Spotlight</h2>
            <p className="text-2xl text-primary font-bold mb-2">{caseStudy.company}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.map((result, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover-scale">
                <div className="text-3xl font-display font-bold text-primary mb-2">{result.metric}</div>
                <div className="text-sm text-slate-300">{result.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Transform Your Call Center Operations</h2>
          <p className="text-xl text-slate-300 mb-8">See why Fortune 500 companies trust CloserX for mission-critical communications.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
              Schedule Enterprise Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
              Download ROI Calculator
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallCenters;

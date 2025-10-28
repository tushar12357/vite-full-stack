import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap, Clock, CheckCircle2, Lock, Award } from "lucide-react";

const FinancialServices = () => {
  useEffect(() => {
    document.title = "AI Calling for Financial Services | Convert 68% More Leads | CloserX";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Accelerate financial growth with compliant AI voice automation. Qualify leads instantly, provide 24/7 support, and increase conversions. SOC 2 certified."
      );
    }
  }, []);

  const stats = [
    { value: "68%", label: "increase in qualified appointments" },
    { value: "3x", label: "faster lead response time" },
    { value: "52%", label: "reduction in cost per acquisition" },
    { value: "24/7", label: "availability without overtime" },
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Lead Qualification at Scale",
      description: "Instant response to every inquiry with intelligent qualification based on your criteria. Seamless handoff to human advisors with complete conversation analytics."
    },
    {
      icon: Shield,
      title: "Compliance-First Design",
      description: "Built for financial regulations with complete call recording and documentation. Customizable scripts for compliance and secure data handling protocols."
    },
    {
      icon: TrendingUp,
      title: "Revenue Acceleration",
      description: "Follow up on quote requests immediately, schedule consultations automatically, and identify cross-sell opportunities with persistent nurture campaigns."
    },
    {
      icon: Clock,
      title: "Speed Wins Deals",
      description: "While competitors leave prospects waiting, CloserX ensures every lead gets immediate, professional attention—day or night, weekday or weekend."
    },
  ];

  const useCases = [
    {
      title: "Insurance Agencies",
      items: ["Quote follow-ups and policy renewals", "Claims status updates", "New product introductions", "Payment reminder calls"]
    },
    {
      title: "Mortgage Brokers",
      items: ["Pre-qualification screening", "Rate lock expirations", "Document collection reminders", "Refinance opportunity calls"]
    },
    {
      title: "Financial Advisors",
      items: ["Portfolio review scheduling", "Market update notifications", "Retirement planning appointments", "Client onboarding automation"]
    },
  ];

  const metrics = [
    { metric: "68% increase", detail: "in qualified appointments" },
    { metric: "3x faster", detail: "lead response time" },
    { metric: "52% reduction", detail: "in cost per acquisition" },
    { metric: "24/7 availability", detail: "without overtime costs" },
  ];

  const compliance = [
    { icon: Shield, title: "SOC 2 Type II certified", description: "Rigorous security standards" },
    { icon: Lock, title: "End-to-end encryption", description: "Complete data protection" },
    { icon: CheckCircle2, title: "Role-based access controls", description: "Granular permissions" },
    { icon: Award, title: "TCPA compliant calling", description: "Regulatory adherence" },
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
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Industry • Financial Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Accelerate Financial Growth <span className="text-primary">with Intelligent AI Calling</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Convert more leads, qualify prospects instantly, and provide 24/7 customer support—all while maintaining complete compliance. In financial services, speed wins deals. Give every lead immediate, professional attention that converts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Get Started - $97/mo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
                Request Custom Demo
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

      {/* Opportunity Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Financial Services Opportunity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In financial services, speed wins deals. While your competitors leave prospects waiting, CloserX ensures every lead gets immediate, professional attention—day or night, weekday or weekend. Convert more opportunities with AI that never sleeps.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">CloserX for Financial Services</h2>
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

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Use Cases for Financial Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-display font-bold mb-4">{useCase.title}</h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, i) => (
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

      {/* Performance Metrics */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Performance Metrics</h2>
            <p className="text-xl text-slate-300">Financial services firms using CloserX report:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover-scale">
                <div className="text-2xl font-display font-bold text-primary mb-2">{metric.metric}</div>
                <div className="text-sm text-slate-300">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Security & Compliance</h2>
            <p className="text-xl text-muted-foreground">Built for the highest standards of financial services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center hover-scale">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Start Converting More Leads Today</h2>
          <p className="text-xl text-slate-300 mb-8">See why leading financial firms choose CloserX for intelligent automation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
              Get Started - $97/mo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
              Request Custom Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialServices;

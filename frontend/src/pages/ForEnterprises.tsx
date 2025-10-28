import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Lock, Award, CheckCircle2, Users, Zap, TrendingUp } from "lucide-react";

const ForEnterprises = () => {
  useEffect(() => {
    document.title = "Enterprise AI Calling Platform | Global Scale, Complete Security | CloserX";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Deploy intelligent voice automation across your enterprise. SOC 2 certified, 99.99% uptime, 50+ languages. Custom solutions for Fortune 500 companies."
      );
    }
  }, []);

  const stats = [
    { value: "99.99%", label: "uptime SLA" },
    { value: "50+", label: "languages supported" },
    { value: "SOC 2", label: "Type II certified" },
    { value: "24/7", label: "priority support" },
  ];

  const security = [
    { icon: Shield, title: "SOC 2 Type II certified", description: "Enterprise security standards" },
    { icon: Lock, title: "ISO 27001 compliant", description: "International security certification" },
    { icon: Award, title: "End-to-end encryption", description: "Complete data protection" },
    { icon: Globe, title: "Private cloud deployment", description: "Dedicated infrastructure options" },
  ];

  const infrastructure = [
    { title: "99.99% uptime SLA", description: "Mission-critical reliability" },
    { title: "Multi-region deployment", description: "Global presence and redundancy" },
    { title: "Automatic failover", description: "Zero-downtime operations" },
    { title: "CDN-backed performance", description: "Lightning-fast response times" },
    { title: "Support for 50+ languages", description: "True global reach" },
    { title: "Custom AI training", description: "On your proprietary data" },
  ];

  const solutions = [
    {
      icon: TrendingUp,
      title: "Sales Acceleration",
      description: "Transform your sales organization with AI that qualifies leads, books meetings, and nurtures prospects at scale. Our enterprise clients see 3x more qualified opportunities with 70% less effort."
    },
    {
      icon: Users,
      title: "Customer Service Transformation",
      description: "Handle millions of customer interactions with consistent quality. Reduce costs by 60% while improving satisfaction scores through instant, intelligent responses."
    },
    {
      icon: Zap,
      title: "Internal Operations",
      description: "Automate HR callbacks, IT support, employee surveys, and internal communications. Free your teams to focus on strategic work, not repetitive calls."
    },
  ];

  const support = [
    { title: "Named account manager", description: "Dedicated point of contact" },
    { title: "Technical architect", description: "Expert guidance and planning" },
    { title: "24/7 priority support", description: "Always available when needed" },
    { title: "Quarterly business reviews", description: "Strategic performance analysis" },
    { title: "Custom training programs", description: "Tailored to your organization" },
    { title: "Professional services", description: "Implementation and optimization" },
  ];

  const compliance = [
    "GDPR compliant",
    "CCPA ready",
    "HIPAA capable",
    "PCI DSS compliant",
    "TCPA compliant",
    "Custom compliance frameworks"
  ];

  const successStories = [
    { company: "Fortune 500 Retailer", result: "47% reduction in customer service costs" },
    { company: "Global Bank", result: "3.2M calls automated annually" },
    { company: "Healthcare Network", result: "89% appointment confirmation rate" },
    { company: "Tech Unicorn", result: "5x increase in qualified pipeline" },
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Team • Enterprise</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Enterprise-Grade AI Calling <span className="text-primary">at Global Scale</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Deploy intelligent voice automation across your organization with security, compliance, and support you can trust. Built for Fortune 500 companies that need enterprise-grade reliability, security, and global scalability with complete control over their AI calling infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Schedule Executive Briefing <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
                Request Enterprise Trial
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

      {/* Security First */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Security First</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {security.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center hover-scale">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Infrastructure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Global Infrastructure</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, idx) => (
              <div key={idx} className="bg-card border border-primary/20 rounded-xl p-6 hover-scale">
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Enterprise Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8">
                <solution.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-lg">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Implementation & Support</h2>
            <p className="text-xl text-muted-foreground">Dedicated Success Team</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {support.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Governance */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Compliance & Governance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {compliance.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover-scale">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 hover-scale">
                <p className="text-2xl font-display font-bold text-primary mb-3">{story.company}</p>
                <p className="text-lg text-muted-foreground">{story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Pricing</h2>
          <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
            <p className="text-3xl font-display font-bold text-primary mb-4">Enterprise Plans Starting at $2,997/month</p>
            <ul className="space-y-3 text-left max-w-2xl mx-auto">
              {["Unlimited sub-accounts", "Dedicated infrastructure", "Custom integrations", "SLA guarantees", "Volume discounts on usage"].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Let's Discuss Your Enterprise Needs</h2>
          <p className="text-xl text-slate-300 mb-8">Our enterprise team is ready to design a custom solution for your organization.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
              Schedule Executive Briefing <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
              Request Enterprise Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForEnterprises;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Palette, DollarSign, Rocket, TrendingUp, Users, Zap } from "lucide-react";

const ForAgencies = () => {
  useEffect(() => {
    document.title = "For Agencies - White Label AI Calling | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Launch your own AI calling agency in 24 hours. White-label platform with your brand. Keep 100% of revenue. Built for agencies."
      );
    }
  }, []);

  const stats = [
    { value: "500+", label: "agencies using CloserX" },
    { value: "$50K", label: "average monthly revenue" },
    { value: "24hrs", label: "setup time" },
    { value: "Zero", label: "technical skills needed" },
  ];

  const reasons = [
    {
      icon: Palette,
      title: "100% White-Label",
      description: "Your logo, your colors, your domain. Clients never see CloserX.",
    },
    {
      icon: DollarSign,
      title: "Recurring Revenue",
      description: "Charge $1,500-$5,000/month per client. Keep it all.",
    },
    {
      icon: Rocket,
      title: "Quick Deployment",
      description: "Onboard new clients in under 1 hour.",
    },
    {
      icon: TrendingUp,
      title: "Easy Upsell",
      description: "Add AI calling to existing services.",
    },
  ];

  const useCases = [
    { title: "Marketing Agencies", description: "Add AI calling to your lead gen services" },
    { title: "Digital Agencies", description: "Offer AI phone automation alongside web services" },
    { title: "Social Media Agencies", description: "Close the loop: Ads → Leads → AI Calls → Sales" },
    { title: "Lead Gen Agencies", description: "Don't just generate leads, qualify and close them" },
    { title: "Consulting Agencies", description: "Provide full-service client acquisition" },
  ];

  const whiteLabel = [
    { title: "Custom Branding", items: ["Your logo everywhere", "Your color scheme", "Your domain", "Custom email domain"] },
    { title: "Branded Communications", items: ["Emails from your domain", "SMS from your number", "Branded reports", "Your support contact"] },
    { title: "Client Management", items: ["Multi-tenant dashboard", "Unlimited sub-accounts", "Role-based access", "Usage tracking"] },
    { title: "Built-in Billing", items: ["Stripe integration", "Subscription management", "Usage-based billing", "Automated invoicing"] },
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
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">For Teams • Agencies</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">Most Popular</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Launch Your Own AI Calling <span className="text-primary">Agency</span> in 24 Hours
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              White-label platform. Your brand. Your pricing. Keep 100% of revenue. Built specifically for agencies who want to add AI calling to their services. No technical skills required - if you can use Canva, you can build a $50K/month AI calling agency with CloserX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Your Agency Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale text-foreground">
                  Schedule Agency Demo
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">See The Agency Platform</h2>
            <p className="text-lg text-muted-foreground">Watch how agencies are building $50K+/month businesses</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Loom Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Your agency demo video will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agencies Love CloserX */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Why Agencies Love CloserX</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Add a high-margin, recurring revenue stream to your agency without hiring developers or managing infrastructure. Your clients get cutting-edge AI, you get predictable monthly income.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-card border border-primary/20 rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <reason.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-display font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 gradient-legal">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">How Agencies Make Money</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Simple math: charge your clients $1,500-$5,000/month, pay us $999/month, keep the difference. Scale to 10, 20, 50+ clients with no additional overhead.</p>
            </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover-scale">
              <h3 className="text-2xl font-display font-bold mb-6">Monthly Retainer</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Small Business:</span>
                  <span className="text-2xl font-bold text-primary">$1,500/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Mid-Market:</span>
                  <span className="text-2xl font-bold text-primary">$3,000/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Enterprise:</span>
                  <span className="text-2xl font-bold text-primary">$5,000+/mo</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover-scale">
              <h3 className="text-2xl font-display font-bold mb-6">Example with 10 Clients</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Revenue:</span>
                  <span className="text-2xl font-bold">$25,000/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Cost (CloserX):</span>
                  <span className="text-2xl font-bold">$999/month</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Profit:</span>
                    <span className="text-3xl font-display font-bold text-primary">$24,000/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Label Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">White-Label Features</h2>
            <p className="text-xl text-muted-foreground">Your brand, your platform, your clients</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whiteLabel.map((category, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-xl font-display font-bold mb-4 text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Agency Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-2xl font-display font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Join 500+ Agencies Building Recurring Revenue</h2>
          <p className="text-xl text-muted-foreground mb-8">Start your AI calling agency today. 14-day free trial. No credit card required. Full agency support included.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
              Start Your Agency Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
              Schedule Agency Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">14-day free trial • No credit card • Agency support included</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForAgencies;

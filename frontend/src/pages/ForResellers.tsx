import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Users, TrendingUp, Award, CheckCircle2, Target, Rocket } from "lucide-react";

const ForResellers = () => {
  useEffect(() => {
    document.title = "White-Label AI Calling Platform | Start Your Agency Today | CloserX";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Launch your AI calling agency in 8 minutes. Complete white-label solution, proven templates, 2,847 successful agencies. Earn $10-40K MRR. Start at $97/mo."
      );
    }
  }, []);

  const stats = [
    { value: "$10-40K", label: "average monthly recurring revenue" },
    { value: "2,847", label: "agencies already scaling" },
    { value: "8 min", label: "to launch your agency" },
    { value: "$97", label: "starting monthly cost" },
  ];

  const opportunity = [
    "Every business needs better lead follow-up",
    "You have the solution that works 24/7",
    "Costs 90% less than hiring staff",
    "Delivers results from day one"
  ];

  const features = [
    {
      icon: Users,
      title: "Complete White-Label Solution",
      description: "Your brand, your domain, your pricing, your profits. Your clients, your success. We handle the technology behind the scenes."
    },
    {
      icon: TrendingUp,
      title: "Proven Business Model",
      description: "Our agency partners report averaging $10-15K additional MRR within their first 60 days. The math is simple: low costs, high margins, massive demand."
    },
    {
      icon: Target,
      title: "Massive Market Demand",
      description: "Every business needs better lead follow-up. You have the solution that works 24/7, costs 90% less than staff, and delivers results from day one."
    },
  ];

  const platform = [
    { title: "Unlimited sub-accounts", description: "No limits on client count" },
    { title: "Full admin dashboard", description: "Complete control and visibility" },
    { title: "Client self-service portal", description: "Reduce support overhead" },
    { title: "Usage tracking and billing", description: "Automated invoicing" },
    { title: "API access for automation", description: "Custom integrations" },
    { title: "White-label branding", description: "Your logo and colors" },
  ];

  const assets = [
    "Proven sales scripts that close",
    "High-converting funnel templates",
    "Facebook & Google ad templates",
    "Case studies and testimonials",
    "Demo account for prospects",
    "Proposal and contract templates"
  ];

  const revenueModel = [
    {
      title: "Subscription Revenue",
      pricing: "Charge $297-997/month per client",
      cost: "Your cost: $97-297/month",
      profit: "Profit: $200-700/month per client"
    },
    {
      title: "Usage Revenue",
      pricing: "Charge $0.20-0.50/minute",
      cost: "Your cost: $0.10/minute",
      profit: "Profit: 100-400% markup"
    },
    {
      title: "Setup & Services",
      pricing: "Charge $500-2,500 setup fees",
      cost: "Plus ongoing management fees",
      profit: "Pure profit opportunity"
    },
  ];

  const testimonials = [
    {
      quote: "From 0 to $32K MRR in 90 days",
      detail: "The templates and training made it stupid-simple to get started. Best agency decision I've made.",
      author: "Digital Agency Owner"
    },
    {
      quote: "Finally, a product that sells itself",
      detail: "Clients actually thank me for introducing them to CloserX. The retention is incredible.",
      author: "Marketing Consultant"
    },
    {
      quote: "Scaled to 6-figures in 6 months",
      detail: "The white-label platform let me focus on sales instead of tech. Game changer.",
      author: "SaaS Reseller"
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$97/month",
      features: ["Up to 10 client accounts", "Full white-label features", "Basic support", "All core functionality"]
    },
    {
      name: "Growth",
      price: "$297/month",
      features: ["Unlimited client accounts", "Priority support", "Advanced features", "Custom domain", "API access"]
    },
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
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Team • Resellers</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Launch Your AI Calling Agency <span className="text-primary">in 8 Minutes</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              White-label our platform, set your own prices, and join 2,847 agencies already earning $10-40K MRR with CloserX. Complete solution with proven templates, training, and support. Start building your recurring revenue stream today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Your Agency - $97/mo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
                Book Strategy Call
              </Button>
            </div>
            <div className="inline-block bg-primary/20 border border-primary/40 rounded-lg px-6 py-3 mb-12">
              <p className="text-white font-semibold">
                <span className="text-primary">Special Offer:</span> Use code LAUNCH2025 for 50% off your first month
              </p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Perfect Agency Opportunity</h2>
            <p className="text-xl text-muted-foreground mb-8">Massive Market Demand</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunity.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Everything You Need to Succeed</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card border border-primary/20 rounded-xl p-8">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technology Platform</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platform.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Revenue Model</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {revenueModel.map((model, idx) => (
              <div key={idx} className="bg-card border border-primary/20 rounded-xl p-8">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold mb-4">{model.title}</h3>
                <p className="text-muted-foreground mb-2">{model.pricing}</p>
                <p className="text-muted-foreground mb-2">{model.cost}</p>
                <p className="text-primary font-bold text-lg">{model.profit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Partner Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8">
                <p className="text-2xl font-display font-bold text-primary mb-4">"{testimonial.quote}"</p>
                <p className="text-slate-300 mb-4">{testimonial.detail}</p>
                <p className="text-sm text-slate-400">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-muted-foreground">Plus usage-based calling at $0.10/minute</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((plan, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-3xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-display font-bold text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Ready to Launch Your AI Agency?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 2,847 agencies already scaling with CloserX</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
              Start Your Agency - $97/mo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
              Book Strategy Call
            </Button>
          </div>
          <p className="text-primary font-bold text-lg">Special Offer: Use code LAUNCH2025 for 50% off your first month</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForResellers;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Phone, TrendingUp, Star, CheckCircle2, Package, Repeat } from "lucide-react";

const Ecommerce = () => {
  useEffect(() => {
    document.title = "AI Sales Calls for E-commerce | Recover 37% of Abandoned Carts | CloserX";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Turn browsers into buyers with AI-powered sales calls. Recover abandoned carts, provide instant support, and drive repeat purchases. 1,000+ stores trust CloserX."
      );
    }
  }, []);

  const stats = [
    { value: "37%", label: "cart recovery rate" },
    { value: "4.2x", label: "ROAS on calling campaigns" },
    { value: "89%", label: "customer satisfaction scores" },
    { value: "+$47", label: "average order value increase" },
  ];

  const solutions = [
    {
      icon: ShoppingCart,
      title: "Cart Abandonment Recovery",
      description: "Call within minutes of abandonment with personalized product discussions. Overcome objections in real-time and offer incentives to complete purchase."
    },
    {
      icon: Phone,
      title: "Customer Service Excellence",
      description: "Instant order status updates, handle returns and exchanges, provide product recommendations, and deliver shipping and tracking information."
    },
    {
      icon: TrendingUp,
      title: "Revenue Maximization",
      description: "Post-purchase upsells, loyalty program enrollment, review and feedback collection, and reorder reminders for consumables."
    },
    {
      icon: Star,
      title: "3x Better Than Email",
      description: "While competitors rely on emails that get ignored, CloserX reaches customers directly with personalized voice outreach that converts 3x better."
    },
  ];

  const integrations = [
    "Shopify & WooCommerce",
    "Klaviyo & Mailchimp",
    "Zendesk & Freshdesk",
    "All major CRM platforms"
  ];

  const storeTypes = [
    {
      title: "Fashion & Apparel",
      items: ["Size and fit consultations", "New collection announcements", "VIP customer outreach", "Seasonal sale notifications"]
    },
    {
      title: "Health & Beauty",
      items: ["Subscription renewals", "Product usage guidance", "Routine reorder reminders", "New product launches"]
    },
    {
      title: "Electronics & Tech",
      items: ["Technical support callbacks", "Warranty expiration notices", "Upgrade opportunities", "Installation scheduling"]
    },
  ];

  const metrics = [
    { metric: "37% recovery rate", detail: "on abandoned carts" },
    { metric: "4.2x ROAS", detail: "on calling campaigns" },
    { metric: "89% satisfaction", detail: "customer scores" },
    { metric: "+$47 AOV increase", detail: "average order value" },
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
              <ShoppingCart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Industry • E-commerce</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Turn Browsers into Buyers <span className="text-primary">with AI-Powered Sales Calls</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Recover abandoned carts, provide instant support, and drive repeat purchases with conversational AI that never sleeps. While your competitors rely on emails that get ignored, CloserX reaches customers directly with personalized voice outreach that converts 3x better than traditional methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start 7-Day Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
                See Pricing
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

      {/* Edge Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The E-commerce Edge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While your competitors rely on emails that get ignored, CloserX reaches customers directly with personalized voice outreach that converts 3x better than traditional methods. Turn abandoned browsers into loyal buyers with AI that understands your products and customers.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">CloserX for E-commerce</h2>
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

      {/* Integration Ecosystem */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Integration Ecosystem</h2>
            <p className="text-xl text-muted-foreground">Seamlessly connects with your existing stack</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center hover-scale">
                <Package className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Store Type */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Use Cases by Store Type</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {storeTypes.map((storeType, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-display font-bold mb-4">{storeType.title}</h3>
                <ul className="space-y-3">
                  {storeType.items.map((item, i) => (
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

      {/* Success Metrics */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Success Metrics</h2>
            <p className="text-xl text-slate-300">E-commerce brands see:</p>
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

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Pricing That Scales</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <Repeat className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-2">Pay Per Results</h3>
              <p className="text-muted-foreground">Only for answered calls</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-2">Volume Discounts</h3>
              <p className="text-muted-foreground">Scale without limits</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-2">No setup fees or contracts</p>
          <p className="text-muted-foreground">White-label options for agencies</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Ready to Boost Your E-commerce Revenue?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 1,000+ online stores already scaling with CloserX.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
              Start 7-Day Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
              See Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small businesses",
      features: ["1,000 AI minutes/month", "5 AI agents", "Basic analytics", "Email support", "White-label ready"],
    },
    {
      name: "Professional",
      price: "$999",
      description: "Most popular for growing teams",
      popular: true,
      features: ["10,000 AI minutes/month", "Unlimited AI agents", "Advanced analytics", "Priority support", "Custom branding", "API access"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Unlimited AI minutes", "Dedicated infrastructure", "White-glove onboarding", "24/7 support", "SLA guarantee", "Custom integrations"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              💎 Transparent Pricing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden fees. No surprises. Start free, scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {plans.map((plan, idx) => (
              <div key={idx} className={`bg-card p-8 rounded-2xl border-2 relative ${plan.popular ? 'border-primary shadow-glow' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-primary text-white hover:shadow-glow' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

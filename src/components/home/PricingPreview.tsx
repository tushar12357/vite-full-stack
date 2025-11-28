import { Check } from "lucide-react";
import { useState } from "react";

const PricingPreview = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 499,
      annualPrice: 399,
      description: "Perfect for small agencies getting started",
      features: [
        "Up to 5,000 calls/month",
        "5 AI voice agents",
        "Basic white-label branding",
        "Email support",
        "Basic analytics",
        "3 integrations",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      monthlyPrice: 999,
      annualPrice: 799,
      description: "Most popular for growing agencies",
      features: [
        "Up to 25,000 calls/month",
        "Unlimited AI voice agents",
        "Full white-label branding",
        "Priority 24/7 support",
        "Advanced analytics",
        "Unlimited integrations",
        "Multi-tenant dashboard",
        "Custom domain",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 2499,
      annualPrice: 1999,
      description: "For large agencies & resellers",
      features: [
        "Unlimited calls",
        "Unlimited everything",
        "Dedicated infrastructure",
        "White-glove onboarding",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-24 overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      {/* Glow behind popular card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" 
           style={{ animation: 'glow-pulse 2s ease-in-out infinite' }} />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            No hidden fees. No surprises. Just honest pricing.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-slate-100 rounded-full p-1.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                !isAnnual ? 'bg-white text-primary shadow-md' : 'text-slate-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all relative ${
                isAnnual ? 'bg-white text-primary shadow-md' : 'text-slate-600'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary to-purple-600 text-white shadow-2xl scale-105 z-10'
                  : 'bg-white border-2 border-slate-200 hover:border-primary shadow-sm'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white text-purple-600 text-xs font-bold uppercase rounded-full animate-pulse shadow-lg">
                  ⭐ Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-white/90' : 'text-slate-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-xl font-semibold ${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>$</span>
                  <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-base ${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>/month</span>
                </div>
                {isAnnual && (
                  <p className={`text-sm mt-2 line-through ${plan.popular ? 'text-white/60' : 'text-slate-400'}`}>
                    ${plan.monthlyPrice}/month billed monthly
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className={`border-t mb-6 ${plan.popular ? 'border-white/20' : 'border-slate-200'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold text-base transition-all ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-slate-100 hover:scale-105'
                    : 'bg-primary text-white hover:bg-primary/90 hover:scale-105'
                } shadow-lg`}
              >
                {plan.cta}
              </button>

              {/* Small Text */}
              <p className={`text-center text-xs mt-3 ${plan.popular ? 'text-white/70' : 'text-slate-500'}`}>
                No credit card required
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline">
            Compare all features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
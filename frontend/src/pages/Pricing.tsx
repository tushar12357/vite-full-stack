import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For startups and publishers",
    subAccounts: "UP TO 05 Sub-Accounts",
    price: "$29",
    cadence: "Per Month",
    cta: "Get Started",
    features: [
      "Basic dashboard",
      "Limited API access",
      "Email Support",
      "Up to 05 sub-accounts",
      "Basic analytics",
    ],
  },
  {
    name: "Professional",
    tagline: "For rapidly scaling startups and publishers",
    subAccounts: "UP TO 20 Sub-Accounts",
    price: "$99",
    cadence: "Per Month",
    cta: "Get Started",
    popular: true,
    features: [
      "Advanced dashboard",
      "Priority API access",
      "Live chat support",
      "Up to 20 sub-accounts",
      "Advanced analytics",
      "Custom branding",
      "Call recording",
    ],
  },
  {
    name: "Growing",
    tagline: "For enterprises that need volume based discounts and custom terms.",
    subAccounts: "Unlimited Sub-Accounts",
    price: "$297",
    cadence: "Per Month",
    cta: "Get Started",
    features: [
      "Full-featured dashboard",
      "Unlimited API calls",
      "24/7 dedicated support",
      "Unlimited sub-accounts",
      "Advanced analytics",
      "Custom AI models",
      "SLA guarantee",
      "Priority processing",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For enterprises that need volume based discounts and custom terms.",
    subAccounts: "Unlimited Sub-Accounts",
    price: "Custom",
    cadence: "",
    cta: "Talk to sales",
    enterprise: true,
    features: [
      "Full-featured dashboard",
      "Unlimited API calls",
      "24/7 dedicated support",
      "Unlimited sub-accounts",
      "Advanced analytics",
      "Custom AI models",
      "SLA guarantee",
      "Priority processing",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />

      <main className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              No Platform fees.<br />pay only for what you use
            </h1>
            <p className="text-base md:text-lg text-white/70">
              Treat Retell like your outsourced call centre.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, idx) => {
              const isPopular = plan.popular;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-[32px] border border-white/10 ${
                    isPopular ? "" : "bg-[#080808]"
                  }`}
                  style={
                    isPopular
                      ? {
                          backgroundColor: "#080808",
                        }
                      : undefined
                  }
                >
                  {isPopular && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[80%] z-30">
                      <div
                        className="relative rounded-full px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white overflow-hidden shadow-[0_8px_20px_rgba(139,92,246,0.45)]"
                        style={{
                          background: "#8B5CF6",
                        }}
                      >
                        <span
                          className="absolute inset-0 pointer-events-none opacity-35"
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                            mixBlendMode: "screen",
                          }}
                        />
                        <span className="relative z-10">Most Popular</span>
                      </div>
                    </div>
                  )}
                  <div
                    className={`relative rounded-[30px] p-8 h-full flex flex-col gap-6 ${
                      isPopular ? "bg-transparent pt-12" : "bg-transparent"
                    }`}
                  >
                    {isPopular && (
                      <>
                        <div className="absolute inset-0 rounded-[30px] overflow-hidden border border-white/15">
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: "linear-gradient(270deg, #C4B5FD -15%, #974BF3 50.02%, #C4B5FD 115.04%)",
                            }}
                          />
                          <div
                            className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none"
                            style={{
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                            }}
                          />
                        </div>
                      </>
                    )}

                    {!isPopular && (
                      <div className="text-sm font-semibold text-white">{plan.name}</div>
                    )}

                    <div className="relative z-10 space-y-1">
                      {isPopular ? (
                        <h3 className="text-[28px] font-semibold">{plan.name}</h3>
                      ) : (
                        <h3 className="text-[22px] font-semibold">{plan.name}</h3>
                      )}
                      <p className="text-sm text-white/70">{plan.tagline}</p>
                      <p className="text-xs text-white/60 uppercase tracking-[0.4em]">{plan.subAccounts}</p>
                    </div>

                    <div className="relative z-10 space-y-1">
                      <div className="text-4xl font-semibold">{plan.price}</div>
                      {plan.cadence && <p className="text-sm text-white/60">{plan.cadence}</p>}
                    </div>

                    <div className="relative z-10 flex-1">
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                            <Check className={`w-4 h-4 mt-0.5 ${plan.popular ? "text-white" : "text-white/70"}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative z-10">
                      {plan.enterprise ? (
                        <a
                          href="/contact"
                          className="w-full rounded-full px-6 py-3 text-sm font-semibold bg-white text-black hover:bg-white/90 block text-center"
                        >
                          {plan.cta}
                        </a>
                      ) : (
                        <a
                          href={`https://offer.closerx.ai${plan.price === "$29" ? "?plan=starter" : plan.price === "$297" ? "?plan=professional" : ""}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full rounded-full px-6 py-3 text-sm font-semibold block text-center ${
                            plan.popular
                              ? "border border-white/20 text-white"
                              : "bg-[#0F0F0F] text-white border border-white/15 hover:bg-white/10"
                          }`}
                          style={
                            plan.popular
                              ? {
                                  background: "linear-gradient(270deg, #C4B5FD -15%, #974BF3 50.02%, #C4B5FD 115.04%)",
                                }
                              : undefined
                          }
                        >
                          {plan.cta}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

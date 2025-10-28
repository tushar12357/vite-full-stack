import { useState } from "react";

const IntegrationEcosystem = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const integrations = [
    { name: "Zapier", logo: "⚡", category: "automation", radius: 400, angle: 0 },
    { name: "HubSpot", logo: "📊", category: "crm", radius: 400, angle: 60 },
    { name: "Stripe", logo: "💳", category: "payment", radius: 400, angle: 120 },
    { name: "Salesforce", logo: "☁️", category: "crm", radius: 400, angle: 180 },
    { name: "PayPal", logo: "💰", category: "payment", radius: 400, angle: 240 },
    { name: "Pipedrive", logo: "📈", category: "crm", radius: 400, angle: 300 },
    { name: "n8n", logo: "🔗", category: "automation", radius: 280, angle: 30 },
    { name: "GoHighLevel", logo: "🎯", category: "crm", radius: 280, angle: 90 },
    { name: "Zoho CRM", logo: "📋", category: "crm", radius: 280, angle: 150 },
    { name: "Google Calendar", logo: "📅", category: "scheduling", radius: 280, angle: 210 },
    { name: "Slack", logo: "💬", category: "communication", radius: 280, angle: 270 },
    { name: "Gmail", logo: "📧", category: "communication", radius: 280, angle: 330 },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-32 overflow-visible">
      <div className="absolute inset-0 pattern-circuit" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Integrations
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 max-w-3xl mx-auto leading-tight">
            Connects With Everything You Already Use
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Seamlessly integrate with 50+ popular tools in your tech stack
          </p>
        </div>

          {/* Compact Grid View */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12">
          {integrations.slice(0, 12).map((integration, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 rounded-xl shadow-sm p-4 flex flex-col items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{integration.logo}</div>
              <div className="text-xs font-semibold text-slate-700 text-center">
                {integration.name}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-4">And 38+ more integrations available...</p>
          <a
            href="/integrations"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            View All Integrations →
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntegrationEcosystem;
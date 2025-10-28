import { useState } from "react";
import { Search } from "lucide-react";

const IntegrationGrid = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "🔗 All", emoji: "🔗" },
    { id: "crm", label: "📊 CRMs", emoji: "📊" },
    { id: "automation", label: "⚡ Automation", emoji: "⚡" },
    { id: "payment", label: "💳 Payments", emoji: "💳" },
    { id: "scheduling", label: "📅 Scheduling", emoji: "📅" },
    { id: "communication", label: "💬 Communication", emoji: "💬" },
  ];

  const integrations = [
    // CRMs
    { name: "HubSpot", logo: "📊", category: "crm", featured: true },
    { name: "Salesforce", logo: "☁️", category: "crm" },
    { name: "Pipedrive", logo: "📈", category: "crm" },
    { name: "Zoho CRM", logo: "📋", category: "crm" },
    { name: "Close CRM", logo: "🎯", category: "crm" },
    { name: "Copper", logo: "🔶", category: "crm" },
    { name: "Freshsales", logo: "🌱", category: "crm" },
    { name: "Insightly", logo: "👁️", category: "crm" },
    { name: "Nutshell", logo: "🥜", category: "crm" },
    { name: "Streak", logo: "📨", category: "crm" },
    // Automation
    { name: "Zapier", logo: "⚡", category: "automation", featured: true },
    { name: "n8n", logo: "🔗", category: "automation" },
    { name: "Make", logo: "🎨", category: "automation" },
    { name: "Automate.io", logo: "🤖", category: "automation" },
    { name: "IFTTT", logo: "🔄", category: "automation" },
    { name: "Workato", logo: "⚙️", category: "automation" },
    { name: "Tray.io", logo: "📦", category: "automation" },
    { name: "Integrately", logo: "🔌", category: "automation" },
    // Payments
    { name: "Stripe", logo: "💳", category: "payment", featured: true },
    { name: "PayPal", logo: "💰", category: "payment" },
    { name: "Square", logo: "⬛", category: "payment" },
    { name: "Braintree", logo: "🌳", category: "payment" },
    { name: "Authorize.net", logo: "🔐", category: "payment" },
    { name: "Chargebee", logo: "💵", category: "payment" },
    // Scheduling
    { name: "Google Calendar", logo: "📅", category: "scheduling" },
    { name: "Outlook Calendar", logo: "📆", category: "scheduling" },
    { name: "Calendly", logo: "🗓️", category: "scheduling" },
    { name: "Acuity Scheduling", logo: "⏰", category: "scheduling" },
    { name: "Cal.com", logo: "📲", category: "scheduling" },
    { name: "ScheduleOnce", logo: "🕐", category: "scheduling" },
    // Communication
    { name: "Slack", logo: "💬", category: "communication" },
    { name: "Microsoft Teams", logo: "👥", category: "communication" },
    { name: "Discord", logo: "🎮", category: "communication" },
    { name: "Telegram", logo: "✈️", category: "communication" },
    { name: "WhatsApp Business", logo: "📱", category: "communication" },
    { name: "Twilio SMS", logo: "📧", category: "communication" },
    // All-in-One
    { name: "GoHighLevel", logo: "🎯", category: "crm", featured: true },
    { name: "Monday.com", logo: "📊", category: "automation" },
    { name: "ClickUp", logo: "⚡", category: "automation" },
    { name: "Notion", logo: "📝", category: "automation" },
  ];

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesTab = activeTab === "all" || integration.category === activeTab;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-dots-light" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            50+ Integrations
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
            Connect Your Entire Tech Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Pre-built integrations with the tools you already love
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-primary focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border-2 border-slate-200 rounded-2xl p-2 gap-2 shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {filteredIntegrations.map((integration, idx) => (
            <div
              key={idx}
              className={`group relative bg-white border-2 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                integration.featured
                  ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-purple-600/5 ring-2 ring-primary/20'
                  : 'border-slate-200 hover:border-primary'
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {integration.featured && (
                <span className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                  Popular
                </span>
              )}

              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
                  {integration.logo}
                </div>
                <div className="font-semibold text-slate-900 mb-2">
                  {integration.name}
                </div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                  integration.category === 'crm' ? 'bg-purple-100 text-purple-700' :
                  integration.category === 'automation' ? 'bg-cyan-100 text-cyan-700' :
                  integration.category === 'payment' ? 'bg-green-100 text-green-700' :
                  integration.category === 'scheduling' ? 'bg-blue-100 text-blue-700' :
                  'bg-pink-100 text-pink-700'
                }`}>
                  {integration.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-slate-100 rounded-3xl p-12 text-center">
          <div className="text-5xl mb-4">🔌</div>
          <h3 className="text-3xl font-bold text-slate-900 mb-3">
            Don't See Your Tool?
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            We're constantly adding new integrations. Request yours or build it yourself with our API!
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Request Integration
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all">
              View API Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationGrid;
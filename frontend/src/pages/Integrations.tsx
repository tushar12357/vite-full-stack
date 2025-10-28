import { useState } from "react";
import { Search, Zap, ChevronRight, Star, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Integrations = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Integrations", count: 50 },
    { id: "crm", label: "CRM", count: 12 },
    { id: "automation", label: "Automation", count: 8 },
    { id: "payment", label: "Payments", count: 6 },
    { id: "communication", label: "Communication", count: 10 },
    { id: "scheduling", label: "Scheduling", count: 7 },
    { id: "analytics", label: "Analytics", count: 7 },
  ];

  const integrations = [
    { name: "HubSpot", logo: "📊", category: "crm", description: "Sync contacts, deals, and activities automatically", popular: true, featured: true },
    { name: "Salesforce", logo: "☁️", category: "crm", description: "Enterprise CRM integration with real-time sync", popular: true, featured: true },
    { name: "Zapier", logo: "⚡", category: "automation", description: "Connect with 5,000+ apps via Zapier workflows", popular: true, featured: true },
    { name: "Stripe", logo: "💳", category: "payment", description: "Accept payments and manage subscriptions", popular: true },
    { name: "PayPal", logo: "💰", category: "payment", description: "Process payments securely with PayPal", popular: false },
    { name: "Pipedrive", logo: "📈", category: "crm", description: "Visual sales pipeline with automatic updates" },
    { name: "Zoho CRM", logo: "📋", category: "crm", description: "Complete CRM solution with custom fields" },
    { name: "Monday.com", logo: "🎯", category: "crm", description: "Project management and CRM workflows" },
    { name: "Microsoft Dynamics", logo: "🔷", category: "crm", description: "Enterprise-grade CRM integration" },
    { name: "n8n", logo: "🔗", category: "automation", description: "Open-source workflow automation platform" },
    { name: "Make (Integromat)", logo: "🔧", category: "automation", description: "Visual automation platform with advanced logic" },
    { name: "Google Calendar", logo: "📅", category: "scheduling", description: "Schedule appointments and sync calendars" },
    { name: "Calendly", logo: "📆", category: "scheduling", description: "Automated scheduling for meetings" },
    { name: "Acuity Scheduling", logo: "⏰", category: "scheduling", description: "Online appointment scheduling software" },
    { name: "Slack", logo: "💬", category: "communication", description: "Team messaging and notifications" },
    { name: "Microsoft Teams", logo: "👥", category: "communication", description: "Collaborate and communicate in real-time" },
    { name: "Gmail", logo: "📧", category: "communication", description: "Email integration with automatic threading" },
    { name: "Twilio", logo: "📱", category: "communication", description: "SMS and voice communication APIs" },
    { name: "SendGrid", logo: "✉️", category: "communication", description: "Email delivery and marketing automation" },
    { name: "Mailchimp", logo: "🐵", category: "communication", description: "Email marketing and audience management" },
    { name: "Google Analytics", logo: "📊", category: "analytics", description: "Track website and campaign performance" },
    { name: "Mixpanel", logo: "📈", category: "analytics", description: "Product analytics and user insights" },
    { name: "Segment", logo: "🎯", category: "analytics", description: "Customer data platform and analytics" },
    { name: "Amplitude", logo: "📉", category: "analytics", description: "Product intelligence platform" },
    { name: "GoHighLevel", logo: "🚀", category: "crm", description: "All-in-one sales and marketing platform" },
    { name: "ActiveCampaign", logo: "🎪", category: "automation", description: "Marketing automation and CRM" },
    { name: "Keap", logo: "🔑", category: "crm", description: "CRM and sales automation for small business" },
    { name: "Close", logo: "📞", category: "crm", description: "Sales CRM built for high-velocity teams" },
    { name: "FreshBooks", logo: "💼", category: "payment", description: "Accounting and invoicing software" },
    { name: "QuickBooks", logo: "📚", category: "payment", description: "Complete accounting solution" },
    { name: "Xero", logo: "💵", category: "payment", description: "Cloud-based accounting platform" },
    { name: "Square", logo: "⬜", category: "payment", description: "Payment processing and POS system" },
    { name: "Zoom", logo: "🎥", category: "communication", description: "Video conferencing integration" },
    { name: "Discord", logo: "🎮", category: "communication", description: "Community and voice chat platform" },
    { name: "Intercom", logo: "💭", category: "communication", description: "Customer messaging platform" },
    { name: "Drift", logo: "💨", category: "communication", description: "Conversational marketing platform" },
    { name: "Appointlet", logo: "📋", category: "scheduling", description: "Simple scheduling for teams" },
    { name: "SimplyBook.me", logo: "📖", category: "scheduling", description: "Online booking system" },
    { name: "Setmore", logo: "⏱️", category: "scheduling", description: "Free online scheduling platform" },
    { name: "Databox", logo: "📦", category: "analytics", description: "Business analytics and KPI dashboard" },
    { name: "Looker", logo: "🔍", category: "analytics", description: "Business intelligence platform" },
    { name: "Tableau", logo: "📊", category: "analytics", description: "Visual analytics platform" },
    { name: "Power BI", logo: "⚡", category: "analytics", description: "Microsoft's business analytics service" },
    { name: "Copper", logo: "🥉", category: "crm", description: "CRM for Google Workspace" },
    { name: "Nimble", logo: "🤸", category: "crm", description: "Simple CRM and prospecting tool" },
    { name: "Insightly", logo: "👁️", category: "crm", description: "CRM and project management" },
    { name: "Airtable", logo: "🗂️", category: "automation", description: "Flexible spreadsheet-database hybrid" },
    { name: "Notion", logo: "📝", category: "automation", description: "All-in-one workspace" },
    { name: "Trello", logo: "📌", category: "automation", description: "Visual project management boards" },
    { name: "Asana", logo: "🎯", category: "automation", description: "Work management platform" },
  ];

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = activeTab === "all" || integration.category === activeTab;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              🔌 50+ Integrations
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Connect With Your<br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Favorite Tools
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Seamlessly integrate CloserX.ai with the tools you already use. No complex setup required.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-primary focus:outline-none text-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-slate-600">Integrations</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">99.9%</div>
              <div className="text-sm text-slate-600">Uptime</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">&lt;2s</div>
              <div className="text-sm text-slate-600">Sync Time</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">Real-time</div>
              <div className="text-sm text-slate-600">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-80">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Featured Integrations */}
          {activeTab === "all" && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <h2 className="text-2xl font-bold text-slate-900">Featured Integrations</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {integrations.filter(i => i.featured).map((integration, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary hover:shadow-2xl transition-all cursor-pointer"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-500" />
                        Featured
                      </span>
                    </div>
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{integration.logo}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{integration.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{integration.description}</p>
                    <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Integrations Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {activeTab === "all" ? "All Integrations" : `${categories.find(c => c.id === activeTab)?.label} Integrations`}
              </h2>
              <div className="text-sm text-slate-600">
                Showing {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? 's' : ''}
              </div>
            </div>

            {filteredIntegrations.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIntegrations.map((integration, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-primary hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">{integration.logo}</div>
                      {integration.popular && (
                        <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{integration.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{integration.description}</p>
                    <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Connect
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No integrations found</h3>
                <p className="text-slate-600">Try adjusting your search or filter</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Zap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Don't See Your Tool?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're constantly adding new integrations. Request yours and we'll prioritize it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Request Integration
            </button>
            <Link
              to="/api-docs"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all"
            >
              View API Docs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;

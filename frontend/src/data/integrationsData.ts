export interface Integration {
  name: string;
  logo: string;
  category: "crm" | "payment" | "automation" | "communication" | "scheduling" | "analytics";
  description: string;
  popular?: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  label: string;
  count: number;
}

export const categories: Category[] = [
  { id: "all", label: "All Integrations", count: 50 },
  { id: "crm", label: "CRM", count: 12 },
  { id: "automation", label: "Automation", count: 8 },
  { id: "payment", label: "Payments", count: 6 },
  { id: "communication", label: "Communication", count: 10 },
  { id: "scheduling", label: "Scheduling", count: 7 },
  { id: "analytics", label: "Analytics", count: 7 },
];

export const integrations: Integration[] = [
  // Featured Integrations
  { 
    name: "GoHighLevel", 
    logo: "🚀", 
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true, 
    featured: true 
  },
  { 
    name: "PayPal", 
    logo: "💰", 
    category: "payment", 
    description: "Process payments securely with PayPal", 
    popular: true, 
    featured: true 
  },
  { 
    name: "Stripe", 
    logo: "💳", 
    category: "payment", 
    description: "Accept payments and manage subscriptions", 
    popular: true, 
    featured: true 
  },
  { 
    name: "Zoho CRM", 
    logo: "📋", 
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true, 
    featured: true 
  },
  { 
    name: "Cal.com", 
    logo: "🕒", 
    category: "scheduling", 
    description: "Open-source scheduling platform for teams", 
    popular: true, 
    featured: true 
  },

  // CRM Integrations
  { 
    name: "HubSpot", 
    logo: "📊", 
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true 
  },
  { 
    name: "Salesforce", 
    logo: "☁️", 
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true 
  },
  { 
    name: "Pipedrive", 
    logo: "📈", 
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding." 
  },
  { 
    name: "Monday.com", 
    logo: "🎯", 
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding." 
  },
  { 
    name: "Microsoft Dynamics", 
    logo: "🔷", 
    category: "crm", 
    description: "Enterprise-grade CRM integration" 
  },
  { 
    name: "Keap", 
    logo: "🔑", 
    category: "crm", 
    description: "CRM and sales automation for small business" 
  },
  { 
    name: "Close", 
    logo: "📞", 
    category: "crm", 
    description: "Sales CRM built for high-velocity teams" 
  },
  { 
    name: "Copper", 
    logo: "🥉", 
    category: "crm", 
    description: "CRM for Google Workspace" 
  },
  { 
    name: "Nimble", 
    logo: "🤸", 
    category: "crm", 
    description: "Simple CRM and prospecting tool" 
  },
  { 
    name: "Insightly", 
    logo: "👁️", 
    category: "crm", 
    description: "CRM and project management" 
  },

  // Automation Integrations
  { 
    name: "Zapier", 
    logo: "⚡", 
    category: "automation", 
    description: "Connect with 5,000+ apps via Zapier workflows", 
    popular: true 
  },
  { 
    name: "n8n", 
    logo: "🔗", 
    category: "automation", 
    description: "Open-source workflow automation platform" 
  },
  { 
    name: "Make (Integromat)", 
    logo: "🔧", 
    category: "automation", 
    description: "Visual automation platform with advanced logic" 
  },
  { 
    name: "ActiveCampaign", 
    logo: "🎪", 
    category: "automation", 
    description: "Marketing automation and CRM" 
  },
  { 
    name: "Airtable", 
    logo: "🗂️", 
    category: "automation", 
    description: "Flexible spreadsheet-database hybrid" 
  },
  { 
    name: "Notion", 
    logo: "📝", 
    category: "automation", 
    description: "All-in-one workspace" 
  },
  { 
    name: "Trello", 
    logo: "📌", 
    category: "automation", 
    description: "Visual project management boards" 
  },
  { 
    name: "Asana", 
    logo: "🎯", 
    category: "automation", 
    description: "Work management platform" 
  },

  // Payment Integrations
  { 
    name: "FreshBooks", 
    logo: "💼", 
    category: "payment", 
    description: "Accounting and invoicing software" 
  },
  { 
    name: "QuickBooks", 
    logo: "📚", 
    category: "payment", 
    description: "Complete accounting solution" 
  },
  { 
    name: "Xero", 
    logo: "💵", 
    category: "payment", 
    description: "Cloud-based accounting platform" 
  },
  { 
    name: "Square", 
    logo: "⬜", 
    category: "payment", 
    description: "Payment processing and POS system" 
  },

  // Communication Integrations
  { 
    name: "Slack", 
    logo: "💬", 
    category: "communication", 
    description: "Team messaging and notifications" 
  },
  { 
    name: "Microsoft Teams", 
    logo: "👥", 
    category: "communication", 
    description: "Collaborate and communicate in real-time" 
  },
  { 
    name: "Gmail", 
    logo: "📧", 
    category: "communication", 
    description: "Email integration with automatic threading" 
  },
  { 
    name: "Twilio", 
    logo: "📱", 
    category: "communication", 
    description: "SMS and voice communication APIs" 
  },
  { 
    name: "SendGrid", 
    logo: "✉️", 
    category: "communication", 
    description: "Email delivery and marketing automation" 
  },
  { 
    name: "Mailchimp", 
    logo: "🐵", 
    category: "communication", 
    description: "Email marketing and audience management" 
  },
  { 
    name: "Zoom", 
    logo: "🎥", 
    category: "communication", 
    description: "Video conferencing integration" 
  },
  { 
    name: "Discord", 
    logo: "🎮", 
    category: "communication", 
    description: "Community and voice chat platform" 
  },
  { 
    name: "Intercom", 
    logo: "💭", 
    category: "communication", 
    description: "Customer messaging platform" 
  },
  { 
    name: "Drift", 
    logo: "💨", 
    category: "communication", 
    description: "Conversational marketing platform" 
  },

  // Scheduling Integrations
  { 
    name: "Google Calendar", 
    logo: "📅", 
    category: "scheduling", 
    description: "Schedule appointments and sync calendars" 
  },
  { 
    name: "Calendly", 
    logo: "📆", 
    category: "scheduling", 
    description: "Automated scheduling for meetings" 
  },
  { 
    name: "Acuity Scheduling", 
    logo: "⏰", 
    category: "scheduling", 
    description: "Online appointment scheduling software" 
  },
  { 
    name: "Appointlet", 
    logo: "📋", 
    category: "scheduling", 
    description: "Simple scheduling for teams" 
  },
  { 
    name: "SimplyBook.me", 
    logo: "📖", 
    category: "scheduling", 
    description: "Online booking system" 
  },
  { 
    name: "Setmore", 
    logo: "⏱️", 
    category: "scheduling", 
    description: "Free online scheduling platform" 
  },

  // Analytics Integrations
  { 
    name: "Google Analytics", 
    logo: "📊", 
    category: "analytics", 
    description: "Track website and campaign performance" 
  },
  { 
    name: "Mixpanel", 
    logo: "📈", 
    category: "analytics", 
    description: "Product analytics and user insights" 
  },
  { 
    name: "Segment", 
    logo: "🎯", 
    category: "analytics", 
    description: "Customer data platform and analytics" 
  },
  { 
    name: "Amplitude", 
    logo: "📉", 
    category: "analytics", 
    description: "Product intelligence platform" 
  },
  { 
    name: "Databox", 
    logo: "📦", 
    category: "analytics", 
    description: "Business analytics and KPI dashboard" 
  },
  { 
    name: "Looker", 
    logo: "🔍", 
    category: "analytics", 
    description: "Business intelligence platform" 
  },
  { 
    name: "Tableau", 
    logo: "📊", 
    category: "analytics", 
    description: "Visual analytics platform" 
  },
  { 
    name: "Power BI", 
    logo: "⚡", 
    category: "analytics", 
    description: "Microsoft's business analytics service" 
  },
];

// Marquee integrations list (for hero section)
export const marqueeIntegrations = [
  { name: "PayPal", logo: "💰" },
  { name: "Salesforce", logo: "☁️" },
  { name: "Go High Level", logo: "🚀" },
  { name: "Stripe", logo: "💳" },
  { name: "n8n", logo: "🔗" },
  { name: "Twilio", logo: "📱" },
];


export interface Integration {
  name: string;
  logo: string; // Can be emoji or image path
  logoImage?: string; // Optional image path for actual logo files
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
    logoImage: "/integrations/PayPal/logo.svg",
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
    logoImage: "/integrations/Zoho/logo.svg",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true, 
    featured: true 
  },
  { 
    name: "Calendly", 
    logo: "📆",
    logoImage: "/integrations/Calendly/logo.svg",
    category: "scheduling", 
    description: "Automated scheduling for meetings", 
    popular: true, 
    featured: true 
  },

  // CRM Integrations
  { 
    name: "HubSpot", 
    logo: "📊",
    logoImage: "/integrations/HubSpot/logo.svg",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true 
  },
  { 
    name: "Salesforce", 
    logo: "☁️",
    logoImage: "/integrations/Salesforce/logo.svg",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true 
  },
  { 
    name: "Pipedrive", 
    logo: "📈",
    logoImage: "/integrations/Pipedrive/logo.svg",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding." 
  },
  { 
    name: "Monday.com", 
    logo: "🎯",
    logoImage: "/integrations/Monday.com/logo.svg",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding." 
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
    logoImage: "/integrations/Make/logo.svg",
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
    logoImage: "/integrations/Notion/logo.svg",
    category: "automation", 
    description: "All-in-one workspace" 
  },
  { 
    name: "Trello", 
    logo: "📌",
    logoImage: "/integrations/Trello/logo.svg",
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
    name: "Square", 
    logo: "⬜",
    logoImage: "/integrations/Square/logo.svg",
    category: "payment", 
    description: "Payment processing and POS system" 
  },

  // Communication Integrations
  { 
    name: "Slack", 
    logo: "💬",
    logoImage: "/integrations/Slack/logo.svg",
    category: "communication", 
    description: "Team messaging and notifications" 
  },
  { 
    name: "Google Meet", 
    logo: "👥", 
    logoImage: "/integrations/GoogleMeet/logo.svg",
    category: "communication", 
    description: "Collaborate and communicate in real-time" 
  },
  { 
    name: "Gmail", 
    logo: "📧",
    logoImage: "/integrations/Gmail/logo.svg",
    category: "communication", 
    description: "Email integration with automatic threading" 
  },
  { 
    name: "Twilio", 
    logo: "📱",
    logoImage: "/integrations/Twilio/logo.svg",
    category: "communication", 
    description: "SMS and voice communication APIs" 
  },
  { 
    name: "Telnyx", 
    logo: "✉️",
    logoImage: "/integrations/Telnyx/logo.svg",
    category: "communication", 
    description: "Email delivery and marketing automation" 
  },
  { 
    name: "Whatsapp", 
    logo: "🐵", 
    category: "communication", 
    description: "Whatsapp marketing and audience management" 
  },
  { 
    name: "Discord", 
    logo: "🎮",
    logoImage: "/integrations/Discord/logo.svg",
    category: "communication", 
    description: "Community and voice chat platform" 
  },
  { 
    name: "Intercom", 
    logo: "💭",
    logoImage: "/integrations/Intercom/logo.svg",
    category: "communication", 
    description: "Customer messaging platform" 
  },
  { 
    name: "Skool Community", 
    logo: "💨",
    logoImage: "/integrations/SkoolCommunity/logo.svg",
    category: "communication", 
    description: "Conversational marketing platform" 
  },
  { 
    name: "Botim", 
    logo: "🎮",
    logoImage: "/integrations/Discord/logo.svg",
    category: "communication", 
    description: "Community and voice chat platform" 
  },
  { 
    name: "GoChat", 
    logo: "💭",
    logoImage: "/integrations/GoChat/logo.svg",
    category: "communication", 
    description: "Customer messaging platform" 
  },
  { 
    name: "Tawasal", 
    logo: "💨",
    logoImage: "/integrations/Tawasal/logo.svg",
    category: "communication", 
    description: "Conversational marketing platform" 
  },

  // Scheduling Integrations
  { 
    name: "Google Calendar", 
    logo: "📅",
    logoImage: "/integrations/GoogleCalendar/logo.svg",
    category: "scheduling", 
    description: "Schedule appointments and sync calendars" 
  },
  { 
    name: "Calendly", 
    logo: "📆",
    logoImage: "/integrations/Calendly/logo.svg",
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
    logoImage: "/integrations/Mixpanel/logo.svg",
    category: "analytics", 
    description: "Product analytics and user insights" 
  },
  { 
    name: "Segment", 
    logo: "🎯",
    logoImage: "/integrations/Segment/logo.svg",
    category: "analytics", 
    description: "Customer data platform and analytics" 
  },
  { 
    name: "Amplitude", 
    logo: "📉",
    logoImage: "/integrations/Amplitude/logo.svg",
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
    logoImage: "/integrations/Tableau/logo.svg",
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
export const marqueeIntegrations: Array<{ name: string; logo: string; logoImage?: string }> = [
  { name: "PayPal", logo: "💰", logoImage: "/integrations/PayPal/logo.svg" },
  { name: "Salesforce", logo: "☁️", logoImage: "/integrations/Salesforce/logo.svg" },
  { name: "Go High Level", logo: "🚀" },
  { name: "Stripe", logo: "💳" },
  { name: "n8n", logo: "🔗" },
  { name: "Twilio", logo: "📱", logoImage: "/integrations/Twilio/logo.svg" },
];


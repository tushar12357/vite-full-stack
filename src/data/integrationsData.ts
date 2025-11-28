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
    logo: "Go High Level", 
    logoImage: "/src/assets/Integrationicons/ghl.png",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true, 
    featured: true 
  },
  { 
    name: "PayPal", 
    logo: "💰",
    logoImage: "/src/assets/Integrationicons/PayPal.png",
    category: "payment", 
    description: "Process payments securely with PayPal", 
    popular: true, 
    featured: true 
  },
  { 
    name: "Stripe", 
    logo: "💳", 
    logoImage: "/src/assets/Integrationicons/Strip.png",
    category: "payment", 
    description: "Accept payments and manage subscriptions", 
    popular: true, 
    featured: true 
  },
  { 
    name: "Zoho CRM", 
    logo: "📋",
    logoImage: "/src/assets/Integrationicons/Zoho_idb7XCQtPE_1.png",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true, 
    featured: true 
  },
  { 
    name: "Calendly", 
    logo: "📆",
    logoImage: "/src/assets/Integrationicons/Calendly1.png",
    category: "scheduling", 
    description: "Automated scheduling for meetings", 
    popular: true, 
    featured: true 
  },

  // CRM Integrations
  { 
    name: "HubSpot", 
    logo: "📊",
    logoImage: "/src/assets/Integrationicons/HubSpot_Symbol_1.png",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true 
  },
  { 
    name: "Salesforce", 
    logo: "☁️",
    logoImage: "/src/assets/Integrationicons/Salesforce_idN3OdcTG__1.png",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", 
    popular: true 
  },
  { 
    name: "Pipedrive", 
    logo: "📈",
    logoImage: "/src/assets/Integrationicons/Pipedrive.png",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding." 
  },
  { 
    name: "Monday.com", 
    logo: "🎯",
    logoImage: "/src/assets/Integrationicons/Monday.com.png",
    category: "crm", 
    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding." 
  },


  // Automation Integrations
  { 
    name: "Zapier", 
    logo: "⚡",
    logoImage: "/src/assets/Integrationicons/zapier.svg",
    category: "automation", 
    description: "Connect with 5,000+ apps via Zapier workflows", 
    popular: true 
  },
  { 
    name: "n8n", 
    logo: "🔗", 
    logoImage: "/src/assets/Integrationicons/n8n.png",
    category: "automation", 
    description: "Open-source workflow automation platform" 
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
    logoImage: "/src/assets/Integrationicons/Airtable.svg",
    category: "automation", 
    description: "Flexible spreadsheet-database hybrid" 
  },
  { 
    name: "Notion", 
    logo: "📝",
    logoImage: "/src/assets/Integrationicons/Notion.svg",
    category: "automation", 
    description: "All-in-one workspace" 
  },
  { 
    name: "Trello", 
    logo: "📌",
    logoImage: "/src/assets/Integrationicons/Trello.svg",
    category: "automation", 
    description: "Visual project management boards" 
  },
  { 
    name: "Asana", 
    logo: "🎯", 
    logoImage: "/src/assets/Integrationicons/Asana.png",
    category: "automation", 
    description: "Work management platform" 
  },

  // Payment Integrations

  

  // Communication Integrations
  { 
    name: "Slack", 
    logo: "💬",
    logoImage: "/src/assets/Integrationicons/slack.jpeg",
    category: "communication", 
    description: "Team messaging and notifications" 
  },
  { 
    name: "Google Meet", 
    logo: "👥", 
    logoImage: "/src/assets/Integrationicons/meet.png",
    category: "communication", 
    description: "Collaborate and communicate in real-time" 
  },
  { 
    name: "Gmail", 
    logo: "📧",
    logoImage: "/src/assets/Integrationicons/gmail.png",
    category: "communication", 
    description: "Email integration with automatic threading" 
  },
  { 
    name: "Twilio", 
    logo: "📱",
    logoImage: "/src/assets/Integrationicons/twilio.png",
    category: "communication", 
    description: "SMS and voice communication APIs" 
  },
  { 
    name: "Telnyx", 
    logo: "✉️",
    logoImage: "/src/assets/Integrationicons/telynx.jpeg",
    category: "communication", 
    description: "Email delivery and marketing automation" 
  },
  { 
    name: "Whatsapp", 
    logo: "🐵", 
    logoImage: "/src/assets/Integrationicons/whatsapp.jpeg",
    category: "communication", 
    description: "Whatsapp marketing and audience management" 
  },
  { 
    name: "Discord", 
    logo: "🎮",
    logoImage: "/src/assets/Integrationicons/discord.png",
    category: "communication", 
    description: "Community and voice chat platform" 
  },
  { 
    name: "Intercom", 
    logo: "💭",
    logoImage: "/src/assets/Integrationicons/intercom.png",
    category: "communication", 
    description: "Customer messaging platform" 
  },
  { 
    name: "Skool Community", 
    logo: "💨",
    logoImage: "/src/assets/Integrationicons/skool.png",
    category: "communication", 
    description: "Conversational marketing platform" 
  },
  { 
    name: "Botim", 
    logo: "🎮",
    logoImage: "/src/assets/Integrationicons/botim.png",
    category: "communication", 
    description: "Community and voice chat platform" 
  },
  { 
    name: "GoChat", 
    logo: "💭",
    logoImage: "/src/assets/Integrationicons/gochat.jpeg",
    category: "communication", 
    description: "Customer messaging platform" 
  },
  { 
    name: "Tawasal", 
    logo: "💨",
    logoImage: "/src/assets/Integrationicons/tawasal.png",
    category: "communication", 
    description: "Conversational marketing platform" 
  },

  // Scheduling Integrations
  { 
    name: "Google Calendar", 
    logo: "📅",
    logoImage: "/src/assets/Integrationicons/googlecalendar.png",
    category: "scheduling", 
    description: "Schedule appointments and sync calendars" 
  },
  { 
    name: "Calendly", 
    logo: "📆",
    logoImage: "/src/assets/Integrationicons/Calendly1.png",
    category: "scheduling", 
    description: "Automated scheduling for meetings" 
  },
  { 
    name: "Calcom", 
    logo: "📋", 
    logoImage: "/src/assets/Integrationicons/calcom.png",
    category: "scheduling", 
    description: "Simple scheduling for teams" 
  },

  // Analytics Integrations
  { 
    name: "Google Analytics", 
    logo: "📊", 
    logoImage: "/src/assets/Integrationicons/googleanalytics.jpeg",
    category: "analytics", 
    description: "Track website and campaign performance" 
  },
  { 
    name: "Mixpanel", 
    logo: "📈",
    logoImage: "/src/assets/Integrationicons/mixpanel.jpeg",
    category: "analytics", 
    description: "Product analytics and user insights" 
  },
  { 
    name: "Segment", 
    logo: "🎯",
    logoImage: "/src/assets/Integrationicons/secment.png",
    category: "analytics", 
    description: "Customer data platform and analytics" 
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
  { name: "PayPal", logo: "💰", logoImage: "/src/assets/Integrationicons/PayPal.png" },
  { name: "Salesforce", logo: "☁️", logoImage: "/src/assets/Integrationicons/Salesforce_idN3OdcTG__1.png" },
  { name: "Go High Level", logo: "🚀", logoImage: "/src/assets/Integrationicons/ghl.png" },
  { name: "Stripe", logo: "💳", logoImage: "/src/assets/Integrationicons/Strip.png" },
  { name: "n8n", logo: "🔗", logoImage: "/src/assets/Integrationicons/n8n.png" },
  { name: "Twilio", logo: "📱", logoImage: "/src/assets/Integrationicons/twilio.png" },
];


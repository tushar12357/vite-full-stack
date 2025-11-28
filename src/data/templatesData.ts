export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  isFree: boolean;
  featured?: boolean;
  templatesCount?: string;
  usersCount?: string;
  rating?: number;
  downloads?: string;
}

export interface TemplateHeroData {
  title: string;
  subtitle: string;
  featuredTemplate: Template;
}

export const templateCategories = [
  { id: "all", label: "All templates" },
  { id: "admin", label: "Admin" },
  { id: "crm", label: "CRM" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "other", label: "Other" },
];

export const templateHeroData: TemplateHeroData = {
  title: "Discover Templates to help you build better",
  subtitle: "The best way to get started with your next project",
  featuredTemplate: {
    id: "appointment-scheduler",
    name: "Appointment Scheduler",
    description: "At today's Summit, ElevenLabs announced a partnership with British cultural icon and award-winning actor Sir Michael Caine. Caine's voice will be available on the ElevenReader app, and on the newly launched Iconic Marketplace.",
    category: "Analytics & ROI",
    image: "https://images.pexels.com/photos/5053742/pexels-photo-5053742.jpeg",
    isFree: true,
    featured: true,
    rating: 4.9,
    downloads: "12.5K Downloads",
  },
};

export const sampleTemplates: Template[] = [
  {
    id: "appointment-scheduler",
    name: "Smart Scheduling Pro",
    description: "Automated appointment booking system with calendar sync and reminders.",
    category: "Scheduling",
    image: "https://images.pexels.com/photos/5053742/pexels-photo-5053742.jpeg",
    isFree: true,
    templatesCount: "5 templates",
    usersCount: "100+ users",
    rating: 4.9,
    downloads: "12.5K Downloads",
  },
  {
    id: "crm-dashboard",
    name: "Customer 360 CRM",
    description: "Comprehensive CRM dashboard for tracking leads, deals, and customer interactions.",
    category: "CRM",
    image: "https://images.pexels.com/photos/7709146/pexels-photo-7709146.jpeg",
    isFree: false,
    templatesCount: "8 templates",
    usersCount: "250+ users",
    rating: 4.8,
    downloads: "10.2K Downloads",
  },
  {
    id: "ecommerce-starter",
    name: "E-Shop Accelerator",
    description: "Ready-to-use e-commerce template with product catalog and cart functionality.",
    category: "E-commerce",
    image: "https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg",
    isFree: true,
    templatesCount: "12 templates",
    usersCount: "500+ users",
    rating: 4.7,
    downloads: "9.8K Downloads",
  },
  {
    id: "social-media-manager",
    name: "Social Pulse",
    description: "Manage all your social media accounts and schedule posts from one place.",
    category: "Social",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    isFree: false,
    templatesCount: "6 templates",
    usersCount: "150+ users",
    rating: 4.6,
    downloads: "8.4K Downloads",
  },
  {
    id: "analytics-suite",
    name: "Data Insight Analytics",
    description: "Advanced analytics dashboard to visualize your key performance indicators.",
    category: "Analytics",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    isFree: true,
    templatesCount: "10 templates",
    usersCount: "300+ users",
    rating: 4.5,
    downloads: "7.9K Downloads",
  },
  {
    id: "marketing-campaign",
    name: "Campaign Master",
    description: "All-in-one marketing campaign manager for email, ads, and content.",
    category: "Marketing",
    image: "https://images.pexels.com/photos/3989140/pexels-photo-3989140.jpeg",
    isFree: true,
    templatesCount: "7 templates",
    usersCount: "200+ users",
    rating: 4.4,
    downloads: "6.5K Downloads",
  },
];


export interface VideoHeroData {
  title: string;
  description: string;
  buttonText: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  category: string;
  featured?: boolean;
}

export interface ProblemCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  date: string;
  videoUrl?: string;
}

export const videoHeroData: VideoHeroData = {
  title: "Introduction to CloserX.ai",
  description: "Watch this introduction to see how Kore.ai is enabling enterprises to reimagine every aspect of their business with AI for Work, AI for Service, and AI for Customer Experience.",
  buttonText: "READ ARTICLE",
};

export const videoCategories = [
  { id: "all", label: "All Videos", count: 12 },
  { id: "getting-started", label: "Getting Started", count: 5 },
  { id: "demo", label: "Demo", count: 3 },
  { id: "advanced", label: "Advanced", count: 2 },
  { id: "integrations", label: "Integrations", count: 2 },
];

export const sampleVideos: Video[] = [
  {
    id: "closerx-overview",
    title: "CloserX Overview",
    description: "Get a complete walkthrough of how CloserX works and how you can get started in minutes.",
    embedUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    category: "Getting Started",
    featured: true,
  },
  {
    id: "ai-call-demo",
    title: "CloserX AI Call Demo",
    description: "Watch a real AI-powered sales conversation handled by CloserX's intelligent voice agent.",
    embedUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
    category: "Demo",
    featured: true,
  },
  {
    id: "getting-started-1",
    title: "Getting Started with CloserX",
    description: "Learn the basics of setting up your first AI agent and making your first call.",
    embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    category: "Getting Started",
    featured: false,
  },
  {
    id: "getting-started-2",
    title: "Voice Agent Configuration",
    description: "Step-by-step guide to configuring your voice agent settings and preferences.",
    embedUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    category: "Getting Started",
    featured: false,
  },
  {
    id: "getting-started-3",
    title: "First Call Tutorial",
    description: "Watch how to make your first AI-powered call and test your agent setup.",
    embedUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    category: "Getting Started",
    featured: false,
  },
  {
    id: "demo-1",
    title: "Sales Call Demo",
    description: "See a complete sales call demonstration with real-time AI responses.",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    category: "Demo",
    featured: false,
  },
  {
    id: "demo-2",
    title: "Customer Support Demo",
    description: "Watch how AI handles customer support inquiries and resolves issues.",
    embedUrl: "https://www.youtube.com/embed/OPf0YbXqDm0",
    category: "Demo",
    featured: false,
  },
  {
    id: "demo-3",
    title: "Appointment Booking Demo",
    description: "Learn how AI agents can schedule appointments automatically.",
    embedUrl: "https://www.youtube.com/embed/M7FIvfx5J10",
    category: "Demo",
    featured: false,
  },
  {
    id: "advanced-1",
    title: "Advanced Customization",
    description: "Deep dive into advanced customization options for your AI agents.",
    embedUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    category: "Advanced",
    featured: false,
  },
  {
    id: "advanced-2",
    title: "API Integration Guide",
    description: "Learn how to integrate CloserX with your existing systems via API.",
    embedUrl: "https://www.youtube.com/embed/4u8IxN0u3z4",
    category: "Advanced",
    featured: false,
  },
  {
    id: "integrations-1",
    title: "CRM Integration",
    description: "Connect CloserX with popular CRM systems like Salesforce and HubSpot.",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    category: "Integrations",
    featured: false,
  },
  {
    id: "integrations-2",
    title: "Calendar Integration",
    description: "Sync your calendar with CloserX for automatic appointment scheduling.",
    embedUrl: "https://www.youtube.com/embed/5YbK0J8Z5X4",
    category: "Integrations",
    featured: false,
  },
];

export const problemSectionData = {
  title: "The Lead Qualification Problem",
  problems: [
    {
      id: "unqualified-leads",
      tag: "Analytics & ROI",
      title: "Unqualified Leads",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
    {
      id: "time-wasting",
      tag: "Analytics & ROI",
      title: "Time Wasting",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
    },
    {
      id: "low-conversion",
      tag: "Analytics & ROI",
      title: "Low Conversion Rates",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    },
    {
      id: "manual-process",
      tag: "Analytics & ROI",
      title: "Manual Process",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    },
    {
      id: "inconsistent-data",
      tag: "Analytics & ROI",
      title: "Inconsistent Data",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    },
    {
      id: "poor-tracking",
      tag: "Analytics & ROI",
      title: "Poor Tracking",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
  ],
};

export const solutionSectionData = {
  title: "The Solution",
  solutions: [
    {
      id: "ai-qualification",
      tag: "AI Automation",
      title: "AI Qualification",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
    {
      id: "automated-scoring",
      tag: "AI Automation",
      title: "Automated Scoring",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
    },
    {
      id: "real-time-insights",
      tag: "AI Automation",
      title: "Real-time Insights",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    },
    {
      id: "seamless-integration",
      tag: "AI Automation",
      title: "Seamless Integration",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    },
    {
      id: "smart-routing",
      tag: "AI Automation",
      title: "Smart Routing",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    },
    {
      id: "advanced-analytics",
      tag: "AI Automation",
      title: "Advanced Analytics",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
    {
      id: "intelligent-filtering",
      tag: "AI Automation",
      title: "Intelligent Filtering",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: "https://www.youtube.com/embed/OPf0YbXqDm0",
    },
    {
      id: "automated-workflows",
      tag: "AI Automation",
      title: "Automated Workflows",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: "https://www.youtube.com/embed/M7FIvfx5J10",
    },
  ],
};

export const benefitsSectionData = {
  title: "Key Benefits",
  benefits: [
    {
      id: "increased-efficiency",
      tag: "Productivity",
      title: "Increased Efficiency",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
      id: "better-results",
      tag: "Productivity",
      title: "Better Results",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: "https://www.youtube.com/embed/4u8IxN0u3z4",
    },
    {
      id: "cost-savings",
      tag: "Productivity",
      title: "Cost Savings",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    },
    {
      id: "scalability",
      tag: "Productivity",
      title: "Scalability",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: "https://www.youtube.com/embed/5YbK0J8Z5X4",
    },
    {
      id: "time-optimization",
      tag: "Productivity",
      title: "Time Optimization",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
    {
      id: "improved-accuracy",
      tag: "Productivity",
      title: "Improved Accuracy",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
    },
  ],
};

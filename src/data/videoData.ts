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
  buttonText: "Watch Now",
};

const toEmbedUrl = (url: string) => {
  const [, id] = url.split("youtu.be/");
  return `https://www.youtube.com/embed/${id.split("?")[0]}`;
};

const tutorialSources = [
  "https://youtu.be/dfi5YTc3_xE?si=1-UgYAyDXAfABFav",
  "https://youtu.be/NQn7KwU-D-4?si=MMs4vuJpAHWzNF6i",
  "https://youtu.be/ImKas8iysQc?si=hjpeQxWJ-99o3fvw",
  "https://youtu.be/gQlAqiZB-bA?si=0cmkH2O-R-v15c0N",
  "https://youtu.be/dn9X693B34Y?si=ZJo38HmocE1nJGpF",
  "https://youtu.be/pD9LKqfYiFI?si=KE2PaD86JXAiFNcf",
  "https://youtu.be/_0hGcUhFySE?si=jEqlpVvKykY2zJj2",
];

const tutorialEmbeds = tutorialSources.map(toEmbedUrl);

export const videoCategories = [
  { id: "all", label: "All Videos", count: tutorialSources.length },
  { id: "getting-started", label: "Getting Started", count: 3 },
  { id: "demo", label: "Demo", count: 2 },
  { id: "advanced", label: "Advanced", count: 1 },
  { id: "integrations", label: "Integrations", count: 1 },
];

export const sampleVideos: Video[] = [
  {
    id: "tutorial-1",
    title: "CloserX Tutorial 1",
    description: "Overview of how to get started with CloserX in minutes.",
    embedUrl: tutorialEmbeds[0],
    category: "Getting Started",
    featured: true,
  },
  {
    id: "tutorial-2",
    title: "CloserX Tutorial 2",
    description: "Live demo of CloserX AI handling real customer calls.",
    embedUrl: tutorialEmbeds[1],
    category: "Demo",
    featured: true,
  },
  {
    id: "tutorial-3",
    title: "CloserX Tutorial 3",
    description: "Configuring voice agents and setting up the first campaign.",
    embedUrl: tutorialEmbeds[2],
    category: "Getting Started",
  },
  {
    id: "tutorial-4",
    title: "CloserX Tutorial 4",
    description: "Scheduling appointments automatically with CloserX.",
    embedUrl: tutorialEmbeds[3],
    category: "Getting Started",
  },
  {
    id: "tutorial-5",
    title: "CloserX Tutorial 5",
    description: "Advanced follow-up workflows powered by AI.",
    embedUrl: tutorialEmbeds[4],
    category: "Demo",
  },
  {
    id: "tutorial-6",
    title: "CloserX Tutorial 6",
    description: "Deep dive on reporting, analytics, and optimization.",
    embedUrl: tutorialEmbeds[5],
    category: "Advanced",
  },
  {
    id: "tutorial-7",
    title: "CloserX Tutorial 7",
    description: "Integrating CloserX with your CRM and calendars.",
    embedUrl: tutorialEmbeds[6],
    category: "Integrations",
  },
];

const getEmbedByIndex = (index: number) => tutorialEmbeds[index % tutorialEmbeds.length];

export const problemSectionData = {
  title: "The Lead Qualification Problem",
  problems: [
    {
      id: "unqualified-leads",
      tag: "Analytics & ROI",
      title: "Unqualified Leads",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: getEmbedByIndex(0),
    },
    {
      id: "time-wasting",
      tag: "Analytics & ROI",
      title: "Time Wasting",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: getEmbedByIndex(1),
    },
    {
      id: "low-conversion",
      tag: "Analytics & ROI",
      title: "Low Conversion Rates",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: getEmbedByIndex(2),
    },
    {
      id: "manual-process",
      tag: "Analytics & ROI",
      title: "Manual Process",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: getEmbedByIndex(3),
    },
    {
      id: "inconsistent-data",
      tag: "Analytics & ROI",
      title: "Inconsistent Data",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: getEmbedByIndex(4),
    },
    {
      id: "poor-tracking",
      tag: "Analytics & ROI",
      title: "Poor Tracking",
      subtitle: "VIDEO",
      date: "4 March 2025",
      videoUrl: getEmbedByIndex(5),
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
      videoUrl: getEmbedByIndex(0),
    },
    {
      id: "automated-scoring",
      tag: "AI Automation",
      title: "Automated Scoring",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: getEmbedByIndex(1),
    },
    {
      id: "real-time-insights",
      tag: "AI Automation",
      title: "Real-time Insights",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: getEmbedByIndex(2),
    },
    {
      id: "seamless-integration",
      tag: "AI Automation",
      title: "Seamless Integration",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: getEmbedByIndex(3),
    },
    {
      id: "smart-routing",
      tag: "AI Automation",
      title: "Smart Routing",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: getEmbedByIndex(4),
    },
    {
      id: "advanced-analytics",
      tag: "AI Automation",
      title: "Advanced Analytics",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: getEmbedByIndex(5),
    },
    {
      id: "intelligent-filtering",
      tag: "AI Automation",
      title: "Intelligent Filtering",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: getEmbedByIndex(6),
    },
    {
      id: "automated-workflows",
      tag: "AI Automation",
      title: "Automated Workflows",
      subtitle: "VIDEO",
      date: "5 March 2025",
      videoUrl: getEmbedByIndex(1),
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
      videoUrl: getEmbedByIndex(0),
    },
    {
      id: "better-results",
      tag: "Productivity",
      title: "Better Results",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: getEmbedByIndex(1),
    },
    {
      id: "cost-savings",
      tag: "Productivity",
      title: "Cost Savings",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: getEmbedByIndex(2),
    },
    {
      id: "scalability",
      tag: "Productivity",
      title: "Scalability",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: getEmbedByIndex(3),
    },
    {
      id: "time-optimization",
      tag: "Productivity",
      title: "Time Optimization",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: getEmbedByIndex(4),
    },
    {
      id: "improved-accuracy",
      tag: "Productivity",
      title: "Improved Accuracy",
      subtitle: "VIDEO",
      date: "6 March 2025",
      videoUrl: getEmbedByIndex(5),
    },
  ],
};

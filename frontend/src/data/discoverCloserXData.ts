export interface Feature {
  number: string;
  title: string;
  description: string;
}

export interface DiscoverCloserXData {
  tag: string;
  mainTitle: string;
  subtitle: string;
  leftColumn: {
    title: string;
    titleHighlight: string;
    description: string;
  };
  features: Feature[];
}

export const discoverCloserXData: DiscoverCloserXData = {
  tag: "Intelligent Automation",
  mainTitle: "Powerful Features That Work 24/7 on Autopilot",
  subtitle: "Advanced automation that handles complex tasks intelligently, so you can focus on what matters most.",
  leftColumn: {
    title: "Discover",
    titleHighlight: "CLOSERX",
    description: "Launch Your Own AI Calling Platform.",
  },
  features: [
    {
      number: "01",
      title: "AI-Powered Callback Scheduling",
      description:
        'AI understands customer requests like "call me after 5 minutes" or "call me in 1 hour" and schedules callbacks automatically.',
    },
    {
      number: "02",
      title: "Automated Phone Number Rotation",
      description: "",
    },
    {
      number: "03",
      title: "Intelligent Auto-Dialing",
      description: "",
    },
    {
      number: "04",
      title: "Payment Integration Hub",
      description: "",
    },
  ],
};


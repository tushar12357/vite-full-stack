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
  subtitle: "Advanced Automation that Handles Complex tasks Intelligently, so you can Focus on What matters most.",
  leftColumn: {
    title: "Discover",
    titleHighlight: "CLOSERX",
    description: "Launch Your Own AI Calling Platform.",
  },
  features: [
    {
      number: "●",
      title: "Setup Your Agency",
      description: "Create your agency profile, customize your branding, and configure your workspace settings to get started.",
    },
    {
      number: "●",
      title: "Setup Your Phone Numbers",
      description: "Purchase or port phone numbers from multiple regions to ensure local presence and high answer rates.",
    },
    {
      number: "●",
      title: "Onboard Your First Client",
      description: "Add your first client, set up their sub-account, and assign dedicated resources to manage their campaigns.",
    },
    {
      number: "●",
      title: "Setup Your First Agent",
      description:
        "Configure your first AI agent to handle calls, upload contacts, or start a campaign.",
    },
  ],
};


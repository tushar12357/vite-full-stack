import { LucideIcon } from "lucide-react";
import { CheckCircle2, XCircle } from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Criterion {
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface LeadQualificationData {
  hero: {
    tag: string;
    title: string;
    titleHighlight?: string;
    description: string;
    primaryButton: {
      text: string;
      variant: "primary" | "secondary";
    };
    secondaryButton: {
      text: string;
      variant: "primary" | "secondary";
    };
  };
  stats: Stat[];
  problems: Problem[];
  solutions: Solution[];
  steps: Step[];
  criteria: Criterion[];
  features: Feature[];
  videoSection: {
    title: string;
    description: string;
  };
  problemSection: {
    title: string;
    description: string;
  };
  solutionSection: {
    title: string;
    description: string;
  };
  howItWorks: {
    tag: string;
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  qualificationCriteria: {
    title: string;
    description: string;
  };
  featuresSection: {
    title: string;
    description: string;
  };
  customerStorySection: {
    tag: string;
    title: string;
    stats: {
      left: {
        value: string;
        label: string;
      };
      right: {
        value: string;
        label: string;
      };
    };
    primaryButton: {
      text: string;
    };
    secondaryButton: {
      text: string;
    };
  };
  results: {
    title: string;
    before: {
      label: string;
      value: string;
    };
    after: {
      label: string;
      value: string;
    };
    improvement: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    disclaimer: string;
  };
  twoColumnSection?: {
    tag: string;
    mainTitle: string;
    subtitle: string;
    leftColumn: {
      title: string;
      titleHighlight: string;
      description: string;
    };
    features: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    rightImage?: string;
    rightImageAlt?: string;
  };
}

export const leadQualificationData: LeadQualificationData = {
  hero: {
    tag: "Use Case",
    title: "LeadQualification",
    description: "CloserX AI takes the complexity out of lead qualification by automating the process, engaging prospects in natural conversations, and determining their readiness and interest level quickly and effectively.",
    primaryButton: {
      text: "Try For Free",
      variant: "primary",
    },
    secondaryButton: {
      text: "Talk To Sales",
      variant: "secondary",
    },
  },
  stats: [
    { value: "1,000+", label: "leads qualified daily" },
    { value: "90%", label: "accuracy rate" },
    { value: "5-min", label: "qualification process" },
    { value: "4x", label: "more qualified leads" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Unqualified Leads",
      description: "Sales team wastes 60% of time on bad leads",
    },
    {
      icon: XCircle,
      title: "Slow Response",
      description: "48-hour response time means lost deals",
    },
    {
      icon: XCircle,
      title: "Inconsistent Qualification",
      description: "Different reps, different standards",
    },
    {
      icon: XCircle,
      title: "Manual Data Entry",
      description: "CRM data is incomplete or wrong",
    },
    {
      icon: XCircle,
      title: "High Cost Per Lead",
      description: "Expensive manual qualification process",
    },
    {
      icon: XCircle,
      title: "Lost Opportunities",
      description: "Hot leads go cold before contact",
    },
    {
      icon: XCircle,
      title: "Poor Lead Scoring",
      description: "No systematic way to prioritize leads",
    },
    {
      icon: XCircle,
      title: "Time Zone Issues",
      description: "Can't reach leads in different time zones",
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "AI-Powered Scoring",
      description: "Every lead scored 0-100 automatically",
    },
    {
      icon: CheckCircle2,
      title: "Instant Response",
      description: "Leads contacted within 5 minutes",
    },
    {
      icon: CheckCircle2,
      title: "Consistent Process",
      description: "Same questions, every time",
    },
    {
      icon: CheckCircle2,
      title: "Perfect Data",
      description: "CRM auto-updated with qualification details",
    },
  ],
  steps: [
    { number: "01", title: "Lead Enters System", description: "New lead from website, ad, or any source" },
    { number: "02", title: "AI Calls Within 5 Minutes", description: "Instant follow-up while interest is hot" },
    { number: "03", title: "Asks Qualification Questions", description: "BANT, pain points, decision process" },
    { number: "04", title: "Scores Lead (0-100)", description: "Based on your ideal customer profile" },
    { number: "05", title: "Routes to Sales or Nurture", description: "Hot leads to sales, cold to nurture" },
    { number: "06", title: "Logs Everything in CRM", description: "Complete conversation notes and scoring" },
  ],
  criteria: [
    { title: "Budget", description: "Does the prospect have budget allocated?" },
    { title: "Authority", description: "Are they the decision maker?" },
    { title: "Need", description: "Do they have a clear pain point?" },
    { title: "Timeline", description: "When are they looking to buy?" },
    { title: "Company Size", description: "Does it match your ICP?" },
    { title: "Current Solution", description: "What are they using now?" },
    { title: "Pain Points", description: "What challenges are they facing?" },
    { title: "Decision Process", description: "Who else is involved?" },
  ],
  features: [
    { icon: "🎯", title: "Custom Scoring Models", description: "Define your ideal customer" },
    { icon: "🔄", title: "Automatic Routing", description: "Hot leads to sales, cold to nurture" },
    { icon: "📝", title: "Call Transcripts", description: "Every conversation recorded" },
    { icon: "📊", title: "Lead Insights", description: "Identifies patterns in good leads" },
    { icon: "🚀", title: "Speed-to-Lead", description: "Contact within 5 minutes" },
    { icon: "💬", title: "SMS Follow-up", description: "Text unqualified leads" },
  ],
  videoSection: {
    title: "Watch AI Qualify A Lead",
    description: "See how our AI qualifies and scores a prospect in 5 minutes",
  },
  problemSection: {
    title: "The Lead Qualification Problem",
    description: "Your sales team spends most of their time chasing unqualified leads while hot prospects go cold. Manual qualification is slow, inconsistent, and expensive.",
  },
  solutionSection: {
    title: "How CloserX Solves It",
    description: "Automated lead qualification that works 24/7",
  },
  howItWorks: {
    tag: "Intelligent Automation",
    title: "How It Works",
    subtitle: "From raw lead to qualified opportunity",
    steps: [
      {
        title: "Lead Enters System",
        description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.",
      },
      {
        title: "AI Calls Within 5 Minutes",
        description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.",
      },
      {
        title: "Asks Qualification Questions",
        description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.",
      },
      {
        title: "Scores Lead (0-100)",
        description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.",
      },
      {
        title: "Routes to Sales or Nurture",
        description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.",
      },
      {
        title: "Logs Everything in CRM",
        description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.",
      },
    ],
  },
  qualificationCriteria: {
    title: "AI Qualification Criteria",
    description: "Our AI asks the right questions to identify your ideal customers",
  },
  featuresSection: {
    title: "Qualification Features",
    description: "Our AI asks the right questions to identify your ideal customers",
  },
  customerStorySection: {
    tag: "Intelligent Automation",
    title: "Adopted agentic RAG to strengthen self-service offerings",
    stats: {
      left: {
        value: "8%",
        label: "100 Leads to 8 Sales",
      },
      right: {
        value: "32%",
        label: "100 Leads to 32 Sales",
      },
    },
    primaryButton: {
      text: "More Customer Stories",
    },
    secondaryButton: {
      text: "Work with US",
    },
  },
  results: {
    title: "Real Results",
    before: {
      label: "Before CloserX",
      value: "100 leads → 8 sales (8%)",
    },
    after: {
      label: "After CloserX",
      value: "100 leads → 32 sales (32%)",
    },
    improvement: "4x Conversion Rate Increase",
  },
  cta: {
    title: "Start Qualifying Leads Automatically",
    description: "Free your sales team to focus on closing deals, not chasing bad leads",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • Setup in 10 minutes",
  },
  twoColumnSection: {
    tag: "Why Closerx.AI?",
    mainTitle: "Why enterprises choose AI for Work?",
    subtitle: "Automated lead qualification that works 24/7",
    leftColumn: {
      title: "Discover",
      titleHighlight: "CLOSERX",
      description: "Launch Your Own AI Calling Platform",
    },
    features: [
      {
        number: "01",
        title: "AI-Powered Scoring",
        description: "Every lead scored 0-100 automatically",
      },
      {
        number: "02",
        title: "Instant Response",
        description: "Leads contacted within 5 minutes of submission",
      },
      {
        number: "03",
        title: "Consistent Process",
        description: "Same qualification questions asked every time, ensuring uniform standards",
      },
      {
        number: "04",
        title: "Perfect Data",
        description: "CRM automatically updated with complete conversation notes and scoring details",
      },
    ],
    rightImageAlt: "AI Workflow Diagram - CLOSERX Platform",
  },
};


import { Workflow, Zap, GitBranch, Settings } from "lucide-react";
import type { ProductCard } from "./productsData";

export const workflowHero = {
  titleLines: ["Workflow", "Automation"],
  description:
    "Build intelligent automation workflows that connect your AI agents with your entire tech stack for seamless operations.",
  primaryCta: {
    label: "Talk To Sales",
    href: "/contact",
  },
  secondaryCta: {
    label: "Create a Workflow",
    href: "#",
  },
};

export const workflowProductCards: ProductCard[] = [
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description: "Design complex automation flows with drag-and-drop simplicity—no code required.",
    features: [
      {
        title: "Drag-and-Drop Interface",
        description: "Build multi-step workflows visually with conditional logic, loops, and branching paths.",
      },
      {
        title: "Pre-Built Templates",
        description: "Start with proven automation patterns for lead qualification, follow-ups, and appointment scheduling.",
      },
      {
        title: "Real-Time Testing",
        description: "Run workflows in sandbox mode to validate logic before deploying to production.",
      },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Multi-Channel Orchestration",
    description: "Coordinate AI agents across voice, SMS, email, and chat from a single workflow.",
    features: [
      {
        title: "Channel Handoffs",
        description: "Seamlessly transition conversations from phone calls to SMS or email without losing context.",
      },
      {
        title: "Parallel Execution",
        description: "Trigger multiple actions simultaneously—call, send email, update CRM, and notify team.",
      },
      {
        title: "Event-Driven Triggers",
        description: "Start workflows automatically based on webhooks, schedules, or CRM events.",
      },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: GitBranch,
    title: "Smart Routing & Decision Trees",
    description: "Route leads intelligently based on behavior, responses, and business rules.",
    features: [
      {
        title: "Dynamic Routing",
        description: "Route calls to the right agent, script, or escalation path based on real-time data.",
      },
      {
        title: "A/B Testing",
        description: "Test different workflow paths to optimize conversion rates and customer satisfaction.",
      },
      {
        title: "Conditional Logic",
        description: "Use if/then/else rules to create sophisticated decision trees that adapt to each interaction.",
      },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Settings,
    title: "Integration Hub",
    description: "Connect with 100+ tools including CRMs, marketing platforms, and business apps.",
    features: [
      {
        title: "Native Integrations",
        description: "Pre-built connectors for Salesforce, HubSpot, Zapier, Slack, and dozens more.",
      },
      {
        title: "Custom Webhooks",
        description: "Build custom integrations using REST APIs and webhook endpoints for any system.",
      },
      {
        title: "Data Sync",
        description: "Automatically sync call outcomes, transcripts, and customer data across your stack.",
      },
    ],
    gradient: "from-orange-500 to-red-500",
  },
];


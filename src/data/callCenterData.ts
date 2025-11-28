import { Phone, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/solution/callcenters/1.png";
import workflowImage from "@/assets/solution/callcenters/2.png";
import tirado from "@/assets/solution/callcenters/3.png";

export const callCenterData: SolutionData = {
  hero: {
    tag: "Industry • Call Centers",
    title: "Transform Your Call Center with",
    titleHighlight: "AI Voice Agents",
    description: "Augment your call center with AI agents that handle routine inquiries, reduce wait times, and improve customer satisfaction. Scale operations without scaling costs, and let human agents focus on complex issues.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See Call Center Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "80%", label: "of calls handled by AI", description: "Automate the majority of your volume, freeing agents for complex issues." },
    { value: "95%", label: "cost reduction", description: "Dramatically lower operational expenses while improving service levels." },
    { value: "< 3 sec", label: "average wait time", description: "Eliminate queues and hold music with instant AI answering." },
    { value: "24/7", label: "availability", description: "Provide consistent, high-quality support around the clock." },
  ],
  problems: [
    {
      icon: XCircle,
      title: "High Operational Costs",
      description: "Call centers cost $40K+ per agent annually with benefits, training, and infrastructure.",
      iconUrl: "https://api.iconify.design/lucide:dollar-sign.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Long Wait Times",
      description: "Customers wait 10+ minutes during peak hours, leading to frustration and churn.",
      iconUrl: "https://api.iconify.design/lucide:clock.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "High Agent Turnover",
      description: "50% annual turnover rate requires constant hiring and training.",
      iconUrl: "https://api.iconify.design/lucide:users.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Inconsistent Service",
      description: "Different agents provide different levels of service quality.",
      iconUrl: "https://api.iconify.design/lucide:bar-chart-2.svg?color=%23ffffff"
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "AI-First Approach",
      description: "AI handles 80% of routine inquiries, freeing agents for complex issues",
    },
    {
      icon: CheckCircle2,
      title: "Zero Wait Time",
      description: "Every call answered instantly, no hold music or queues",
    },
    {
      icon: CheckCircle2,
      title: "Cost Reduction",
      description: "Reduce call center costs by up to 95% while improving service",
    },
    {
      icon: CheckCircle2,
      title: "Consistent Quality",
      description: "Every AI interaction follows your best practices and scripts",
    },
  ],
  steps: [
    { number: "01", title: "Call Comes In", description: "AI answers immediately, no wait time" },
    { number: "02", title: "Understands Intent", description: "Identifies customer need and routes appropriately" },
    { number: "03", title: "Resolves or Routes", description: "Handles routine inquiries or escalates with context" },
    { number: "04", title: "Agent Handoff", description: "Human agents receive full conversation context" },
    { number: "05", title: "Follow-Up", description: "Automated satisfaction surveys and follow-up calls" },
  ],
  features: [
    { icon: "📞", title: "Intelligent Routing", description: "Routes calls to right department or agent", iconUrl: "https://api.iconify.design/lucide:git-branch.svg?color=%23ffffff" },
    { icon: "🤖", title: "AI Agent Handoff", description: "Seamless transition from AI to human agents", iconUrl: "https://api.iconify.design/lucide:user-plus.svg?color=%23ffffff" },
    { icon: "📊", title: "Real-Time Analytics", description: "Monitor call volume, wait times, and resolution rates", iconUrl: "https://api.iconify.design/lucide:bar-chart.svg?color=%23ffffff" },
    { icon: "🎯", title: "Quality Assurance", description: "Automatic call scoring and agent feedback", iconUrl: "https://api.iconify.design/lucide:check-square.svg?color=%23ffffff" },
    { icon: "📝", title: "CRM Integration", description: "Logs all interactions automatically", iconUrl: "https://api.iconify.design/lucide:database.svg?color=%23ffffff" },
    { icon: "🌍", title: "Multi-Language", description: "Support in 50+ languages", iconUrl: "https://api.iconify.design/lucide:globe.svg?color=%23ffffff" },
  ],
  problemSection: {
    title: "Call Center Challenges",
    description: "Traditional call centers face rising costs, high agent turnover, and difficulty scaling. Customers expect instant service, but maintaining quality at scale is expensive and challenging.",
  },
  solutionSection: {
    title: "CloserX for Call Centers",
    description: "AI-powered solutions that augment your call center operations",
  },
  howItWorks: {
    tag: "How It Works",
    title: "From Call to Resolution",
    subtitle: "AI-augmented call center workflow",
    steps: [
      { title: "Call Comes In", description: "AI answers immediately, no wait time", icon: "https://api.iconify.design/lucide:phone-incoming.svg?color=%23ffffff" },
      { title: "Understands Intent", description: "Identifies customer need and routes appropriately", icon: "https://api.iconify.design/lucide:brain-circuit.svg?color=%23ffffff" },
      { title: "Resolves or Routes", description: "Handles routine inquiries or escalates with context", icon: "https://api.iconify.design/lucide:git-merge.svg?color=%23ffffff" },
      { title: "Agent Handoff", description: "Human agents receive full conversation context", icon: "https://api.iconify.design/lucide:users.svg?color=%23ffffff" },
    ],
  },
  featuresSection: {
    title: "Features for Call Centers",
    description: "Everything you need to transform your call center operations. Reduce costs, improve service quality, and scale effortlessly.",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Enterprise Call Center Results",
    stats: {
      left: {
        value: "10 min",
        label: "average wait time (before)",
      },
      right: {
        value: "< 3 sec",
        label: "wait time (with AI)",
      },
    },
    primaryButton: {
      text: "Start Free Trial",
    },
    secondaryButton: {
      text: "See Call Center Demo",
    },
  },
  cta: {
    title: "Transform Your Call Center Today",
    description: "Join call centers reducing costs and improving service with AI. Scale operations without scaling headcount.",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • Setup in 10 minutes",
  },
};

export const callCenterImages = {
  uiScreenshot,
  workflowImage,
  calendar: uiScreenshot,
  calendar1: workflowImage,
  tirado,
};

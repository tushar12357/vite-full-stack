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
    { value: "80%", label: "of calls handled by AI" },
    { value: "95%", label: "cost reduction" },
    { value: "< 3 sec", label: "average wait time" },
    { value: "24/7", label: "availability" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "High Operational Costs",
      description: "Call centers cost $40K+ per agent annually with benefits, training, and infrastructure.",
    },
    {
      icon: XCircle,
      title: "Long Wait Times",
      description: "Customers wait 10+ minutes during peak hours, leading to frustration and churn.",
    },
    {
      icon: XCircle,
      title: "High Agent Turnover",
      description: "50% annual turnover rate requires constant hiring and training.",
    },
    {
      icon: XCircle,
      title: "Inconsistent Service",
      description: "Different agents provide different levels of service quality.",
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
    { icon: "📞", title: "Intelligent Routing", description: "Routes calls to right department or agent" },
    { icon: "🤖", title: "AI Agent Handoff", description: "Seamless transition from AI to human agents" },
    { icon: "📊", title: "Real-Time Analytics", description: "Monitor call volume, wait times, and resolution rates" },
    { icon: "🎯", title: "Quality Assurance", description: "Automatic call scoring and agent feedback" },
    { icon: "📝", title: "CRM Integration", description: "Logs all interactions automatically" },
    { icon: "🌍", title: "Multi-Language", description: "Support in 50+ languages" },
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
      { title: "Call Comes In", description: "AI answers immediately, no wait time" },
      { title: "Understands Intent", description: "Identifies customer need and routes appropriately" },
      { title: "Resolves or Routes", description: "Handles routine inquiries or escalates with context" },
      { title: "Agent Handoff", description: "Human agents receive full conversation context" },
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


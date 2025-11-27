import { RefreshCw, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/solution/foloowup/1.png";
import workflowImage from "@/assets/solution/foloowup/2.png";
import tirado from "@/assets/solution/foloowup/3.png";

export const followUpAutomationData: SolutionData = {
  hero: {
    tag: "Use Case • Follow-Up",
    title: "Never Let a Lead Go",
    titleHighlight: "Cold Again",
    description: "Automated follow-up calls that nurture prospects from first contact to closed deal. Persistent, personalized, and perfectly timed. Our AI never forgets, never gives up, and converts 3x more leads than manual follow-up.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See Follow-Up Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "80%", label: "of sales need 5+ follow-ups", description: "Most deals require persistence that human agents struggle to maintain consistently." },
    { value: "92%", label: "of reps give up after 4 attempts", description: "Don't let potential revenue slip away due to lack of follow-through." },
    { value: "AI", label: "never gives up", description: "Our agents persist until they get a definitive yes or no, maximizing every lead." },
    { value: "3x", label: "higher conversion rate", description: "Consistent, timely follow-ups dramatically increase your chances of closing." },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Reps Forget",
      description: "Busy reps forget to follow up",
      iconUrl: "https://api.iconify.design/lucide:brain-circuit.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Inconsistent Timing",
      description: "Follow-ups too early or too late",
      iconUrl: "https://api.iconify.design/lucide:clock.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "No Persistence",
      description: "Reps give up after 2-3 attempts",
      iconUrl: "https://api.iconify.design/lucide:flag.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Not Personalized",
      description: "Generic 'just checking in' messages",
      iconUrl: "https://api.iconify.design/lucide:message-square.svg?color=%23ffffff"
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "Never Forgets",
      description: "AI tracks every prospect automatically",
    },
    {
      icon: CheckCircle2,
      title: "Perfect Timing",
      description: "Calls at optimal times based on data",
    },
    {
      icon: CheckCircle2,
      title: "Unlimited Persistence",
      description: "Will follow up 20+ times if needed",
    },
    {
      icon: CheckCircle2,
      title: "Hyper-Personalized",
      description: "References previous conversations",
    },
  ],
  steps: [
    { number: "01", title: "Initial Contact", description: "First call and qualification" },
    { number: "02", title: "First Follow-up", description: "Address objections, provide value" },
    { number: "03", title: "Second Follow-up", description: "Share case study or social proof" },
    { number: "04", title: "Value-add Call", description: "Provide industry insights" },
    { number: "05", title: "Special Offer", description: "Limited-time promotion" },
    { number: "06", title: "Final Attempt", description: "Last chance to engage" },
  ],
  features: [
    { icon: "📅", title: "Smart Scheduling", description: "Optimal call times", iconUrl: "https://api.iconify.design/lucide:calendar-clock.svg?color=%23ffffff" },
    { icon: "🎯", title: "Behavior Triggers", description: "Follows up based on actions", iconUrl: "https://api.iconify.design/lucide:zap.svg?color=%23ffffff" },
    { icon: "📧", title: "Multi-channel", description: "Call, SMS, email", iconUrl: "https://api.iconify.design/lucide:share-2.svg?color=%23ffffff" },
    { icon: "🔄", title: "Automatic Re-engagement", description: "Wins back lost leads", iconUrl: "https://api.iconify.design/lucide:refresh-cw.svg?color=%23ffffff" },
    { icon: "📊", title: "Sequence Analytics", description: "Optimize timing", iconUrl: "https://api.iconify.design/lucide:bar-chart-2.svg?color=%23ffffff" },
    { icon: "💬", title: "Personalization", description: "Uses lead data", iconUrl: "https://api.iconify.design/lucide:user.svg?color=%23ffffff" },
  ],
  problemSection: {
    title: "The Follow-Up Problem",
    description: "Most sales are made after the 5th follow-up, but 92% of reps give up after just 4 attempts. Manual follow-up is inconsistent, forgettable, and impossible to scale.",
  },
  solutionSection: {
    title: "How CloserX Solves It",
    description: "Automated follow-up that never stops",
  },
  howItWorks: {
    tag: "How It Works",
    title: "Automated Nurture Campaign",
    subtitle: "That converts cold leads",
    steps: [
      { title: "Initial Contact", description: "First call and qualification", icon: "https://api.iconify.design/lucide:phone-call.svg?color=%23ffffff" },
      { title: "First Follow-up", description: "Address objections, provide value", icon: "https://api.iconify.design/lucide:message-circle.svg?color=%23ffffff" },
      { title: "Second Follow-up", description: "Share case study or social proof", icon: "https://api.iconify.design/lucide:file-text.svg?color=%23ffffff" },
      { title: "Value-add Call", description: "Provide industry insights", icon: "https://api.iconify.design/lucide:lightbulb.svg?color=%23ffffff" },
    ],
  },
  featuresSection: {
    title: "Follow-Up Features",
    description: "Everything you need to automate lead nurturing",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Never Lose Another Lead",
    stats: {
      left: {
        value: "4",
        label: "follow-ups (manual)",
      },
      right: {
        value: "20+",
        label: "follow-ups (with AI)",
      },
    },
    primaryButton: {
      text: "Start Free Trial",
    },
    secondaryButton: {
      text: "See Follow-Up Demo",
    },
  },
  cta: {
    title: "Never Lose Another Lead",
    description: "Start automating your follow-up process today",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • Setup in 10 minutes",
  },
};

export const followUpAutomationImages = {
  uiScreenshot,
  workflowImage,
  calendar: uiScreenshot,
  calendar1: workflowImage,
  tirado,
};


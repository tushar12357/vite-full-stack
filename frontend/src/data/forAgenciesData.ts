import { Users, Palette, DollarSign, Rocket, TrendingUp, XCircle, CheckCircle2, Zap } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/solution/agencies/1.png";
import workflowImage from "@/assets/solution/agencies/2.png";

export const forAgenciesData: SolutionData = {
  hero: {
    tag: "For Teams • Agencies",
    title: "Launch Your Own AI Calling",
    titleHighlight: "Agency",
    description: "White-label platform. Your brand. Your pricing. Keep 100% of revenue. Built specifically for agencies who want to add AI calling to their services. No technical skills required - if you can use Canva, you can build a $50K/month AI calling agency with CloserX.",
    primaryButton: {
      text: "Start Your Agency Today",
      variant: "primary",
    },
    secondaryButton: {
      text: "Schedule Agency Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "500+", label: "agencies using CloserX", description: "Join a thriving community of successful agency owners." },
    { value: "$50K", label: "average monthly revenue", description: "High-margin recurring revenue model built for scale." },
    { value: "24hrs", label: "setup time", description: "Launch your fully branded agency in less than a day." },
    { value: "Zero", label: "technical skills needed", description: "No coding required. We handle the tech, you handle the clients." },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Limited Service Offerings",
      description: "Agencies struggle to differentiate and add high-margin services to their portfolio.",
      iconUrl: "https://api.iconify.design/lucide:layers.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "High Client Acquisition Costs",
      description: "Difficult to scale without hiring more staff and increasing overhead.",
      iconUrl: "https://api.iconify.design/lucide:trending-up.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Low Recurring Revenue",
      description: "One-time projects don't provide predictable monthly income.",
      iconUrl: "https://api.iconify.design/lucide:dollar-sign.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Technical Barriers",
      description: "Building AI calling solutions requires expensive development resources.",
      iconUrl: "https://api.iconify.design/lucide:code.svg?color=%23ffffff"
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "100% White-Label",
      description: "Your logo, your colors, your domain. Clients never see CloserX.",
    },
    {
      icon: CheckCircle2,
      title: "Recurring Revenue",
      description: "Charge $1,500-$5,000/month per client. Keep it all.",
    },
    {
      icon: CheckCircle2,
      title: "Quick Deployment",
      description: "Onboard new clients in under 1 hour.",
    },
    {
      icon: CheckCircle2,
      title: "Easy Upsell",
      description: "Add AI calling to existing services.",
    },
  ],
  steps: [
    { number: "01", title: "Sign Up", description: "Get your white-label account in minutes" },
    { number: "02", title: "Customize Branding", description: "Add your logo, colors, and domain" },
    { number: "03", title: "Onboard Clients", description: "Create sub-accounts for each client" },
    { number: "04", title: "Scale Revenue", description: "Charge clients $1,500-$5,000/month" },
  ],
  features: [
    { icon: "🎨", title: "Custom Branding", description: "Your logo everywhere", iconUrl: "https://api.iconify.design/lucide:palette.svg?color=%23ffffff" },
    { icon: "💰", title: "Recurring Revenue", description: "Predictable monthly income", iconUrl: "https://api.iconify.design/lucide:dollar-sign.svg?color=%23ffffff" },
    { icon: "⚡", title: "Quick Setup", description: "24-hour deployment", iconUrl: "https://api.iconify.design/lucide:zap.svg?color=%23ffffff" },
    { icon: "📊", title: "Client Management", description: "Multi-tenant dashboard", iconUrl: "https://api.iconify.design/lucide:users.svg?color=%23ffffff" },
    { icon: "💳", title: "Built-in Billing", description: "Stripe integration", iconUrl: "https://api.iconify.design/lucide:credit-card.svg?color=%23ffffff" },
    { icon: "🚀", title: "Easy Upsell", description: "Add to existing services", iconUrl: "https://api.iconify.design/lucide:rocket.svg?color=%23ffffff" },
  ],
  problemSection: {
    title: "Why Agencies Love CloserX",
    description: "Add a high-margin, recurring revenue stream to your agency without hiring developers or managing infrastructure. Your clients get cutting-edge AI, you get predictable monthly income.",
  },
  solutionSection: {
    title: "White-Label Features",
    description: "Your brand, your platform, your clients",
  },
  howItWorks: {
    tag: "How It Works",
    title: "Launch Your Agency in 24 Hours",
    subtitle: "Simple 4-step process",
    steps: [
      { title: "Sign Up", description: "Get your white-label account in minutes", icon: "https://api.iconify.design/lucide:user-plus.svg?color=%23ffffff" },
      { title: "Customize Branding", description: "Add your logo, colors, and domain", icon: "https://api.iconify.design/lucide:palette.svg?color=%23ffffff" },
      { title: "Onboard Clients", description: "Create sub-accounts for each client", icon: "https://api.iconify.design/lucide:users.svg?color=%23ffffff" },
      { title: "Scale Revenue", description: "Charge clients $1,500-$5,000/month", icon: "https://api.iconify.design/lucide:trending-up.svg?color=%23ffffff" },
    ],
  },
  featuresSection: {
    title: "Agency Use Cases",
    description: "Perfect for marketing, digital, social media, lead gen, and consulting agencies",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Bill Data: From Setup to Essential Tool in 30 Minutes",
    testimonial: "This is exactly what my car dealership client needs... CloserX AI will become an essential tool in my technology stack.",
    author: "Eric Gale",
    company: "Bill Data - AI Agency for Car Dealerships",
    stats: {
      left: {
        value: "30 min",
        label: "first AI agent setup",
      },
      right: {
        value: "100%",
        label: "essential to tech stack",
      },
    },
    primaryButton: {
      text: "Start Your Agency Today",
    },
    secondaryButton: {
      text: "Schedule Agency Demo",
    },
  },
  cta: {
    title: "Join 500+ Agencies Building Recurring Revenue",
    description: "Start your AI calling agency today. 14-day free trial. No credit card required. Full agency support included.",
    buttonText: "Start Your Agency Today",
    disclaimer: "14-day free trial • No credit card • Agency support included",
  },
};

export const forAgenciesImages = {
  uiScreenshot,
  workflowImage,
  calendar: uiScreenshot,
  calendar1: workflowImage,
  tirado: workflowImage,
};


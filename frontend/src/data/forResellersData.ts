import { Rocket, DollarSign, Users, TrendingUp, Target, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/image copy.png";
import workflowImage from "@/assets/image.png";

export const forResellersData: SolutionData = {
  hero: {
    tag: "Team • Resellers",
    title: "Launch Your AI Calling Agency",
    titleHighlight: "in 8 Minutes",
    description: "White-label our platform, set your own prices, and join 2,847 agencies already earning $10-40K MRR with CloserX. Complete solution with proven templates, training, and support. Start building your recurring revenue stream today.",
    primaryButton: {
      text: "Start Your Agency - $97/mo",
      variant: "primary",
    },
    secondaryButton: {
      text: "Book Strategy Call",
      variant: "secondary",
    },
  },
  stats: [
    { value: "$10-40K", label: "average monthly recurring revenue" },
    { value: "2,847", label: "agencies already scaling" },
    { value: "8 min", label: "to launch your agency" },
    { value: "$97", label: "starting monthly cost" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "High Startup Costs",
      description: "Building your own platform requires significant investment in development.",
    },
    {
      icon: XCircle,
      title: "Lack of Proven Templates",
      description: "Creating sales scripts and funnels from scratch is time-consuming.",
    },
    {
      icon: XCircle,
      title: "Technical Complexity",
      description: "Managing infrastructure and technology takes focus away from sales.",
    },
    {
      icon: XCircle,
      title: "Market Uncertainty",
      description: "Unclear if there's demand for AI calling services in your market.",
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "Complete White-Label Solution",
      description: "Your brand, your domain, your pricing, your profits. We handle the technology.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Business Model",
      description: "Agency partners report $10-15K additional MRR within first 60 days.",
    },
    {
      icon: CheckCircle2,
      title: "Massive Market Demand",
      description: "Every business needs better lead follow-up. You have the solution.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Templates & Training",
      description: "Sales scripts, funnels, ad templates, and case studies included.",
    },
  ],
  steps: [
    { number: "01", title: "Sign Up", description: "Start with $97/month plan" },
    { number: "02", title: "Customize Branding", description: "Add your logo and domain" },
    { number: "03", title: "Use Proven Templates", description: "Leverage included sales materials" },
    { number: "04", title: "Start Selling", description: "Charge $297-997/month per client" },
  ],
  features: [
    { icon: "🎨", title: "White-Label Platform", description: "Your brand, your domain" },
    { icon: "💰", title: "Proven Revenue Model", description: "$10-40K MRR potential" },
    { icon: "📋", title: "Sales Templates", description: "Proven scripts and funnels" },
    { icon: "📊", title: "Client Management", description: "Unlimited sub-accounts" },
    { icon: "💳", title: "Automated Billing", description: "Usage tracking and invoicing" },
    { icon: "🚀", title: "Quick Launch", description: "8 minutes to get started" },
  ],
  problemSection: {
    title: "The Perfect Agency Opportunity",
    description: "Massive market demand. Every business needs better lead follow-up. You have the solution that works 24/7, costs 90% less than staff, and delivers results from day one.",
  },
  solutionSection: {
    title: "Everything You Need to Succeed",
    description: "Complete white-label solution with proven business model and massive market demand",
  },
  howItWorks: {
    tag: "How It Works",
    title: "Launch Your Agency in 8 Minutes",
    subtitle: "Simple 4-step process",
    steps: [
      { title: "Sign Up", description: "Start with $97/month plan" },
      { title: "Customize Branding", description: "Add your logo and domain" },
      { title: "Use Proven Templates", description: "Leverage included sales materials" },
      { title: "Start Selling", description: "Charge $297-997/month per client" },
    ],
  },
  featuresSection: {
    title: "Technology Platform",
    description: "Unlimited sub-accounts, full admin dashboard, client self-service portal, and API access",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Enix AI: Building a White-Label Service with Unmatched Support",
    testimonial: "Their customer service is truly unmatched... This hands-on support made all the difference for me, allowing my company, Enix AI, to deliver high quality AI calling solutions to our clients.",
    author: "Christian Rivera",
    company: "Enix AI - White-Label AI Calling Service",
    stats: {
      left: {
        value: "100%",
        label: "recommendation rate",
      },
      right: {
        value: "5/5",
        label: "star rating",
      },
    },
    primaryButton: {
      text: "Start Your Agency - $97/mo",
    },
    secondaryButton: {
      text: "Book Strategy Call",
    },
  },
  cta: {
    title: "Ready to Launch Your AI Agency?",
    description: "Join 2,847 agencies already scaling with CloserX. Special offer: Use code LAUNCH2025 for 50% off your first month.",
    buttonText: "Start Your Agency - $97/mo",
    disclaimer: "Special Offer: Use code LAUNCH2025 for 50% off your first month",
  },
};

export const forResellersImages = {
  uiScreenshot,
  workflowImage,
};


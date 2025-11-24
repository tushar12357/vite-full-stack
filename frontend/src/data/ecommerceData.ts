import { ShoppingCart, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/solution/ecommerce/1.png";
import workflowImage from "@/assets/solution/ecommerce/2.png";
import tirado from "@/assets/solution/ecommerce/3.png";

export const ecommerceData: SolutionData = {
  hero: {
    tag: "Industry • E-commerce",
    title: "Scale Your E-commerce with",
    titleHighlight: "AI Customer Support",
    description: "Handle order inquiries, returns, product questions, and customer support 24/7 with AI voice agents. Reduce support costs by 90%, improve customer satisfaction, and never miss a sale.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See E-commerce Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "90%", label: "cost reduction" },
    { value: "24/7", label: "customer support" },
    { value: "3 sec", label: "average response" },
    { value: "95%", label: "satisfaction rate" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "High Support Costs",
      description: "Customer support teams cost $40K+ per agent and can't scale with growth.",
    },
    {
      icon: XCircle,
      title: "After-Hours Sales Loss",
      description: "Customers abandon carts when they can't get help outside business hours.",
    },
    {
      icon: XCircle,
      title: "Order Status Inquiries",
      description: "Reps spend hours answering 'where's my order?' questions.",
    },
    {
      icon: XCircle,
      title: "Return Processing",
      description: "Manual return processing creates delays and customer frustration.",
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "24/7 Support",
      description: "AI answers every call instantly, day or night",
    },
    {
      icon: CheckCircle2,
      title: "Order Management",
      description: "Check order status, tracking, and delivery dates automatically",
    },
    {
      icon: CheckCircle2,
      title: "Automated Returns",
      description: "Process returns and initiate refunds in seconds",
    },
    {
      icon: CheckCircle2,
      title: "Product Recommendations",
      description: "AI suggests products based on customer needs and preferences",
    },
  ],
  steps: [
    { number: "01", title: "Customer Calls", description: "AI answers immediately, understands customer need" },
    { number: "02", title: "Accesses Order Data", description: "Retrieves order information from your system" },
    { number: "03", title: "Resolves Inquiry", description: "Provides order status, processes returns, answers questions" },
    { number: "04", title: "Escalates if Needed", description: "Routes complex issues to human agents with full context" },
    { number: "05", title: "Follow-Up", description: "Sends confirmation emails and satisfaction surveys" },
  ],
  features: [
    { icon: "📦", title: "Order Tracking", description: "Real-time order status and delivery updates" },
    { icon: "🔄", title: "Returns & Refunds", description: "Automated return processing and refund initiation" },
    { icon: "🛍️", title: "Product Questions", description: "Answers product specifications and availability" },
    { icon: "💳", title: "Payment Support", description: "Handles payment issues and billing questions" },
    { icon: "📧", title: "Email Integration", description: "Sends order confirmations and updates" },
    { icon: "📊", title: "Sales Analytics", description: "Track customer interactions and conversion rates" },
  ],
  problemSection: {
    title: "E-commerce Challenges",
    description: "E-commerce businesses struggle with scaling customer support, handling peak season volumes, and providing 24/7 assistance. Manual support processes are expensive and can't keep up with growth.",
  },
  solutionSection: {
    title: "CloserX for E-commerce",
    description: "AI-powered solutions built for online retailers",
  },
  howItWorks: {
    tag: "How It Works",
    title: "From Customer Call to Resolution",
    subtitle: "Streamlined e-commerce support",
    steps: [
      { title: "Customer Calls", description: "AI answers immediately, understands customer need" },
      { title: "Accesses Order Data", description: "Retrieves order information from your system" },
      { title: "Resolves Inquiry", description: "Provides order status, processes returns, answers questions" },
      { title: "Escalates if Needed", description: "Routes complex issues to human agents with full context" },
    ],
  },
  featuresSection: {
    title: "Features for E-commerce",
    description: "Everything you need to provide exceptional customer support while scaling your business. Integrates with major e-commerce platforms.",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Online Retailer Results",
    stats: {
      left: {
        value: "$40K+",
        label: "per agent/year (before)",
      },
      right: {
        value: "$4K",
        label: "per agent/year (with AI)",
      },
    },
    primaryButton: {
      text: "Start Free Trial",
    },
    secondaryButton: {
      text: "See E-commerce Demo",
    },
  },
  cta: {
    title: "Scale Your E-commerce Support Today",
    description: "Join online retailers providing 24/7 customer support with AI. Reduce costs and improve satisfaction.",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • Setup in 10 minutes",
  },
};

export const ecommerceImages = {
  uiScreenshot,
  workflowImage,
  calendar: uiScreenshot,
  calendar1: workflowImage,
  tirado,
};


import { DollarSign, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/solution/financial/shiloh_fr_une_bannire_reprsentant_le_mtier_de_la_finance_sur_un_3d0cfe22-f912-4240-b54d-968de2b0541e.png";
import workflowImage from "@/assets/solution/financial/adnanshafi5036_structured_finance_--v_7_9e818114-0c19-45ea-a7c4-0aab44ee1397.png";
import tirado from "@/assets/solution/financial/basketsinatree_Isometric_data_visualization_illustration_busine_c98efdf4-ba9c-4a86-b1b8-f21a7d09aaf7.png";

export const financialServiceData: SolutionData = {
  hero: {
    tag: "Industry • Financial Services",
    title: "Enhance Financial Services with",
    titleHighlight: "AI Voice Automation",
    description: "Automate customer onboarding, account inquiries, loan applications, and compliance calls with secure, compliant AI voice agents. Reduce wait times, improve customer satisfaction, and scale your operations.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See Financial Services Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "90%", label: "faster response time" },
    { value: "24/7", label: "customer support" },
    { value: "SOC 2", label: "Compliant" },
    { value: "85%", label: "call resolution rate" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Long Wait Times",
      description: "Customers wait 15+ minutes to speak with a representative during peak hours.",
      iconUrl: "https://api.iconify.design/lucide:clock.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "After-Hours Support",
      description: "No support available outside business hours, losing potential customers.",
      iconUrl: "https://api.iconify.design/lucide:moon.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "High Operational Costs",
      description: "Call centers cost $40K+ per agent annually with high turnover rates.",
      iconUrl: "https://api.iconify.design/lucide:dollar-sign.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Compliance Challenges",
      description: "Manual processes make it difficult to ensure regulatory compliance.",
      iconUrl: "https://api.iconify.design/lucide:shield-alert.svg?color=%23ffffff"
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "Instant Response",
      description: "AI answers every call in under 3 seconds, 24/7",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Built-In",
      description: "Automated compliance checks and secure data handling",
    },
    {
      icon: CheckCircle2,
      title: "Cost Reduction",
      description: "Reduce call center costs by up to 95%",
    },
    {
      icon: CheckCircle2,
      title: "Scalable Operations",
      description: "Handle unlimited call volume without hiring",
    },
  ],
  steps: [
    { number: "01", title: "Customer Calls", description: "AI answers immediately, verifies identity" },
    { number: "02", title: "Understands Request", description: "Identifies account inquiry, loan application, or support need" },
    { number: "03", title: "Accesses Secure Data", description: "Retrieves account information with proper authentication" },
    { number: "04", title: "Resolves or Routes", description: "Handles request or escalates to human agent with context" },
    { number: "05", title: "Compliance Logging", description: "Automatically logs all interactions for compliance" },
  ],
  features: [
    { icon: "💳", title: "Account Inquiries", description: "Balance checks, transaction history, statements", iconUrl: "https://api.iconify.design/lucide:credit-card.svg?color=%23ffffff" },
    { icon: "📋", title: "Loan Applications", description: "Collect information and pre-qualify applicants", iconUrl: "https://api.iconify.design/lucide:file-text.svg?color=%23ffffff" },
    { icon: "🔐", title: "Identity Verification", description: "Secure multi-factor authentication", iconUrl: "https://api.iconify.design/lucide:shield-check.svg?color=%23ffffff" },
    { icon: "📞", title: "Customer Onboarding", description: "Guide new customers through setup process", iconUrl: "https://api.iconify.design/lucide:user-plus.svg?color=%23ffffff" },
    { icon: "⚖️", title: "Compliance Logging", description: "Automatic audit trails and reporting", iconUrl: "https://api.iconify.design/lucide:scale.svg?color=%23ffffff" },
    { icon: "📊", title: "Financial Analytics", description: "Track customer interactions and satisfaction", iconUrl: "https://api.iconify.design/lucide:bar-chart-2.svg?color=%23ffffff" },
  ],
  problemSection: {
    title: "Financial Services Challenges",
    description: "Financial institutions face increasing customer expectations for instant, 24/7 support while managing compliance requirements and operational costs. Traditional call centers struggle to scale and maintain service quality.",
  },
  solutionSection: {
    title: "CloserX for Financial Services",
    description: "AI-powered solutions built for financial institutions",
  },
  howItWorks: {
    tag: "How It Works",
    title: "From Customer Call to Resolution",
    subtitle: "Secure and compliant workflow",
    steps: [
      { title: "Customer Calls", description: "AI answers immediately, verifies identity", icon: "https://api.iconify.design/lucide:phone-call.svg?color=%23ffffff" },
      { title: "Understands Request", description: "Identifies account inquiry, loan application, or support need", icon: "https://api.iconify.design/lucide:ear.svg?color=%23ffffff" },
      { title: "Accesses Secure Data", description: "Retrieves account information with proper authentication", icon: "https://api.iconify.design/lucide:shield-check.svg?color=%23ffffff" },
      { title: "Resolves or Routes", description: "Handles request or escalates to human agent with context", icon: "https://api.iconify.design/lucide:check-square.svg?color=%23ffffff" },
    ],
  },
  featuresSection: {
    title: "Features for Financial Services",
    description: "Everything you need to enhance customer service while maintaining compliance. SOC 2 compliant and designed for financial workflows.",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Regional Bank Results",
    stats: {
      left: {
        value: "15 min",
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
      text: "See Financial Services Demo",
    },
  },
  cta: {
    title: "Transform Financial Services Today",
    description: "Join financial institutions improving customer experience with AI. SOC 2 compliant and ready to deploy.",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • SOC 2 compliant • Setup in 10 minutes",
  },
};

export const financialServiceImages = {
  uiScreenshot,
  workflowImage,
  calendar: uiScreenshot,
  calendar1: workflowImage,
  tirado,
};


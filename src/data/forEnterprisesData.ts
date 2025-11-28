import { Award, Shield, Globe, Lock, XCircle, CheckCircle2, Users, Zap, TrendingUp } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/solution/enterprise/1.png";
import workflowImage from "@/assets/solution/enterprise/2.png";

export const forEnterprisesData: SolutionData = {
  hero: {
    tag: "Team • Enterprise",
    title: "Enterprise-Grade AI Calling",
    titleHighlight: "at Global Scale",
    description: "Deploy intelligent voice automation across your organization with security, compliance, and support you can trust. Built for Fortune 500 companies that need enterprise-grade reliability, security, and global scalability with complete control over their AI calling infrastructure.",
    primaryButton: {
      text: "Schedule Executive Briefing",
      variant: "primary",
    },
    secondaryButton: {
      text: "Request Enterprise Trial",
      variant: "secondary",
    },
  },
  stats: [
    { value: "99.99%", label: "uptime SLA", description: "Enterprise-grade reliability for mission-critical operations." },
    { value: "50+", label: "languages supported", description: "Global coverage to support your customers worldwide." },
    { value: "SOC 2", label: "Type II certified", description: "Highest standards of security and data protection." },
    { value: "24/7", label: "priority support", description: "Dedicated team available around the clock for your needs." },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Security Concerns",
      description: "Enterprise data requires the highest levels of security and compliance.",
      iconUrl: "https://api.iconify.design/lucide:shield-alert.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Scalability Challenges",
      description: "Need to handle millions of calls across global operations.",
      iconUrl: "https://api.iconify.design/lucide:bar-chart-2.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Integration Complexity",
      description: "Must integrate with existing enterprise systems and workflows.",
      iconUrl: "https://api.iconify.design/lucide:server.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Support Requirements",
      description: "Need dedicated support and custom solutions for enterprise needs.",
      iconUrl: "https://api.iconify.design/lucide:headphones.svg?color=%23ffffff"
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "SOC 2 Type II Certified",
      description: "Enterprise security standards and compliance",
    },
    {
      icon: CheckCircle2,
      title: "99.99% Uptime SLA",
      description: "Mission-critical reliability guaranteed",
    },
    {
      icon: CheckCircle2,
      title: "Global Infrastructure",
      description: "Multi-region deployment with automatic failover",
    },
    {
      icon: CheckCircle2,
      title: "Dedicated Support",
      description: "24/7 priority support with named account managers",
    },
  ],
  steps: [
    { number: "01", title: "Executive Briefing", description: "Discuss your enterprise needs and requirements" },
    { number: "02", title: "Custom Solution Design", description: "Tailored implementation plan for your organization" },
    { number: "03", title: "Dedicated Implementation", description: "Professional services team handles deployment" },
    { number: "04", title: "Ongoing Support", description: "24/7 support with quarterly business reviews" },
  ],
  features: [
    { icon: "🔒", title: "Enterprise Security", description: "SOC 2, ISO 27001, end-to-end encryption", iconUrl: "https://api.iconify.design/lucide:lock.svg?color=%23ffffff" },
    { icon: "🌍", title: "Global Scale", description: "50+ languages, multi-region deployment", iconUrl: "https://api.iconify.design/lucide:globe.svg?color=%23ffffff" },
    { icon: "⚡", title: "High Availability", description: "99.99% uptime SLA with failover", iconUrl: "https://api.iconify.design/lucide:zap.svg?color=%23ffffff" },
    { icon: "👥", title: "Dedicated Support", description: "Named account managers and architects", iconUrl: "https://api.iconify.design/lucide:users.svg?color=%23ffffff" },
    { icon: "🔗", title: "Custom Integrations", description: "API access and professional services", iconUrl: "https://api.iconify.design/lucide:plug.svg?color=%23ffffff" },
    { icon: "📊", title: "Enterprise Analytics", description: "Advanced reporting and insights", iconUrl: "https://api.iconify.design/lucide:bar-chart-2.svg?color=%23ffffff" },
  ],
  problemSection: {
    title: "Security First",
    description: "Enterprise-grade security, compliance, and infrastructure built for Fortune 500 companies.",
  },
  solutionSection: {
    title: "Enterprise Solutions",
    description: "Sales acceleration, customer service transformation, and internal operations automation",
  },
  howItWorks: {
    tag: "How It Works",
    title: "Enterprise Implementation Process",
    subtitle: "Dedicated support from start to finish",
    steps: [
      { title: "Executive Briefing", description: "Discuss your enterprise needs and requirements", icon: "https://api.iconify.design/lucide:briefcase.svg?color=%23ffffff" },
      { title: "Custom Solution Design", description: "Tailored implementation plan for your organization", icon: "https://api.iconify.design/lucide:pen-tool.svg?color=%23ffffff" },
      { title: "Dedicated Implementation", description: "Professional services team handles deployment", icon: "https://api.iconify.design/lucide:rocket.svg?color=%23ffffff" },
      { title: "Ongoing Support", description: "24/7 support with quarterly business reviews", icon: "https://api.iconify.design/lucide:headphones.svg?color=%23ffffff" },
    ],
  },
  featuresSection: {
    title: "Global Infrastructure",
    description: "Mission-critical reliability, security, and scalability for enterprise operations",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Trusted by Fortune 500 Companies",
    stats: {
      left: {
        value: "3.2M",
        label: "calls automated annually",
      },
      right: {
        value: "47%",
        label: "cost reduction",
      },
    },
    primaryButton: {
      text: "Schedule Executive Briefing",
    },
    secondaryButton: {
      text: "Request Enterprise Trial",
    },
  },
  cta: {
    title: "Let's Discuss Your Enterprise Needs",
    description: "Our enterprise team is ready to design a custom solution for your organization.",
    buttonText: "Schedule Executive Briefing",
    disclaimer: "Enterprise plans starting at $2,997/month",
  },
};

export const forEnterprisesImages = {
  uiScreenshot,
  workflowImage,
  calendar: uiScreenshot,
  calendar1: workflowImage,
  tirado: workflowImage,
};

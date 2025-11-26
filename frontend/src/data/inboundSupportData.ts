import { Headphones, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/images/inboundcall/customer call.png";
import workflowImage from "@/assets/images/inboundcall/webnamaste.png";
import calendar from "@/assets/images/appointment/schedule.png";
import calendar1 from "@/assets/images/appointment/schedule.png";
import tirado from "@/assets/images/appointment/tirado.jpeg";

export const inboundSupportData: SolutionData = {
  hero: {
    tag: "Use Case • Inbound Support",
    title: "Never Miss Another",
    titleHighlight: "Customer Call",
    description: "Answer every inbound call instantly, 24/7. Route to the right department, resolve issues, and book appointments—all without human agents. Eliminate wait times, reduce costs by 95%, and deliver exceptional customer service around the clock.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See Support Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "100%", label: "of calls answered" },
    { value: "< 3 sec", label: "wait time" },
    { value: "24/7/365", label: "availability" },
    { value: "90%", label: "issues resolved by AI" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Missed Revenue",
      description: "67% of customers hang up if not answered in 30 seconds",
      iconUrl: "https://api.iconify.design/lucide:phone-missed.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "After-Hours Chaos",
      description: "50% of calls come outside business hours. You're closed.",
      iconUrl: "https://api.iconify.design/lucide:moon.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Long Wait Times",
      description: "Average hold time: 8 minutes. Customers are frustrated.",
      iconUrl: "https://api.iconify.design/lucide:clock.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "High Staff Costs",
      description: "Support agents cost $40K/year + benefits + training",
      iconUrl: "https://api.iconify.design/lucide:dollar-sign.svg?color=%23ffffff"
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "Zero Wait Time",
      description: "Every call answered in < 3 seconds. No hold music.",
    },
    {
      icon: CheckCircle2,
      title: "24/7 Coverage",
      description: "Never close. AI works weekends, holidays, 3 AM.",
    },
    {
      icon: CheckCircle2,
      title: "Instant Resolution",
      description: "90% of common issues resolved without human handoff",
    },
    {
      icon: CheckCircle2,
      title: "95% Cost Savings",
      description: "Replace expensive call center with AI",
    },
  ],
  steps: [
    { number: "01", title: "Route Intelligently", description: "AI understands caller intent and routes to right department or resolves instantly" },
    { number: "02", title: "Access Knowledge Base", description: "AI pulls from your docs, FAQs, policies instantly" },
    { number: "03", title: "Take Action", description: "Book appointments, process returns, update accounts" },
    { number: "04", title: "Escalate When Needed", description: "Complex issues go to human agents with full context" },
  ],
  features: [
    { icon: "🎙️", title: "Natural Conversations", description: "Sounds completely human", iconUrl: "https://api.iconify.design/lucide:message-circle.svg?color=%23ffffff" },
    { icon: "🧠", title: "Smart Routing", description: "Directs to right department", iconUrl: "https://api.iconify.design/lucide:git-branch.svg?color=%23ffffff" },
    { icon: "📚", title: "Knowledge Integration", description: "Access all your docs", iconUrl: "https://api.iconify.design/lucide:book.svg?color=%23ffffff" },
    { icon: "📅", title: "Appointment Booking", description: "Checks calendar, books slots", iconUrl: "https://api.iconify.design/lucide:calendar.svg?color=%23ffffff" },
    { icon: "🔄", title: "Multi-language", description: "Support in 50+ languages", iconUrl: "https://api.iconify.design/lucide:globe.svg?color=%23ffffff" },
    { icon: "📊", title: "Call Analytics", description: "Track resolution rates", iconUrl: "https://api.iconify.design/lucide:bar-chart-2.svg?color=%23ffffff" },
  ],
  problemSection: {
    title: "The Cost of Missed Calls",
    description: "Every unanswered call is lost revenue. Every minute on hold is a frustrated customer. Traditional support can't keep up with customer expectations for instant, 24/7 service.",
  },
  solutionSection: {
    title: "How CloserX Solves It",
    description: "AI-powered inbound support that never sleeps",
  },
  howItWorks: {
    tag: "How It Works",
    title: "From Call to Resolution in Seconds",
    subtitle: "Automated support that works",
    steps: [
      { title: "Route Intelligently", description: "AI understands caller intent and routes to right department or resolves instantly", icon: "https://api.iconify.design/lucide:git-branch.svg?color=%23ffffff" },
      { title: "Access Knowledge Base", description: "AI pulls from your docs, FAQs, policies instantly", icon: "https://api.iconify.design/lucide:book-open.svg?color=%23ffffff" },
      { title: "Take Action", description: "Book appointments, process returns, update accounts", icon: "https://api.iconify.design/lucide:zap.svg?color=%23ffffff" },
      { title: "Escalate When Needed", description: "Complex issues go to human agents with full context", icon: "https://api.iconify.design/lucide:user-plus.svg?color=%23ffffff" },
    ],
  },
  featuresSection: {
    title: "Inbound Support Features",
    description: "Everything you need to deliver world-class customer support",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "WebNamaste: Inbound AI Agent in 8 Minutes",
    testimonial: "I was able to create an inbound AI agent, AI voice agent, in eight minutes. So it was that easy... I think the possibilities are endless.",
    author: "Radha Krishnan",
    company: "WebNamaste - Marketing Agency",
    stats: {
      left: {
        value: "8 min",
        label: "inbound agent setup",
      },
      right: {
        value: "5/5",
        label: "star rating",
      },
    },
    primaryButton: {
      text: "Start Free Trial",
    },
    secondaryButton: {
      text: "See Support Demo",
    },
  },
  cta: {
    title: "Transform Your Support Today",
    description: "Join hundreds of companies delivering exceptional customer service with AI",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • Setup in 10 minutes",
  },
};

export const inboundSupportImages = {
  uiScreenshot,
  workflowImage,
  calendar,
  calendar1,
  tirado,
};

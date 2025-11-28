import { Home, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/solution/real/1.png";
import workflowImage from "@/assets/solution/real/2.png";
import tirado from "@/assets/solution/real/3.png";

export const realEstateData: SolutionData = {
  hero: {
    tag: "Industry • Real Estate",
    title: "Close More Deals with",
    titleHighlight: "AI Real Estate Agents",
    description: "Call 1,000+ leads per day, schedule showings automatically, and never miss a buyer again. Purpose-built for real estate agents, brokers, and teams. TCPA compliant with instant lead response and 24/7 availability.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See Real Estate Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "87%", label: "faster lead response", description: "Engage leads instantly, 24/7, ensuring you never miss an opportunity." },
    { value: "3x", label: "more showings booked", description: "Automated scheduling fills your calendar with qualified buyers ready to view properties." },
    { value: "45%", label: "increase in closings", description: "More conversations and showings lead directly to more closed deals and higher revenue." },
    { value: "TCPA", label: "Compliant", description: "Fully compliant with TCPA regulations, protecting your business while you scale." },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Slow Response Times",
      description: "By the time you call back, they've already booked with another agent.",
      iconUrl: "https://api.iconify.design/lucide:clock.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "After-Hours Leads",
      description: "50% of leads come in evenings and weekends when you're off.",
      iconUrl: "https://api.iconify.design/lucide:moon.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Showing Coordination Nightmare",
      description: "Playing phone tag to schedule one showing wastes hours.",
      iconUrl: "https://api.iconify.design/lucide:calendar-x.svg?color=%23ffffff"
    },
    {
      icon: XCircle,
      title: "Inconsistent Follow-up",
      description: "You forget to follow up, they work with someone else.",
      iconUrl: "https://api.iconify.design/lucide:user-x.svg?color=%23ffffff"
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "5-Minute Response Time",
      description: "AI calls new leads instantly",
    },
    {
      icon: CheckCircle2,
      title: "24/7 Lead Capture",
      description: "Never lose after-hours leads again",
    },
    {
      icon: CheckCircle2,
      title: "One-Call Showing Schedule",
      description: "Books showings in 2 minutes",
    },
    {
      icon: CheckCircle2,
      title: "Automated Nurture",
      description: "Follows up until they're ready",
    },
  ],
  steps: [
    { number: "01", title: "Lead Comes In", description: "Zillow, Realtor.com, or your website" },
    { number: "02", title: "AI Calls Instantly", description: "Within 5 minutes, AI reaches out" },
    { number: "03", title: "Qualifies Buyer", description: "Asks budget, location, timeline" },
    { number: "04", title: "Schedules Showing", description: "Books directly into your calendar" },
    { number: "05", title: "Sends Reminders", description: "Confirms 24hr and 2hr before" },
    { number: "06", title: "Follows Up", description: "Nurtures until they're ready to buy" },
  ],
  features: [
    { icon: "🗓️", title: "MLS Integration", description: "Syncs with property data", iconUrl: "https://api.iconify.design/lucide:database.svg?color=%23ffffff" },
    { icon: "📍", title: "Location Intelligence", description: "Discusses neighborhoods", iconUrl: "https://api.iconify.design/lucide:map-pin.svg?color=%23ffffff" },
    { icon: "💵", title: "Price Range Qualification", description: "Qualifies budget", iconUrl: "https://api.iconify.design/lucide:dollar-sign.svg?color=%23ffffff" },
    { icon: "🏡", title: "Property Matching", description: "Recommends listings", iconUrl: "https://api.iconify.design/lucide:home.svg?color=%23ffffff" },
    { icon: "📅", title: "Showing Coordination", description: "Checks your calendar", iconUrl: "https://api.iconify.design/lucide:calendar-check.svg?color=%23ffffff" },
    { icon: "📝", title: "Buyer Questionnaire", description: "Asks bedrooms, location, etc.", iconUrl: "https://api.iconify.design/lucide:clipboard-list.svg?color=%23ffffff" },
  ],
  problemSection: {
    title: "Real Estate Challenges",
    description: "Why leads slip through the cracks. In real estate, speed wins. The first agent to respond gets the listing. But most agents are too busy showing properties to answer every call immediately.",
  },
  solutionSection: {
    title: "CloserX for Real Estate",
    description: "AI-powered solutions built for real estate professionals",
  },
  howItWorks: {
    tag: "How It Works",
    title: "From Lead to Showing in Minutes",
    subtitle: "Automated real estate workflow",
    steps: [
      { title: "Lead Comes In", description: "Zillow, Realtor.com, or your website", icon: "https://api.iconify.design/lucide:inbox.svg?color=%23ffffff" },
      { title: "AI Calls Instantly", description: "Within 5 minutes, AI reaches out", icon: "https://api.iconify.design/lucide:phone-outgoing.svg?color=%23ffffff" },
      { title: "Qualifies Buyer", description: "Asks budget, location, timeline", icon: "https://api.iconify.design/lucide:check-square.svg?color=%23ffffff" },
      { title: "Schedules Showing", description: "Books directly into your calendar", icon: "https://api.iconify.design/lucide:calendar.svg?color=%23ffffff" },
    ],
  },
  featuresSection: {
    title: "Features for Real Estate",
    description: "Everything you need to dominate your local market. Integrates with your MLS, CRM, and calendar for seamless operations.",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Keller Williams Team Results",
    stats: {
      left: {
        value: "6",
        label: "closings/month (before)",
      },
      right: {
        value: "18",
        label: "closings/month (with AI)",
      },
    },
    primaryButton: {
      text: "Start Free Trial",
    },
    secondaryButton: {
      text: "See Real Estate Demo",
    },
  },
  cta: {
    title: "Start Closing More Deals Today",
    description: "Join hundreds of top-performing real estate agents using CloserX. No credit card required to start your free trial.",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • Setup in 10 minutes",
  },
};

export const realEstateImages = {
  uiScreenshot,
  workflowImage,
  calendar: uiScreenshot,
  calendar1: workflowImage,
  tirado,
};

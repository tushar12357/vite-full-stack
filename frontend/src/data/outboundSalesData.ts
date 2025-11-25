import { Target, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/images/outboundcall/handshake.png";
import workflowImage from "@/assets/images/outboundcall/handshake.png";
import calendar from "@/assets/images/outboundcall/handshake.png";
import calendar1 from "@/assets/images/outboundcall/handshake.png";
import tirado from "@/assets/images/outboundcall/handshake.png";

export const outboundSalesData: SolutionData = {
  hero: {
    tag: "Use Case",
    title: "Turn Cold Calls Into",
    titleHighlight: "Closed Deals",
    description: "Make 10,000+ outbound calls per day with AI voice agents that never get tired, never miss a follow-up, and convert 3x better than human teams. Scale your outreach 100x without hiring a single sales rep.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See Live Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "10,000+", label: "calls/day per agent" },
    { value: "35%", label: "average conversion rate" },
    { value: "3x", label: "faster than human teams" },
    { value: "$0.20", label: "per call" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Limited Capacity",
      description: "Your sales team can only make 50-80 calls per day. You're leaving money on the table.",
    },
    {
      icon: XCircle,
      title: "Inconsistent Quality",
      description: "Different reps, different scripts, different results. No standardization.",
    },
    {
      icon: XCircle,
      title: "High Costs",
      description: "Hiring, training, and managing sales reps costs $60K+ per year per rep.",
    },
    {
      icon: XCircle,
      title: "Slow Follow-ups",
      description: "Leads go cold while your team is busy. 80% of leads need 5+ follow-ups.",
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "Unlimited Scale",
      description: "AI agents make 10,000+ calls/day. Scale your outreach 100x without hiring.",
    },
    {
      icon: CheckCircle2,
      title: "Perfect Consistency",
      description: "Every call follows your proven script. Same quality, every time.",
    },
    {
      icon: CheckCircle2,
      title: "97% Cost Reduction",
      description: "$0.20 per call vs. $8.50 with human reps. Save $153K+ per year.",
    },
    {
      icon: CheckCircle2,
      title: "Instant Follow-ups",
      description: "AI never forgets. Automatic follow-ups at the perfect time, every time.",
    },
  ],
  steps: [
    { number: "01", title: "Upload Your List", description: "Import leads from CSV, CRM, or any source. We integrate with 50+ platforms." },
    { number: "02", title: "Customize Your Script", description: "Train your AI agent with your best sales script. Add objection handling." },
    { number: "03", title: "Launch Campaigns", description: "Set your daily call volume, target hours, and goals. Hit start." },
    { number: "04", title: "Watch Sales Roll In", description: "Real-time dashboard shows calls, conversions, and revenue. Optimizes automatically." },
  ],
  features: [
    { icon: "📞", title: "Parallel Dialing", description: "Make 100+ simultaneous calls" },
    { icon: "🎯", title: "Lead Scoring", description: "AI qualifies leads in real-time" },
    { icon: "📝", title: "CRM Auto-Update", description: "Logs every call instantly" },
    { icon: "🔄", title: "Auto Follow-up", description: "Never miss a callback" },
    { icon: "📊", title: "A/B Testing", description: "Test scripts automatically" },
    { icon: "💬", title: "SMS Integration", description: "Follow calls with texts" },
  ],
  problemSection: {
    title: "The Outbound Sales Challenge",
    description: "Traditional outbound sales is broken. Your sales team is limited, expensive, and inconsistent. While your competitors are making thousands of calls, you're stuck with manual dialing and missed opportunities.",
  },
  solutionSection: {
    title: "How CloserX Solves It",
    description: "AI-powered solutions for modern sales teams",
  },
  howItWorks: {
    tag: "How It Works",
    title: "From Lead to Sale in 4 Steps",
    subtitle: "Simple process, powerful results",
    steps: [
      { title: "Upload Your List", description: "Import leads from CSV, CRM, or any source. We integrate with 50+ platforms." },
      { title: "Customize Your Script", description: "Train your AI agent with your best sales script. Add objection handling." },
      { title: "Launch Campaigns", description: "Set your daily call volume, target hours, and goals. Hit start." },
      { title: "Watch Sales Roll In", description: "Real-time dashboard shows calls, conversions, and revenue. Optimizes automatically." },
    ],
  },
  featuresSection: {
    title: "Outbound Sales Features",
    description: "Everything you need to dominate outbound sales. Our AI-powered platform gives you enterprise-level capabilities at a fraction of the cost.",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Mike Craft: 1,500 Daily Calls & 30% Increase in Vendor Participation",
    testimonial: "They're pioneers in the industry. Their founders are down-to-earth people with genuine interest in helping their customers be successful. So, I highly recommend CloserX and you won't be disappointed.",
    author: "Mike Craft",
    company: "Entrepreneur - Trade Show Company Client",
    stats: {
      left: {
        value: "1,500",
        label: "calls per day",
      },
      right: {
        value: "30%",
        label: "vendor participation increase",
      },
    },
    primaryButton: {
      text: "Start Free 14-Day Trial",
    },
    secondaryButton: {
      text: "See Live Demo",
    },
  },
  cta: {
    title: "Start Making More Sales Today",
    description: "Join 500+ sales teams crushing their quotas with CloserX. No credit card required to start your free trial.",
    buttonText: "Start Free 14-Day Trial",
    disclaimer: "No credit card required • Setup in 10 minutes",
  },
};

export const outboundSalesImages = {
  uiScreenshot,
  workflowImage,
  calendar,
  calendar1,
  tirado,
};


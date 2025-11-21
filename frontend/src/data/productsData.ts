import { Clock, Zap, Shield, Target } from "lucide-react";

export const productsData = [
  {
    icon: Clock,
    title: "Watch Your Calls in Real-Time",
    description: "Beautiful analytics that update as your AI agents work",
    features: [
      {
        icon: Clock,
        title: "Live Call Monitoring",
        description: "Observe AI-led calls with real-time transcripts, sentiment, and call controls.",
      },
      {
        icon: Zap,
        title: "Instant Notifications",
        description: "Trigger alerts for key call outcomes so teams can follow up instantly.",
      },
      {
        icon: Shield,
        title: "Secure Data Handling",
        description: "All recordings and transcripts are encrypted at rest and in transit.",
      },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Experience blazing fast speeds with our optimized infrastructure",
    features: [
      {
        icon: Zap,
        title: "99.9% Uptime",
        description: "Redundant regions and active monitoring keep every dialer session online.",
      },
      {
        icon: Target,
        title: "Global CDN",
        description: "Edge acceleration means low-latency call starts no matter your caller location.",
      },
      {
        icon: Shield,
        title: "Auto-scaling",
        description: "Automatically provisions capacity when campaigns spike without any manual work.",
      },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with industry-leading security measures",
    features: [
      {
        icon: Shield,
        title: "End-to-End Encryption",
        description: "TLS 1.3, rotated keys, and scoped secrets protect your full voice stack.",
      },
      {
        icon: Clock,
        title: "24/7 Monitoring",
        description: "Dedicated SRE coverage with proactive alerting across every service.",
      },
      {
        icon: Target,
        title: "Compliance Ready",
        description: "SOC2, HIPAA, and GDPR controls help reduce your vendor review cycles.",
      },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Smart AI Integration",
    description: "Powerful AI tools that enhance your workflow automatically",
    features: [
      {
        icon: Target,
        title: "Smart Routing",
        description: "Automatically routes leads to the right script, language, and compliance profile.",
      },
      {
        icon: Zap,
        title: "Predictive Analytics",
        description: "Models forecast conversion probability and advise the next best action.",
      },
      {
        icon: Clock,
        title: "Auto-optimization",
        description: "Continuously tunes prompts and cadences based on live win/loss signals.",
      },
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

export type ProductCard = (typeof productsData)[number];


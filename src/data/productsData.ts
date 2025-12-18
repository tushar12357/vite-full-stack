import { Clock, Zap, Shield, Target } from "lucide-react";
import imageOne from "@/assets/whyChooseCloserX/1.png";
import imageTwo from "@/assets/whyChooseCloserX/2.png";
import imageThree from "@/assets/whyChooseCloserX/3.png";
import imageFour from "@/assets/whyChooseCloserX/4.png";

export const productsData = [
  {
    icon: Clock,
    title: "Watch Your Calls in Real-Time",
    description: "Beautiful Analytics that Update as your AI Agents Work",
    image: imageOne,
    features: [
      {
        icon: Clock,
        title: "Live Call Monitoring",
        description: "Observe AI-led calls with Real-time Transcripts, Sentiment, and Call Controls.",
      },
      {
        icon: Zap,
        title: "Instant Notifications",
        description: "Trigger Alerts for Key Call Outcomes so Teams can Follow up Instantly.",
      },
      {
        icon: Shield,
        title: "Secure Data Handling",
        description: "All Recordings and Transcripts are Encrypted at Rest and in Transit.",
      },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Experience Blazing Fast Speeds with our Optimized Infrastructure",
    image: imageTwo,
    features: [
      {
        icon: Zap,
        title: "99.9% Uptime",
        description: "Redundant Regions and Active Monitoring keep Every Dialer Session Online.",
      },
      {
        icon: Target,
        title: "Global CDN",
        description: "Edge Acceleration means Low-latency Call Starts no matter your Caller Location.",
      },
      {
        icon: Shield,
        title: "Auto-scaling",
        description: "Automatically Provisions Capacity when Campaigns Spike without any Manual Work.",
      },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your Data is Protected with Industry-leading Security Measures",
    image: imageThree,
    features: [
      {
        icon: Shield,
        title: "End-to-End Encryption",
        description: "TLS 1.3, Rotated keys, and Scoped Secrets Protect your Full Voice Stack.",
      },
      {
        icon: Clock,
        title: "24/7 Monitoring",
        description: "Dedicated SRE Coverage with Proactive Alerting across every Service.",
      },
      {
        icon: Target,
        title: "Compliance Ready",
        description: "SOC2, HIPAA, and GDPR controls help Reduce your Vendor Review Cycles.",
      },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Smart AI Integration",
    description: "Powerful AI Tools that Enhance your Workflow Automatically",
    image: imageFour,
    features: [
      {
        icon: Target,
        title: "Smart Routing",
        description: "Automatically Routes leads to the right script, Language, and Compliance Profile.",
      },
      {
        icon: Zap,
        title: "Predictive Analytics",
        description: "Models Forecast Conversion Probability and advise the next Best Action.",
      },
      {
        icon: Clock,
        title: "Auto-optimization",
        description: "Continuously tunes Prompts and Cadences based on live win/loss Signals.",
      },
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

export type ProductCard = (typeof productsData)[number];


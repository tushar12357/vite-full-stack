import { Phone, PhoneCall, Network, Cpu } from "lucide-react";
import type { ProductCard } from "./productsData";

export const callManagementHero = {
  titleLines: ["Call Management", "& Voice Infrastructure"],
  description:
    "Power your AI voice agents with enterprise-grade telephony. Connect CloserX.ai with leading communication providers or bring your own SIP setup — for global reliability and crystal-clear calls.",
  primaryCta: {
    label: "Talk To Sales",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Integrations",
    href: "/integrations",
  },
};

export const callManagementProductCards: ProductCard[] = [
  {
    icon: Phone,
    title: "Telnyx",
    description: "Telnyx powers reliable voice connectivity with intelligent routing, global SIP trunking, and real-time analytics — giving CloserX.ai agents crystal-clear calling and scalable performance.",
    features: [
      {
        title: "Intelligent Routing",
        description: "Advanced routing algorithms that optimize call quality and reduce latency across global networks.",
      },
      {
        title: "Global SIP Trunking",
        description: "Enterprise-grade SIP trunking with worldwide coverage and carrier-grade voice quality.",
      },
      {
        title: "Real-Time Analytics",
        description: "Comprehensive dashboards and insights into call performance, quality metrics, and usage patterns.",
      },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Network,
    title: "Twilio",
    description: "Twilio provides developer-friendly APIs that enable flexible inbound and outbound calling. Perfect for scaling call automation or integrating advanced AI-powered routing flows.",
    features: [
      {
        title: "Developer-Friendly APIs",
        description: "RESTful APIs and SDKs that make it easy to build custom calling workflows and integrations.",
      },
      {
        title: "Flexible Calling",
        description: "Support for both inbound and outbound calling with advanced features like call recording and transcription.",
      },
      {
        title: "AI-Powered Routing",
        description: "Integrate with AI systems to create intelligent call routing based on customer data and behavior.",
      },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "Custom SIP",
    description: "Bring your own SIP trunk — integrate with your existing telephony provider for total control over call routing, recording, and compliance. CloserX.ai supports full SIP interoperability.",
    features: [
      {
        title: "Full SIP Interoperability",
        description: "Complete support for standard SIP protocols, allowing integration with any SIP-compatible provider.",
      },
      {
        title: "Total Control",
        description: "Manage call routing, recording policies, and compliance settings according to your requirements.",
      },
      {
        title: "Existing Infrastructure",
        description: "Seamlessly integrate with your current telephony setup without requiring major changes.",
      },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: PhoneCall,
    title: "Track & Monitor",
    description: "Real-time dashboards give insight into call performance, agent response rates, and AI accuracy — helping you improve conversion and customer satisfaction.",
    features: [
      {
        title: "Real-Time Dashboards",
        description: "Live monitoring of all active calls with instant updates on performance metrics and status.",
      },
      {
        title: "Agent Performance",
        description: "Track response rates, conversation quality, and AI agent accuracy across all interactions.",
      },
      {
        title: "Conversion Insights",
        description: "Analyze conversion rates, customer satisfaction scores, and identify areas for improvement.",
      },
    ],
    gradient: "from-orange-500 to-red-500",
  },
];


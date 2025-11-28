import { Phone, PhoneCall, Network, Cpu } from "lucide-react";
import type { ProductCard } from "./productsData";
import telnyxImage from "@/assets/images/call Management/telynx.png";
import twilioImage from "@/assets/images/call Management/twilio.webp";
import customTeleImage from "@/assets/images/call Management/customtele.jpeg";

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
    image: telnyxImage,
    features: [
      {
        icon: Phone,
        title: "Intelligent Routing",
        description: "Advanced routing algorithms that optimize call quality and reduce latency across global networks.",
      },
      {
        icon: Network,
        title: "Global SIP Trunking",
        description: "Enterprise-grade SIP trunking with worldwide coverage and carrier-grade voice quality.",
      },
      {
        icon: Cpu,
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
    image: twilioImage,
    features: [
      {
        icon: Network,
        title: "Developer-Friendly APIs",
        description: "RESTful APIs and SDKs that make it easy to build custom calling workflows and integrations.",
      },
      {
        icon: Phone,
        title: "Flexible Calling",
        description: "Support for both inbound and outbound calling with advanced features like call recording and transcription.",
      },
      {
        icon: Cpu,
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
    image: customTeleImage,
    features: [
      {
        icon: Cpu,
        title: "Full SIP Interoperability",
        description: "Complete support for standard SIP protocols, allowing integration with any SIP-compatible provider.",
      },
      {
        icon: Phone,
        title: "Total Control",
        description: "Manage call routing, recording policies, and compliance settings according to your requirements.",
      },
      {
        icon: Network,
        title: "Existing Infrastructure",
        description: "Seamlessly integrate with your current telephony setup without requiring major changes.",
      },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];


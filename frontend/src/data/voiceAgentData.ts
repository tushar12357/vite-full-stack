import { Mic, Brain, Languages, MessageSquare } from "lucide-react";
import type { ProductCard } from "./productsData";
import voiceImage1 from "@/assets/images/Voice/1.png";
import humanLikeVoice from "@/assets/images/Voice/Human Like voice.png";
import voicesImage from "@/assets/images/Voice/operationCaa.png";
import multi from "@/assets/images/Voice/multilingual.png";

export const voiceAgentHero = {
  titleLines: ["Human-Like AI", "Voice Agents"],
  description:
    "Deploy intelligent voice agents that sound natural, understand context, and deliver exceptional customer experiences.",
  primaryCta: {
    label: "Talk To Sales",
    href: "/contact",
  },
  secondaryCta: {
    label: "Create an AI Agent",
    href: "#",
  },
};

export const voiceAgentProductCards: ProductCard[] = [
  {
    icon: Mic,
    title: "Natural, Human-Like Voices",
    description: "Ultra-realistic speech synthesis with expressive prosody and instant response times.",
    image: humanLikeVoice,
    features: [
      {
        icon: Mic,
        title: "Neural TTS Engine",
        description: "Studio-quality voices with breathing, emphasis, and configurable speaking styles.",
      },
      {
        icon: Brain,
        title: "Adaptive Emotion",
        description: "Agents adjust tone and pacing automatically based on customer sentiment.",
      },
      {
        icon: MessageSquare,
        title: "Signal-Level Controls",
        description: "Fine-tune fillers, pauses, and pronunciation for every prompt or script.",
      },
    ],
    gradient: "from-purple-500 via-pink-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "Context-Aware Intelligence",
    description: "GPT-4 powered reasoning that keeps long conversations coherent and helpful.",
    image: voiceImage1,
    features: [
      {
        icon: Brain,
        title: "Long-Term Memory",
        description: "Persist preferences, past calls, and CRM notes for personalized responses.",
      },
      {
        icon: MessageSquare,
        title: "Knowledge Sync",
        description: "Sync playbooks, FAQs, and policies so answers stay compliant and on-brand.",
      },
      {
        icon: Mic,
        title: "Real-Time Guardrails",
        description: "Live policy checks and fallback behaviors to keep conversations safe.",
      },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Languages,
    title: "Multilingual + Multichannel",
    description: "Launch global agents that seamlessly switch languages, accents, and channels.",
    image: multi,
    features: [
      {
        icon: Languages,
        title: "50+ Languages",
        description: "Native phoneme libraries ensure accents sound authentic, not translated.",
      },
      {
        icon: MessageSquare,
        title: "Dynamic Code-Switching",
        description: "Agents can change languages mid-call when the contact does.",
      },
      {
        icon: Mic,
        title: "Channel Handoff",
        description: "Move from phone to SMS/email using the same AI identity and context.",
      },
    ],
    gradient: "from-emerald-500 to-lime-500",
  },
  {
    icon: MessageSquare,
    title: "Operational Control & Analytics",
    description: "Full visibility into calls, QA workflows, and performance optimization.",
    image: voicesImage,
    features: [
      {
        icon: MessageSquare,
        title: "Live Monitoring",
        description: "Shadow calls, whisper to AI agents, or manually take over in one click.",
      },
      {
        icon: Brain,
        title: "Outcome Automation",
        description: "Push call summaries, dispositions, and follow-ups into your CRM or MAP.",
      },
      {
        icon: Languages,
        title: "A/B Experimentation",
        description: "Test prompts, voices, and cadences to continuously improve conversion.",
      },
    ],
    gradient: "from-amber-500 to-red-500",
  },
];



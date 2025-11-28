import { Palette, Globe, Crown, Sparkles } from "lucide-react";
import type { ProductCard } from "./productsData";
import landingPages from "@/assets/images/whiteLable/landing pages.png";
import clientPortal from "@/assets/images/whiteLable/client portal.png";
import ownCloserx from "@/assets/images/whiteLable/own closerx.png";
import agencySetup from "@/assets/images/whiteLable/agency setup.png";

export const whiteLabelHero = {
  titleLines: ["The CloserX.ai", "Agent Platform"],
  description:
    "A complete AI calling solution with white-label capabilities, advanced analytics, and seamless integrations.",
  primaryCta: {
    label: "Talk To Sales",
    href: "/contact",
  },
  secondaryCta: {
    label: "Create an AI Agent",
    href: "#",
  },
};

export const whiteLabelFeatures = [
  {
    icon: Palette,
    title: "Full Branding Control",
    description: "Customize every color, logo, and element so the platform feels 100% yours.",
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Host on your own domain name with SSL, routing, and localization support.",
  },
  {
    icon: Crown,
    title: "White-Label Portal",
    description: "Client-facing dashboard that mirrors your brand guidelines out of the box.",
  },
  {
    icon: Sparkles,
    title: "Premium Features",
    description: "Unlock advanced reporting, routing, and automation under your own brand.",
  },
];

export type WhiteLabelFeature = (typeof whiteLabelFeatures)[number];

export const whiteLabelProductCards: ProductCard[] = [
  {
    icon: Palette,
    title: "White-Labeled Control Center",
    description: "Launch CloserX with your brand system—from logo lockups to typography and color tokens.",
    image: agencySetup,
    features: [
      {
        icon: Palette,
        title: "Full Branding Control",
        description: "Upload brand kits, fonts, and palettes to auto-theme every customer touchpoint.",
      },
      {
        icon: Sparkles,
        title: "Customizable UX Blocks",
        description: "Rearrange dashboard widgets and rename navigation to mirror your product vocabulary.",
      },
      {
        icon: Crown,
        title: "Client-Specific Themes",
        description: "Spin up unique sub-brands for each reseller client without touching code.",
      },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Own The Domain Experience",
    description: "Keep your customers inside your ecosystem with branded URLs, auth, and localization.",
    image: ownCloserx,
    features: [
      {
        icon: Globe,
        title: "Custom Domains",
        description: "Point CNAME records to your portal with automated SSL provisioning.",
      },
      {
        icon: Globe,
        title: "Global Localization",
        description: "Serve localized dashboards and IVR flows per market with a single codebase.",
      },
      {
        icon: Crown,
        title: "Single Sign-On",
        description: "Offer SAML/SCIM SSO so enterprise clients log in through your identity provider.",
      },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Crown,
    title: "Client-Facing Portal",
    description: "Give agencies and partners a dashboard that feels bespoke—without rebuilding features.",
    image: clientPortal,
    features: [
      {
        icon: Crown,
        title: "Role-Based Branding",
        description: "Set different colorways and permissions for admins, resellers, and end customers.",
      },
      {
        icon: Sparkles,
        title: "Template Library",
        description: "Package proven playbooks so clients can launch AI agents with one click.",
      },
      {
        icon: Globe,
        title: "Embedded Analytics",
        description: "Share live call intelligence widgets anywhere you embed the white-label portal.",
      },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Monetize Premium Add-ons",
    description: "Bundle advanced AI capabilities under your brand to create new revenue streams.",
    image: landingPages,
    features: [
      {
        icon: Sparkles,
        title: "Usage-Based Billing",
        description: "Bill clients for minutes, seats, or outcomes and let CloserX handle metering.",
      },
      {
        icon: Crown,
        title: "AI Upsell Modules",
        description: "Offer advanced sentiment, compliance, and routing packs as branded add-ons.",
      },
      {
        icon: Palette,
        title: "Automated Provisioning",
        description: "Provision premium features instantly when a customer upgrades inside your portal.",
      },
    ],
    gradient: "from-orange-500 to-red-500",
  },
];


import { Palette, Globe, Crown, Sparkles } from "lucide-react";
import type { ProductCard } from "./productsData";
import landingPages from "@/assets/images/whiteLable/landing pages.png";
import clientPortal from "@/assets/images/whiteLable/client portal.png";
import ownCloserx from "@/assets/images/whiteLable/own closerx.png";
import agencySetup from "@/assets/images/whiteLable/agency setup.png";

export const whiteLabelHero = {
  titleLines: ["White-Label AI Calling","That Scales Your Agency"],
  description:
    "Launch your own AI Calling Agency with a Fully White-labeled Platform. Customize everything from Branding to Pricing while we handle the Infrastructure, so you can focus on Scaling your business and Delighting your Clients.",
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
    description: "Launch CloserX with your brand System—from logo lockups to Typography and Color Tokens.",
    image: agencySetup,
    features: [
      {
        icon: Palette,
        title: "Full Branding Control",
        description: "Upload Brand Kits, Fonts, and Palettes to auto-theme every Customer Touchpoint.",
      },
      {
        icon: Sparkles,
        title: "Customizable UX Blocks",
        description: "Rearrange Dashboard Widgets and Rename Navigation to mirror your Product Vocabulary.",
      },
      {
        icon: Crown,
        title: "Client-Specific Themes",
        description: "Spin up unique sub-brands for each Reseller Client without Touching code.",
      },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Own The Domain Experience",
    description: "Keep your Customers inside your Ecosystem with Branded URLs, Auth, and Localization.",
    image: ownCloserx,
    features: [
      {
        icon: Globe,
        title: "Custom Domains",
        description: "Point CNAME records to your Portal with Automated SSL Provisioning.",
      },
      {
        icon: Globe,
        title: "Global Localization",
        description: "Serve Localized Dashboards and IVR Flows per Market with a Single Codebase.",
      },
      {
        icon: Crown,
        title: "Single Sign-On",
        description: "Offer SAML/SCIM SSO so Enterprise Clients log in through your Identity Provider.",
      },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Crown,
    title: "Client-Facing Portal",
    description: "Give Agencies and Partners a Dashboard that feels bespoke—without Rebuilding features.",
    image: clientPortal,
    features: [
      {
        icon: Crown,
        title: "Role-Based Branding",
        description: "Set different Colorways and Permissions for Admins, Resellers, and end Customers.",
      },
      {
        icon: Sparkles,
        title: "Template Library",
        description: "Package Proven Playbooks so Clients can Launch AI agents with one Click.",
      },
      {
        icon: Globe,
        title: "Embedded Analytics",
        description: "Share live Call Intelligence Widgets anywhere you embed the white-label Portal.",
      },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Monetize Premium Add-ons",
    description: "Bundle Advanced AI Capabilities under your brand to create new Revenue Streams.",
    image: landingPages,
    features: [
      {
        icon: Sparkles,
        title: "Usage-Based Billing",
        description: "Bill Clients for minutes, Seats, or outcomes and let CloserX handle Metering.",
      },
      {
        icon: Crown,
        title: "AI Upsell Modules",
        description: "Offer Advanced Sentiment, Compliance, and Routing packs as branded Add-ons.",
      },
      {
        icon: Palette,
        title: "Automated Provisioning",
        description: "Provision Premium features instantly when a Customer upgrades inside your portal.",
      },
    ],
    gradient: "from-orange-500 to-red-500",
  },
];


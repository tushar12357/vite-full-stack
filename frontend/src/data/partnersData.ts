export interface PartnerMetric {
  label: string;
  value: string;
  image: string;
}

export interface PartnerProgram {
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  cta: string;
  link: string;
}

export const partnerMetrics: PartnerMetric[] = [
  {
    label: "New User Signup",
    value: "$5.00",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    label: "Lead Generation",
    value: "$500",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
  },
  {
    label: "Monthly Recurring Revenue",
    value: "$5,467",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
  },
];

const AFFILIATE_URL = "https://affiliate.closerx.ai/home975572-1328-2226-4154";

export const partnerPrograms: PartnerProgram[] = [
  {
    title: "Become Our Partner",
    icon: "Users",
    description: "Join CloserX.ai as a strategic partner and help companies revolutionize their sales and customer communications using AI voice agents. Work with us to shape the future of customer-centric customer engagement.",
    benefits: [
      "Dedicated partner success manager",
      "Revenue sharing opportunities",
      "Joint marketing & co-branding",
    ],
    cta: "Apply Now",
    link: AFFILIATE_URL,
  },
  {
    title: "Partner Program",
    icon: "Briefcase",
    description: "Our Partner Program is designed for agencies, consultants, and tech providers who want to resell, integrate, or white-label CloserX.ai. Expand your portfolio with a proven AI solution.",
    benefits: [
      "White-label platform versions",
      "API & integration support",
      "Exclusive partner resources",
    ],
    cta: "Learn More",
    link: AFFILIATE_URL,
  },
  {
    title: "Affiliates Partner",
    icon: "Gift",
    description: "Earn commissions by referring clients to CloserX.ai. Perfect for influencers, creators, and industry professionals who love sharing innovative tech.",
    benefits: [
      "High-value commissions",
      "Real-time affiliate dashboards",
      "Marketing materials & tracking links",
    ],
    cta: "Join Our Program",
    link: AFFILIATE_URL,
  },
];


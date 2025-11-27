import { LucideIcon } from "lucide-react";

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
  iconUrl?: string;
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Criterion {
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  iconUrl?: string;
}

export interface SolutionData {
  hero: {
    tag: string;
    title: string;
    titleHighlight?: string;
    description: string;
    primaryButton: {
      text: string;
      variant: "primary" | "secondary";
    };
    secondaryButton: {
      text: string;
      variant: "primary" | "secondary";
    };
  };
  stats: Stat[];
  problems: Problem[];
  solutions?: Solution[];
  steps?: Step[];
  criteria?: Criterion[];
  features: Feature[];
  videoSection?: {
    title: string;
    description: string;
  };
  problemSection: {
    title: string;
    description: string;
  };
  solutionSection?: {
    title: string;
    description: string;
  };
  howItWorks?: {
    tag: string;
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  qualificationCriteria?: {
    title: string;
    description: string;
  };
  featuresSection: {
    title: string;
    description: string;
  };
  customerStorySection?: {
    tag: string;
    title: string;
    testimonial?: string;
    author?: string;
    company?: string;
    stats: {
      left: {
        value: string;
        label: string;
      };
      right: {
        value: string;
        label: string;
      };
    };
    primaryButton: {
      text: string;
    };
    secondaryButton: {
      text: string;
    };
  };
  results?: {
    title: string;
    before: {
      label: string;
      value: string;
    };
    after: {
      label: string;
      value: string;
    };
    improvement: string;
  };
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    disclaimer: string;
  };
  twoColumnSection?: {
    tag: string;
    mainTitle: string;
    subtitle: string;
    leftColumn: {
      title: string;
      titleHighlight: string;
      description: string;
    };
    features: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    rightImage?: string;
    rightImageAlt?: string;
  };
}


import { Newspaper, Video, Mic, FileText, Calendar, Users, Award, TrendingUp } from "lucide-react";
import type { AboutPageData } from "@/components/AboutPage";

export interface MediaItem {
  date: string;
  title: string;
  source: string;
  type: "Article" | "Video" | "Podcast" | "Press Release";
  link?: string;
}

export interface PressMediaData extends AboutPageData {
  pressKit: {
    title: string;
    description: string;
    items: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
  };
  mediaCoverage: {
    title: string;
    description: string;
    items: MediaItem[];
  };
  resources: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const pressMediaData: PressMediaData = {
  hero: {
    tag: "PRESS & MEDIA",
    title: "Press & Media Resources",
    subtitle: "Latest news, press releases, and media resources from CloserX.ai",
    icon: "P",
  },
  aboutSection: {
    title: "Press & Media",
    paragraphs: [
      "CloserX.ai is transforming the AI calling industry with innovative voice technology that helps businesses scale their operations and improve customer engagement. Our platform serves thousands of agencies and enterprises worldwide.",
      "We're committed to transparency and keeping the media, analysts, and public informed about our latest developments, partnerships, and industry insights. Explore our press resources, media coverage, and company information below.",
    ],
    buttonText: "CONTACT PRESS",
    buttonLink: "/contact",
  },
  mission: {
    title: "Our Story",
    description: "Founded in 2021, CloserX.ai has emerged as a leader in AI-powered business communications. We're on a mission to democratize advanced AI calling technology, making enterprise-grade voice automation accessible to businesses of all sizes. Our platform has helped thousands of agencies and enterprises transform their customer engagement strategies.",
  },
  featureCards: {
    title: "Press Kit",
    description: "Download our press kit for company information, logos, and media resources",
    items: [
      {
        icon: <FileText className="w-7 h-7 text-white" />,
        title: "Company Fact Sheet",
        description: "Key facts, statistics, and company information",
      },
      {
        icon: <Award className="w-7 h-7 text-white" />,
        title: "Brand Assets",
        description: "Logos, brand guidelines, and visual assets",
      },
      {
        icon: <Users className="w-7 h-7 text-white" />,
        title: "Executive Bios",
        description: "Leadership team biographies and photos",
      },
      {
        icon: <TrendingUp className="w-7 h-7 text-white" />,
        title: "Product Screenshots",
        description: "High-resolution product images and screenshots",
      },
      {
        icon: <Video className="w-7 h-7 text-white" />,
        title: "Video Content",
        description: "Product demos, company videos, and testimonials",
      },
      {
        icon: <Newspaper className="w-7 h-7 text-white" />,
        title: "Press Releases",
        description: "Latest company announcements and news",
      },
    ],
  },
  pressKit: {
    title: "Press Kit",
    description: "Download our press kit for company information, logos, and media resources",
    items: [
      {
        icon: <FileText className="w-7 h-7 text-white" />,
        title: "Company Fact Sheet",
        description: "Key facts, statistics, and company information",
      },
      {
        icon: <Award className="w-7 h-7 text-white" />,
        title: "Brand Assets",
        description: "Logos, brand guidelines, and visual assets",
      },
      {
        icon: <Users className="w-7 h-7 text-white" />,
        title: "Executive Bios",
        description: "Leadership team biographies and photos",
      },
      {
        icon: <TrendingUp className="w-7 h-7 text-white" />,
        title: "Product Screenshots",
        description: "High-resolution product images and screenshots",
      },
      {
        icon: <Video className="w-7 h-7 text-white" />,
        title: "Video Content",
        description: "Product demos, company videos, and testimonials",
      },
      {
        icon: <Newspaper className="w-7 h-7 text-white" />,
        title: "Press Releases",
        description: "Latest company announcements and news",
      },
    ],
  },
  mediaCoverage: {
    title: "Media Coverage",
    description: "Recent press coverage and media mentions",
    items: [
      {
        date: "2024-01-15",
        title: "CloserX.ai Raises $10M Series A to Scale AI Voice Platform",
        source: "TechCrunch",
        type: "Article",
        link: "#",
      },
      {
        date: "2024-02-20",
        title: "How AI Voice Agents Are Transforming Customer Service",
        source: "Forbes",
        type: "Article",
        link: "#",
      },
      {
        date: "2024-03-10",
        title: "The Future of AI-Powered Business Communications",
        source: "AI Business Podcast",
        type: "Podcast",
        link: "#",
      },
      {
        date: "2024-04-05",
        title: "CloserX.ai Partners with Leading CRM Platforms",
        source: "Business Wire",
        type: "Press Release",
        link: "#",
      },
    ],
  },
  resources: {
    title: "Media Resources",
    description: "Additional resources for journalists and media professionals",
    items: [
      {
        title: "Media Inquiries",
        description: "Contact our press team for interviews, quotes, and media requests",
      },
      {
        title: "Expert Commentary",
        description: "Our executives available for commentary on AI, automation, and business communications",
      },
      {
        title: "Case Studies",
        description: "Real-world success stories and customer testimonials",
      },
      {
        title: "Industry Reports",
        description: "Research and insights on AI voice technology trends",
      },
    ],
  },
  coreValues: [
    {
      icon: <Newspaper className="w-6 h-6 text-white" />,
      title: "Transparency",
      description: "Open communication with media and public about our technology and business",
    },
    {
      icon: <Mic className="w-6 h-6 text-white" />,
      title: "Accessibility",
      description: "Easy access to press resources, executives, and company information",
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Accuracy",
      description: "Accurate, up-to-date information and resources for media professionals",
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Responsiveness",
      description: "Quick response to media inquiries and press requests",
    },
  ],
  cta: {
    title: "Media Inquiries?",
    description: "Our press team is available to assist with interviews, quotes, and media requests.",
    buttonText: "CONTACT PRESS TEAM",
  },
};


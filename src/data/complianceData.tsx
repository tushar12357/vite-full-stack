import { Shield, Lock, FileCheck, CheckCircle2, Award, Globe, FileText, AlertCircle } from "lucide-react";
import type { AboutPageData } from "@/components/AboutPage";

export interface ComplianceData extends AboutPageData {
  certifications: {
    title: string;
    description: string;
    items: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
  };
  complianceStandards: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  dataProtection: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const complianceData: ComplianceData = {
  hero: {
    tag: "COMPLIANCE & SECURITY",
    title: "Enterprise-Grade Security & Compliance",
    subtitle: "Built with security and regulatory compliance at the core of everything we do.",
    icon: "C",
  },
  aboutSection: {
    title: "Compliance & Security",
    paragraphs: [
      "CloserX.ai is committed to maintaining the highest standards of security, privacy, and regulatory compliance. Our platform is designed with enterprise-grade security measures to protect your data and ensure compliance with industry regulations worldwide.",
      "We understand that trust is the foundation of every business relationship. That's why we've invested heavily in security infrastructure, compliance certifications, and data protection measures to give you and your clients complete confidence in our platform.",
    ],
    buttonText: "CONTACT US",
    buttonLink: "/contact",
  },
  mission: {
    title: "Our Commitment",
    description: "Our mission is to provide a secure, compliant, and trustworthy AI calling platform that meets the most stringent security and regulatory requirements. We continuously invest in security infrastructure, compliance certifications, and best practices to ensure your data and communications are protected at all times.",
  },
  featureCards: {
    title: "Certifications & Standards",
    description: "CloserX.ai maintains multiple industry certifications and compliance standards",
    items: [
      {
        icon: <Shield className="w-7 h-7 text-white" />,
        title: "SOC 2 Type II Certified",
        description: "Rigorous security standards and annual audits ensuring data protection",
      },
      {
        icon: <Lock className="w-7 h-7 text-white" />,
        title: "ISO 27001 Compliant",
        description: "International information security management system certification",
      },
      {
        icon: <FileCheck className="w-7 h-7 text-white" />,
        title: "GDPR Compliant",
        description: "Full compliance with European data protection regulations",
      },
      {
        icon: <CheckCircle2 className="w-7 h-7 text-white" />,
        title: "CCPA Ready",
        description: "California Consumer Privacy Act compliance for data protection",
      },
      {
        icon: <Award className="w-7 h-7 text-white" />,
        title: "HIPAA Capable",
        description: "Healthcare industry compliance for protected health information",
      },
      {
        icon: <Globe className="w-7 h-7 text-white" />,
        title: "TCPA Compliant",
        description: "Telephone Consumer Protection Act compliance for calling regulations",
      },
    ],
  },
  certifications: {
    title: "Certifications & Standards",
    description: "CloserX.ai maintains multiple industry certifications and compliance standards",
    items: [
      {
        icon: <Shield className="w-7 h-7 text-white" />,
        title: "SOC 2 Type II Certified",
        description: "Rigorous security standards and annual audits ensuring data protection",
      },
      {
        icon: <Lock className="w-7 h-7 text-white" />,
        title: "ISO 27001 Compliant",
        description: "International information security management system certification",
      },
      {
        icon: <FileCheck className="w-7 h-7 text-white" />,
        title: "GDPR Compliant",
        description: "Full compliance with European data protection regulations",
      },
      {
        icon: <CheckCircle2 className="w-7 h-7 text-white" />,
        title: "CCPA Ready",
        description: "California Consumer Privacy Act compliance for data protection",
      },
      {
        icon: <Award className="w-7 h-7 text-white" />,
        title: "HIPAA Capable",
        description: "Healthcare industry compliance for protected health information",
      },
      {
        icon: <Globe className="w-7 h-7 text-white" />,
        title: "TCPA Compliant",
        description: "Telephone Consumer Protection Act compliance for calling regulations",
      },
    ],
  },
  complianceStandards: {
    title: "Compliance Standards",
    description: "We adhere to the highest industry standards and regulations",
    items: [
      {
        title: "Data Encryption",
        description: "End-to-end encryption for all data in transit and at rest",
      },
      {
        title: "Access Controls",
        description: "Role-based access control and multi-factor authentication",
      },
      {
        title: "Audit Logging",
        description: "Comprehensive audit trails for all system activities",
      },
      {
        title: "Regular Security Audits",
        description: "Third-party security assessments and penetration testing",
      },
      {
        title: "Data Residency",
        description: "Control over where your data is stored and processed",
      },
      {
        title: "Privacy by Design",
        description: "Privacy considerations built into every feature and process",
      },
    ],
  },
  dataProtection: {
    title: "Data Protection",
    description: "Comprehensive data protection measures to safeguard your information",
    items: [
      {
        title: "Encryption",
        description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit",
      },
      {
        title: "Backup & Recovery",
        description: "Automated daily backups with point-in-time recovery capabilities",
      },
      {
        title: "Data Retention",
        description: "Configurable data retention policies aligned with your requirements",
      },
      {
        title: "Right to Deletion",
        description: "Complete data deletion capabilities in compliance with privacy laws",
      },
    ],
  },
  coreValues: [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Security First",
      description: "Enterprise-grade security infrastructure with continuous monitoring and threat detection",
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Transparency",
      description: "Clear documentation of security practices, compliance status, and data handling procedures",
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Privacy Protection",
      description: "Strict data privacy controls and compliance with global privacy regulations",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-white" />,
      title: "Continuous Improvement",
      description: "Regular security updates, compliance audits, and enhancement of security measures",
    },
  ],
  cta: {
    title: "Have Compliance Questions?",
    description: "Our compliance team is ready to answer your questions and provide detailed documentation.",
    buttonText: "CONTACT COMPLIANCE TEAM",
  },
};


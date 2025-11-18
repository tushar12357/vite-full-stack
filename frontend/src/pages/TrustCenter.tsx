import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, FileCheck, Globe, Server, Key, CheckCircle2, Star, AudioWaveform, Activity, Database } from "lucide-react";
import dashboardImage from "@/assets/image.png";

const CERTIFICATIONS = [
  {
    name: "SOC 2 Type II",
    description: "Independently audited security controls",
    icon: AudioWaveform,
    status: "Certified"
  },
  {
    name: "GDPR Compliant",
    description: "Full compliance with European data protection",
    icon: Globe,
    status: "Compliant"
  },
  {
    name: "HIPAA Ready",
    description: "Healthcare data security standards",
    icon: Star,
    status: "Ready"
  },
  {
    name: "ISO 27001",
    description: "Information security management",
    icon: Shield,
    status: "Certified"
  }
];

const SECURITY_FEATURES = [
  {
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 encryption",
    icon: Shield
  },
  {
    title: "Regular Security Audits",
    description: "Third-party penetration testing and security assessments quarterly",
    icon: Shield
  },
  {
    title: "Access Controls",
    description: "Role-based access control (RBAC) and multi-factor authentication",
    icon: Shield
  },
  {
    title: "Data Residency",
    description: "Choose where your data is stored with multi-region support",
    icon: Shield
  },
  {
    title: "Compliance Monitoring",
    description: "Continuous compliance monitoring and automated alerts",
    icon: Shield
  },
  {
    title: "Incident Response",
    description: "24/7 security team with rapid incident response protocols",
    icon: Shield
  }
];

const PRIVACY_PRACTICES = [
  "We never sell or share your customer data",
  "Data retention policies you control",
  "Right to data portability and deletion",
  "Transparent data processing practices",
  "Regular privacy impact assessments",
  "Dedicated data protection officer"
];

const INFRASTRUCTURE_ITEMS = [
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade infrastructure with redundancy across multiple regions",
    icon: Shield
  },
  {
    title: "Global CDN",
    description: "Low-latency voice delivery with edge computing in 50+ locations worldwide",
    icon: Shield
  },
  {
    title: "Daily Backups",
    description: "Automated backups with point-in-time recovery and disaster recovery protocols",
    icon: Shield
  }
];

const DOCUMENTATION_ITEMS = [
  {
    title: "Security White Paper",
    description: "Detailed overview of our security architecture",
    icon: Star
  },
  {
    title: "Privacy Policy",
    description: "How we collect and process data",
    icon: Globe
  },
  {
    title: "Penetration Test Results",
    description: "Summary of recent security assessments",
    icon: Star
  },
  {
    title: "Compliance Reports",
    description: "Access to our latest audit reports",
    icon: Shield
  }
];

export default function TrustCenter() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trust & Security
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Your data security and privacy are our top priorities. We maintain the highest standards of security, compliance, and transparency.
            </p>
          </div>
        </section>

        {/* Our Certifications Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Certifications</h2>
            <p className="text-base text-gray-400 mb-12 max-w-3xl">
              We maintain industry-leading certifications and compliance standards to ensure your data is protected.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CERTIFICATIONS.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div key={i} className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8 flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs text-gray-500 mb-2">{cert.status}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-400">{cert.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white font-medium mb-4">
              Intelligent Automation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-base text-gray-400 mb-12 max-w-3xl">
              Multiple layers of security protect your data at every stage of processing and storage.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECURITY_FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8 flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Privacy Promise Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Privacy Promise</h2>
            <p className="text-base text-gray-400 mb-12 max-w-3xl">
              We believe in complete transparency about how we handle your data. Here's our commitment to you.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Privacy Practices */}
              <div className="space-y-4">
                {PRIVACY_PRACTICES.map((practice, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white">{practice}</span>
                  </div>
                ))}
              </div>

              {/* Right Column - Dashboard Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={dashboardImage} 
                    alt="Privacy Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Reliability Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Infrastructure & Reliability</h2>
            <p className="text-base text-gray-400 mb-12 max-w-3xl">
              Built on enterprise-grade infrastructure designed for reliability, performance, and global scale.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {INFRASTRUCTURE_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8 flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Documentation Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Documentation</h2>
            <p className="text-base text-gray-400 mb-12 max-w-3xl">
              Access detailed documentation about our security practices, compliance, and audit reports.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DOCUMENTATION_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8 flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

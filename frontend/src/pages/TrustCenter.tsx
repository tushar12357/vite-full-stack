import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, FileCheck, AlertCircle, CheckCircle2, Globe, Server, Key } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const CERTIFICATIONS = [
  {
    name: "SOC 2 Type II",
    description: "Independently audited security controls",
    icon: Shield,
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
    icon: FileCheck,
    status: "Ready"
  },
  {
    name: "ISO 27001",
    description: "Information security management",
    icon: Lock,
    status: "Certified"
  }
];

const SECURITY_FEATURES = [
  {
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 encryption",
    icon: Lock
  },
  {
    title: "Regular Security Audits",
    description: "Third-party penetration testing and security assessments quarterly",
    icon: AlertCircle
  },
  {
    title: "Access Controls",
    description: "Role-based access control (RBAC) and multi-factor authentication",
    icon: Key
  },
  {
    title: "Data Residency",
    description: "Choose where your data is stored with multi-region support",
    icon: Server
  },
  {
    title: "Compliance Monitoring",
    description: "Continuous compliance monitoring and automated alerts",
    icon: FileCheck
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

export default function TrustCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <Badge variant="secondary" className="text-xs font-semibold">SOC 2</Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Trust & Security
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your data security and privacy are our top priorities. We maintain the highest standards of security, compliance, and transparency.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <Card key={i} className="text-center border-2">
                  <CardHeader>
                    <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                      {cert.status}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Enterprise-Grade Security</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Multiple layers of security protect your data at every stage
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Practices */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Our Privacy Promise</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              We believe in complete transparency about how we handle your data. Here's our commitment:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {PRIVACY_PRACTICES.map((practice, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Infrastructure & Reliability</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Server className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>99.9% Uptime SLA</CardTitle>
                <CardDescription className="mt-2">
                  Enterprise-grade infrastructure with redundancy across multiple regions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Global CDN</CardTitle>
                <CardDescription className="mt-2">
                  Low-latency voice delivery with edge computing in 50+ locations worldwide
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Daily Backups</CardTitle>
                <CardDescription className="mt-2">
                  Automated backups with point-in-time recovery and disaster recovery protocols
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Links */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Security Documentation</CardTitle>
              <CardDescription className="text-center mt-2">
                Access detailed documentation about our security practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Security White Paper</h3>
                  <p className="text-sm text-muted-foreground">Detailed overview of our security architecture</p>
                </a>
                <a 
                  href="#" 
                  className="p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Privacy Policy</h3>
                  <p className="text-sm text-muted-foreground">How we collect and process data</p>
                </a>
                <a 
                  href="#" 
                  className="p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Compliance Reports</h3>
                  <p className="text-sm text-muted-foreground">Access to our latest audit reports</p>
                </a>
                <a 
                  href="#" 
                  className="p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Penetration Test Results</h3>
                  <p className="text-sm text-muted-foreground">Summary of recent security assessments</p>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

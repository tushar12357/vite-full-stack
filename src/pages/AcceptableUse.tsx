import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const AcceptableUse = () => {
  useEffect(() => {
    document.title = "Acceptable Use Policy | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Review CloserX.ai's Acceptable Use Policy to understand the guidelines for using our AI-powered calling services responsibly and legally."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-legal py-16 md:py-24 text-center animate-fade-in overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm mb-6 text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Acceptable Use Policy</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            Acceptable Use Policy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Guidelines for responsible and lawful use of CloserX.ai services
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last Updated: January 15, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h1 className="sr-only">Acceptable Use Policy for CloserX.ai</h1>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Introduction and Scope</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Acceptable Use Policy (the "Policy") governs your access to and use of the CloserX.ai platform, website, mobile applications, API, and all related services (collectively, the "Services"). This Policy applies to all users of our Services, including but not limited to individual subscribers, business customers, agency partners, resellers, and any other parties who access or use our Services in any capacity. By accessing or using our Services, you agree to comply with this Policy, our Terms of Service, Privacy Policy, and all applicable laws and regulations.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The purpose of this Policy is to ensure that all users utilize our Services in a lawful, ethical, and responsible manner that respects the rights of others and maintains the integrity, security, and availability of our platform. We reserve the right to investigate and take appropriate action against anyone who violates this Policy, including but not limited to issuing warnings, suspending access, terminating accounts, removing content, reporting violations to law enforcement authorities, and pursuing legal action.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">General Prohibitions</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You agree that you will not, and will not permit any third party to, use the Services in any manner that violates applicable laws, regulations, or ordinances, including but not limited to laws relating to telecommunications, data protection, consumer protection, unfair competition, anti-discrimination, or export control.
              </p>
              <p>
                You must not use the Services in any way that could damage, disable, overburden, impair, or compromise our systems, servers, networks, or infrastructure, or interfere with any other party's use and enjoyment of the Services. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Attempting to gain unauthorized access to any portion of the Services</li>
                <li>Hacking, password mining, or other security breaches</li>
                <li>Probing, scanning, or testing the vulnerability of our Services</li>
                <li>Breaching any security or authentication measures</li>
              </ul>
              <p>
                You agree not to use any automated systems, software, or devices to access, scrape, data mine, or extract data from the Services except through our officially supported API and in accordance with our API Terms of Use. You must not attempt to reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code or underlying algorithms of any part of the Services.
              </p>
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Calling Practices and Compliance</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Given that CloserX provides AI-powered calling services, you must comply with all applicable telecommunications laws and regulations when using our Services to make calls. In the United States, this includes but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Telephone Consumer Protection Act (TCPA)</li>
                <li>Telemarketing Sales Rule (TSR)</li>
                <li>Truth in Caller ID Act</li>
                <li>State telemarketing laws</li>
                <li>FCC and FTC regulations</li>
              </ul>
              <p className="font-semibold mt-4">Do Not Call Compliance:</p>
              <p>
                You must maintain and regularly update your own internal Do Not Call (DNC) list and honor all opt-out requests immediately and permanently. You must also scrub your calling lists against the National Do Not Call Registry in the United States and equivalent registries in other jurisdictions before making marketing or sales calls.
              </p>
              <p className="font-semibold mt-4">Consent Requirements:</p>
              <p>
                You must obtain proper consent before making calls, particularly for marketing purposes, as required by applicable laws. Depending on the jurisdiction and the nature of the calls, this may include obtaining prior express written consent, prior express consent, or other forms of consent as specified by law. You must maintain records of consent for the period required by applicable regulations.
              </p>
              <p className="font-semibold mt-4">Caller ID Requirements:</p>
              <p>
                You must ensure that all calls made using our Services include accurate caller identification information and must not engage in caller ID spoofing with the intent to defraud, cause harm, or wrongfully obtain anything of value.
              </p>
              <p className="font-semibold mt-4">Calling Hours:</p>
              <p>
                You must observe reasonable calling hours and must not make calls at times that are likely to constitute an invasion of privacy or that are prohibited by applicable laws. In the United States, this generally means not calling before 8:00 AM or after 9:00 PM in the recipient's local time zone.
              </p>
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Prohibited Content and Communications</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>You must not use our Services to transmit, distribute, or store content that is:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unlawful, harmful, threatening, abusive, harassing, or defamatory</li>
                <li>Vulgar, obscene, pornographic, or libelous</li>
                <li>Invasive of another's privacy</li>
                <li>Hateful or racially, ethnically, or otherwise objectionable</li>
              </ul>
              <p className="mt-4">You must not use our Services to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
                <li>Stalk, harass, threaten, or harm another person</li>
                <li>Transmit content you do not have the right to transmit under law or contract</li>
                <li>Infringe upon intellectual property rights, privacy rights, or other proprietary rights</li>
                <li>Transmit software viruses, malware, or any harmful computer code</li>
                <li>Send unsolicited bulk communications, spam, junk mail, or chain letters</li>
              </ul>
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Enforcement and Violations</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to investigate and take appropriate action against anyone who violates this Policy. Actions may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
              <li>Issuing warnings</li>
              <li>Suspending or limiting access to Services</li>
              <li>Terminating accounts</li>
              <li>Removing content</li>
              <li>Reporting violations to law enforcement authorities</li>
              <li>Pursuing legal action for damages</li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Reporting Violations</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you become aware of any violation of this Policy, please report it immediately to our support team at <a href="mailto:info@closerx.ai" className="text-primary hover:underline">info@closerx.ai</a>. We take all reports seriously and will investigate them promptly.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update or modify this Policy at any time. Your continued use of the Services after such changes constitutes your acceptance of the revised Policy. We will provide notice of material changes through our Services, by email, or through other appropriate means.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Acceptable Use Policy, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Email:</strong> <a href="mailto:info@closerx.ai" className="text-primary hover:underline">info@closerx.ai</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AcceptableUse;

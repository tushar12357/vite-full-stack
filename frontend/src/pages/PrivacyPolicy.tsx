import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | CloserX.ai";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "CloserX.ai Privacy Policy: how we collect, use, and protect your data.");
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative gradient-legal overflow-hidden py-20 md:py-32 text-center animate-fade-in">
        <div className="absolute inset-0 gradient-mesh opacity-40"></div>
        <div className="absolute inset-0 pattern-dots-dark"></div>
        <div className="container relative z-10 mx-auto px-4">
          <nav className="mb-6 text-sm text-white/70 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mb-6">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Learn how CloserX.ai collects, uses, and protects your information
          </p>
        </div>
      </section>
      <main className="container mx-auto px-4 py-20 max-w-5xl">
        <h1 className="sr-only">Privacy Policy</h1>
        
        <div className="prose prose-lg md:prose-xl max-w-none space-y-12 text-foreground/90">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 shadow-elegant">
            <p className="text-lg leading-relaxed">
              Welcome to CloserX.ai ("Company", "we", "us", or "our"). This Privacy Policy outlines our commitment to protecting the privacy and the handling of personal data collected from users ("you" or "your") through our extensive suite of AI-powered voice services and white-label solutions. Our services include but are not limited to AI voice agents, whitelabeling tools, real-time communications, and customer relationship management integrations.
            </p>
          </div>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identifiable Information:</strong> Such as names, email addresses, and payment details necessary for processing transactions and communicating with you.</li>
              <li><strong>Agency Information:</strong> We collect details about your agency including client lists, service preferences, and interaction patterns to enhance service delivery.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Usage and Technical Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Technical Details:</strong> Includes IP addresses, browser types, operating systems, and device information to ensure optimal service performance.</li>
              <li><strong>Usage Metrics:</strong> Such as page views, user interactions, and traffic data to improve website functionality and user experience.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Use of Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Enhancement:</strong> To provide personalized setups such as custom domain names, UI customizations, and advanced features like noise reduction in calls.</li>
              <li><strong>Customer Support:</strong> To offer white-glove onboarding, one-on-one consultations, and premium support to ensure your satisfaction with our services.</li>
              <li><strong>Communication:</strong> We use your information to send important updates and to manage customer relationships effectively through customized communication tools.</li>
              <li><strong>Compliance and Safety:</strong> To comply with legal obligations, protect the rights and safety of our users, and ensure the integrity of our services.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Sharing and Disclosure of Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> We engage various service providers and partners to support our operational needs, including payment processing, data management, and customer support, all while ensuring they adhere to strict data protection standards.</li>
              <li><strong>Legal and Compliance:</strong> We may disclose information if required by law or if it's necessary to protect our rights or the rights of others.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, your personal information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Data Security and Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Security Measures:</strong> We employ robust security measures to protect your data from unauthorized access, alteration, and loss.</li>
              <li><strong>Retention:</strong> Your personal information is retained only as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Your Rights and Choices</h2>
            <p>
              You have rights regarding the management of your personal data, including the right to access, correct, or delete your information. Specific rights may vary depending on your location but generally include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access and Updates:</strong> You can review and update your personal information to ensure it is accurate.</li>
              <li><strong>Deletion:</strong> You can request the deletion of your personal data, subject to certain exceptions prescribed by law.</li>
              <li><strong>Objections and Restrictions:</strong> You have the right to object to processing or request restrictions on certain uses of your personal information.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Children's Privacy</h2>
            <p>
              Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information from our files.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Changes to Our Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices and service offerings. If we make material changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with more prominent notice.
            </p>
          </section>

          <section className="space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 shadow-elegant mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Contact Information</h2>
            <p>
              For any questions or concerns about our privacy practices or this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:info@closerx.ai" className="text-primary hover:underline">info@closerx.ai</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

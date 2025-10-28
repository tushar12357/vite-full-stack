import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | CloserX.ai";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Read CloserX.ai Terms and Conditions for AI calling platform.");
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
            <span className="text-white">Terms & Conditions</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mb-6">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Please review the terms that govern use of the CloserX.ai platform
          </p>
        </div>
      </section>
      <main className="container mx-auto px-4 py-20 max-w-5xl">
        <h1 className="sr-only">Terms & Conditions</h1>
        
        <div className="prose prose-lg md:prose-xl max-w-none space-y-12 text-foreground/90">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 shadow-elegant">
            <p className="text-lg leading-relaxed">
              Welcome to CloserX.ai. This Terms of Use Agreement ("Agreement") governs the relationship between CloserX.ai ("Company", "we", "us", or "our") and the users ("Subscriber", "you") who engage with our AI-powered calling services ("Services").
            </p>
            
            <p className="text-lg leading-relaxed mt-4">
              This Agreement sets forth the legally binding terms for your use of our Services. By registering for, accessing, or using our Services, you affirm your acceptance of this Agreement, including any modifications that we make from time to time.
              Failure to comply with these terms can result in termination of your access to the Services.
            </p>
          </div>
          
          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Acceptance of Terms</h2>
            <p>
              When you complete the registration process, you legally agree to the provisions of this Agreement. If you do not agree to these terms, you should not use our Services. By continuing to use the Services, you agree to be bound by this Agreement.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Description of Services</h2>
            <p>
              CloserX.ai provides white-label AI calling solutions tailored for agency owners, enhancing business communications and operations. Services include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automated calling systems</li>
              <li>Client management and interaction tracking</li>
              <li>Integration capabilities with various CRM platforms</li>
              <li>Real-time analytics and reporting features</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Subscription and Billing</h2>
            <p>
              Access to the Services requires a paid subscription. The following terms apply to your subscription:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fees and Charges:</strong> You agree to pay all applicable fees related to your use of the Services as described during the subscription process. Prices are subject to change at any time.</li>
              <li><strong>Billing Cycle:</strong> The fees for the subscription service will be billed on a monthly basis. You will be automatically billed each month on the anniversary date of your subscription, using the payment method on file.</li>
              <li><strong>No Refunds:</strong> Payments are non-refundable. There are no refunds or credits for partially used periods, unless required by law.</li>
              <li><strong>Free Trial:</strong> We offer a 7-day free trial to new subscribers. You must cancel your trial before it ends to avoid being charged the subscription fee.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Subscriber Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services in compliance with all applicable laws and regulations, including privacy laws and regulations governing communications.</li>
              <li>Ensure that your use of the Services does not infringe the rights of any third party or violate any agreement with any third party.</li>
              <li>Any attempt to bypass the Platform's security measure including but not limited to using sub-addressed emails or fraudulent email addresses, will be considered a violation of these Terms. Accounts found to violate these Terms would lead to immediate account suspension and further security review.</li>
              <li>You agree that during the term of your subscription, you or your team will not, directly or indirectly, solicit, hire, or attempt to hire any current and past employee, contractor, or affiliate of CloserX.ai, or engage with any other clients of CloserX.ai in a manner that interferes with Closerx.ai's business relationships, including but not limited to solicitation for employment, business partnerships, or any activity that disrupts or harms CloserX.ai's operations; any violation of this will result in immediate and permanent termination of your account without compensation or refund.</li>
              <li>You agree that during the term of your subscription and thereafter, you or your team will not attempt to extract unauthorized information from CloserX.ai's employees, contractors, or affiliates, including but not limited to details about our proprietary data, intellectual property, development processes, Closerx.ai's other client's information or internal operations. Any violation of this will result in immediate and permanent termination of your account without compensation or refund.</li>
              <li>You or your team will not request or direct our team to undertake any unauthorized actions, including but not limited to alterations to your account, changes to client credentials, or any other activity not explicitly permitted under this Agreement. Any violation of this will result in immediate and permanent termination of your account without compensation or refund.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Cancellation</h2>
            <p>
              Subscribers may cancel their subscription at any time. To cancel, you must notify us via email at info@closerx.ai (ensure the subject line or body clearly states your intent to cancel). Key terms include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Effective Date:</strong> Cancellations will take effect at the end of your current billing cycle. You will retain access to the Services until this date.</li>
              <li><strong>No Refunds:</strong> As stated in Section 4(c), payments are non-refundable. No prorated refunds will be issued for cancellations mid-cycle, except where legally required.</li>
              <li><strong>Confirmation:</strong> We will send a confirmation email upon processing your cancellation request. If you do not receive this confirmation, contact us immediately to verify receipt.</li>
              <li><strong>Renewal and Cancellation:</strong> Subscriptions are automatically renewed according to the subscription plan. You must cancel your subscription at least 24 hours before the next billing cycle to avoid being charged for the next period.</li>
            </ul>
            <p>
              Failure to cancel before your billing cycle renewal date will result in automatic charges for the next period.
            </p>
            <p>
              If you cancel your subscription or initiate a dispute regarding charges/payments, your account will be immediately suspended, and all associated data, including stored information and credits, will be permanently deleted after 30 days from the cancellation or dispute date. Any remaining credits in your account will be forfeited upon deletion and are non-refundable. Once deleted, account data cannot be recovered, and you will need to create a new account to access our services.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Credits Expiration Policy</h2>
            <p>
              All purchased credits must be utilized within six (6) months from the date of purchase. Any unused credits will automatically expire after this period. Please note that all credit purchases are final and non-refundable.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Intellectual Property Rights</h2>
            <p>
              All intellectual property rights related to the Services, including trademarks, trade names, patents, registered designs, and any other automatic intellectual property rights derived from the aesthetics or functionality of the Services, remain the property of CloserX.ai.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">User Contents</h2>
            <p>
              You grant CloserX.ai a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute any content you upload or post on the Services. This may include text, images, or other material.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Limitation of Liability</h2>
            <p>
              In no event will CloserX.ai, its directors, employees, partners, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use the Services;</li>
              <li>Any conduct or content of any third party on the Services;</li>
              <li>Any content obtained from the Services; and</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless CloserX.ai and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Services, by you or any person using your account and password.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Changes to Terms</h2>
            <p>
              CloserX.ai reserves the right to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Termination</h2>
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.
            </p>
          </section>

          <section className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Governing Law</h2>
            <p>
              These terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 shadow-elegant mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between us regarding our Services and supersede and replace any prior agreements we might have had between us regarding the Services.
            </p>
          </section>

          <section className="space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 shadow-elegant mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">Contact Information</h2>
            <p>
              For any questions about these Terms, please contact us at <a href="mailto:info@closerx.ai" className="text-primary hover:underline font-semibold">info@closerx.ai</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;

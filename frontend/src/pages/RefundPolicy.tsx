import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund & Cancellation Policy | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Review CloserX.ai's refund and cancellation policy. Learn about our 7-day free trial, subscription terms, and exceptional circumstances."
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
            <span className="text-foreground">Refund & Cancellation Policy</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Clear and transparent terms for subscriptions, refunds, and cancellations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h1 className="sr-only">Refund and Cancellation Policy for CloserX.ai</h1>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for choosing CloserX.ai. We offer AI-powered calling services and white-label solutions designed to enhance your business communications and operational efficiency. This Refund Policy explains how we handle requests for refunds to ensure clarity and satisfaction for our users.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Free Trial</h2>
            <p className="text-muted-foreground leading-relaxed">
              CloserX.ai offers a 7-day free trial for new users to experience our services without any financial commitment. During the trial period, users have full access to all features and capabilities of our services. We encourage you to explore all aspects of our services during the trial to ensure that they meet your needs.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Subscription Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Following the completion of the free trial, subscription fees become applicable. Our services are billed on a subscription basis, and we provide various subscription plans to cater to the diverse needs of our clients.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">No Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to offer high-quality services that match the expectations of our clients. However, it is important to note that CloserX.ai does not offer refunds for subscription fees or any other payments made once the free trial period has concluded. All charges incurred are non-refundable, including partially used periods within an active subscription.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Exceptional Circumstances</h2>
            <p className="text-muted-foreground leading-relaxed">
              While our policy is to maintain a strict no-refund policy, we may consider granting a refund in exceptional circumstances. Such circumstances are evaluated on a case-by-case basis, at our sole discretion. Requests for refunds under exceptional circumstances must be submitted in writing to our support team at the contact details provided below.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Cancellation</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Subscribers may cancel their subscription at any time. To cancel, you must notify us via email at <a href="mailto:info@closerx.ai" className="text-primary hover:underline">info@closerx.ai</a> (ensure the subject line or body clearly states your intent to cancel). Key terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Effective Date:</strong> Cancellations will take effect at the end of your current billing cycle. You will retain access to the Services until this date.</li>
                <li><strong>No Refunds:</strong> As stated in Section 4(c), payments are non-refundable. No prorated refunds will be issued for cancellations mid-cycle, except where legally required.</li>
                <li><strong>Confirmation:</strong> We will send a confirmation email upon processing your cancellation request. If you do not receive this confirmation, contact us immediately to verify receipt.</li>
              </ul>
              <p className="font-semibold">
                Failure to cancel before your billing cycle renewal date will result in automatic charges for the next period.
              </p>
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Credits Expiration Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              All purchased credits must be utilized within six (6) months from the date of purchase. Any unused credits will automatically expire after this period. Please note that all credit purchases are final and non-refundable.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Renewal and Cancellation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Subscriptions are automatically renewed according to the subscription plan. You may cancel your subscription at any time by accessing your account settings. Please note that cancellations must be done at least 24 hours before the next billing cycle to avoid being charged for the next period. After cancelling, you will continue to have access to the services until the end of your current billing period.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Modifications to the Services or Prices</h2>
            <p className="text-muted-foreground leading-relaxed">
              CloserX.ai reserves the right to modify or discontinue, temporarily or permanently, the services (or any part thereof) with or without notice. Prices of all services are subject to change upon 30 days' notice from us. Such notice may be provided at any time by posting the changes to our site or through the services interface.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or concerns about our Refund Policy, please contact us at: Email: <a href="mailto:info@closerx.ai" className="text-primary hover:underline">info@closerx.ai</a>
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We are committed to ensuring that your experience with CloserX.ai is satisfactory and beneficial to your business needs. Your understanding and agreement to this Refund Policy are appreciated as you continue to use our services.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;

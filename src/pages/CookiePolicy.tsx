import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn how CloserX.ai uses cookies and tracking technologies to enhance your experience and improve our services."
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
            <span className="text-foreground">Cookie Policy</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding how we use cookies to improve your experience
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last Updated: January 15, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h1 className="sr-only">Cookie Policy for CloserX.ai</h1>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Cookie Policy explains how CloserX.ai ("we," "us," "our," or "CloserX") uses cookies and similar tracking technologies when you visit our website at closerx.ai, use our AI calling platform, or interact with our services (collectively, the "Services"). This policy should be read in conjunction with our Privacy Policy and Terms of Service. By continuing to browse or use our Services, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies as described herein.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer, smartphone, or other device when you access online services. Cookies are widely used by website owners and service providers to make their websites and applications work more efficiently, provide a better user experience, and gather reporting information about how their services are being used. Cookies set by the website owner (in this case, CloserX.ai) are called "first-party cookies," while cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable features or functionality to be provided on or through the website by third parties, such as advertising, interactive content, and analytics.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Why We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              CloserX uses cookies and similar tracking technologies for several important reasons. We use cookies to enable certain functions of our Services, to provide analytics, to store your preferences, and to enable advertisements delivery, including behavioral advertising. Specifically, cookies help us understand how you use our Services, remember your preferences and settings, authenticate your identity and maintain your session, analyze the performance of our Services, deliver relevant advertising, and improve your overall experience on our platform. Without cookies, many of the features that make our Services convenient and easy to use would not function properly.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Strictly Necessary Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are essential for the operation of our website and platform. They enable core functionality such as security, network management, user authentication, and accessibility. You cannot opt out of these cookies as they are necessary for the Services to function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance and Analytics Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies collect information about how visitors use our Services, including which pages are visited most often, how users navigate through the platform, and any error messages that may appear. All information collected by these cookies is aggregated and anonymous.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies allow our Services to remember choices you make when you use our platform, such as remembering your login details, language preferences, region selection, and customized interface settings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Targeting and Advertising Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Social Media Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are set by social media services that we have added to our Services to enable you to share our content with your friends and networks.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">How Long Cookies Stay on Your Device</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The length of time a cookie remains on your device depends on whether it is a "persistent" or "session" cookie.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Session cookies:</strong> Only last until you close your browser and are automatically deleted when you end your browsing session.</li>
              <li><strong>Persistent cookies:</strong> Remain on your device for a set period specified in the cookie or until you manually delete them. These can range from a few days to several years.</li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">How to Control Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have several options for managing and controlling cookies on your device. Most web browsers automatically accept cookies by default, but you can usually modify your browser settings to decline cookies or to alert you when a cookie is being sent.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Browser-specific instructions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Google Chrome:</strong> Visit support.google.com/chrome and search for "Clear, enable, and manage cookies in Chrome"</li>
              <li><strong>Mozilla Firefox:</strong> Visit support.mozilla.org and search for "Cookies"</li>
              <li><strong>Safari:</strong> Visit support.apple.com and search for "Manage cookies and website data in Safari"</li>
              <li><strong>Microsoft Edge:</strong> Visit support.microsoft.com and search for "Delete cookies in Microsoft Edge"</li>
              <li><strong>Opera:</strong> Visit help.opera.com and search for "Cookies in Opera"</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Please note that if you choose to block or delete cookies, certain features of our Services may not function properly or may not be available to you.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Mobile Device Identifiers</h2>
            <p className="text-muted-foreground leading-relaxed">
              In addition to cookies, our mobile applications and mobile-optimized websites may use mobile device identifiers and similar technologies for tracking purposes. These identifiers include Apple's Identifier for Advertisers (IDFA) on iOS devices and Google's Advertising ID on Android devices. You can control the use of advertising identifiers on your mobile device through your device settings.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Updates to This Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes to this Cookie Policy, we will update the "Last Updated" date at the top of this policy. We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Cookie Policy, our use of cookies, or how to manage your cookie preferences, please contact us:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground mt-4">
              <li><strong>Email:</strong> <a href="mailto:info@closerx.ai" className="text-primary hover:underline">info@closerx.ai</a></li>
              <li><strong>Mail:</strong> CloserX.ai Privacy Team, 123 Technology Drive, San Francisco, CA 94105, United States</li>
              <li><strong>Website:</strong> <Link to="/contact" className="text-primary hover:underline">closerx.ai/contact</Link></li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Additional Information for EEA and UK Users</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are located in the European Economic Area or United Kingdom, the use of cookies and similar technologies on our Services is subject to the requirements of the General Data Protection Regulation (GDPR) and the Privacy and Electronic Communications Regulations (PECR). Under these regulations, we are required to obtain your consent before using non-essential cookies, except where the cookies are strictly necessary for the provision of the Services you have requested.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;

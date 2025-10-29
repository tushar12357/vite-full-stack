import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail("");
  };

  const trustBadges = [
    { icon: "🛡️", title: "SOC 2 Type II Certified", subtitle: "Enterprise Security" },
    { icon: "🇪🇺", title: "GDPR Compliant", subtitle: "Data Protection" },
    { icon: "⚕️", title: "HIPAA Compliant", subtitle: "Healthcare Ready" },
    { icon: "🔒", title: "256-bit SSL", subtitle: "Bank-Level Encryption" },
    { icon: "⚡", title: "99.9% Uptime SLA", subtitle: "Guaranteed Reliability" },
  ];

  const comparisonLinks = [
    "CloserX vs. Competitor A",
    "CloserX vs. Competitor B",
    "Best AI Calling Platforms 2025",
    "White Label vs. Generic Solutions",
    "AI Calling Software Comparison",
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />
      {/* Pre-Footer CTA */}
      <div className="relative overflow-hidden gradient-dark py-20 lg:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Ready to Launch Your AI Calling Platform?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join 500+ agencies building their white-label business
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link to="/pricing" className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white text-lg font-bold rounded-xl shadow-2xl hover:scale-105 hover:brightness-110 transition-all">
              🚀 Start Free Trial
            </Link>
            <Link to="/contact" className="flex items-center gap-2 px-10 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all">
              📅 Schedule a Demo
            </Link>
          </div>

          <p className="text-sm text-slate-500">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="bg-slate-800 border-t border-slate-700/50 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all">{badge.icon}</div>
                <div className="text-sm font-semibold text-white">{badge.title}</div>
                <div className="text-xs text-slate-400">{badge.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-slate-900 py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Column 1: Brand & Newsletter */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#6366F1] to-[#06B6D4]">
                  <span className="text-white font-bold">CX</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-white">CloserX</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">.ai</span>
                </div>
              </div>

              <p className="text-base font-semibold text-slate-400 mb-4">
                The White-Label AI Calling Platform
              </p>

              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Empower your business with fully customizable AI voice agents. Launch your branded platform in 24 hours.
              </p>


              {/* Newsletter Signup */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Get weekly updates & tips</h4>
                <form onSubmit={handleSubscribe} className="flex items-center gap-1 bg-white/8 border border-white/12 rounded-xl p-1 backdrop-blur-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-none text-white placeholder:text-slate-500 px-4 py-2.5 text-sm focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#6366F1] text-white text-sm font-semibold rounded-lg hover:bg-[#4F46E5] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                {subscribed && (
                  <p className="text-sm text-green-500 mt-2 animate-in fade-in">
                    ✓ Subscribed! Check your email
                  </p>
                )}
              </div>
            </div>

            {/* Column 2: Product */}
            <div>
              <h4 className="text-base font-bold text-white mb-6 tracking-tight">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/platform" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Platform Overview
                  </Link>
                </li>
                <li>
                  <Link to="/white-label" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    White-Label Features
                  </Link>
                </li>
                <li>
                  <Link to="/voice-agents" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    AI Voice Agents
                  </Link>
                </li>
                <li>
                  <Link to="/automation" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link to="/call-management" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Call Management
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link to="/api-docs" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    API Documentation
                  </Link>
                </li>

              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div>
              <h4 className="text-base font-bold text-white mb-6 tracking-tight">Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions/outbound-sales" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Outbound Sales
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/inbound-support" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Inbound Support
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/appointment-scheduling" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Appointment Scheduling
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/lead-qualification" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Lead Qualification
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/follow-up-automation" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Follow-up Automation
                  </Link>
                </li>
                <li>
                  <Link to="/industries/real-estate" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link to="/industries/healthcare" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link to="/industries/financial-services" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link to="/industries/ecommerce" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link to="/industries/call-centers" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Call Centers
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/agencies" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    For Agencies
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/enterprises" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    For Enterprises
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/resellers" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    For Resellers
                  </Link>
                </li>

              </ul>
            </div>

            {/* Column 4: Resources & Company */}
            <div>
              <h4 className="text-base font-bold text-white mb-6 tracking-tight">Resources</h4>
              <ul className="space-y-3 mb-8">
                <li>
                  <Link to="/blog" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/videos" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Video Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="https://youtube.com" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link to="/roi-calculator" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/templates" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Templates & Tools
                  </Link>
                </li>

              </ul>

              <h4 className="text-base font-bold text-white mb-6 tracking-tight">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Become Our Partners
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Press & Media
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                    Careers
                  </Link>
                </li>

              </ul>

              {/* Quick Contact */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <a
                  href="tel:+16505853005"
                  className="flex items-center gap-2 text-sm text-[#6366F1] hover:underline mb-2"
                >
                  <Phone className="w-4 h-4" /> +1 650-585-3005
                </a>

                <a
                  href="mailto:info@closerx.ai"
                  className="flex items-center gap-2 text-sm text-[#6366F1] hover:underline mb-2"
                >
                  <Mail className="w-4 h-4" /> info@closerx.ai
                </a>

                {/* Updated Address Section */}
                <div className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Address: 8 The Green, Suite R, <br />
                    City of Dover, Delaware 19901 <br />
                    United States
                  </span>
                </div>

                <button
                  onClick={() => window.open('https://tawk.to/chat', '_blank')}
                  className="mt-4 flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-full hover:bg-green-700 transition-colors animate-pulse cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat with us – We're online!
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Comparison Links (SEO) */}
      <div className="bg-slate-800 border-t border-slate-700/50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider text-center mb-6">
            Popular Comparisons
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            {comparisonLinks.map((link) => (
              <Link
                key={link}
                to="#"
                className="px-4 py-2 text-sm text-slate-400 border border-slate-600 rounded-lg hover:text-[#6366F1] hover:border-[#6366F1] hover:bg-[#6366F1]/5 hover:-translate-y-0.5 transition-all"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-800 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-slate-500">
                © 2025 CloserX.ai. All rights reserved.
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Made with ❤️ in San Francisco
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/terms-and-conditions" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy-policy" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Cookie Policy
              </Link>
              <Link to="/acceptable-use" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Acceptable Use
              </Link>
              <Link to="/refund-policy" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Refund Policy
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

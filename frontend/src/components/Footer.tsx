import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import logoCloserx from "@/assets/logoCloserx.png";
import { useLuna } from "@/contexts/LunaContext";

const Footer = () => {
  const { openLuna } = useLuna();

  const companyLinks = [
    { label: "About Us", to: "/about" },
    { label: "Become Our Partners", to: "https://affiliate.closerx.ai/home975572-1328-2226-4154" },
    { label: "Security", to: "/security" },
    { label: "Contact Us", to: "/contact" },
    { label: "Careers", to: "/careers" },
  ];

  const solutionsLinks = [
    { label: "Outbound Sales", to: "/use-cases/outbound-sales" },
    { label: "Inbound Support", to: "/use-cases/inbound-support" },
    { label: "Appointment Scheduling", to: "/use-cases/appointment-scheduling" },
    { label: "Lead Qualification", to: "/use-cases/lead-qualification" },
    { label: "Follow-up Automation", to: "/use-cases/follow-up-automation" },
    { label: "Real Estate", to: "/industries/real-estate" },
    { label: "Healthcare", to: "/industries/healthcare" },
    { label: "Financial Services", to: "/industries/financial-service" },
    { label: "E-commerce", to: "/industries/e-commerce" },
    { label: "Call Centres", to: "/industries/call-centres" },
    { label: "For Agencies", to: "/teams/for-agencies" },
    { label: "For Enterprises", to: "/teams/for-enterprises" },
    { label: "For Resellers", to: "/teams/for-resellers" },
  ];

  const resourcesLinks = [
    { label: "Blog", to: "/blog" },
    { label: "Video Tutorials", to: "/videos" },
    { label: "YouTube", to: "https://youtube.com" },
    { label: "ROI Calculator", to: "/roi-calculator" },
    { label: "Documentation", to: "https://docs.closerx.ai/api-reference/introduction" },
    { label: "Templates & Tools", to: "/templates" },
  ];

  const productLinks = [
    { label: "Platform Overview", to: "/platform" },
    { label: "White-Label Features", to: "/white-label" },
    { label: "AI Voice Agents", to: "/voice-agents" },
    { label: "Workflow Automation", to: "/automation" },
    { label: "Call Management", to: "/call-management" },
    { label: "Integrations", to: "/integrations" },
    { label: "API Documentation", to: "https://docs.closerx.ai/api-reference/auth/login" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-[#9333EA] via-purple-800 to-[#A855F7] text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8 items-start">
            {/* Column 1: Brand & Description */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src={logoCloserx}
                  alt="CloserX.ai"
                  className="h-8 mb-4 w-32 object-contain"
                />
              </div>

              {/* Tagline */}
              <p className="text-base md:text-lg font-semibold text-white mb-4">
                The White-Label AI Calling Platform
              </p>

              {/* Description */}
              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-8 max-w-lg">
                Our AI voice agents automate phone conversations at scale — replacing manual call handling with fast, reliable, and human-like interactions. Using AI, we're transforming how businesses manage calls, making customer support scalable, cost-efficient, and easy to deploy in weeks.
              </p>

              {/* Create an AI Agent Button */}
              <button
                onClick={openLuna}
                className="mb-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Create an AI Agent
              </button>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Column 2: Company */}
            <div className="pt-0">
              <h4 className="text-base font-bold text-white mb-6 tracking-tight">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    {/^(https?:)?\/\//.test(link.to) ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-white/80 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-white hover:text-white/80 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div className="pt-0">
              <h4 className="text-base font-bold text-white mb-6 tracking-tight">Solutions</h4>
              <ul className="space-y-3">
                {solutionsLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="pt-0">
              <h4 className="text-base font-bold text-white mb-6 tracking-tight">Resources</h4>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    {/^(https?:)?\/\//.test(link.to) ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-white/80 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-white hover:text-white/80 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Product */}
            <div className="pt-0">
              <h4 className="text-base font-bold text-white mb-6 tracking-tight">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

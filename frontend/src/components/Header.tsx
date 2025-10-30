import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Play, Rocket, Sparkles, Phone, Palette, Workflow, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";
import DemoModal from "@/components/DemoModal";


interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string; icon?: string; badge?: string }[];
  megaMenu?: boolean;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navigation: NavItem[] = [
    {
      label: "Product",
      dropdown: [
        // REQUESTED CHANGE: Updated order for Product dropdown
        { label: "Platform Overview", href: "/platform", icon: "🏠" },
        { label: "White-Label Features", href: "/white-label", icon: "🎨", badge: "Popular" },
        { label: "AI Voice Agents", href: "/voice-agents", icon: "🎙️" },
        { label: "Workflow Automation", href: "/automation", icon: "⚡" },
        { label: "Call Management", href: "/call-management", icon: "📞" },
        { label: "Integrations", href: "/integrations", icon: "🔌", badge: "50+" },
        { label: "API Documentation", href: "/api-docs", icon: "📚" },
      ],
    },
    {
      label: "Solutions",
      megaMenu: true,
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    // REQUESTED CHANGE: Added "Success Stories" in place of "Partners"
    {
      label: "Success Stories",
      href: "/success-stories",
    },
    {
      label: "Resources",
      dropdown: [
        // REQUESTED CHANGE: Updated Resources content
        { label: "Blog", href: "/blog", icon: "📝" },
        { label: "Video Tutorials", href: "/videos", icon: "🎥" },
        { label: "YouTube", href: "https://www.youtube.com/@CloserXAI", icon: "▶️", badge: "New" }, // Assuming a link to YouTube
        { label: "ROI Calculator", href: "/roi-calculator", icon: "🧮" },
        { label: "Documentation", href: "/docs", icon: "📖" },
        { label: "Templates & Tools", href: "/templates", icon: "📦" },
      ],
    },
    {
      label: "Company",
      dropdown: [
        // REQUESTED CHANGE: Updated and reordered Company content
        { label: "About Us", href: "/about", icon: "ℹ️" },
        { label: "Become Our Partners", href: "/partners", icon: "🤝" }, // REQUESTED CHANGE: Moved Partners here
        { label: "Security", href: "/security", icon: "🔒" },
        { label: "Compliance", href: "/compliance", icon: "✅" },
        { label: "Press & Media", href: "/press", icon: "📰" },
        { label: "Contact Us", href: "/contact", icon: "📧" }, // Changed 'Contact' to 'Contact Us' for clarity
        { label: "Careers", href: "/careers", icon: "💼", badge: "We're Hiring!" }, // Re-added Careers
      ],
    },
    // REQUESTED CHANGE: "Partners" removed from here
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
        : "bg-white/90 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <img
              src={logo}
              alt="CloserX.ai Logo"
              className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative group/nav"
                onMouseEnter={() => !item.href && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors relative group/link"
                  >
                    {item.label}
                    {item.label === "Pricing" && (
                      <span className="ml-1 text-[9px] px-1.5 py-0.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-bold">
                        New
                      </span>
                    )}
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors relative group/link">
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                  </button>
                )}

                {/* Dropdown Menu */}
                {activeDropdown === item.label && item.dropdown && (
                  <div className="absolute top-full left-0 pt-2 z-[100]">
                    <div className="w-[320px] bg-white rounded-2xl shadow-2xl border-2 border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className={`flex items-center gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 group transition-all ${index < item.dropdown.length - 1 ? 'border-b border-slate-100' : ''
                            }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                            {subItem.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-[15px] font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {subItem.label}
                            </div>
                          </div>
                          {subItem.badge && (
                            <span className="text-[9px] font-bold uppercase bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full">
                              {subItem.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu for Solutions */}
                {item.megaMenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100]">
                    <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-100 p-8 w-[850px]">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 pb-2 border-b-2 border-blue-200">By Use Case</h4>
                          {[
                            { name: "Outbound Sales", emoji: "📞" },
                            { name: "Inbound Support", emoji: "🎧" },
                            { name: "Appointment Scheduling", emoji: "📅" },
                            { name: "Lead Qualification", emoji: "✅" },
                            { name: "Follow-up Automation", emoji: "🔄" }
                          ].map((useCase) => (
                            <Link
                              key={useCase.name}
                              to={`/use-cases/${useCase.name.toLowerCase().replace(/\s+/g, "-")}`}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[14px] font-medium text-slate-700 hover:text-primary hover:bg-white/80 transition-all group"
                            >
                              <span className="text-lg group-hover:scale-110 transition-transform">{useCase.emoji}</span>
                              <span className="group-hover:translate-x-1 transition-transform">{useCase.name}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 pb-2 border-b-2 border-purple-200">By Industry</h4>
                          {[
                            { name: "Real Estate", badge: "🔥", emoji: "🏠" },
                            { name: "Healthcare", emoji: "🏥" },
                            { name: "Financial Services", emoji: "💰" },
                            { name: "E-commerce", emoji: "🛒" },
                            { name: "Call Centers", emoji: "📞" },
                          ].map((industry) => (
                            <Link
                              key={industry.name}
                              to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[14px] font-medium text-slate-700 hover:text-primary hover:bg-white/80 transition-all group"
                            >
                              <span className="text-lg group-hover:scale-110 transition-transform">{industry.emoji}</span>
                              <span className="flex-1 group-hover:translate-x-1 transition-transform">{industry.name}</span>
                              {industry.badge && (
                                <span className="text-sm">{industry.badge}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                          <h4 className="text-xs font-bold text-white/90 uppercase tracking-wider mb-4 pb-2 border-b-2 border-white/30">By Team</h4>
                          {[
                            { name: "For Agencies", badge: "⭐", emoji: "🎨" },
                            { name: "For Enterprises", emoji: "🏢" },
                            { name: "For Resellers", emoji: "💼" },
                          ].map((team) => (
                            <Link
                              key={team.name}
                              to={`/teams/${team.name.toLowerCase().replace(/^for-/, '').replace(/\s+/g, "-")}`}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[14px] font-medium text-white hover:bg-white/20 transition-all group"
                            >
                              <span className="text-lg group-hover:scale-110 transition-transform">{team.emoji}</span>
                              <span className="flex-1 group-hover:translate-x-1 transition-transform">{team.name}</span>
                              {team.badge && (
                                <span className="text-sm">{team.badge}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t-2 border-slate-200 text-center bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg p-4 border border-primary/20">
                        <Link to="/contact" className="text-sm font-bold text-primary hover:underline flex items-center justify-center gap-2">
                          Can't find what you need? Talk to our team →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            
            <DemoModal/>
            <Link to="/login" className="ml-2 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 relative z-50 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-40 overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="px-4 py-6 space-y-1 safe-area-inset">
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-slate-100 last:border-0">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="flex items-center justify-between py-4 text-base font-semibold text-slate-900 active:bg-slate-50 touch-manipulation min-h-[44px]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-4 text-base font-semibold text-slate-900 active:bg-slate-50 touch-manipulation min-h-[44px]"
                        onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                        aria-expanded={openMobile === item.label}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMobile === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {item.dropdown && openMobile === item.label && (
                        <div className="pl-3 pb-3 space-y-1 animate-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 py-3 px-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg active:bg-slate-100 touch-manipulation min-h-[44px]"
                            >
                              <span className="text-base">{dropdownItem.icon}</span>
                              <span>{dropdownItem.label}</span>
                              {dropdownItem.badge && (
                                <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 bg-primary/10 text-primary rounded">
                                  {dropdownItem.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.megaMenu && openMobile === item.label && (
                        <div className="pl-3 pb-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
                          <div className="space-y-1">
                            <div className="text-xs font-bold text-slate-400 uppercase px-3 py-2">Use Cases</div>
                            {[
                              { name: "Outbound Sales", emoji: "📞" },
                              { name: "Inbound Support", emoji: "🎧" },
                              { name: "Appointment Scheduling", emoji: "📅" },
                            ].map((useCase) => (
                              <Link
                                key={useCase.name}
                                to={`/use-cases/${useCase.name.toLowerCase().replace(/\s+/g, "-")}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 py-3 px-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg active:bg-slate-100 touch-manipulation min-h-[44px]"
                              >
                                <span className="text-base">{useCase.emoji}</span>
                                <span>{useCase.name}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs font-bold text-slate-400 uppercase px-3 py-2">Industries</div>
                            {[
                              { name: "Real Estate", emoji: "🏠" },
                              { name: "Healthcare", emoji: "🏥" },
                              { name: "E-commerce", emoji: "🛒" },
                            ].map((industry) => (
                              <Link
                                key={industry.name}
                                to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 py-3 px-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg active:bg-slate-100 touch-manipulation min-h-[44px]"
                              >
                                <span className="text-base">{industry.emoji}</span>
                                <span>{industry.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              <div className="pt-6 space-y-3 px-2">
                
                <DemoModal/>

                <Link
                  to="/login"
                  className="block text-center py-3 text-base font-semibold text-slate-700 touch-manipulation min-h-[48px] items-center justify-center" // block AND flex
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
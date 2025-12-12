import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Play, Rocket, Sparkles, Phone, Palette, Workflow, BarChart3 } from "lucide-react";
import logo from "@/assets/logo-white.png";
import DemoModal from "@/components/DemoModal";


interface NavDropdownItem {
  label: string;
  href?: string;
  icon?: string;
  badge?: string;
  subDropdown?: { label: string; href: string }[];
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
  megaMenu?: boolean;
}


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

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
      label: "Home",
      href: "/",
    },
    {
      label: "Product",
      dropdown: [
        // REQUESTED CHANGE: Updated order for Product dropdown
        { label: "Platform Overview", href: "/platform", icon: "https://api.iconify.design/lucide:layout-dashboard.svg?color=%23ffffff" },
        { label: "White-Label Features", href: "/white-label", icon: "https://api.iconify.design/lucide:palette.svg?color=%23ffffff", badge: "Popular" },
        { label: "AI Voice Agents", href: "/voice-agents", icon: "https://api.iconify.design/lucide:mic.svg?color=%23ffffff" },
        { label: "Workflow Automation", href: "/automation", icon: "https://api.iconify.design/lucide:zap.svg?color=%23ffffff" },
        { label: "Call Management", href: "/call-management", icon: "https://api.iconify.design/lucide:phone.svg?color=%23ffffff" },
        { label: "Integrations", href: "/integrations", icon: "https://api.iconify.design/lucide:plug.svg?color=%23ffffff", badge: "50+" },
        { label: "API Documentation", href: "/api-docs", icon: "https://api.iconify.design/lucide:book-open.svg?color=%23ffffff" },
      ],
    },
    {
      label: "Solutions",
      dropdown: [
        {
          label: "Use Cases",
          subDropdown: [
            { label: "Outbound Sales", href: "/use-cases/outbound-sales" },
            { label: "Inbound Support", href: "/use-cases/inbound-support" },
            { label: "Appointment Scheduling", href: "/use-cases/appointment-scheduling" },
            { label: "Lead Qualification", href: "/use-cases/lead-qualification" },
            { label: "Follow-up Automation", href: "/use-cases/follow-up-automation" },
          ]
        },
        {
          label: "Industries",
          subDropdown: [
            { label: "Real Estate", href: "/industries/real-estate" },
            { label: "Healthcare", href: "/industries/healthcare" },
            { label: "Financial Service", href: "/industries/financial-service" },
            { label: "E-commerce", href: "/industries/e-commerce" },
            { label: "Call Centres", href: "/industries/call-centres" },
          ]
        },
        {
          label: "Teams",
          subDropdown: [
            { label: "For Agencies", href: "/teams/for-agencies" },
            { label: "For Enterprises", href: "/teams/for-enterprises" },
            { label: "For Resellers", href: "/teams/for-resellers" },
          ]
        }
      ]
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
        { label: "Blog", href: "/blog", icon: "https://api.iconify.design/lucide:file-text.svg?color=%23ffffff" },
        { label: "Video Tutorials", href: "/videos", icon: "https://api.iconify.design/lucide:video.svg?color=%23ffffff" },
        { label: "YouTube", href: "https://www.youtube.com/@CloserXAI", icon: "https://api.iconify.design/lucide:youtube.svg?color=%23ffffff", badge: "New" }, // Assuming a link to YouTube
        { label: "ROI Calculator", href: "/roi-calculator", icon: "https://api.iconify.design/lucide:calculator.svg?color=%23ffffff" },
        { label: "Documentation", href: "/docs", icon: "https://api.iconify.design/lucide:book.svg?color=%23ffffff" },
        { label: "Templates & Tools", href: "/templates", icon: "https://api.iconify.design/lucide:box.svg?color=%23ffffff" },
      ],
    },
    {
      label: "Company",
      dropdown: [
        // REQUESTED CHANGE: Updated and reordered Company content
        { label: "About Us", href: "/about", icon: "https://api.iconify.design/lucide:info.svg?color=%23ffffff" },
        { label: "Become Our Partners", href: "https://affiliate.closerx.ai/home975572-1328-2226-4154", icon: "https://api.iconify.design/lucide:handshake.svg?color=%23ffffff" }, // REQUESTED CHANGE: Moved Partners here
        { label: "Security", href: "/security", icon: "https://api.iconify.design/lucide:lock.svg?color=%23ffffff" },
        { label: "Contact Us", href: "/contact", icon: "https://api.iconify.design/lucide:mail.svg?color=%23ffffff" }, // Changed 'Contact' to 'Contact Us' for clarity
        { label: "Careers", href: "/careers", icon: "https://api.iconify.design/lucide:briefcase.svg?color=%23ffffff", badge: "We're Hiring!" }, // Re-added Careers
        { label: "Partnership", href: "/partnership", icon: "https://api.iconify.design/lucide:handshake.svg?color=%23ffffff" },
      ],
    },
    // REQUESTED CHANGE: "Partners" removed from here
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <img
              src={logo}
              alt="CloserX.ai Logo"
              className="h-8 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-100"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative group/nav"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  /^https?:\/\//.test(item.href) ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-2 text-sm font-semibold transition-colors relative group/link ${item.label === "Product"
                        ? "text-white"
                        : "text-gray-500 hover:text-white"
                        }`}
                    >
                      {item.label}
                      {item.label === "Pricing" && (
                        <span className="ml-1 text-[9px] px-1.5 py-0.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-bold">
                          New
                        </span>
                      )}
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-white scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-semibold transition-colors relative group/link ${item.label === "Product"
                        ? "text-white"
                        : "text-gray-500 hover:text-white"
                        }`}
                    >
                      {item.label}
                      {item.label === "Pricing" && (
                        <span className="ml-1 text-[9px] px-1.5 py-0.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-bold">
                          New
                        </span>
                      )}
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-white scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                  )
                ) : (
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors relative group/link ${item.label === "Product"
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                    }`}>
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-white scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                  </button>
                )}

                {/* Dropdown Menu */}
                {activeDropdown === item.label && item.dropdown && (
                  <div className="absolute top-full left-0 pt-2 z-[100]">
                    <div className="w-[320px] bg-black rounded-2xl shadow-xl border border-slate-800 p-2">

                      {item.dropdown.map((subItem) => (
                        <div key={subItem.label} className="relative group">

                          {/* First Level (Use Cases / Industries / Teams) */}
                          {subItem.href ? (
                          // If item has href → navigate
                            <Link
                              to={subItem.href}
                              className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-purple-600 rounded-lg"
                              onClick={() => setActiveDropdown(null)}  // closes dropdown
                            >
                              <div className="flex items-center gap-2">
                                {subItem.icon && (
                                  <img src={subItem.icon} alt="" className="w-5 h-5" />
                                )}
                                {subItem.label}
                              </div>

                              {subItem.badge && (
                                <span className="text-[10px] bg-purple-600 px-2 py-0.5 rounded-full">
                                  {subItem.badge}
                                </span>
                              )}
                            </Link>
                          ) : (
                            // If item has subDropdown → keep button
                            <button
                              className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-purple-600 rounded-lg"
                            >
                              {subItem.label}
                              {subItem.subDropdown && (
                                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                              )}
                            </button>
                          )}


                          {/* Second Level */}
                          {subItem.subDropdown && (
                            <div className="absolute top-0 left-full ml-2 w-60 bg-black border border-slate-800 rounded-lg p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all translate-x-2 group-hover:translate-x-0">
                              {subItem.subDropdown.map((nested) => (
                                <Link
                                  key={nested.label}
                                  to={nested.href}
                                  className="block px-4 py-2 text-sm text-white hover:bg-purple-600 rounded-lg"
                                >
                                  {nested.label}
                                </Link>
                              ))}
                            </div>
                          )}

                        </div>
                      ))}

                    </div>
                  </div>
                )}
                {/* Mega Menu for Solutions */}
                {item.megaMenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100]">
                    <div className="bg-black rounded-2xl shadow-xl border border-slate-800 p-8 w-[850px]">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">USE CASE</h4>
                          {[
                            { name: "Outbound Sales", emoji: "https://api.iconify.design/lucide:bar-chart-3.svg?color=%23ffffff" },
                            { name: "Inbound Support", emoji: "https://api.iconify.design/lucide:headphones.svg?color=%23ffffff" },
                            { name: "Appointment Scheduling", emoji: "https://api.iconify.design/lucide:calendar.svg?color=%23ffffff" },
                            { name: "Lead Qualification", emoji: "https://api.iconify.design/lucide:filter.svg?color=%23ffffff" },
                            { name: "Follow-up Automation", emoji: "https://api.iconify.design/lucide:refresh-cw.svg?color=%23ffffff" }
                          ].map((useCase) => (
                            <Link
                              key={useCase.name}
                              to={`/use-cases/${useCase.name.toLowerCase().replace(/\s+/g, "-")}`}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[14px] font-medium text-white hover:bg-purple-600 transition-all group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-black group-hover:bg-purple-600 flex items-center justify-center text-lg flex-shrink-0 transition-colors">
                                <img src={useCase.emoji} alt={useCase.name} className="w-6 h-6 object-contain" />
                              </div>
                              <span>{useCase.name}</span>
                            </Link>
                          ))}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">INDUSTRY</h4>
                          {[
                            { name: "Real Estate", emoji: "https://api.iconify.design/lucide:building.svg?color=%23ffffff" },
                            { name: "Healthcare", emoji: "https://api.iconify.design/lucide:heart-pulse.svg?color=%23ffffff" },
                            { name: "Financial Service", emoji: "https://api.iconify.design/lucide:landmark.svg?color=%23ffffff" },
                            { name: "E-commerce", emoji: "https://api.iconify.design/lucide:shopping-bag.svg?color=%23ffffff" },
                            { name: "Call Centres", emoji: "https://api.iconify.design/lucide:headset.svg?color=%23ffffff" },
                          ].map((industry) => (
                            <Link
                              key={industry.name}
                              to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[14px] font-medium text-white hover:bg-purple-600 transition-all group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-black group-hover:bg-purple-600 flex items-center justify-center text-lg flex-shrink-0 transition-colors">
                                <img src={industry.emoji} alt={industry.name} className="w-6 h-6 object-contain" />
                              </div>
                              <span>{industry.name}</span>
                            </Link>
                          ))}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">TEAM</h4>
                          {[
                            { name: "For Agencies", emoji: "https://api.iconify.design/lucide:users.svg?color=%23ffffff" },
                            { name: "For Enterprises", emoji: "https://api.iconify.design/lucide:briefcase.svg?color=%23ffffff" },
                            { name: "For Resellers", emoji: "https://api.iconify.design/lucide:share-2.svg?color=%23ffffff" },
                          ].map((team) => (
                            <Link
                              key={team.name}
                              to={`/teams/${team.name.toLowerCase().replace(/^for-/, '').replace(/\s+/g, "-")}`}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[14px] font-medium text-white hover:bg-purple-600 transition-all group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-black group-hover:bg-purple-600 flex items-center justify-center text-lg flex-shrink-0 transition-colors">
                                <img src={team.emoji} alt={team.name} className="w-6 h-6 object-contain" />
                              </div>
                              <span>{team.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-slate-700">
                        <Link to="/contact" className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                            👥
                          </div>
                          <div>
                            <div className="font-semibold">Talk to Our team →</div>
                            <div className="text-xs text-slate-400">Can't find what you need?</div>
                          </div>
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

            <DemoModal />
            <a href="https://app.closerx.ai" target="_blank" rel="noopener noreferrer" className="ml-2 px-3 py-2 text-sm font-semibold text-white hover:text-gray-300 transition-colors">
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 relative z-50 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
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
                    /^https?:\/\//.test(item.href) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-4 text-base font-semibold text-slate-900 active:bg-slate-50 touch-manipulation min-h-[44px]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center justify-between py-4 text-base font-semibold text-slate-900 active:bg-slate-50 touch-manipulation min-h-[44px]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    )
                  ) : (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-4 text-base font-semibold text-slate-900 active:bg-slate-50 touch-manipulation min-h-[44px]"
                        onClick={() => {
                        setOpenMobile(openMobile === item.label ? null : item.label);
                        setOpenSubMenu(null);
                      }}
                        aria-expanded={openMobile === item.label}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMobile === item.label ? 'rotate-180' : ''}`} />
                      </button>
                  {item.dropdown && openMobile === item.label && (
  <div className="pl-3 pb-3 space-y-1 animate-in slide-in-from-top-2 duration-200">
    {item.dropdown.map((dropdownItem) => (
      <div key={dropdownItem.label}>
        
        {/* If item has subDropdown → show collapsible button */}
        {dropdownItem.subDropdown ? (
          <>
            <button
             onClick={() =>
            setOpenSubMenu(
              openSubMenu === dropdownItem.label ? null : dropdownItem.label
            )
          }

              className="w-full flex items-center justify-between py-3 px-3 text-sm text-slate-700"
            >
              <span>{dropdownItem.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                openSubMenu === dropdownItem.label ? "rotate-180" : ""
              }`}
              />
            </button>

            {/* Nested items */}
            {openSubMenu === dropdownItem.label && (
              <div className="pl-6 space-y-1">
                {dropdownItem.subDropdown.map((nested) => (
                  <Link
                    key={nested.label}
                    to={nested.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-slate-600"
                  >
                    {nested.label}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          /* Normal link (when href exists) */
          <Link
            to={dropdownItem.href}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-3 px-3 text-sm text-slate-600 hover:text-primary rounded-lg"
          >
            {dropdownItem.icon && (
              <img
                src={dropdownItem.icon}
                alt=""
                className="w-5 h-5 object-contain"
              />
            )}
            {dropdownItem.label}
          </Link>
        )}
      </div>
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

                <DemoModal />

                <a
                  href="https://app.closerx.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 text-base font-semibold text-slate-700 touch-manipulation min-h-[48px] items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
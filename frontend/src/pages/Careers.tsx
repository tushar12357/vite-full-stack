import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hiring.jpg";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";

const jobGroups = [
  {
    label: "Engineering",
    countLabel: "· 1",
    roles: [
      {
        title: "Senior Django Developer",
        location: "Toronto, Canada",
        workplace: "Hybrid",
        description:
          "Lead backend architecture for our AI agent platform using Django and PostgreSQL. Mentor junior engineers, own API performance, and collaborate with product on new voice automation features.",
      },
    ],
  },
  {
    label: "Product & Design",
    countLabel: "· 1",
    roles: [
      {
        title: "Junior Frontend Developer",
        location: "Dubai, UAE",
        workplace: "On site",
        description:
          "Build responsive dashboards with React and Tailwind. Work closely with senior designers to ship delightful customer experiences for agencies launching CloserX AI agents.",
      },
    ],
  },
  {
    label: "Creative Studio",
    countLabel: "· 1",
    roles: [
      {
        title: "Video Editor",
        location: "Remote",
        workplace: "Remote",
        description:
          "Produce high-conversion video tutorials, product explainers, and customer stories. Own editing, motion graphics, and storytelling to highlight CloserX success.",
      },
    ],
  },
];

const quickFacts = [
  "Applications are typically reviewed within 24-72 business hours.",
  "A member of our partnerships team will contact you to schedule a discovery call.",
];

const Careers = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const toggleRole = (title: string) => {
    setExpandedRole((prev) => (prev === title ? null : title));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />

      <main className="pt-28 pb-24 space-y-24">
        {/* Hero */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
                Careers
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Become an partner and earn with every recommendation
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-2xl">
                Do you love CloserX.ai? Are you interested in earning money by promoting CloserX.ai products?
                We're always on the lookout for passionate individuals to partner with on our affiliate program.
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-5 rounded-xl text-base font-semibold"
              >
                Open Positions
              </Button>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <img
                src={heroImage}
                alt="CloserX team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/50 mb-3">
                Open Positions
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  Applications are typically reviewed within 24-72 business days. A member
                  of our partnerships team will contact you to schedule a discovery call.
                </h2>
                <div className="flex flex-wrap gap-3">
                  <button className="flex w-full sm:w-auto items-center justify-between gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 transition-all">
                    <MapPin className="w-4 h-4" />
                    All locations
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button className="flex w-full sm:w-auto items-center justify-between gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 transition-all">
                    <Building2 className="w-4 h-4" />
                    All functions
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-white/60 text-base mt-4">
                {quickFacts.join(" ")}
              </p>
            </div>

            <div className="space-y-6">
              {jobGroups.map((group, groupIdx) => (
                <div
                  key={`${group.label}-${groupIdx}`}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 space-y-4"
                >
                  <div className="flex items-center justify-between text-sm text-white/60 uppercase tracking-[0.3em]">
                    <span>{group.label}</span>
                    <span>{group.countLabel}</span>
                  </div>
                  <div className="space-y-3">
                    {group.roles.map((role, roleIdx) => (
                      <div
                        key={`${role.title}-${roleIdx}`}
                        className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5"
                      >
                        <div>
                          <p className="text-lg font-semibold mb-1">{role.title}</p>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {role.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Full-time
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {role.workplace}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <button
                            onClick={() => toggleRole(role.title)}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
                          >
                            {expandedRole === role.title ? "Hide details" : "View role"}
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${expandedRole === role.title ? "rotate-90" : ""}`}
                            />
                          </button>
                          {expandedRole === role.title && (
                            <p className="text-sm text-white/70 leading-relaxed border-t border-white/10 pt-3">
                              {role.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Copy Section */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto rounded-[32px] border border-white/10 bg-[#0A0A0A] px-8 py-12 md:px-14 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:max-w-sm">
                <h3 className="text-3xl md:text-[44px] md:leading-tight font-semibold">
                  Join our team, we’re building the future of enterprise.
                </h3>
              </div>
              <div className="text-base text-white/70 leading-relaxed space-y-6 max-w-2xl">
                <p>
                  Today, CloserX.ai stands as the trusted AI calling solution for thousands of agencies worldwide,
                  helping them differentiate their offerings, increase revenue streams, and deliver exceptional value to their clients.
                  With proven templates, comprehensive training, and a 30-day money-back guarantee (terms and conditions applied),
                  we provide everything needed to launch and scale a profitable AI calling agency.
                </p>
                <p>
                  Whether you’re an established marketing agency looking to expand your service portfolio or an entrepreneur ready
                  to enter the AI space, CloserX.ai provides the complete toolkit for success in the rapidly evolving world of
                  AI-powered business communications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.7fr,1.3fr] lg:items-center">
            <div className="space-y-4">
              <h4 className="text-3xl font-semibold">Not finding what you’re looking for?</h4>
              <p className="text-white/70">
                Get in touch here and we’ll get back to you.
              </p>
            </div>

            <div className="relative w-full">
              <div className="rounded-[36px] overflow-hidden shadow-[0_20px_70px_rgba(108,48,198,0.35)]">
                <div
                  className="relative p-8"
                  style={{
                    background: "linear-gradient(270deg, #C4B5FD -15%, #974BF3 50.02%, #C4B5FD 115.04%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
                    }}
                  />
                  <div className="relative z-10 space-y-4">
                    {[
                      { label: "Full Name*" },
                      { label: "Age*" },
                      { label: "Phone Number*" },
                      { label: "Email Address*" },
                      { label: "Qualification*" },
                      { label: "Role*", isSelect: true },
                      { label: "Upload Your CV", isSelect: true },
                    ].map((field, idx, arr) => (
                      <div
                        key={field.label}
                        className={`flex items-center justify-between py-3 text-sm text-white/90 ${idx !== arr.length - 1 ? "border-b border-white/20" : ""}`}
                      >
                        <span>{field.label}</span>
                        {field.isSelect && <ChevronDown className="w-4 h-4 text-white" />}
                      </div>
                    ))}

                    <p className="text-[11px] text-white/90 leading-relaxed pt-2">
                      Applications are typically reviewed within 2-3 business days. A member of our partnerships team will contact you to schedule a discovery call.
                    </p>

                    <Button className="w-fit px-8 py-3 rounded-full bg-white text-[#7C3AED] hover:bg-white/90 font-semibold flex items-center gap-2">
                      Submit
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-[32px] bg-[#111111] border border-white/10 px-8 py-8 space-y-4">
              <h4 className="text-2xl md:text-3xl font-semibold text-white">Start using an AI agent today</h4>
              <p className="text-white/70 text-base max-w-2xl">
                Join our growing network of partners and unlock new opportunities with AI-driven customer engagement.
              </p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white rounded-full px-6 py-3 text-sm font-semibold w-fit">
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;




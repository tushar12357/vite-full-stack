import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Network, Cpu, PhoneCall } from "lucide-react";

const providers = [
  {
    name: "Telnyx",
    icon: <Phone className="w-6 h-6 text-primary" />,
    description:
      "Telnyx powers reliable voice connectivity with intelligent routing, global SIP trunking, and real-time analytics — giving CloserX.ai agents crystal-clear calling and scalable performance.",
    link: "https://telnyx.com/",
    tag: "Recommended",
  },
  {
    name: "Twilio",
    icon: <Network className="w-6 h-6 text-primary" />,
    description:
      "Twilio provides developer-friendly APIs that enable flexible inbound and outbound calling. Perfect for scaling call automation or integrating advanced AI-powered routing flows.",
    link: "https://twilio.com/",
    tag: "Trusted",
  },
  {
    name: "Custom SIP",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    description:
      "Bring your own SIP trunk — integrate with your existing telephony provider for total control over call routing, recording, and compliance. CloserX.ai supports full SIP interoperability.",
    link: "#",
    tag: "Flexible",
  },
  {
    name: "Track & Monitor",
    icon: <PhoneCall className="w-6 h-6 text-primary" />,
    description:
      "Real-time dashboards give insight into call performance, agent response rates, and AI accuracy — helping you improve conversion and customer satisfaction.",
    link: "#",
    tag: "Analytics",
  },
];

export default function CallManagement() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Page Section */}
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Call Management & Voice Infrastructure
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-12">
            Power your AI voice agents with enterprise-grade telephony. Connect
            CloserX.ai with leading communication providers or bring your own
            SIP setup — for global reliability and crystal-clear calls.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-left flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {provider.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800">
                    {provider.name}
                  </h2>
                  {provider.tag && (
                    <span className="ml-auto text-[10px] font-bold uppercase bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full">
                      {provider.tag}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 flex-1">{provider.description}</p>
                <a
                  href={provider.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Unified Voice Experience
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              Combine CloserX.ai’s conversational AI with your favorite calling
              infrastructure — automate outreach, handle inbound requests, and
              manage every conversation from a single dashboard.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}

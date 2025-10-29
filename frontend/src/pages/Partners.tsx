import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Briefcase, Gift, ArrowRight } from "lucide-react";

const Partners = () => {
  const programs = [
    {
      title: "Become Our Partner",
      icon: <Users className="w-10 h-10 text-primary" />,
      description:
        "Join CloserX.ai as a strategic partner and help companies revolutionize their sales and customer communication using AI voice agents. Work with us to shape the future of automation and customer engagement.",
      benefits: [
        "Dedicated partner success manager",
        "Revenue sharing opportunities",
        "Joint marketing & co-branding",
      ],
      cta: "Apply Now",
      link: "/contact",
    },
    {
      title: "Partner Program",
      icon: <Briefcase className="w-10 h-10 text-purple-600" />,
      description:
        "Our Partner Program is designed for agencies, consultants, and tech providers who want to resell, integrate, or white-label CloserX.ai. Expand your portfolio with a proven AI solution.",
      benefits: [
        "White-label platform access",
        "API & integration support",
        "Exclusive partner resources",
      ],
      cta: "Learn More",
      link: "/partner-program",
    },
    {
      title: "Affiliates Program",
      icon: <Gift className="w-10 h-10 text-pink-500" />,
      description:
        "Earn commissions by referring clients to CloserX.ai. Perfect for influencers, creators, and industry professionals who love sharing innovative tech.",
      benefits: [
        "High recurring commissions",
        "Real-time affiliate dashboard",
        "Marketing materials & tracking links",
      ],
      cta: "Join the Program",
      link: "/affiliates",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center bg-gradient-to-r from-primary/10 to-purple-100">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Partner with <span className="text-primary">CloserX.ai</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Let’s grow together. Whether you’re an agency, reseller, or affiliate — our partner ecosystem helps you expand your business with powerful AI voice automation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Become a Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-start text-left"
          >
            <div className="mb-6">{program.icon}</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              {program.title}
            </h3>
            <p className="text-slate-600 mb-5 leading-relaxed">
              {program.description}
            </p>
            <ul className="space-y-2 mb-8">
              {program.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              to={program.link}
              className="mt-auto inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              {program.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-purple-100 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Let’s Build the Future Together 🚀
        </h2>
        <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
          Join our growing network of partners and unlock new opportunities with AI-driven customer engagement.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;

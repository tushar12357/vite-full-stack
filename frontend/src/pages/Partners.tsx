import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Briefcase, Gift, ArrowRight } from "lucide-react";
import { partnerPrograms } from "@/data/partnersData";
import { Button } from "@/components/ui/button";
import becomeOurPartnerImage from "@/assets/becomeourpartner.png";
import FinalCTA from "@/components/home/FinalCTA";

const Partners = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-10 h-10 text-white" />;
      case "Briefcase":
        return <Briefcase className="w-10 h-10 text-white" />;
      case "Gift":
        return <Gift className="w-10 h-10 text-white" />;
      default:
        return <Users className="w-10 h-10 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-left">
            Become an partner and earn with every recommendation
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-8 text-left max-w-3xl ">
            Do you love CloserX.ai? Are you interested in earning money by promoting CloserX.ai products? We're always on the lookout for passionate individuals to partner with us our affiliate program.
          </p>
          <div className="flex justify-start">
            <Button
              asChild
              variant="outline"
              className="border-white text-white px-8 py-3 rounded-lg bg-black"
            >
              <a
                href="https://affiliate.closerx.ai/home975572-1328-2226-4154"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Partner
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Become Our Partner Image Section */}
      <section className=" px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <img 
            src={becomeOurPartnerImage} 
            alt="Become Our Partner"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Partnership Integration Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-left">
            Work with your partners to integrate CloserX.ai across your business
          </h2>
          <p className="text-lg text-white/70 mb-12 text-left max-w-3xl">
            Your sales team spends most of their time chasing unqualified leads while hot prospects go cold. Manual qualification is slow, inconsistent, and expensive.
          </p>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, idx) => (
              <div
                key={idx}
                className="bg-black border border-gray-800 rounded-xl p-8 flex flex-col"
              >
                <div className="mb-6">{getIcon(program.icon)}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed flex-1">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                {/^https?:\/\//.test(program.link) ? (
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
                  >
                    {program.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={program.link}
                    className="mt-auto inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
                  >
                    {program.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Join our growing network of partners and unlock new opportunities with AI-driven customer engagement.
            </p>
            <Link to="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Partners;

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is white-label, and how does it work?",
      answer: "White-label means you can completely customize our platform with your branding - logo, colors, domain name. Your clients will never know it's powered by CloserX. It looks and feels like your own product.",
    },
    {
      question: "How quickly can I launch my platform?",
      answer: "Most agencies are up and running within 24 hours. Our setup wizard guides you through branding, configuration, and your first AI agent. No technical skills required.",
    },
    {
      question: "Do I need technical skills or coding knowledge?",
      answer: "Not at all! CloserX is completely no-code. Our visual workflow builder and intuitive dashboard make it easy for anyone to create sophisticated AI calling solutions.",
    },
    {
      question: "What's included in the pricing?",
      answer: "All plans include AI voice agents, white-label branding, analytics, integrations, and support. Higher tiers add more calls, advanced features, and dedicated account management.",
    },
    {
      question: "Can I customize everything?",
      answer: "Yes! From colors and logos to voice personalities and call flows. Every aspect can be tailored to match your brand and your clients' needs.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support on Starter, 24/7 priority support on Professional, and dedicated account management on Enterprise. Plus extensive documentation and video tutorials.",
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! Get a full 14-day free trial with no credit card required. Test all features and see how it works for your agency.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no penalties or fees. We also offer a 30-day money-back guarantee.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute inset-0 pattern-dots-light" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-slate-600">
            Can't find what you're looking for?{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Chat with us →
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-slate-50 rounded-xl border transition-all ${
                openIndex === index
                  ? 'border-primary shadow-lg bg-white'
                  : 'border-slate-200 hover:border-primary/50'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-slate-600 transition-transform ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl text-center border border-primary/20">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-6">
            Our team is here to help you get started
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all">
            💬 Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
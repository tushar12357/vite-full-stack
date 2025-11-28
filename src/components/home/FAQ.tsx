import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do I need to use GoHighLevel to leverage CloserX.ai's capabilities?",
    answer:
      "CloserX.ai integrates smoothly with GoHighLevel, but it is not required. If you prefer to use GoHighLevel, our team will help you get set up after you join.",
  },
  {
    id: 2,
    question: "Is CloserX.ai the best AI calling product for agencies on the market?",
    answer:
      "Yes—CloserX.ai offers cutting-edge AI agents, white-label branding, unlimited sub accounts, and competitive pricing, making it the go-to solution for agencies that want to increase revenue.",
  },
  {
    id: 3,
    question: "Is there a standalone white-label option available without GoHighLevel?",
    answer:
      "Absolutely. You can deploy CloserX.ai on your own branded domain (e.g., app.yourcompany.com) with no dependency on GoHighLevel.",
  },
  {
    id: 4,
    question: "What is the pricing structure for CloserX.ai?",
    answer:
      "Choose $97/month for 10 sub accounts or $297/month for unlimited sub accounts. Calling credits cost $0.10 per answered minute, and you can resell credits at any markup.",
  },
  {
    id: 5,
    question: "Can I set my own resale prices for the services?",
    answer:
      "Yes. You control the resale price of calling credits and services, so you can build the margin that fits your business.",
  },
  {
    id: 6,
    question: "How can I update the email associated with my CloserX.ai account?",
    answer:
      "Reach out to info@closerx.ai and our support team will securely verify and update your account email.",
  },
  {
    id: 7,
    question: "What steps should I take if my account balance appears incorrect?",
    answer:
      "Review recent campaign activity, confirm there are no duplicate runs, and contact info@closerx.ai if the issue persists.",
  },
  {
    id: 8,
    question: "How do I recharge my account balance?",
    answer:
      "Log in, open the Credits section, pick a package, and complete payment. If something looks off, contact support right away.",
  },
  {
    id: 9,
    question: "What if I forget my password?",
    answer:
      "Click “Forgot Password” on the login screen, enter your email, and follow the reset link. Contact support if the email doesn’t arrive.",
  },
  {
    id: 10,
    question: "Can I view campaign data for periods longer than 7 days?",
    answer:
      "The dashboard currently shows the last 7 days. Longer timeframes are coming soon—submit feature ideas at https://links.closerx.ai/feature-requests.",
  },
  {
    id: 11,
    question: "Does CloserX.ai integrate with CRM systems?",
    answer:
      "Yes. CloserX.ai connects with most CRM platforms so your data stays synchronized automatically.",
  },
  {
    id: 12,
    question: "How can I integrate CloserX.ai into my business operations?",
    answer:
      "We provide API docs plus hands-on support so your tech team can plug CloserX.ai into your existing stack quickly.",
  },
  {
    id: 13,
    question: "Are calls charged during ringing time?",
    answer:
      "No. You are only billed for answered calls, which keeps costs predictable.",
  },
  {
    id: 14,
    question: "Will call charges vary internationally?",
    answer:
      "Yes. Rates differ by country because of carrier costs (Twilio). Check the destination rate before running campaigns.",
  },
  {
    id: 15,
    question: "How do I sign up for a CloserX.ai account?",
    answer:
      "Go to app.closerx.ai, enter your email, set a password, agree to the terms, and verify through the confirmation email.",
  },
  {
    id: 16,
    question: "What should I do if I don't receive the verification email?",
    answer:
      "Check spam, request another link from the sign-up page, or email info@closerx.ai for help.",
  },
  {
    id: 17,
    question: "Can I create multiple accounts with the same email?",
    answer:
      "One account per email is allowed, but you can run unlimited campaigns and agents inside that account.",
  },
  {
    id: 18,
    question: "What industries benefit most from CloserX.ai?",
    answer:
      "CloserX.ai is ideal for agencies, real estate, financial services, healthcare, ecommerce, and any team running large outbound or inbound calling programs.",
  },
  {
    id: 19,
    question: "How can I provide feedback on calls?",
    answer:
      "Use the dashboard feedback tools or reach out to support for personalized assistance.",
  },
  {
    id: 20,
    question: "How does CloserX.ai handle AI call disclosures?",
    answer:
      "You can configure each script to open with an AI disclosure so every call is transparent and compliant.",
  },
  {
    id: 21,
    question: "How can I cancel my CloserX.ai subscription?",
    answer:
      "Cancellations must be initiated inside your account settings. We do not process cancellations via email or phone.",
  },
  {
    id: 22,
    question: "In which countries can I make calls using CloserX.ai?",
    answer:
      "CloserX.ai supports a wide list including the US, Canada, UK, Australia, New Zealand, India, Brazil, Mexico, South Africa, France, Germany, China, Japan, UAE, and many more. Email info@closerx.ai for the full list.",
  },
  {
    id: 23,
    question: "What languages are supported for outbound calls?",
    answer:
      "English, Spanish, French, German, Portuguese, Mandarin, Hindi, Arabic, Russian, Japanese, Korean, Dutch, Italian, Swedish, and we keep adding more.",
  },
  {
    id: 24,
    question: "How can I get support for CloserX.ai?",
    answer:
      "Visit the CloserX.ai Support portal to browse help articles or create a ticket for tailored assistance.",
  },
  {
    id: 25,
    question: "How do I book a meeting after signing up?",
    answer:
      "You’ll receive a welcome email with a link to schedule an onboarding call so we can tailor the platform to your needs.",
  },
  {
    id: 26,
    question: "Can I become an affiliate with CloserX.ai?",
    answer:
      "Yes. Join the CloserX.ai Affiliate Program to earn commissions by promoting the platform.",
  },
  {
    id: 27,
    question: "What types of analytics does CloserX.ai provide?",
    answer:
      "Track call outcomes, agent performance, engagement levels, and campaign effectiveness with built-in reports.",
  },
  {
    id: 28,
    question: "Does CloserX.ai support real-time language translation?",
    answer:
      "Yes. Real-time translation keeps conversations natural across languages while syncing back to your CRM.",
  },
  {
    id: 29,
    question: "Can I use CloserX.ai for video calls?",
    answer:
      "Voice calls are available today and video support is currently in development.",
  },
  {
    id: 30,
    question: "What security measures does CloserX.ai implement?",
    answer:
      "We use strong encryption, secure data storage, and comply with global privacy regulations to protect every conversation.",
  },
  {
    id: 31,
    question: "Is there a limit to the number of calls I can make?",
    answer:
      "Plans scale with your needs—check your subscription tier or contact support for exact limits.",
  },
  {
    id: 32,
    question: "Does CloserX.ai offer training for new users?",
    answer:
      "Yes. Access tutorials, webinars, and one-on-one sessions so your team can master the platform quickly.",
  },
  {
    id: 33,
    question: "Can I customize the AI's conversation scripts?",
    answer:
      "Completely. Tailor scripts to match your brand voice, compliance needs, and campaign goals.",
  },
  {
    id: 34,
    question: "What support do you offer for setup and implementation?",
    answer:
      "CloserX.ai provides white-glove onboarding with experts available Monday–Friday, 10am–10pm.",
  },
  {
    id: 35,
    question: "Can CloserX.ai handle high-volume call campaigns?",
    answer:
      "Yes. The platform is built for large outreach programs across telemarketing, surveys, and customer success.",
  },
  {
    id: 36,
    question: "How often does CloserX.ai update its features?",
    answer:
      "We release improvements regularly (roughly every quarter) and notify all customers when new capabilities launch.",
  },
  {
    id: 37,
    question: "What is the uptime guarantee for CloserX.ai services?",
    answer:
      "CloserX.ai delivers a 99.9% uptime SLA so your automations stay online around the clock.",
  },
  {
    id: 38,
    question: "Can I integrate CloserX.ai with my existing telephone systems?",
    answer:
      "CloserX.ai connects with Twilio-based telephony so you get a seamless experience without extra infrastructure.",
  },
  {
    id: 39,
    question: "Does CloserX.ai provide APIs for custom integrations?",
    answer:
      "Yes. Robust APIs let you embed CloserX.ai into any workflow or system you already rely on.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto cycle through FAQs
  useEffect(() => {
    if (!isAutoPlaying) return;

    // Open first item initially
    setOpenItems([faqData[0].id]);
    setCurrentIndex(0);

    let timeoutId: NodeJS.Timeout | null = null;
    let isTransitioning = false;

    const cycleFAQs = () => {
      // Prevent overlapping cycles
      if (isTransitioning) return;
      isTransitioning = true;

      // Use requestAnimationFrame for smooth state updates
      requestAnimationFrame(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % faqData.length;
          
          // Close current item
          setOpenItems([]);
          
          // After close animation, open next item
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            requestAnimationFrame(() => {
              setOpenItems([faqData[nextIndex].id]);
              isTransitioning = false;
            });
          }, 400); // Wait for close animation to complete
          
          return nextIndex;
        });
      });
    };

    // Start cycling: each FAQ stays open for 3 seconds, then transitions
    const interval = setInterval(cycleFAQs, 3500); // 3s open + 0.5s transition

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isAutoPlaying]);

  const toggleItem = (id: number) => {
    // Stop auto-play when user manually interacts
    setIsAutoPlaying(false);
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-gradient-to-b from-white via-purple-200 to-white px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-[6px] text-[12px] md:text-[12px] text-gray-700 font-medium uppercase">
              FAQ&apos;s
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl text-gray-900 font-semibold mb-4 max-w-3xl mx-auto leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[12px] md:text-[14px] text-gray-600 max-w-2xl mx-auto font-medium">
            Find quick answers about our services. Reach <br/> out to us directly for
            more information!
          </p>
        </div>

        {/* FAQ Items Container with fixed min-height to prevent layout shift */}
        <div className="min-h-[600px] md:min-h-[800px] relative">
          <div className="space-y-0">
          {faqData.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <div key={faq.id}>
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-[14px] md:text-[16px] font-medium text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center transition-all duration-300">
                      {isOpen ? (
                        <X className="w-4 h-4 text-gray-900 transition-transform duration-300 rotate-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-900 transition-transform duration-300 rotate-0" />
                      )}
                    </div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 pt-2 border-b border-gray-200">
                    <p className="text-[12px] md:text-[14px] text-gray-600 leading-relaxed pr-12 font-medium">
                      {faq.answer}
                    </p>  
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


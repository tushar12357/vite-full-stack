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
    question: "What is white-label, and how does it work?",
    answer:
      "White-label means you can completely customize our platform with your branding - logo, colors, domain name. Your clients will never know it's powered by CloserX. It looks and feels like your own product.",
  },
  {
    id: 2,
    question: "What is white-label, and how does it work?",
    answer:
      "White-label means you can completely customize our platform with your branding - logo, colors, domain name. Your clients will never know it's powered by CloserX. It looks and feels like your own product.",
  },
  {
    id: 3,
    question: "What is white-label, and how does it work?",
    answer:
      "White-label means you can completely customize our platform with your branding - logo, colors, domain name. Your clients will never know it's powered by CloserX. It looks and feels like your own product.",
  },
  {
    id: 4,
    question: "What is white-label, and how does it work?",
    answer:
      "White-label means you can completely customize our platform with your branding - logo, colors, domain name. Your clients will never know it's powered by CloserX. It looks and feels like your own product.",
  },
  {
    id: 5,
    question: "What is white-label, and how does it work?",
    answer:
      "White-label means you can completely customize our platform with your branding - logo, colors, domain name. Your clients will never know it's powered by CloserX. It looks and feels like your own product.",
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
    <section className="bg-white px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm md:text-base text-gray-700 font-medium uppercase">
              FAQ's
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers about our services. Reach out to us directly for
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
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-8">
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
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed pr-12">
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


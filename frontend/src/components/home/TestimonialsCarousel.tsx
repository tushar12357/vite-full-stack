import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "CloserX transformed our agency overnight. We went from manual calling to a fully automated, branded platform in less than 24 hours. Our clients are blown away by the white-label experience.",
      author: "Zara Montgomery",
      title: "Founder & CEO",
      company: "SalesPro Agency",
      avatar: "ZM",
      result: "↑ 300% ROI",
    },
    {
      quote: "The white-label capabilities are incredible. We can now offer AI calling as our own product, and our MRR has increased by 250% in just 3 months.",
      author: "Kenji Nakamura",
      title: "Director of Operations",
      company: "CallMaster Solutions",
      avatar: "MC",
      result: "50 hours saved/month",
    },
    {
      quote: "Best investment we've made. The platform pays for itself within the first week. Setup was incredibly simple, and the support team is phenomenal.",
      author: "Emily Rodriguez",
      title: "Managing Partner",
      company: "VoiceAI Pro",
      avatar: "ER",
      result: "↑ 400% Lead Conversion",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => setActiveIndex(index);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 overflow-hidden">
      <div className="absolute inset-0 pattern-dots-light" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
            Loved by Agencies Worldwide
          </h2>
          <p className="text-xl text-slate-600">
            Don't just take our word for it
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-xl border border-slate-200 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-8xl text-primary/20 font-serif">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-2xl text-slate-700 italic leading-relaxed mb-8 relative z-10">
              {testimonials[activeIndex].quote}
            </p>

            {/* Author Section */}
            <div className="flex items-center gap-5 relative z-10">
              {/* Avatar */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl border-3 border-primary/20 shadow-lg">
                {testimonials[activeIndex].avatar}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-900">{testimonials[activeIndex].author}</h4>
                <p className="text-sm font-medium text-slate-600">{testimonials[activeIndex].title}</p>
                <p className="text-sm text-slate-500">{testimonials[activeIndex].company}</p>
              </div>

              {/* Result Badge */}
              <div className="hidden md:block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm rounded-full shadow-lg animate-pulse">
                {testimonials[activeIndex].result}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
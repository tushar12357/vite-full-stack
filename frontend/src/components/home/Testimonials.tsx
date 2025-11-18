
interface Testimonial {
  id: number;
  name: string;
  role?: string;
  profileInitial: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hannah Reed",
    profileInitial: "H",
    text: "Well, simply amazing! My team loves it.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    profileInitial: "S",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 3,
    name: "Michael Chen",
    profileInitial: "M",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Director",
    profileInitial: "E",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 5,
    name: "David Wilson",
    profileInitial: "D",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 6,
    name: "Jessica Martinez",
    role: "Operations Manager",
    profileInitial: "J",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 7,
    name: "Hannah Ward",
    role: "Freelance",
    profileInitial: "H",
    text: "Using Flowline gave us a polished SaaS homepage in less than a week. The layout is clear and conversion-focused.",
  },
  {
    id: 8,
    name: "Robert Taylor",
    profileInitial: "R",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 9,
    name: "Lisa Anderson",
    role: "Product Manager",
    profileInitial: "L",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-[#F9FAFB] rounded-2xl p-6 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        {/* Profile Circle */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {testimonial.profileInitial}
          </span>
        </div>
        
        {/* Name and Role */}
        <div className="flex-1 min-w-0">
          <h4 className="font-normal text-gray-900 text-[14px] mb-0.5">
            {testimonial.name}
          </h4>
          {testimonial.role && (
            <p className="text-[12px] text-[#6B7280] font-medium">{testimonial.role}</p>
          )}
        </div>
      </div>
      
      {/* Testimonial Text */}
      <p className="text-[#6B7280] leading-relaxed text-[12px] font-medium">
        "{testimonial.text}"
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-2 py-1 rounded-[6px] bg-[#F9FAFB] border text-[12px] border-gray-200 md:text-[12px] text-[#111827] ">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold poppins text-[#111827] my-4 max-w-4xl mx-auto leading-3">
            Don&apos;t take it from us,<br/> hear it from our users
          </h2>
          <p className="text-[12px] md:text-[14px] text-gray-600 max-w-2xl mx-auto font-medium">
          At CloserX, we believe in the power of<br/> connection and collaboration.
          </p>
        </div>

        {/* Mosaic Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid mb-6 md:mb-8">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


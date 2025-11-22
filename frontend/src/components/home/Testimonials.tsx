import testimonial1 from "@/assets/testimonial/1.png";
import testimonial2 from "@/assets/testimonial/2.png";
import testimonial3 from "@/assets/testimonial/3.png";
import testimonial4 from "@/assets/testimonial/4.png";
import testimonial5 from "@/assets/testimonial/5.png";
import testimonial6 from "@/assets/testimonial/6.png";
import testimonial7 from "@/assets/testimonial/7.png";
import testimonial8 from "@/assets/testimonial/8.png";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  profileImage: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hannah Reed",
    profileImage: testimonial1,
    text: "Well, simply amazing! My team loves it.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    profileImage: testimonial2,
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 3,
    name: "Michael Chen",
    profileImage: testimonial3,
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Director",
    profileImage: testimonial4,
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 5,
    name: "David Wilson",
    profileImage: testimonial5,
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 6,
    name: "Jessica Martinez",
    role: "Operations Manager",
    profileImage: testimonial6,
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 7,
    name: "Hannah Ward",
    role: "Freelance",
    profileImage: testimonial7,
    text: "Using Flowline gave us a polished SaaS homepage in less than a week. The layout is clear and conversion-focused.",
  },
  {
    id: 8,
    name: "Robert Taylor",
    profileImage: testimonial8,
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 9,
    name: "Lisa Anderson",
    role: "Product Manager",
    profileImage: testimonial1,
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={testimonial.profileImage} 
        alt={testimonial.name}
        className="w-full h-auto object-cover"
      />
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


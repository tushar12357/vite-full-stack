import { useEffect } from "react";
import trustPilot from "@/assets/tp.png";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  profileImage: string;
  text: string;
}

const testimonials: Testimonial[] = [

  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    profileImage: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/6926ea001a0c187536de57e1.png",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 3,
    name: "Michael Chen",
    profileImage: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/6926ea04fbd3443d360d09ad.png",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 5,
    name: "David Wilson",
    profileImage: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/6926ea104ee4a35f9b332a88.png",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 6,
    name: "Jessica Martinez",
    role: "Operations Manager",
    profileImage: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/6926ea184ee4a3a462332bad.png",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  },
  {
    id: 8,
    name: "Robert Taylor",
    profileImage: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/6926ea224ee4a344e9332d13.png",
    text: "I've been using this for about 6 months now and it's been a game changer for our business. The amount of time it saves us is incredible. Highly recommend to anyone looking to streamline their workflow.",
  }
];

const testimonialVideos: Array<{ id: number; url: string; name: string; agency: string }> = [
  { id: 1, name: "Hannah Reed", agency: "Epix Ai Solution", url: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69245ef4eb10143a9cf36e32.mov" },
  { id: 2, name: "Sarah Johnson", agency: "Hidden", url: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69245ef446b2e755937dd94c.mov" },
  { id: 3, name: "Christian Rivera", agency: "Enix.Ai", url: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69245ef4a6fefe5124388f85.mp4" },
  { id: 4, name: "Dan", agency: "Ai Bot Agency", url: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69245ef4a6fefe2a4c388f84.mov" },
  { id: 5, name: "David Wilson", agency: "Ai Agency Wealth", url: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69245ef4a5fc8d9567c1cbb7.mov" },
  { id: 6, name: "Jessica Martinez", agency: "Martinez Media", url: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69245ef4c61b110c7b085e59.mp4" },
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

const TestimonialVideoCard = ({ url, name, agency }: { url: string; name: string; agency: string }) => (
  <div className="flex flex-col gap-4">
    <div className="rounded-3xl overflow-hidden shadow-xl bg-black/80 border border-white/10">
      <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
        <video
          src={url}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster=""
        />
      </div>
    </div>
    <p className="text-center font-semibold text-gray-900 text-lg">
      {name}, <span className="text-gray-600 font-medium">{agency}</span>
    </p>
  </div>
);

const Testimonials = () => {
  useEffect(() => {
    testimonials.forEach((testimonial) => {
      const img = new Image();
      img.src = testimonial.profileImage;
    });
  }, []);

  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-2 py-1 rounded-[6px] bg-[#F9FAFB] border text-[12px] border-gray-200 md:text-[12px] text-[#111827] ">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold poppins text-[#111827] my-4 max-w-4xl mx-auto leading-3">
            Don&apos;t take it from us,<br /> hear it from our users
          </h2>
          <p className="text-[12px] md:text-[14px] text-gray-600 max-w-2xl mx-auto font-medium">
            At CloserX, we believe in the power of<br /> connection and collaboration.
          </p>
          <div className="flex justify-center mt-6">
            <img src={trustPilot} alt="Trustpilot Reviews" className="h-8 md:h-10 w-auto" />
          </div>
        </div>

        {/* Mosaic Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 gap-8 md:gap-10 space-y-8 md:space-y-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid mb-8 md:mb-10">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Testimonial Videos */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold text-[#111827] text-center mb-8">
            Watch their stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialVideos.map((video) => (
              <TestimonialVideoCard key={video.id} url={video.url} name={video.name} agency={video.agency} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


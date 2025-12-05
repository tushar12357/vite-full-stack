import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import delawareImage from "@/assets/locations/delware.jpeg";
import torontoImage from "@/assets/locations/toranto.jpg";
import dubaiImage from "@/assets/locations/dubai.jpg";

type Location = {
  code: string;
  city: string;
  country: string;
  displayCountry: string;
  address: string;
  phone: string;
  email: string;
  availability: string;
  image: string;
};

const LOCATIONS: Location[] = [
  {
    code: "US",
    city: "Delaware",
    country: "USA",
    displayCountry: "USA",
    address: "8 The Green, Suite R, City of Dover, Delaware, USA",
    phone: "+1650-585-3005",
    email: "info@closerx.ai",
    availability: "Available 24/7",
    image: delawareImage,
  },
  {
    code: "CA",
    city: "Toronto",
    country: "Canada",
    displayCountry: "Canada",
    address: "161 Bay Street, Suite 2700, Toronto, Ontario, Canada",
    phone: "+1416-915-9005",
    email: "ca@closerx.ai",
    availability: "Mon–Fri · 9am–7pm EST",
    image: torontoImage,
  },
  {
    code: "AE",
    city: "Dubai",
    country: "UAE",
    displayCountry: "UAE",
    address: "Level 19, Dubai Marina Plaza, Dubai, United Arab Emirates",
    phone: "+9714-269-9980",
    email: "me@closerx.ai",
    availability: "Sun–Thu · 9am–6pm GST",
    image: dubaiImage,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    hearAbout: "",
  });

  const [activeLocation, setActiveLocation] = useState<Location>(LOCATIONS[0]);
  const [iframeUrl, setIframeUrl] = useState(
  "https://link.closerx.ai/widget/form/7jDa7BrJDhVWuhSkKUek"
);


  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const params = new URLSearchParams({
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    companyName: formData.companyName,
    industry: formData.industry,
    hearAbout: formData.hearAbout,
  });

  // Update iframe URL with query params
  setIframeUrl(
    `https://link.closerx.ai/widget/form/7jDa7BrJDhVWuhSkKUek?${params.toString()}`
  );

  // Optional: Scroll to iframe after submit
  document.getElementById("contact-iframe")?.scrollIntoView({ behavior: "smooth" });
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-28">
        {/* Contact Form Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-black border border-black-700 rounded-lg text-sm text-white font-medium mb-6">
              Contact Us
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Please Provide Your Details
            </h1>
            
            <p className="text-base text-gray-400 mb-12 max-w-2xl mx-auto">
              Help us serve you better. Your information is secure and confidential.
            </p>
              {/* Noise Overlay */}
              {/* <div 
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  opacity: 0.25
                }}
              /> */}
              
           <div className="relative z-10">
            <iframe
              id="contact-iframe"
              src={iframeUrl}
             style={{ width: "100%", height: "2500px", border: "none", borderRadius: "12px" }}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-height="930"
              data-form-name="Closerx form created by aman"
              data-form-id="7jDa7BrJDhVWuhSkKUek"
              title="CloserX Form"
            ></iframe>

            <script src="https://link.closerx.ai/js/form_embed.js"></script>
            </div>              
          </div>
        </section>

        {/* Ways to reach us Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ways to reach us</h2>
            <p className="text-base text-gray-400 mb-12 max-w-3xl">
              Have questions or need personalized assistance? We're here to help so reach out to our team.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {LOCATIONS.map((location) => {
                const isActive = activeLocation.code === location.code;
                return (
                  <button
                    key={location.code}
                    onClick={() => setActiveLocation(location)}
                    className={`rounded-2xl p-6 flex flex-col items-center text-center transition-all border bg-[#0D0D0D] ${
                      isActive
                        ? "border-white text-white shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                        : "border-gray-800 text-white/80 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70 mb-4">
                      {location.code}
                    </span>
                    <h3 className="text-2xl font-semibold text-white mb-1">{location.city}</h3>
                    <p className="text-sm text-gray-400">{location.displayCountry}</p>
                  </button>
                );
              })}
            </div>

            {/* Contact Information Box */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                <img
                  src={activeLocation.image}
                  alt={`${activeLocation.city} office`}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-2">CloserX.AI</h3>
                <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-6">
                  {activeLocation.code} · {activeLocation.city}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <p className="text-base text-gray-300">
                      {activeLocation.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-white flex-shrink-0" />
                    <a
                      href={`tel:${activeLocation.phone.replace(/[^+\d]/g, "")}`}
                      className="text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {activeLocation.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-white flex-shrink-0" />
                    <a
                      href={`mailto:${activeLocation.email}`}
                      className="text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {activeLocation.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageSquare className="w-5 h-5 text-white flex-shrink-0" />
                    <p className="text-base text-gray-300">{activeLocation.availability}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-20 md:py-32 px-4 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#0F0F0F] border border-white/10 rounded-[32px] p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                  Start using an AI agent today
                </h2>
                <p className="text-base md:text-lg text-white/70">
                  Join our growing network of partners and unlock new opportunities with AI‑driven customer engagement.
                </p>
              </div>
              <a href="/contact" className="mt-8 inline-flex items-center justify-center bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-base font-semibold px-8 py-3 rounded-full shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:scale-[1.01] transition-transform">
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

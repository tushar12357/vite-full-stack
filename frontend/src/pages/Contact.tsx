import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 pattern-dots-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              📧 Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "info@closerx.ai", link: "mailto:info@closerx.ai" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
                { icon: MapPin, title: "Office", value: "San Francisco, CA", link: "#" },
                { icon: MessageSquare, title: "Live Chat", value: "Available 24/7", link: "#" },
              ].map((contact, idx) => (
                <a key={idx} href={contact.link} className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-elegant transition-all">
                  <contact.icon className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.title}</div>
                    <div className="text-lg font-semibold">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-input bg-background" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-input bg-background" />
                <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg border border-input bg-background"></textarea>
                <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-glow transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Palette, Globe, Crown, Sparkles } from "lucide-react";

const WhiteLabel = () => {
  return (
    <div className="min-h-screen bg-gradient-dark pattern-dots-dark text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-6">
              🎨 Most Popular
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Brand. Your Platform.
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Completely rebrand CloserX as your own product. Custom domains, logos, colors, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              { icon: Palette, title: "Full Branding Control", desc: "Customize every color, logo, and element" },
              { icon: Globe, title: "Custom Domains", desc: "Host on your own domain name" },
              { icon: Crown, title: "White-Label Portal", desc: "Client-facing dashboard with your branding" },
              { icon: Sparkles, title: "Premium Features", desc: "All features under your brand name" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhiteLabel;

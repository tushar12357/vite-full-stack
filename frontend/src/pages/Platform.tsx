import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, BarChart3, Zap, Shield } from "lucide-react";

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 pattern-dots-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              Platform Overview
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Everything You Need in One Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete AI calling solution with white-label capabilities, advanced analytics, and seamless integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              { icon: Bot, title: "AI Voice Agents", desc: "Natural-sounding AI that handles calls 24/7" },
              { icon: BarChart3, title: "Real-Time Analytics", desc: "Track performance metrics as they happen" },
              { icon: Zap, title: "Lightning Fast", desc: "Response times under 30 seconds" },
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption and compliance" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-card p-8 rounded-2xl border border-border hover:shadow-elegant transition-all">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Platform;

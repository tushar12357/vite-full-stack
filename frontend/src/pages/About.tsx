import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 pattern-dots-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              ℹ️ About Us
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Revolutionizing Business Communication
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make AI-powered calling accessible to every business, regardless of size.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Target, title: "Our Mission", desc: "Democratize AI calling technology" },
              { icon: Users, title: "Our Team", desc: "50+ AI and telecom experts" },
              { icon: Lightbulb, title: "Innovation", desc: "Constantly pushing boundaries" },
              { icon: Rocket, title: "Growth", desc: "10,000+ businesses trust us" },
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-elegant transition-all">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

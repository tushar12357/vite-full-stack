import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mic, Brain, Languages, MessageSquare } from "lucide-react";

const VoiceAgents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 pattern-dots-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-secondary/10 rounded-full text-secondary text-sm font-semibold mb-6">
              🎙️ AI Voice Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Human-Like AI Voice Agents
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deploy intelligent voice agents that sound natural, understand context, and deliver exceptional customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Mic, title: "Natural Voice", desc: "Ultra-realistic speech synthesis" },
              { icon: Brain, title: "Smart AI", desc: "GPT-4 powered conversations" },
              { icon: Languages, title: "Multilingual", desc: "50+ languages supported" },
              { icon: MessageSquare, title: "Context Aware", desc: "Remembers conversation history" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all text-center">
                <feature.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VoiceAgents;

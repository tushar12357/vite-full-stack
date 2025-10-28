import { Rocket, Calendar, Check, CreditCard, Zap } from "lucide-react";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { GradientOrbs } from "@/components/ui/gradient-orbs";

const FinalCTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-purple-600 to-secondary py-24 overflow-hidden">
      <div className="absolute inset-0 pattern-dots-dark" />
      <FloatingShapes count={10} theme="dark" />
      <GradientOrbs count={3} />

      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        {/* Headline */}
        <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
          Ready to 10X Your Agency Revenue?
        </h2>

        {/* Subheadline */}
        <p className="text-2xl text-white/95 mb-12 font-medium">
          Join 500+ agencies who scaled their business with CloserX
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          <button className="group flex items-center gap-3 px-10 py-5 bg-white text-primary text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1 transition-all">
            <Rocket size={24} className="group-hover:rotate-12 transition-transform" />
            Start Free Trial
          </button>
          <button className="group flex items-center gap-3 px-10 py-5 bg-transparent border-3 border-white text-white text-lg font-bold rounded-xl backdrop-blur-sm hover:bg-white hover:text-primary hover:scale-105 transition-all">
            <Calendar size={24} />
            Schedule Demo
          </button>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          <div className="flex items-center gap-2 text-white/90">
            <Check size={24} className="text-white" />
            <span className="font-medium">14-day free trial</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CreditCard size={24} className="text-white" />
            <span className="font-medium">No credit card required</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Zap size={24} className="text-white" />
            <span className="font-medium">Setup in 24 hours</span>
          </div>
        </div>

        {/* Social Proof Avatars */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {['SJ', 'MC', 'ER', 'DK', 'AL', 'TM', 'RW', 'KP'].map((initials, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-slate-200 flex items-center justify-center text-primary font-bold text-sm border-3 border-white shadow-lg"
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-white/80 text-sm font-medium">
            Join 500+ agencies already using CloserX
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
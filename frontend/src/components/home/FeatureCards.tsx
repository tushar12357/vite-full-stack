import { Phone, Clock, RotateCw, CreditCard, Sparkles, CheckCircle2, ArrowRight, Timer, RefreshCw, PhoneCall, Wallet } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: Clock,
      bigIcon: Timer,
      title: "AI-Powered Callback Scheduling",
      shortTitle: "Smart Callbacks",
      description: "AI understands customer requests like \"call me after 5 minutes\" or \"call me in 1 hour\" and schedules callbacks automatically.",
      gradient: "from-blue-500 via-cyan-500 to-teal-400",
      glowColor: "rgba(59, 130, 246, 0.5)",
      features: [
        "Natural language processing",
        "Auto timezone detection",
        "Smart reminders",
        "Calendar sync"
      ],
      stat: { value: "99.8%", label: "Accuracy" }
    },
    {
      icon: RotateCw,
      bigIcon: RefreshCw,
      title: "Automated Phone Number Rotation",
      shortTitle: "Number Rotation",
      description: "Automatically rotates phone numbers after specified calls to prevent spam flags and maintain high deliverability rates.",
      gradient: "from-purple-500 via-pink-500 to-rose-400",
      glowColor: "rgba(168, 85, 247, 0.5)",
      features: [
        "Smart rotation logic",
        "Spam prevention",
        "Unlimited pool",
        "Health monitoring"
      ],
      stat: { value: "100%", label: "Deliverability" }
    },
    {
      icon: Phone,
      bigIcon: PhoneCall,
      title: "Intelligent Auto-Dialing",
      shortTitle: "Auto Dialer",
      description: "Automatically redials contacts whose calls weren't connected. Set it up once and let the system handle follow-ups until connection.",
      gradient: "from-emerald-500 via-green-500 to-lime-400",
      glowColor: "rgba(16, 185, 129, 0.5)",
      features: [
        "Smart retry timing",
        "Optimal scheduling",
        "Rate optimization",
        "Auto-pause"
      ],
      stat: { value: "3x", label: "More Connections" }
    },
    {
      icon: CreditCard,
      bigIcon: Wallet,
      title: "Payment Integration Hub",
      shortTitle: "Payments",
      description: "Create and manage client subscriptions effortlessly. Fully automated resale process for smooth recurring billing with Stripe, PayPal, and Razorpay.",
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
      glowColor: "rgba(249, 115, 22, 0.5)",
      features: [
        "Multiple processors",
        "Auto billing",
        "Revenue analytics",
        "Instant updates"
      ],
      stat: { value: "$0", label: "Setup Cost" }
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Moving Dots Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="dots-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-300 uppercase tracking-wider">Intelligent Automation</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Powerful Features That Work
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              24/7 on Autopilot
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Advanced automation that handles complex tasks intelligently, so you can focus on what matters most
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ 
                animation: 'fadeInScale 0.6s ease-out forwards',
                animationDelay: `${index * 150}ms`,
                opacity: 0
              }}
            >
              {/* Outer Glow Container */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
                style={{ background: `linear-gradient(135deg, ${feature.glowColor}, transparent)` }}
              ></div>

              {/* Main Card */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-2">
                
                {/* Top Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.gradient}`}></div>

                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>

                {/* Large Background Icon */}
                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <feature.bigIcon className="w-48 h-48 text-white" strokeWidth={0.5} />
                </div>

                {/* Content Container */}
                <div className="relative p-8 lg:p-10">
                  
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-8">
                    {/* Icon */}
                    <div className="relative">
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <feature.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                      </div>
                      {/* Icon Glow */}
                      <div 
                        className="absolute inset-0 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${feature.glowColor}, transparent)` }}
                      ></div>
                    </div>

                    {/* Stat Badge */}
                    <div className="text-right">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-400 mt-1">
                        {feature.stat.label}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-slate-300 leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {feature.features.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="group/pill flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                      >
                        <CheckCircle2 className={`w-4 h-4 text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text`} strokeWidth={2.5} />
                        <span className="text-sm font-medium text-slate-200 group-hover/pill:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full group/btn relative overflow-hidden rounded-2xl p-[2px] transition-all duration-300 hover:scale-[1.02]`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient}`}></div>
                    <div className="relative flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 rounded-2xl group-hover/btn:bg-transparent transition-all duration-300">
                      <span className="text-base font-bold text-white">Explore Feature</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "100%", label: "Automated" },
            { value: "24/7", label: "Active" },
            { value: "99.9%", label: "Uptime" },
            { value: "< 1s", label: "Response Time" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .dots-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .dot {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(147, 197, 253, 0.6);
          border-radius: 50%;
          animation: moveDot linear infinite;
          box-shadow: 0 0 10px rgba(147, 197, 253, 0.8), 0 0 20px rgba(147, 197, 253, 0.4);
        }

        @keyframes moveDot {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(50px, -50px);
          }
          50% {
            transform: translate(100px, 0);
          }
          75% {
            transform: translate(50px, 50px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .dot:nth-child(2n) {
          background: rgba(167, 139, 250, 0.6);
          box-shadow: 0 0 10px rgba(167, 139, 250, 0.8), 0 0 20px rgba(167, 139, 250, 0.4);
          animation-direction: reverse;
        }

        .dot:nth-child(3n) {
          background: rgba(244, 114, 182, 0.6);
          box-shadow: 0 0 10px rgba(244, 114, 182, 0.8), 0 0 20px rgba(244, 114, 182, 0.4);
          width: 2px;
          height: 2px;
        }

        .dot:nth-child(4n) {
          background: rgba(52, 211, 153, 0.6);
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.8), 0 0 20px rgba(52, 211, 153, 0.4);
          animation-duration: 20s;
        }

        .dot:nth-child(5n) {
          background: rgba(251, 191, 36, 0.6);
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.4);
          width: 4px;
          height: 4px;
        }
      `}</style>
    </section>
  );
};

export default FeatureCards;
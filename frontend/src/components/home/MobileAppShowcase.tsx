import { Phone, BarChart3, Bell, Mic, Wifi, Lock } from "lucide-react";
import { GradientOrbs } from "@/components/ui/gradient-orbs";

const MobileAppShowcase = () => {
  const features = [
    {
      icon: Phone,
      title: "Manage Calls Anywhere",
      description: "Handle calls from your pocket. Never miss an opportunity.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboard",
      description: "Monitor performance metrics as they happen.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get instant alerts for important events.",
    },
    {
      icon: Mic,
      title: "Voice Control",
      description: "Control agents with voice commands.",
    },
    {
      icon: Wifi,
      title: "Offline Mode",
      description: "Access data even without internet.",
    },
    {
      icon: Lock,
      title: "Biometric Security",
      description: "Face ID and fingerprint protection.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots-dark" />
      <GradientOrbs count={2} colors={['#8B5CF6', '#06B6D4']} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-cyan-500/30">
            Mobile App
          </span>
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Manage Calls On The Go
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            iOS and Android apps for agents and admins
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Mockups */}
          <div className="relative h-[700px]">
            {/* Back Phone */}
            <div
              className="absolute left-12 top-8 w-72 h-[600px] bg-slate-800 rounded-[3rem] border-8 border-slate-900 shadow-2xl transform rotate-6 opacity-70"
              style={{ perspective: '1000px' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-primary rounded-[2.5rem] overflow-hidden p-6">
                <div className="text-white/60 text-sm mb-4">Call in Progress...</div>
                <div className="flex justify-center items-center h-64">
                  {/* Animated Waveform */}
                  <div className="flex items-end gap-1 h-32">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-white/80 rounded-full animate-pulse"
                        style={{
                          height: `${30 + Math.random() * 70}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-white text-2xl font-bold text-center">04:32</div>
              </div>
            </div>

            {/* Front Phone */}
            <div className="absolute left-0 top-0 w-80 h-[650px] bg-slate-900 rounded-[3rem] border-8 border-slate-950 shadow-2xl z-10">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Phone Notch */}
                <div className="h-8 bg-slate-900 rounded-b-3xl mx-auto w-40" />

                {/* Phone Screen Content */}
                <div className="p-6 bg-gradient-to-b from-slate-50 to-white h-full overflow-y-auto">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Dashboard</h3>
                      <p className="text-xs text-slate-500">Live Activity</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
                      CX
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-primary/10 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-primary">247</div>
                      <div className="text-xs text-slate-600">Active Calls</div>
                    </div>
                    <div className="bg-green-500/10 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-xs text-slate-600">Success Rate</div>
                    </div>
                  </div>

                  {/* Recent Calls */}
                  <div className="space-y-2">
                    {[
                      { name: "Aleksandr Volkov", status: "completed", time: "2m ago" },
                      { name: "Yuki Tanaka", status: "active", time: "now" },
                      { name: "Dante Rossi", status: "completed", time: "5m ago" },
                    ].map((call, idx) => (
                      <div key={idx} className="bg-slate-100 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-sm">
                          {call.name[0]}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-slate-900">{call.name}</div>
                          <div className="text-xs text-slate-500">{call.time}</div>
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            call.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-slate-400'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notifications */}
            {[
              { text: "📞 New call started", x: -20, y: 100, delay: 0 },
              { text: "✅ Appointment booked", x: 300, y: 200, delay: 1 },
              { text: "📊 Goal achieved!", x: -30, y: 400, delay: 2 },
            ].map((notif, idx) => (
              <div
                key={idx}
                className="absolute bg-white rounded-xl shadow-2xl p-3 text-xs font-semibold text-slate-900 border border-slate-200 animate-float"
                style={{
                  left: notif.x,
                  top: notif.y,
                  animationDelay: `${notif.delay}s`,
                  animationDuration: '3s',
                }}
              >
                {notif.text}
              </div>
            ))}
          </div>

          {/* Right: Features List */}
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/12 transition-all group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MobileAppShowcase;
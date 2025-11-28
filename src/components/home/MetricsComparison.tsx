import { TrendingDown, TrendingUp, Phone, Clock, DollarSign, Users, BarChart3, Wallet } from "lucide-react";

const MetricsComparison = () => {
  const beforeMetrics = [
    { icon: Phone, label: "Call Volume", value: "50", unit: "calls/day", trend: "low", color: "text-red-500" },
    { icon: Clock, label: "Response Time", value: "2.5 hrs", unit: "average", trend: "slow", color: "text-red-500" },
    { icon: DollarSign, label: "Cost per Call", value: "$8.50", unit: "per call", trend: "high", color: "text-red-500" },
    { icon: BarChart3, label: "Conversion Rate", value: "12%", unit: "conversion", trend: "low", color: "text-red-500" },
    { icon: Users, label: "Team Size", value: "8", unit: "agents needed", trend: "large", color: "text-red-500" },
    { icon: Wallet, label: "Monthly Cost", value: "$12,750", unit: "per month", trend: "expensive", color: "text-red-500" },
  ];

  const afterMetrics = [
    { icon: Phone, label: "Call Volume", value: "2,500+", unit: "calls/day", trend: "↑ 5000%", badge: "50x more", color: "text-green-500" },
    { icon: Clock, label: "Response Time", value: "< 30 sec", unit: "instant", trend: "↑ 300x faster", badge: "Instant", color: "text-green-500" },
    { icon: DollarSign, label: "Cost per Call", value: "$0.20", unit: "per call", trend: "↓ 97% cheaper", badge: "42x cheaper", color: "text-green-500" },
    { icon: BarChart3, label: "Conversion Rate", value: "34%", unit: "conversion", trend: "↑ 183%", badge: "2.8x better", color: "text-green-500" },
    { icon: Users, label: "Team Size", value: "1", unit: "admin only", trend: "↓ 87%", badge: "Scale freely", color: "text-green-500" },
    { icon: Wallet, label: "Monthly Cost", value: "$999", unit: "per month", trend: "↓ 92% savings", badge: "All-in", color: "text-green-500" },
  ];

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-diagonal" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Results
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
            The Numbers Don't Lie
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how CloserX transforms business metrics
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-12 relative">
          {/* Center Divider with Transform Label */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl border-4 border-white animate-pulse">
              <span className="text-white font-bold text-sm">TRANSFORM</span>
            </div>
            <div className="absolute top-1/2 left-full ml-4 text-4xl animate-bounce">➜</div>
            <div className="absolute top-1/2 right-full mr-4 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>➜</div>
          </div>

          {/* Before CloserX */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 border-2 border-slate-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-4xl">😞</div>
                <h3 className="text-2xl font-bold text-slate-900">Traditional Calling</h3>
              </div>

              <div className="space-y-4">
                {beforeMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border-2 border-red-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                          <metric.icon className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-600">{metric.label}</div>
                          <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-semibold ${metric.color} flex items-center gap-1`}>
                          <TrendingDown className="w-4 h-4" />
                          {metric.trend}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-red-500 text-white rounded-2xl p-6 text-center">
                <div className="text-sm font-semibold mb-1">Total Annual Cost</div>
                <div className="text-4xl font-extrabold">$153,000/year</div>
              </div>
            </div>
          </div>

          {/* After CloserX */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-8 border-2 border-primary shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-4xl">🚀</div>
                <h3 className="text-2xl font-bold text-white">AI-Powered Calling</h3>
              </div>

              <div className="space-y-4">
                {afterMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/30 shadow-lg hover:bg-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                          <metric.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-white/80">{metric.label}</div>
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-green-300 flex items-center gap-1 mb-1">
                          <TrendingUp className="w-4 h-4" />
                          {metric.trend}
                        </div>
                        {metric.badge && (
                          <span className="inline-block px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                            {metric.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-500 text-white rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-50" />
                <div className="relative z-10">
                  <div className="text-sm font-semibold mb-1">Total Annual Cost</div>
                  <div className="text-4xl font-extrabold mb-2">$11,988/year</div>
                  <div className="inline-block px-4 py-2 bg-white text-green-600 rounded-full font-bold text-lg animate-pulse">
                    SAVE $141,012/year
                  </div>
                </div>
              </div>
            </div>

            {/* Sparkle Effects */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl animate-ping"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 20}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s',
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-slate-100 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Want these results for your business?
          </h3>
          <button className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg">
            See Your Custom ROI →
          </button>
        </div>
      </div>
    </section>
  );
};

export default MetricsComparison;
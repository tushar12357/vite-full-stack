import { useState } from "react";
import { Zap, Phone, Clock, Database, MessageSquare, BarChart3, ChevronRight } from "lucide-react";
import { GradientOrbs } from "@/components/ui/gradient-orbs";

const WorkflowShowcase = () => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const nodes = [
    { 
      id: 1, 
      icon: Zap, 
      label: "Lead Captured", 
      description: "New lead enters your system",
      color: "from-emerald-400 to-teal-500", 
      x: 10, 
      y: 50 
    },
    { 
      id: 2, 
      icon: Phone, 
      label: "AI Calls", 
      description: "Instant outreach within seconds",
      color: "from-blue-400 to-indigo-500", 
      x: 30, 
      y: 30 
    },
    { 
      id: 3, 
      icon: Clock, 
      label: "Smart Schedule", 
      description: "Optimal timing for callbacks",
      color: "from-violet-400 to-purple-500", 
      x: 30, 
      y: 70 
    },
    { 
      id: 4, 
      icon: Database, 
      label: "CRM Sync", 
      description: "Auto-update all records",
      color: "from-cyan-400 to-blue-500", 
      x: 55, 
      y: 50 
    },
    { 
      id: 5, 
      icon: MessageSquare, 
      label: "Follow-Up SMS", 
      description: "Send confirmation message",
      color: "from-pink-400 to-rose-500", 
      x: 75, 
      y: 50 
    },
    { 
      id: 6, 
      icon: BarChart3, 
      label: "Analytics", 
      description: "Track & optimize results",
      color: "from-orange-400 to-amber-500", 
      x: 90, 
      y: 50 
    },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950/95 to-purple-950 py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px),
          linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full mb-6 border border-blue-400/20 backdrop-blur-sm">
            ⚡ No-Code Automation
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 max-w-3xl mx-auto leading-tight">
            Build <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Powerful Workflows</span> Without Writing Code
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Drag, drop, and connect. Your automation is live in minutes.
          </p>
        </div>

        {/* Modern Workflow Visualization */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/90 to-indigo-950/80 rounded-3xl border border-blue-500/20 backdrop-blur-xl p-8 lg:p-12 shadow-2xl">
            {/* Workflow Flow */}
            <div className="flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap">
              {/* Node 1: Lead Captured */}
              <div className="group relative">
                <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-white mb-2" />
                  <span className="text-white font-bold text-sm text-center px-2">Lead Captured</span>
                </div>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                  Instant trigger
                </div>
              </div>

              {/* Connection Line 1 */}
              <div className="hidden lg:block flex-1 relative">
                <div className="h-0.5 bg-gradient-to-r from-teal-500 via-blue-500 to-blue-500" style={{ backgroundSize: '200% 100%', animation: 'flow 2s linear infinite' }} />
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              </div>

              {/* Node 2: AI Calls */}
              <div className="group relative">
                <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <Phone className="w-10 h-10 lg:w-12 lg:h-12 text-white mb-2" />
                  <span className="text-white font-bold text-sm text-center px-2">AI Calls</span>
                </div>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                  Instant outreach
                </div>
              </div>

              {/* Connection Line 2 */}
              <div className="hidden lg:block flex-1 relative">
                <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-cyan-500" style={{ backgroundSize: '200% 100%', animation: 'flow 2s linear infinite', animationDelay: '0.3s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>

              {/* Node 3: CRM Sync */}
              <div className="group relative">
                <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <Database className="w-10 h-10 lg:w-12 lg:h-12 text-white mb-2" />
                  <span className="text-white font-bold text-sm text-center px-2">CRM Sync</span>
                </div>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                  Auto-update records
                </div>
              </div>

              {/* Connection Line 3 */}
              <div className="hidden lg:block flex-1 relative">
                <div className="h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-pink-500" style={{ backgroundSize: '200% 100%', animation: 'flow 2s linear infinite', animationDelay: '0.6s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>

              {/* Node 4: Follow-Up */}
              <div className="group relative">
                <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <MessageSquare className="w-10 h-10 lg:w-12 lg:h-12 text-white mb-2" />
                  <span className="text-white font-bold text-sm text-center px-2">Follow-Up SMS</span>
                </div>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                  Automated messaging
                </div>
              </div>

              {/* Connection Line 4 */}
              <div className="hidden lg:block flex-1 relative">
                <div className="h-0.5 bg-gradient-to-r from-rose-500 via-orange-500 to-orange-500" style={{ backgroundSize: '200% 100%', animation: 'flow 2s linear infinite', animationDelay: '0.9s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }} />
              </div>

              {/* Node 5: Analytics */}
              <div className="group relative">
                <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer">
                  <BarChart3 className="w-10 h-10 lg:w-12 lg:h-12 text-white mb-2" />
                  <span className="text-white font-bold text-sm text-center px-2">Analytics</span>
                </div>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                  Track performance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: "🎯", title: "Drag & Drop", desc: "Build workflows visually in minutes" },
            { icon: "⚡", title: "Instant Deploy", desc: "Changes go live immediately" },
            { icon: "🔄", title: "Smart Automation", desc: "Handles complex logic automatically" },
          ].map((feature, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800/60 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all group hover:scale-105">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all text-base flex items-center gap-3 mx-auto">
            Start Building Free
            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </section>
  );
};

export default WorkflowShowcase;
import { useEffect, useState } from "react";
import { Phone, TrendingUp, CheckCircle, Clock, RefreshCw, BarChart3, PhoneForwarded, MessageSquare, Database, BookOpen, Search, Zap, Calendar, FileText, Users } from "lucide-react";

// 100 diverse names for random selection
const NAMES = [
  "Aleksandr Volkov", "Priya Sharma", "Dante Rossi", "Mei Chen", "Kenji Nakamura",
  "Zara Montgomery", "Yuki Tanaka", "Hassan Al-Rashid", "Isabella Rodriguez", "Magnus Eriksson",
  "Amara Okonkwo", "Luca Bernardi", "Sakura Yamamoto", "Diego Martinez", "Fatima Hassan",
  "Oliver Thompson", "Aisha Patel", "Sebastian Mueller", "Ling Wong", "Rafael Santos",
  "Nadia Popov", "Antonio Moretti", "Jasmine Lee", "Viktor Novak", "Carmen Diaz",
  "Tariq Ibrahim", "Sofia Andersson", "Mateo Garcia", "Anastasia Petrov", "Jin Park",
  "Camila Silva", "Dmitri Sokolov", "Aria Jensen", "Marco Russo", "Leila Mansour",
  "Henrik Johansson", "Zainab Ahmed", "Lucas Fernandez", "Natasha Ivanov", "Kai Chen",
  "Elena Greco", "Omar Farah", "Nina Kuznetsov", "Alejandro Torres", "Aya Tanaka",
  "Matias Lopez", "Freya Nielsen", "Ravi Kumar", "Svetlana Morozov", "Gabriel Costa",
  "Amina Said", "Leonardo Conti", "Ingrid Larsen", "Hiroshi Sato", "Valentina Romano",
  "Ibrahim Khatib", "Astrid Bergman", "Takeshi Suzuki", "Mia Karlsson", "Paulo Oliveira",
  "Yasmin Khalil", "Felix Wagner", "Lucia Marino", "Ahmed Abdullah", "Elsa Lindberg",
  "Haruto Yamada", "Bianca Ricci", "Youssef Nasser", "Klara Gustafsson", "Javier Morales",
  "Katya Volkov", "Emilio Ferrari", "Layla Hassan", "Adrian Kowalski", "Chiara Esposito",
  "Karim Mansour", "Signe Hansen", "Mateo Alvarez", "Irina Popov", "Santiago Ramirez",
  "Nora Petersen", "Ryota Kobayashi", "Giulia Bianchi", "Tariq Aziz", "Astrid Olsen",
  "Hiroki Watanabe", "Luna Martinez", "Nikolai Romanov", "Sofia Moretti", "Omar Hassan",
  "Emma Johansson", "Liam Chen", "Aria Petrova", "Noah Santos", "Mila Rodriguez",
  "Ethan Nakamura", "Olivia Kim", "Lucas Tanaka", "Ava Fernandez", "Mason Li"
];

// AI action types that happen during calls
const AI_ACTIONS = [
  { type: "call_transfer", label: "Call Transfer", icon: PhoneForwarded, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
  { type: "sms_trigger", label: "SMS Triggered", icon: MessageSquare, color: "from-purple-500 to-pink-500", bgColor: "bg-purple-50", textColor: "text-purple-700" },
  { type: "mcp_trigger", label: "MCP Triggered", icon: Zap, color: "from-yellow-500 to-orange-500", bgColor: "bg-yellow-50", textColor: "text-yellow-700" },
  { type: "kb_check", label: "Knowledgebase Check", icon: BookOpen, color: "from-green-500 to-emerald-500", bgColor: "bg-green-50", textColor: "text-green-700" },
  { type: "google_search", label: "Live Data Search", icon: Search, color: "from-red-500 to-rose-500", bgColor: "bg-red-50", textColor: "text-red-700" },
  { type: "crm_update", label: "CRM Updated", icon: Database, color: "from-indigo-500 to-blue-500", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
  { type: "appointment", label: "Appointment Booked", icon: Calendar, color: "from-green-500 to-teal-500", bgColor: "bg-green-50", textColor: "text-green-700" },
  { type: "doc_sent", label: "Document Sent", icon: FileText, color: "from-slate-500 to-gray-500", bgColor: "bg-slate-50", textColor: "text-slate-700" },
  { type: "team_notify", label: "Team Notified", icon: Users, color: "from-pink-500 to-purple-500", bgColor: "bg-pink-50", textColor: "text-pink-700" },
];

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};

const getGradientForName = (name: string) => {
  const gradients = [
    "from-primary to-purple-600",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-600",
    "from-orange-500 to-red-500",
    "from-pink-500 to-rose-600",
    "from-indigo-500 to-blue-600",
    "from-purple-500 to-fuchsia-600",
    "from-teal-500 to-green-600",
  ];
  const index = name.charCodeAt(0) % gradients.length;
  return gradients[index];
};

const CallDashboard = () => {
  const [activeCalls, setActiveCalls] = useState(47);
  const [callsToday, setCallsToday] = useState(1247);
  const [conversionRate, setConversionRate] = useState(34.5);

  const [calls, setCalls] = useState<any[]>([
    { id: 1, name: "Aleksandr Volkov", status: "connected", duration: "2:34", durationSec: 154 },
    { id: 2, name: "Priya Sharma", status: "ringing", duration: "0:05", durationSec: 5 },
    { id: 3, name: "Dante Rossi", status: "completed", duration: "5:12", durationSec: 312, qualification: 'Qualified' },
    { id: 4, name: "Mei Chen", status: "connected", duration: "1:45", durationSec: 105 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCalls((prev) => prev + Math.floor(Math.random() * 3) - 1);
      setCallsToday((prev) => prev + Math.floor(Math.random() * 5));
      setConversionRate((prev) => Number((prev + (Math.random() - 0.5) * 0.5).toFixed(1)));

      // Simulate new call with random name from 100 names
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const status = ["ringing", "connected", "completed"][Math.floor(Math.random() * 3)] as any;
      const completedDuration = Math.floor(120 + Math.random() * 240); // 2-6 minutes
      
      // Random AI action for completed calls
      const aiAction = status === 'completed' ? AI_ACTIONS[Math.floor(Math.random() * AI_ACTIONS.length)] : undefined;
      
      const newCall: any = {
        id: Date.now(),
        name: randomName,
        status,
        duration: status === 'completed' ? `${Math.floor(completedDuration / 60)}:${String(completedDuration % 60).padStart(2, '0')}` : "0:05",
        durationSec: status === 'completed' ? completedDuration : 5,
        qualification: status === 'completed' ? (Math.random() < 0.6 ? 'Qualified' : 'Not Qualified') : undefined,
        aiAction: aiAction,
      };
      setCalls((prev: any[]) => [newCall, ...prev.slice(0, 5)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Increment durations for ongoing calls
  useEffect(() => {
    const tick = setInterval(() => {
      setCalls((prev: any[]) => prev.map((c: any) => {
        if (c.status === 'connected' || c.status === 'ringing') {
          const next = (c.durationSec ?? 0) + 5; // speed up: +5s per tick
          return {
            ...c,
            durationSec: next,
            duration: `${Math.floor(next / 60)}:${String(next % 60).padStart(2, '0')}`,
          };
        }
        return c;
      }));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  const statusColors = {
    ringing: "bg-yellow-500",
    connected: "bg-green-500",
    completed: "bg-blue-500",
    failed: "bg-red-500",
  };

  const statusLabels = {
    ringing: "Ringing",
    connected: "Connected",
    completed: "Completed",
    failed: "Failed",
  };

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-dots-animated" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Live Demo
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
            Watch Your Calls in Real-Time
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Beautiful analytics that update as your AI agents work
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-3xl p-8 shadow-2xl">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Live Dashboard</h3>
              <p className="text-sm text-slate-500">
                {new Date().toLocaleDateString()} • <span className="inline-flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Live</span>
              </p>
            </div>
            <RefreshCw className="w-6 h-6 text-slate-400 hover:text-primary cursor-pointer hover:rotate-180 transition-transform duration-500" />
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-extrabold text-slate-900 mb-1 transition-all">
                {activeCalls}
              </div>
              <div className="text-sm text-slate-600 mb-2">Active Calls</div>
              <div className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                <TrendingUp className="w-3 h-3" />
                ↑ 12%
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="w-8 h-8 text-purple-600 mb-3" />
              <div className="text-3xl font-extrabold text-slate-900 mb-1">
                {callsToday.toLocaleString()}
              </div>
              <div className="text-sm text-slate-600 mb-2">Calls in last 10 minutes</div>
              <div className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                <TrendingUp className="w-3 h-3" />
                ↑ 23%
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <div className="text-3xl font-extrabold text-slate-900 mb-1">
                {conversionRate}%
              </div>
              <div className="text-sm text-slate-600 mb-2">Conversion Rate</div>
              <div className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                <TrendingUp className="w-3 h-3" />
                ↑ 5.2%
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-8 h-8 text-secondary mb-3" />
              <div className="text-3xl font-extrabold text-slate-900 mb-1">4:32</div>
              <div className="text-sm text-slate-600 mb-2">Avg Duration</div>
              <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                → 0%
              </div>
            </div>
          </div>

          {/* Live Call Feed */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Live Call Feed
            </h4>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {calls.map((call, idx) => {
                const ActionIcon = call.aiAction?.icon;
                return (
                  <div
                    key={call.id}
                    className="group flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-slate-200"
                    style={{ animation: idx === 0 ? 'slide-in 0.5s ease-out' : 'none' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getGradientForName(call.name)} flex items-center justify-center text-white text-base font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                        {getInitials(call.name)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-base">{call.name}</div>
                        <div className="text-sm text-slate-500 flex items-center gap-2">
                          <Phone className="w-3 h-3" />
                          Outbound Call
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
                        {call.duration}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                            statusColors[call.status]
                          } ${call.status === 'connected' ? 'animate-pulse' : ''} shadow-sm`}
                        >
                          {statusLabels[call.status]}
                        </span>
                        <div className="flex items-center gap-2">
                          {call.qualification && (
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${call.qualification === 'Qualified' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-slate-200 text-slate-700 border border-slate-300'}`}>
                              {call.qualification}
                            </span>
                          )}
                          {call.aiAction && ActionIcon && (
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${call.aiAction.bgColor} ${call.aiAction.textColor} border border-current/20 flex items-center gap-1`}>
                              <ActionIcon className="w-3 h-3" />
                              {call.aiAction.label}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Waveform Visualization */}
          <div className="mt-6 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-end justify-around px-4 gap-1">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-primary to-secondary rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Dynamic AI Action Notifications */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {AI_ACTIONS.slice(0, 3).map((action, idx) => {
            const Icon = action.icon;
            return (
              <div 
                key={action.type}
                className="bg-white border-2 border-slate-200 hover:border-primary rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{ animation: `slide-in-right 0.5s ease-out ${idx * 0.1}s backwards` }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 text-sm mb-1">{action.label}</div>
                    <div className="text-xs text-slate-600 truncate">
                      {NAMES[idx % NAMES.length]} • Just now
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CallDashboard;
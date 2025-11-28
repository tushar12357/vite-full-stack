import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Clock, TrendingUp, Activity, Server, Database, Wifi, Shield, Calendar } from "lucide-react";

const UptimeSLA = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState<'operational' | 'degraded' | 'outage'>('operational');

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time and date
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const services = [
    { name: "API Services", status: "operational", uptime: "99.98%", icon: Server },
    { name: "Voice Calling", status: "operational", uptime: "99.99%", icon: Activity },
    { name: "Database", status: "operational", uptime: "99.97%", icon: Database },
    { name: "CDN Network", status: "operational", uptime: "100%", icon: Wifi },
    { name: "Authentication", status: "operational", uptime: "99.96%", icon: Shield },
  ];

  const uptimeHistory = [
    { month: "January 2025", uptime: "99.98%" },
    { month: "December 2024", uptime: "99.97%" },
    { month: "November 2024", uptime: "99.99%" },
    { month: "October 2024", uptime: "99.98%" },
    { month: "September 2024", uptime: "99.96%" },
    { month: "August 2024", uptime: "99.99%" },
  ];

  const slaCommitments = [
    { tier: "Enterprise", uptime: "99.9%", support: "24/7 Priority", response: "< 1 hour" },
    { tier: "Professional", uptime: "99.5%", support: "Business Hours", response: "< 4 hours" },
    { tier: "Starter", uptime: "99.0%", support: "Email Support", response: "< 24 hours" },
  ];

  const statusColors = {
    operational: {
      bg: "bg-green-500",
      text: "text-green-700",
      bgLight: "bg-green-50",
      border: "border-green-200",
      gradient: "from-green-500 to-emerald-600"
    },
    degraded: {
      bg: "bg-yellow-500",
      text: "text-yellow-700",
      bgLight: "bg-yellow-50",
      border: "border-yellow-200",
      gradient: "from-yellow-500 to-orange-600"
    },
    outage: {
      bg: "bg-red-500",
      text: "text-red-700",
      bgLight: "bg-red-50",
      border: "border-red-200",
      gradient: "from-red-500 to-rose-600"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      
      {/* Hero Section with Live Status */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          {/* System Status Indicator */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${statusColors[systemStatus].gradient} rounded-2xl shadow-2xl text-white`}>
              <div className="relative">
                <div className={`w-6 h-6 ${statusColors[systemStatus].bg} rounded-full animate-pulse`} />
                <div className={`absolute inset-0 w-6 h-6 ${statusColors[systemStatus].bg} rounded-full animate-ping opacity-75`} />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium uppercase tracking-wider opacity-90">System Status</div>
                <div className="text-2xl font-bold capitalize">{systemStatus}</div>
              </div>
            </div>
          </div>

          {/* Live Clock */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-slate-200">
                <div className="flex items-center gap-3 mb-4 justify-center text-slate-600">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Live System Time</span>
                </div>
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 font-mono">
                  {formatTime(currentTime)}
                </div>
                <div className="text-lg text-slate-600 font-medium">
                  {formatDate(currentTime)}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="text-sm text-slate-500">
                    Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-primary to-slate-900 bg-clip-text text-transparent leading-tight">
              Uptime & SLA Status
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Real-time system status, uptime monitoring, and service level agreements. 
              We're committed to providing 99.9% uptime for all our services.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-green-700 mb-2">99.98%</div>
              <div className="text-sm text-green-600 font-semibold">Current Month Uptime</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
              <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-700 mb-2">99.97%</div>
              <div className="text-sm text-blue-600 font-semibold">90-Day Average</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 border-2 border-purple-200 rounded-2xl p-8 text-center">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-purple-700 mb-2">24/7</div>
              <div className="text-sm text-purple-600 font-semibold">Monitoring Active</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Service Component Status</h2>
          
          <div className="space-y-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-900">{service.name}</div>
                        <div className="text-sm text-slate-500">Last 30 days: {service.uptime}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-lg border border-green-200 capitalize">
                        {service.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Uptime History */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Historical Uptime</h2>
          
          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-100 to-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Period
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Uptime Percentage
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {uptimeHistory.map((record, idx) => (
                    <tr key={record.month} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-slate-900 font-medium">{record.month}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-2xl font-bold text-slate-900">{record.uptime}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-lg border border-green-200">
                          <CheckCircle2 className="w-4 h-4" />
                          Excellent
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Commitments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Level Agreements</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our commitment to reliability across all pricing tiers. We guarantee uptime and provide 
              comprehensive support based on your subscription level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {slaCommitments.map((sla, idx) => (
              <div
                key={sla.tier}
                className={`relative bg-white rounded-2xl p-8 border-2 hover:shadow-2xl transition-all duration-300 ${
                  idx === 0 ? 'border-primary shadow-xl scale-105' : 'border-slate-200'
                }`}
              >
                {idx === 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase rounded-full">
                    Recommended
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{sla.tier}</h3>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {sla.uptime}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">Guaranteed Uptime</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Support Level</div>
                      <div className="text-sm text-slate-600">{sla.support}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Response Time</div>
                      <div className="text-sm text-slate-600">{sla.response}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Performance Monitoring</div>
                      <div className="text-sm text-slate-600">Real-time tracking</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">SLA Credits</div>
                      <div className="text-sm text-slate-600">Automatic compensation</div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/pricing"
                  className={`mt-8 block w-full py-3 text-center font-semibold rounded-xl transition-all ${
                    idx === 0
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  View Plans
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Our Uptime or SLA?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is available 24/7 to discuss our reliability commitments and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Contact Support
            </Link>
            <Link
              to="/help"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UptimeSLA;

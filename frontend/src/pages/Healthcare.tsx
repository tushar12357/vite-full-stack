import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Calendar, Shield, Clock, CheckCircle2, Users, TrendingUp } from "lucide-react";

const Healthcare = () => {
  useEffect(() => {
    document.title = "AI Voice Automation for Healthcare | Reduce No-Shows by 47% | CloserX";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Transform patient engagement with HIPAA-compliant AI calling. Automate appointments, reduce no-shows, and let staff focus on care. 500+ practices trust CloserX."
      );
    }
  }, []);

  const stats = [
    { value: "47%", label: "reduction in no-shows" },
    { value: "24/7", label: "patient access" },
    { value: "500+", label: "healthcare providers" },
    { value: "30%", label: "staff time saved" },
  ];

  const challenges = [
    { title: "Missed Appointments", description: "Thousands lost monthly to no-shows and cancellations" },
    { title: "Staff Overload", description: "30% of time spent on repetitive phone tasks" },
    { title: "Patient Frustration", description: "Long hold times and limited availability" },
    { title: "Lost Revenue", description: "Operating below capacity due to scheduling gaps" },
  ];

  const solutions = [
    {
      icon: Clock,
      title: "24/7 Patient Access",
      description: "Never miss an appointment request. Handle after-hours calls professionally with multi-language support for diverse patient populations."
    },
    {
      icon: Calendar,
      title: "Automated Appointment Management",
      description: "Schedule, reschedule, and confirm appointments automatically. Send intelligent reminders that reduce no-shows by 47%."
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Communication",
      description: "Secure, encrypted voice interactions with complete call recording and audit trails for compliance reporting."
    },
    {
      icon: TrendingUp,
      title: "Fill Cancellations Instantly",
      description: "Waitlist management automatically fills last-minute cancellations, maximizing practice capacity and revenue."
    },
  ];

  const useCases = [
    {
      title: "Medical Practices",
      items: ["Appointment scheduling and confirmations", "Pre-visit screening and intake", "Prescription refill reminders", "Follow-up care coordination"]
    },
    {
      title: "Dental Offices",
      items: ["Hygiene appointment reminders", "Treatment plan follow-ups", "Insurance verification calls", "Emergency triage support"]
    },
    {
      title: "Specialty Clinics",
      items: ["Referral management", "Multi-provider scheduling", "Lab result notifications", "Post-procedure check-ins"]
    },
  ];

  const roiMetrics = [
    { metric: "Save 20+ hours", detail: "of staff time weekly" },
    { metric: "Reduce no-shows by 47%", detail: "with smart reminders" },
    { metric: "Increase bookings by 35%", detail: "with 24/7 availability" },
    { metric: "ROI in less than 30 days", detail: "typical payback period" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative gradient-dark py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Industry • Healthcare</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Transform Patient Engagement <span className="text-primary">with AI Voice Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Reduce no-shows by 47%, automate appointment scheduling 24/7, and let your staff focus on patient care—not phone calls. Join 500+ healthcare providers already using CloserX to modernize their practice and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
                Book Healthcare Demo
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover-scale">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Healthcare Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Medical practices lose thousands of dollars monthly to missed appointments, while staff spend 30% of their time on phone tasks. Meanwhile, patients wait on hold, appointments go unfilled, and your practice operates below capacity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale">
                <h3 className="text-xl font-display font-bold mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">CloserX for Healthcare</h2>
            <p className="text-xl text-muted-foreground">Complete automation for modern healthcare practices</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-card border border-primary/20 rounded-xl p-8 hover-scale">
                <solution.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-lg">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Use Cases for Healthcare</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-display font-bold mb-4">{useCase.title}</h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">ROI Calculator</h2>
            <p className="text-xl text-slate-300">Average medical practice with CloserX:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((roi, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover-scale">
                <div className="text-2xl font-display font-bold text-primary mb-2">{roi.metric}</div>
                <div className="text-sm text-slate-300">{roi.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Ready to Modernize Your Practice?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 500+ healthcare providers already using CloserX to transform patient engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white/10 text-white border-white/20 hover:bg-white/20">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;

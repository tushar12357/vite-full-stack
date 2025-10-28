import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Bell, CheckCircle2, XCircle, Globe } from "lucide-react";

const AppointmentScheduling = () => {
  useEffect(() => {
    document.title = "AI Appointment Scheduling | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Fill your calendar while you sleep. AI agents call prospects, check availability, and book appointments directly into your calendar."
      );
    }
  }, []);

  const stats = [
    { value: "500+", label: "appointments booked daily" },
    { value: "85%", label: "show-up rate" },
    { value: "Zero", label: "scheduling conflicts" },
    { value: "24/7", label: "booking capability" },
  ];

  const problems = [
    {
      icon: XCircle,
      title: "Email Tennis",
      description: "5+ emails to find one meeting time",
    },
    {
      icon: XCircle,
      title: "No-Shows",
      description: "30% of appointments are no-shows",
    },
    {
      icon: XCircle,
      title: "Time Zones",
      description: "Scheduling across time zones is a nightmare",
    },
    {
      icon: XCircle,
      title: "Manual Work",
      description: "Admin spends 10+ hours/week scheduling",
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: "One-Call Booking",
      description: "AI finds time, confirms, books—done in 2 minutes",
    },
    {
      icon: CheckCircle2,
      title: "Smart Reminders",
      description: "Automated SMS/email reminders reduce no-shows 80%",
    },
    {
      icon: CheckCircle2,
      title: "Global Scheduling",
      description: "Handles all time zones automatically",
    },
    {
      icon: CheckCircle2,
      title: "Zero Admin Time",
      description: "Fully automated. Your team focuses on meetings, not booking",
    },
  ];

  const steps = [
    { number: "01", title: "AI Calls Prospect", description: "Initiates outbound call or answers inbound request" },
    { number: "02", title: "Checks Your Calendar", description: "Syncs with Google, Outlook, or any calendar system" },
    { number: "03", title: "Offers Available Times", description: "Presents options based on your availability" },
    { number: "04", title: "Books & Confirms", description: "Adds to calendar and sends confirmation" },
    { number: "05", title: "Sends Reminders", description: "Automatic reminders 24hr, 2hr, 30min before" },
    { number: "06", title: "Updates on Changes", description: "Handles cancellations and rescheduling automatically" },
  ];

  const features = [
    { icon: "📅", title: "Calendar Integration", description: "Google, Outlook, iCal" },
    { icon: "🔄", title: "Automatic Rescheduling", description: "Handles cancellations" },
    { icon: "⏰", title: "Smart Reminders", description: "24hr, 2hr, 30min before" },
    { icon: "🎯", title: "Qualification Questions", description: "Pre-qualify before booking" },
    { icon: "🌍", title: "Time Zone Detection", description: "Automatic conversion" },
    { icon: "📊", title: "Booking Analytics", description: "Track conversion rates" },
  ];

  const useCases = [
    { title: "Sales Demos & Consultations", description: "Book qualified prospects automatically" },
    { title: "Medical Appointments", description: "Schedule patient visits and follow-ups" },
    { title: "Real Estate Showings", description: "Coordinate property viewings with buyers" },
    { title: "Service Appointments", description: "HVAC, plumbing, home services scheduling" },
    { title: "Interviews & Meetings", description: "HR and team meeting coordination" },
    { title: "Event Registration", description: "Book webinar and event attendees" },
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
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Use Case • Scheduling</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
              Fill Your Calendar <span className="text-primary">While You Sleep</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              AI agents call prospects, check availability, and book appointments directly into your calendar. No back-and-forth. No missed opportunities. Just a full calendar of confirmed appointments with automated reminders and 85% show-up rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale text-foreground">
                See Scheduling Demo
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover-scale">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loom Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Watch AI Schedule An Appointment</h2>
            <p className="text-lg text-muted-foreground">See how our AI books a meeting in under 2 minutes</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Loom Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Your scheduling demo video will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Scheduling Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Traditional scheduling wastes hours of administrative time, creates friction in the sales process, and results in missed appointments and lost revenue.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <problem.icon className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-display font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How CloserX Solves It</h2>
            <p className="text-xl text-muted-foreground">Automated appointment scheduling that just works</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-card border border-primary/20 rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <solution.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-display font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">From first contact to confirmed appointment</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-6xl font-display font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Scheduling Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Everything you need to automate your calendar</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover-scale animate-fade-in text-foreground" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Perfect For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-xl font-display font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-legal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Book Your First 100 Appointments Free</h2>
          <p className="text-xl text-muted-foreground mb-8">Start 14-day trial • No credit card required</p>
          <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover-scale">
            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppointmentScheduling;

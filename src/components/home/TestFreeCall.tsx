import { useState } from "react";
import { Phone, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { GradientOrbs } from "@/components/ui/gradient-orbs";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const TestFreeCall = () => {
  const [formData, setFormData] = useState({
    industry: "",
    name: "",
    email: "",
    phone: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const industries = [
    { value: "real-estate", label: "🏠 Real Estate", color: "from-blue-500 to-indigo-600" },
    { value: "healthcare", label: "🏥 Healthcare", color: "from-emerald-500 to-teal-600" },
    { value: "finance", label: "💰 Finance & Insurance", color: "from-purple-500 to-violet-600" },
    { value: "ecommerce", label: "🛍️ E-commerce", color: "from-pink-500 to-rose-600" },
    { value: "automotive", label: "🚗 Automotive", color: "from-orange-500 to-amber-600" },
    { value: "education", label: "📚 Education", color: "from-cyan-500 to-blue-600" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Test call requested:", formData);
    // Handle form submission
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots-light opacity-40" />
      <GradientOrbs count={3} colors={['#6366F1', '#8B5CF6', '#06B6D4']} />
      <FloatingShapes count={6} theme="color" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-300 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-900">Experience AI Voice in Action</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Test a <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Free AI Call</span><br/>Right Now
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No commitment. No credit card. Just pure AI magic in under 30 seconds.
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500"
                style={{ width: `${(currentStep / 2) * 100}%` }}
              />
            </div>

            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Industry Selection */}
                {currentStep === 1 && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Step 1: Choose Your Industry
                      </h3>
                      <p className="text-slate-600">We'll customize the AI for your specific use case</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {industries.map((industry) => (
                        <button
                          key={industry.value}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, industry: industry.value });
                            setCurrentStep(2);
                          }}
                          className={`group relative p-6 rounded-2xl border-2 transition-all hover:scale-105 hover:shadow-xl ${
                            formData.industry === industry.value
                              ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50'
                              : 'border-slate-200 hover:border-indigo-300 bg-white'
                          }`}
                        >
                          <div className={`text-4xl mb-3 transition-transform group-hover:scale-110`}>
                            {industry.label.split(' ')[0]}
                          </div>
                          <div className="text-sm font-bold text-slate-900">
                            {industry.label.split(' ').slice(1).join(' ')}
                          </div>
                          
                          {formData.industry === industry.value && (
                            <div className="absolute top-3 right-3">
                              <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {currentStep === 2 && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="text-center mb-8">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold mb-4 inline-flex items-center gap-1"
                      >
                        ← Back to industries
                      </button>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Step 2: Your Contact Info
                      </h3>
                      <p className="text-slate-600">We'll call you in less than 30 seconds</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                      {/* Name Input */}
                      <div className="group">
                        <label className="block text-sm font-bold text-slate-700 mb-3">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Aleksandr Volkov"
                            className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all text-lg font-medium text-slate-900 placeholder:text-slate-400"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div className="group">
                        <label className="block text-sm font-bold text-slate-700 mb-3">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="aleksandr@company.com"
                            className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all text-lg font-medium text-slate-900 placeholder:text-slate-400"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      </div>

                      {/* Phone Input */}
                      <div className="group md:col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-3">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 123-4567"
                            className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all text-lg font-medium text-slate-900 placeholder:text-slate-400"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-1 hover:scale-105 transition-all"
                      >
                        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        Call Me Now
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </button>
                      
                      <p className="text-sm text-slate-500 mt-4">
                        🔒 Your information is secure. We'll never share it.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-slate-600">
            {[
              { icon: "⚡", text: "< 30 sec response" },
              { icon: "🎯", text: "100% personalized" },
              { icon: "🌐", text: "50+ languages" },
              { icon: "🔒", text: "Bank-level security" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestFreeCall;

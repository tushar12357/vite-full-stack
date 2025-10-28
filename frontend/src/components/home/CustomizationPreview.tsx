import { useState } from "react";
import { Palette, Upload, Globe } from "lucide-react";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { GradientOrbs } from "@/components/ui/gradient-orbs";

const CustomizationPreview = () => {
  const [primaryColor, setPrimaryColor] = useState("#6366F1");
  const [secondaryColor, setSecondaryColor] = useState("#06B6D4");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [domain, setDomain] = useState("youragency.closerx.ai");

  const presets = [
    { name: "Purple Power", primary: "#6366F1", secondary: "#8B5CF6" },
    { name: "Ocean Blue", primary: "#0EA5E9", secondary: "#06B6D4" },
    { name: "Sunset Orange", primary: "#F59E0B", secondary: "#EF4444" },
    { name: "Forest Green", primary: "#10B981", secondary: "#059669" },
    { name: "Midnight Dark", primary: "#1E293B", secondary: "#475569" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-purple-600 to-secondary py-32 overflow-hidden">
      <FloatingShapes count={8} theme="dark" />
      <GradientOrbs count={3} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Customization
          </span>
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Make It Look Exactly Like Your Brand
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From colors to logos, customize everything in minutes
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Customization Panel */}
          <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white mb-8">
              Customize Your Platform
            </h3>

            {/* Primary Color Picker */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-3">
                Primary Brand Color
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-16 h-16 rounded-xl cursor-pointer border-4 border-white shadow-lg"
                />
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>

            {/* Secondary Color Picker */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-3">
                Accent Color
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-16 h-16 rounded-xl cursor-pointer border-4 border-white shadow-lg"
                />
                <input
                  type="text"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>

            {/* Logo Upload */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-3">
                Upload Your Logo
              </label>
              <label className="border-2 border-dashed border-white/40 rounded-xl p-8 text-center hover:border-white/60 hover:bg-white/5 transition-all cursor-pointer block">
                <Upload className="w-12 h-12 text-white/60 mx-auto mb-3" />
                <p className="text-white/80 text-sm">Drop your logo here or click to upload</p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setLogoUrl(url);
                    }
                  }}
                />
              </label>
            </div>

            {/* Domain Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-white mb-3">
                Your Custom Domain
              </label>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3">
                <Globe className="w-5 h-5 text-white/60" />
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="youragency.com"
                  className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none"
                />
              </div>
            </div>

            {/* Apply Button */}
            <button className="w-full py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              See Preview →
            </button>

            {/* Preset Themes */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-white/80 mb-3">Quick Presets:</p>
              <div className="flex gap-3">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPrimaryColor(preset.primary);
                      setSecondaryColor(preset.secondary);
                    }}
                    className="w-12 h-12 rounded-full border-4 border-white/30 hover:border-white hover:scale-125 transition-all shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})`,
                    }}
                    title={preset.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Preview */}
          <div className="relative">
            {/* Browser Mockup */}
            <div className="bg-slate-900 rounded-t-2xl p-3 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 flex-1 bg-slate-800 rounded px-3 py-1 text-xs text-slate-400">
                  {domain}
                </div>
              </div>

              {/* Preview Content */}
              <div className="bg-white rounded-lg p-8 h-[500px] overflow-hidden transition-all duration-500">
                {/* Preview Header */}
                <div
                  className="flex items-center justify-between mb-8 pb-4 border-b-2 transition-all duration-500"
                  style={{ borderColor: primaryColor }}
                >
                {logoUrl ? (
                  <img src={logoUrl} alt="Uploaded logo preview" className="h-8 w-auto" />
                ) : (
                  <div className="font-bold text-2xl transition-colors duration-500" style={{ color: primaryColor }}>
                    YourBrand
                  </div>
                )}
                  <button
                    className="px-6 py-2 rounded-lg text-white font-semibold transition-all duration-500 hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Preview Dashboard */}
                <div className="space-y-4">
                  <div
                    className="h-32 rounded-xl transition-all duration-500"
                    style={{ background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)` }}
                  >
                    <div className="p-4">
                      <div className="text-sm text-slate-600 mb-2">Active Calls</div>
                      <div className="text-3xl font-bold transition-colors duration-500" style={{ color: primaryColor }}>
                        247
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-slate-100 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg mb-2 transition-colors duration-500" style={{ backgroundColor: primaryColor }} />
                      <div className="text-xs text-slate-600">Dashboard</div>
                    </div>
                    <div className="h-24 bg-slate-100 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg mb-2 transition-colors duration-500" style={{ backgroundColor: secondaryColor }} />
                      <div className="text-xs text-slate-600">Analytics</div>
                    </div>
                  </div>

                  <button
                    className="w-full py-3 rounded-lg text-white font-semibold transition-all duration-500 hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                  >
                    Start Campaign
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Color Change Indicator */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-2xl animate-bounce">
              <Palette className="w-8 h-8" style={{ color: primaryColor }} />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-12 py-5 bg-white text-primary font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all text-lg">
            Try Full Customization Free
          </button>
          <p className="text-white/80 mt-4">No credit card required</p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CustomizationPreview;
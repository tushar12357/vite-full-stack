import React, { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

// Helper: currency formatting
const formatMoney = (n: number, currency = "USD", locale = "en-US") =>
  new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    isFinite(n) ? n : 0
  );

// Types
type Currency = "USD" | "INR" | "AED" | "EUR" | "GBP";

const CURRENCY_DEFAULTS: Record<Currency, { symbol: string; locale: string }> = {
  USD: { symbol: "$", locale: "en-US" },
  INR: { symbol: "₹", locale: "en-IN" },
  AED: { symbol: "د.إ", locale: "en-AE" },
  EUR: { symbol: "€", locale: "de-DE" },
  GBP: { symbol: "£", locale: "en-GB" },
};

// Default constants
const DEFAULTS = {
  simple: {
    clients: 100,
    pricePerClient: 500,
    platformMonthly: 297,
  },
  advanced: {
    clients: 100,
    pricePerClient: 100,
    avgClients: 200,
    sellRate: 0.25,
    baseCost: 0.1,
    tier: "professional",
    otherFixedCosts: 0.2,
    includeTheme: false,
  },
};

const TIERS = [
  { key: "starter", name: "Starter", monthly: 29 },
  { key: "standard", name: "Standard", monthly: 97 },
  { key: "professional", name: "Professional", monthly: 297 },
];

export default function ROICalculator() {
  const [mode, setMode] = useState<"simple" | "advanced">("simple");
  const [currency, setCurrency] = useState<Currency>("INR");
  const currencyCfg = CURRENCY_DEFAULTS[currency];

  // Simple state
  const [simpleClients, setSimpleClients] = useState<number>(DEFAULTS.simple.clients);
  const [simplePrice, setSimplePrice] = useState<number>(DEFAULTS.simple.pricePerClient);
  const [simplePlatform, setSimplePlatform] = useState<number>(DEFAULTS.simple.platformMonthly);

  // Advanced state
  const [advancedClients, setAdvancedClients] = useState<number>(DEFAULTS.advanced.clients);
  const [advancedPricePerClient, setAdvancedPricePerClient] = useState<number>(DEFAULTS.advanced.pricePerClient);
  const [avgClients, setAvgClients] = useState<number>(DEFAULTS.advanced.avgClients);
  const [sellRate, setSellRate] = useState<number>(DEFAULTS.advanced.sellRate);
  const [baseCost, setBaseCost] = useState<number>(DEFAULTS.advanced.baseCost);
  const [tierKey, setTierKey] = useState<string>(DEFAULTS.advanced.tier);
  const [otherFixedCosts, setOtherFixedCosts] = useState<number>(DEFAULTS.advanced.otherFixedCosts);
  const [includeTheme, setIncludeTheme] = useState<boolean>(DEFAULTS.advanced.includeTheme);

  // Simple Calculations
  const simpleRevenue = useMemo(
    () => Math.max(0, simpleClients) * Math.max(0, simplePrice),
    [simpleClients, simplePrice]
  );
  const simpleProfit = useMemo(
    () => simpleRevenue - Math.max(0, simplePlatform),
    [simpleRevenue, simplePlatform]
  );

  // Advanced Calculations
  const tierMonthly = useMemo(() => {
    const t = TIERS.find((t) => t.key === tierKey);
    return t ? t.monthly : 0;
  }, [tierKey]);

  const advancedRevenue = useMemo(
    () => Math.max(0, advancedClients) * Math.max(0, advancedPricePerClient),
    [advancedClients, advancedPricePerClient]
  );

  const usageRevenue = useMemo(
    () => Math.max(0, avgClients) * Math.max(0, sellRate),
    [avgClients, sellRate]
  );

  const totalRevenue = useMemo(
    () => advancedRevenue + usageRevenue,
    [advancedRevenue, usageRevenue]
  );

  const platformCost = useMemo(
    () => tierMonthly + (includeTheme ? 30 : 0) + Math.max(0, otherFixedCosts),
    [tierMonthly, includeTheme, otherFixedCosts]
  );

  const creditCost = useMemo(
    () => Math.max(0, avgClients) * Math.max(0, baseCost),
    [avgClients, baseCost]
  );

  const totalCosts = useMemo(
    () => platformCost + creditCost,
    [platformCost, creditCost]
  );

  const advancedProfit = useMemo(
    () => totalRevenue - totalCosts,
    [totalRevenue, totalCosts]
  );

  const fmt = (n: number) => formatMoney(n, currency, currencyCfg.locale);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white font-medium mb-6">
              Partner Program
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Numbers Say It All — See Your AI Reselling Profits
            </h1>
            
            <p className="text-xl text-white max-w-3xl mx-auto">
              Instantly estimate your agency profits from white-labeling CloserX's AI Calling Agents. Toggle between Simple and Advanced modes to dial in your assumptions.
            </p>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ROI Calculator</h2>
            <p className="text-base text-gray-400 mb-2">Estimate Your Cost</p>
            <p className="text-base text-gray-400 mb-12">
              Adjust your usage, LLM, engine, and telephony to see real time pricing for our AI voice agent solution.
            </p>
            
            {/* Calculator Container */}
            <div 
              className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
              style={{
                background: 'linear-gradient(270deg, #C4B5FD -15%, #974BF3 50.02%, #C4B5FD 115.04%)'
              }}
            >
              {/* Noise Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  opacity: 0.25
                }}
              />
              <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                {/* Left Column - Configure Your Model */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Configure Your Model</h3>
                    <p className="text-sm text-white/80">Adjust inputs to match your business</p>
                  </div>

                  {/* Mode Buttons and Currency */}
                  <div className="flex items-center gap-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => setMode("simple")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all ${
                          mode === "simple"
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-white/70 hover:bg-white/15"
                        }`}
                      >
                        Simple Mode
                      </button>
                      <button
                        onClick={() => setMode("advanced")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all ${
                          mode === "advanced"
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-white/70 hover:bg-white/15"
                        }`}
                      >
                        Advanced Mode
                      </button>
                    </div>
                    <div className="relative">
                      <select
                        className="px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 pr-10"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as Currency)}
                      >
                        {Object.entries(CURRENCY_DEFAULTS).map(([c, cfg]) => (
                          <option key={c} value={c} className="bg-gray-800">
                            {cfg.symbol} {c === 'INR' ? 'IND' : c}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-6">
                    {mode === "simple" ? (
                      <>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Number of Clients</label>
                          <p className="text-xs text-white/70">How many clients will you Serve</p>
                          <input
                            type="number"
                            min={0}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="100"
                            value={simpleClients}
                            onChange={(e) => setSimpleClients(parseFloat(e.target.value) || 0)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Selling Price per Client ({currencyCfg.symbol}/month)</label>
                          <p className="text-xs text-white/70">What will you charge each client?</p>
                          <input
                            type="number"
                            min={0}
                            step={0.01}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="500"
                            value={simplePrice}
                            onChange={(e) => setSimplePrice(parseFloat(e.target.value) || 0)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Platform Cost (CloserX subscription)</label>
                          <p className="text-xs text-white/70">Your monthly CloserX subscription</p>
                          <input
                            type="number"
                            min={0}
                            step={0.01}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="297"
                            value={simplePlatform}
                            onChange={(e) => setSimplePlatform(parseFloat(e.target.value) || 0)}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Number of Clients</label>
                          <p className="text-xs text-white/70">What will you charge each client?</p>
                          <input
                            type="number"
                            min={0}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="100"
                            value={advancedClients}
                            onChange={(e) => setAdvancedClients(parseFloat(e.target.value) || 0)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Selling Price per Client ({currencyCfg.symbol}/month)</label>
                          <p className="text-xs text-white/70">What will you charge each client?</p>
                          <input
                            type="number"
                            min={0}
                            step={0.01}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="100"
                            value={advancedPricePerClient}
                            onChange={(e) => setAdvancedPricePerClient(parseFloat(e.target.value) || 0)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Average Clients</label>
                          <p className="text-xs text-white/70">What will you charge each client?</p>
                          <input
                            type="number"
                            min={0}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="200"
                            value={avgClients}
                            onChange={(e) => setAvgClients(parseFloat(e.target.value) || 0)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Sell Rate</label>
                          <p className="text-xs text-white/70">What will you charge each client?</p>
                          <input
                            type="number"
                            min={0}
                            step={0.01}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="0.25"
                            value={sellRate}
                            onChange={(e) => setSellRate(parseFloat(e.target.value) || 0)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Base Cost</label>
                          <p className="text-xs text-white/70">What will you charge each client?</p>
                          <input
                            type="number"
                            min={0}
                            step={0.01}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="0.1"
                            value={baseCost}
                            onChange={(e) => setBaseCost(parseFloat(e.target.value) || 0)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">CloserX Tier</label>
                          <p className="text-xs text-white/70">What will you charge each client?</p>
                          <div className="relative">
                            <select
                              className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 pr-10"
                              value={tierKey}
                              onChange={(e) => setTierKey(e.target.value)}
                            >
                              {TIERS.map((t) => (
                                <option key={t.key} value={t.key} className="bg-gray-800">
                                  {t.name} ({currencyCfg.symbol}{t.monthly}/Month)
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white">Other Fixed Costs</label>
                          <p className="text-xs text-white/70">Your monthly CloserX subscription</p>
                          <input
                            type="number"
                            min={0}
                            step={0.01}
                            className="w-full px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="0.2"
                            value={otherFixedCosts}
                            onChange={(e) => setOtherFixedCosts(parseFloat(e.target.value) || 0)}
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-full bg-white/10 border border-white/20">
                          <div>
                            <p className="text-sm font-semibold text-white">Theme ADD-On (+{currencyCfg.symbol}30/Month)</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={includeTheme}
                              onChange={(e) => setIncludeTheme(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-white/20 rounded-full peer peer-checked:bg-white/30 peer-focus:ring-2 peer-focus:ring-white/50 transition-all">
                              <div className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
                            </div>
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Column - Your ROI Breakdown */}
                <div className="space-y-8">
                  {/* Card Container */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">Your ROI Breakdown</h3>
                      <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold rounded-lg transition-colors">
                        Export
                      </button>
                    </div>
                    <p className="text-sm text-white/80">Monthly financial projection</p>
                  </div>
                    {mode === "simple" ? (
                      <>
                        <div className="flex items-center justify-between py-4 border-b border-white/20">
                          <span className="text-base text-white/90">Total Monthly Revenue</span>
                          <span className="text-xl font-bold text-white">{fmt(simpleRevenue)}</span>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b border-white/20">
                          <span className="text-base text-white/90">Platform Fee</span>
                          <span className="text-xl font-bold text-white">{fmt(simplePlatform)}</span>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b border-white/20">
                          <span className="text-base text-white/90">Net Monthly Profit</span>
                          <span className="text-xl font-bold text-white">{fmt(simpleProfit)}</span>
                        </div>

                        <div className="pt-6 mt-6 border-t-2 border-white/30">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">Total</span>
                            <span className="text-3xl font-bold text-white">{fmt(simpleProfit)}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-white/70 uppercase tracking-wide">Revenue</p>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-base text-white/90">Subscription</span>
                            <span className="text-lg font-bold text-white">{fmt(advancedRevenue)}</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-base text-white/90">Usage</span>
                            <span className="text-lg font-bold text-white">{fmt(usageRevenue)}</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/20">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white">Total Revenue</span>
                            <span className="text-xl font-bold text-white">{fmt(totalRevenue)}</span>
                          </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-white/20">
                          <p className="text-sm font-semibold text-white/70 uppercase tracking-wide">Costs</p>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-base text-white/90">Platform & Add-ons</span>
                            <span className="text-lg font-bold text-white">{fmt(platformCost)}</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-base text-white/90">Credit Cost</span>
                            <span className="text-lg font-bold text-white">{fmt(creditCost)}</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/20">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white">Total Costs</span>
                            <span className="text-xl font-bold text-white">{fmt(totalCosts)}</span>
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t-2 border-white/30">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">Net Monthly Profit</span>
                            <span className="text-3xl font-bold text-white">{fmt(advancedProfit)}</span>
                          </div>
                        </div>
                      </>
                    )}

                    <button className="w-full bg-white text-purple-600 font-semibold py-4 rounded-lg hover:bg-white/90 transition-colors mt-8">
                      Begin Reselling
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tip */}
            <p className="text-sm text-white mt-8 text-center">
              Pro Tip: Choose $29 (Starter), $97 (Standard), or $297 (Professional) tier based on your needs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

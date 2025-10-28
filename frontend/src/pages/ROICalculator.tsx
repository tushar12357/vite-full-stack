import React, { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, TrendingUp, Users, DollarSign, ArrowUpRight, Zap, Target, PieChart } from "lucide-react";

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

// Subscription tiers
const TIERS = [
  { key: "starter", name: "Starter", monthly: 29 },
  { key: "standard", name: "Standard", monthly: 97 },
  { key: "professional", name: "Professional", monthly: 297 },
];

// Default constants
const DEFAULTS = {
  simple: {
    clients: 100,
    pricePerClient: 500,
    platformMonthly: 297,
  },
  advanced: {
    clients: 25,
    pricePerClientMonthly: 297,
    avgMinutesPerClient: 200,
    sellRatePerMinute: 0.25,
    baseCostPerMinute: 0.1,
    subscriptionTier: "professional" as const,
    includeThemeAddOn: false,
    otherFixedMonthlyCosts: 0,
  },
};

export default function ROICalculator() {
  const [mode, setMode] = useState<"simple" | "advanced">("simple");
  const [currency, setCurrency] = useState<Currency>("USD");
  const currencyCfg = CURRENCY_DEFAULTS[currency];

  // Simple state
  const [simpleClients, setSimpleClients] = useState<number>(DEFAULTS.simple.clients);
  const [simplePrice, setSimplePrice] = useState<number>(DEFAULTS.simple.pricePerClient);
  const [simplePlatform, setSimplePlatform] = useState<number>(DEFAULTS.simple.platformMonthly);

  // Advanced state
  const [clients, setClients] = useState<number>(DEFAULTS.advanced.clients);
  const [pricePerClientMonthly, setPricePerClientMonthly] = useState<number>(
    DEFAULTS.advanced.pricePerClientMonthly
  );
  const [avgMinutesPerClient, setAvgMinutesPerClient] = useState<number>(
    DEFAULTS.advanced.avgMinutesPerClient
  );
  const [sellRatePerMinute, setSellRatePerMinute] = useState<number>(
    DEFAULTS.advanced.sellRatePerMinute
  );
  const [baseCostPerMinute, setBaseCostPerMinute] = useState<number>(
    DEFAULTS.advanced.baseCostPerMinute
  );
  const [tierKey, setTierKey] = useState<string>(DEFAULTS.advanced.subscriptionTier);
  const [includeTheme, setIncludeTheme] = useState<boolean>(
    DEFAULTS.advanced.includeThemeAddOn
  );
  const [otherFixedMonthlyCosts, setOtherFixedMonthlyCosts] = useState<number>(
    DEFAULTS.advanced.otherFixedMonthlyCosts
  );

  const tierMonthly = useMemo(() => {
    const t = TIERS.find((t) => t.key === tierKey);
    return t ? t.monthly : 0;
  }, [tierKey]);

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
  const subRevenue = useMemo(
    () => Math.max(0, clients) * Math.max(0, pricePerClientMonthly),
    [clients, pricePerClientMonthly]
  );
  const usageMinutes = useMemo(
    () => Math.max(0, clients) * Math.max(0, avgMinutesPerClient),
    [clients, avgMinutesPerClient]
  );
  const usageRevenue = useMemo(
    () => usageMinutes * Math.max(0, sellRatePerMinute),
    [usageMinutes, sellRatePerMinute]
  );
  const totalRevenue = useMemo(
    () => subRevenue + usageRevenue,
    [subRevenue, usageRevenue]
  );

  const platformCost = useMemo(
    () => tierMonthly + (includeTheme ? 30 : 0) + Math.max(0, otherFixedMonthlyCosts),
    [tierMonthly, includeTheme, otherFixedMonthlyCosts]
  );
  const creditCost = useMemo(
    () => usageMinutes * Math.max(0, baseCostPerMinute),
    [usageMinutes, baseCostPerMinute]
  );
  const totalCost = useMemo(() => platformCost + creditCost, [platformCost, creditCost]);
  const netProfit = useMemo(() => totalRevenue - totalCost, [totalRevenue, totalCost]);
  const marginPct = useMemo(
    () => (totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0),
    [netProfit, totalRevenue]
  );

  // Break-even calculation
  const contributionPerClient = useMemo(() => {
    return (
      Math.max(0, pricePerClientMonthly) +
      Math.max(0, avgMinutesPerClient) *
        (Math.max(0, sellRatePerMinute) - Math.max(0, baseCostPerMinute))
    );
  }, [pricePerClientMonthly, avgMinutesPerClient, sellRatePerMinute, baseCostPerMinute]);

  const breakEvenClients = useMemo(() => {
    if (contributionPerClient <= 0) return Infinity;
    return Math.ceil(Math.max(0, platformCost) / contributionPerClient);
  }, [platformCost, contributionPerClient]);

  const fmt = (n: number) => formatMoney(n, currency, currencyCfg.locale);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-muted/20 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 pattern-dots">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">ROI Calculator</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              The Numbers Say It All —{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                See Your AI Reselling Profits
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Instantly estimate your agency profits from white-labeling CloserX's AI Calling Agents. 
              Toggle between Simple and Advanced modes to dial in your assumptions.
            </p>

            {/* Mode & Currency Controls */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
              <div className="inline-flex rounded-2xl shadow-elegant border border-border bg-card p-1">
                <button
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    mode === "simple"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMode("simple")}
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Simple Mode
                  </span>
                </button>
                <button
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    mode === "advanced"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMode("advanced")}
                >
                  <span className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Advanced Mode
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-border bg-card shadow-sm">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
                <select
                  className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                >
                  {Object.keys(CURRENCY_DEFAULTS).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Inputs Card */}
            <div className="rounded-3xl border border-border bg-card shadow-elegant p-8 space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Configure Your Model</h2>
                  <p className="text-sm text-muted-foreground">Adjust inputs to match your business</p>
                </div>
              </div>

              {mode === "simple" ? (
                <div className="space-y-6">
                  <InputField
                    icon={<Users className="w-5 h-5 text-primary" />}
                    label="Number of Clients"
                    description="How many clients will you serve?"
                    type="number"
                    value={simpleClients}
                    onChange={(val) => setSimpleClients(val)}
                  />

                  <InputField
                    icon={<DollarSign className="w-5 h-5 text-secondary" />}
                    label={`Selling Price per Client (${currencyCfg.symbol}/month)`}
                    description="What will you charge each client?"
                    type="number"
                    value={simplePrice}
                    onChange={(val) => setSimplePrice(val)}
                    step={0.01}
                  />

                  <InputField
                    icon={<TrendingUp className="w-5 h-5 text-accent" />}
                    label="Platform Cost (CloserX subscription)"
                    description="Your monthly CloserX subscription"
                    type="number"
                    value={simplePlatform}
                    onChange={(val) => setSimplePlatform(val)}
                    step={0.01}
                  />

                  <InfoBox>
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Pro Tip:</strong> Choose $29 (Starter), $97 (Standard), or $297 (Professional) tier based on your needs.
                    </p>
                  </InfoBox>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField
                      icon={<Users className="w-5 h-5 text-primary" />}
                      label="Clients"
                      type="number"
                      value={clients}
                      onChange={(val) => setClients(val)}
                    />
                    <InputField
                      icon={<DollarSign className="w-5 h-5 text-secondary" />}
                      label="Price/Client/Month"
                      type="number"
                      value={pricePerClientMonthly}
                      onChange={(val) => setPricePerClientMonthly(val)}
                      step={0.01}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <InputField
                      label="Avg Minutes/Client"
                      type="number"
                      value={avgMinutesPerClient}
                      onChange={(val) => setAvgMinutesPerClient(val)}
                    />
                    <InputField
                      label="Sell Rate/Minute"
                      type="number"
                      value={sellRatePerMinute}
                      onChange={(val) => setSellRatePerMinute(val)}
                      step={0.001}
                    />
                    <InputField
                      label="Base Cost/Minute"
                      type="number"
                      value={baseCostPerMinute}
                      onChange={(val) => setBaseCostPerMinute(val)}
                      step={0.001}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold">CloserX Tier</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary transition-all"
                        value={tierKey}
                        onChange={(e) => setTierKey(e.target.value)}
                      >
                        {TIERS.map((t) => (
                          <option value={t.key} key={t.key}>
                            {t.name} ({fmt(t.monthly)}/mo)
                          </option>
                        ))}
                      </select>
                    </div>
                    <InputField
                      label="Other Fixed Costs"
                      type="number"
                      value={otherFixedMonthlyCosts}
                      onChange={(val) => setOtherFixedMonthlyCosts(val)}
                      step={0.01}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/50">
                    <div>
                      <p className="text-sm font-semibold">Theme Add-on</p>
                      <p className="text-xs text-muted-foreground">+$30/month</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={includeTheme}
                        onChange={(e) => setIncludeTheme(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary/50 transition-all">
                        <div className="absolute top-0.5 left-0.5 bg-background w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
                      </div>
                    </label>
                  </div>

                  <InfoBox>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Profit = (Subscription + Usage revenue) − (Platform + Credit costs). Credit cost = answered minutes × base cost/minute.
                    </p>
                  </InfoBox>
                </div>
              )}
            </div>

            {/* Right: Results Card */}
            <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 shadow-elegant p-8 space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-secondary/10">
                  <PieChart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Your ROI Breakdown</h2>
                  <p className="text-sm text-muted-foreground">Monthly financial projection</p>
                </div>
              </div>

              {mode === "simple" ? (
                <div className="space-y-6">
                  <MetricCard
                    label="Total Monthly Revenue"
                    value={fmt(simpleRevenue)}
                    icon={<TrendingUp className="w-5 h-5" />}
                    color="primary"
                  />
                  <MetricCard
                    label="Platform Cost"
                    value={fmt(simplePlatform)}
                    icon={<DollarSign className="w-5 h-5" />}
                    color="muted"
                  />
                  <div className="h-px bg-border my-4"></div>
                  <ProfitCard value={fmt(simpleProfit)} profit={simpleProfit} />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-background/60 border border-border space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Revenue</p>
                    <MetricRow label="Subscription" value={fmt(subRevenue)} />
                    <MetricRow label="Usage" value={fmt(usageRevenue)} />
                    <div className="h-px bg-border my-2"></div>
                    <MetricRow label="Total Revenue" value={fmt(totalRevenue)} bold />
                  </div>

                  <div className="p-6 rounded-2xl bg-background/60 border border-border space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Costs</p>
                    <MetricRow label="Platform & Add-ons" value={fmt(platformCost)} />
                    <MetricRow label="Credit Cost" value={fmt(creditCost)} />
                    <div className="h-px bg-border my-2"></div>
                    <MetricRow label="Total Costs" value={fmt(totalCost)} bold />
                  </div>

                  <div className="h-px bg-border my-4"></div>
                  <ProfitCard value={fmt(netProfit)} profit={netProfit} />

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <StatBox label="Profit Margin" value={`${marginPct.toFixed(1)}%`} />
                    <StatBox
                      label="Break-even"
                      value={breakEvenClients === Infinity ? "N/A" : `${breakEvenClients} clients`}
                    />
                  </div>
                </div>
              )}

              <button className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-glow hover:shadow-elegant transition-all hover:scale-105">
                Begin Reselling
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              💡 All assumptions are editable. For accuracy, update minutes and rates to match your niche, geography, and carrier costs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Reusable Components
function InputField({
  icon,
  label,
  description,
  type,
  value,
  onChange,
  step,
}: {
  icon?: React.ReactNode;
  label: string;
  description?: string;
  type: "number";
  value: number;
  onChange: (val: number) => void;
  step?: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {icon}
        <label className="block text-sm font-semibold">{label}</label>
      </div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <input
        type={type}
        min={0}
        step={step || 1}
        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary transition-all"
        value={value}
        onChange={(e) =>
          onChange(type === "number" ? parseFloat(e.target.value || "0") : parseInt(e.target.value || "0"))
        }
      />
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/20">
      {children}
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-background/60 border border-border flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className={`p-3 rounded-xl bg-${color}/10`}>{icon}</div>
    </div>
  );
}

function MetricRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-sm ${bold ? "font-bold" : "text-muted-foreground"}`}>{label}</span>
      <span className={`text-sm ${bold ? "font-bold" : ""}`}>{value}</span>
    </div>
  );
}

function ProfitCard({ value, profit }: { value: string; profit: number }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Net Monthly Profit
          </p>
          <p className={`text-4xl font-bold ${profit >= 0 ? "text-primary" : "text-destructive"}`}>
            {value}
          </p>
        </div>
        <div
          className={`p-4 rounded-2xl ${
            profit >= 0 ? "bg-primary/10" : "bg-destructive/10"
          }`}
        >
          <TrendingUp className={`w-8 h-8 ${profit >= 0 ? "text-primary" : "text-destructive"}`} />
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl bg-background/60 border border-border text-center">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

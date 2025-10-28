const LogoCloud = () => {
  const companies = [
    "TechCorp", "SalesPro", "CallMaster", "VoiceAI", "AgencyHub",
    "CloudCall", "LeadGen Pro", "ConvertX", "SalesForce", "HubSpot",
    "Zendesk", "Intercom", "Freshworks", "Pipedrive", "Close"
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-10">
          Trusted by 500+ Leading Agencies Worldwide
        </p>
        
        <div className="relative overflow-hidden">
          {/* First Row - Scroll Left to Right */}
          <div className="flex gap-16 animate-[scroll_30s_linear_infinite] mb-8">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex-shrink-0 text-2xl font-bold text-slate-300 hover:text-primary hover:scale-110 transition-all grayscale hover:grayscale-0 cursor-pointer"
                style={{ minWidth: '140px' }}
              >
                {company}
              </div>
            ))}
          </div>

          {/* Second Row - Scroll Right to Left */}
          <div className="flex gap-16 animate-[scroll-reverse_35s_linear_infinite]">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex-shrink-0 text-2xl font-bold text-slate-300 hover:text-primary hover:scale-110 transition-all grayscale hover:grayscale-0 cursor-pointer"
                style={{ minWidth: '140px' }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default LogoCloud;
import workflowImage from "@/assets/image.png";

const DiscoverCloserX = () => {
  const features = [
    {
      number: "01",
      title: "AI-Powered Callback Scheduling",
      description:
        'AI understands customer requests like "call me after 5 minutes" or "call me in 1 hour" and schedules callbacks automatically.',
    },
    {
      number: "02",
      title: "Automated Phone Number Rotation",
      description: "",
    },
    {
      number: "03",
      title: "Intelligent Auto-Dialing",
      description: "",
    },
    {
      number: "04",
      title: "Payment Integration Hub",
      description: "",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm md:text-base text-gray-700 font-medium">
            Intelligent Automation
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 text-center mb-4 max-w-4xl mx-auto leading-tight">
          Powerful Features That Work 24/7 on Autopilot
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Advanced automation that handles complex tasks intelligently, so you
          can focus on what matters most.
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
          {/* Left Column - Features */}
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Discover{" "}
              <span className="text-purple-600">CLOSERX</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-12">
              Launch Your Own AI Calling Platform.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-bold text-gray-400">
                      {feature.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    {feature.description && (
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:sticky lg:top-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={workflowImage}
                alt="AI Workflow Diagram"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCloserX;


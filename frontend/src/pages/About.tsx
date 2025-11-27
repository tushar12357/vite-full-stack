import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BorderedButton from "@/components/BorderedButton";
import ContentCarouselSection from "@/components/ContentCarouselSection";
import ContentCarouselSectionWithButton from "@/components/ContentCarouselSectionWithButton";
import {
  FileText,
  Shield,
  DollarSign,
  Plus,
  Square,
  Circle,
  Triangle,
  Check,
  ArrowRight,
  Palette,
  Globe,
  TrendingUp,
  Target,
  AudioWaveform,
  RefreshCw,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import dashboardImage from "@/assets/aboutus/1.png";

interface WhatWeDoItem {
  number: string;
  title: string;
  description: string;
  iconUrl: string;
}

interface CoreValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const whatWeDoItems: WhatWeDoItem[] = [
    {
      number: "01",
      title: "Design",
      description: "We work with you to design AI agents that align with your business goals and customer needs, ensuring seamless integration with your existing workflows.",
      iconUrl: "https://api.iconify.design/lucide:pen-tool.svg?color=%23ffffff"
    },
    {
      number: "02",
      title: "Build",
      description: "Our team of experts builds robust and scalable AI agents using the latest technologies and best practices in artificial intelligence.",
      iconUrl: "https://api.iconify.design/lucide:hammer.svg?color=%23ffffff"
    },
    {
      number: "03",
      title: "Launch",
      description: "We help you launch your AI agents quickly and efficiently, ensuring they are ready to handle real-world interactions from day one.",
      iconUrl: "https://api.iconify.design/lucide:rocket.svg?color=%23ffffff"
    },
    {
      number: "04",
      title: "Scale",
      description: "As your business grows, we provide the infrastructure and support needed to scale your AI agents to handle increasing volumes of interactions.",
      iconUrl: "https://api.iconify.design/lucide:trending-up.svg?color=%23ffffff"
    }
  ];

  const coreValuesItems: CoreValueItem[] = [
    {
      icon: <AudioWaveform className="w-6 h-6 text-white" />,
      title: "Ethical AI",
      description: "Built-in transparency features with AI disclosure at call start, ensuring honest communication with end users"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      title: "Innovation",
      description: "Quarterly updates with new features and enhancements based on user feedback and technological advancements"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Excellence",
      description: "Enterprise-grade capabilities at accessible pricing points with proven templates and comprehensive training"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Reliability",
      description: "99.9% uptime with centralized dashboard for effortless management of multiple client accounts"
    }
  ];

  const whiteLabelFeatures = [
    {
      title: "Professional Custom Domain",
      description: "Launch under your own domain to reinforce brand identity and build client trust",
      iconUrl: "https://api.iconify.design/lucide:globe.svg?color=%23ffffff"
    },
    {
      title: "Predictable Revenue Streams",
      description: "$10,000-$15,000 monthly recurring revenue potential within your first two months",
      iconUrl: "https://api.iconify.design/lucide:trending-up.svg?color=%23ffffff"
    },
    {
      title: "Set Your Own Pricing",
      description: "Establish margins on subscription fees and calling credits with complete control",
      iconUrl: "https://api.iconify.design/lucide:dollar-sign.svg?color=%23ffffff"
    },
    {
      title: "Unique Market Position",
      description: "Present as proprietary solution, creating competitive advantage in crowded marketplace",
      iconUrl: "https://api.iconify.design/lucide:target.svg?color=%23ffffff"
    },
    {
      title: "Enterprise Support",
      description: "Dedicated support team to help you succeed with implementation and ongoing optimization",
      iconUrl: "https://api.iconify.design/lucide:shield.svg?color=%23ffffff"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-black min-h-screen py-10 md:py-16 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Circular Purple Icon */}
            <div className="flex justify-center mb-8">
              <img
                src="/favicon.png"
                alt="CloserX Logo"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
            </div>

            {/* Why We Are Here Button */}
            <div className="flex justify-center mb-6">
              <button className="px-4 py-2 bg-gray-800 rounded-lg text-white text-sm font-semibold uppercase tracking-wide">
                WHY WE ARE HERE
              </button>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-3 leading-tight">
              The Voice of Technology. <br /> Bringing the World's Knowledge, <br /> Stories and Agents to Life.
            </h1>

            {/* Tagline */}
            <p className="text-xs md:text-sm text-white/70 max-w-xl mx-auto">
              We help you create your own agents, stories and knowledge bases.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            <div
              className="grid md:grid-cols-2 gap-12 bg-[#121212] lg:gap-16 items-center"
              style={{
                width: '1131px',
                height: '620px',
                opacity: 1,
                transform: 'rotate(0deg)',
                borderRadius: '12px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#1F1F1F'
              }}
            >
              {/* Left Column - Text */}
              <div className="p-6">
                <h2 className="text-4xl md:text-5xl font-normal text-white mb-8 ">
                  About us
                </h2>
                <p className="text-lg md:text-[16px] font-medium text-white/80 leading-relaxed mb-4">
                  Founded in 2021, CloserX.ai has emerged as a pioneering force in the AI-powered business communications industry, revolutionizing how agencies and businesses approach sales automation and customer engagement.
                </p>
                <p className="text-lg md:text-[16px] text-white/80 leading-relaxed mb-16">
                  Born from the vision to democratize advanced AI calling technology, CloserX.ai has grown to serve over 5000+ agency partners worldwide, helping them transform their operations with cutting-edge artificial intelligence solutions.
                </p>
                <Link to="/contact">
                  <BorderedButton text="CONTACT US" />
                </Link>
              </div>

              {/* Right Column - Dashboard Screenshot */}
              <div className="relative h-[280px] sm:h-[400px] md:h-[620px] lg:h-[580px] xl:h-[580px]">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 h-full">
                  <img
                    src={dashboardImage}
                    alt="Dashboard Screenshot"
                    className="w-[603px] h-[604px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="flex flex-col"
              style={{
                width: '839px',
                height: '143px',
                opacity: 1,
                transform: 'rotate(0deg)',
                gap: '20px',
                margin: '0 auto'
              }}
            >
              <h2 className="text-4xl md:text-5xl font-normal text-white">
                Our Mission
              </h2>
              <p className="text-[14px] md:text-[14px] font-medium text-white/80 leading-relaxed">
                Our mission is to democratize access to advanced AI technology and empower businesses to create, deploy, and manage their own AI-powered agents. We believe that every organization, regardless of size, should have access to cutting-edge AI solutions that drive innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* The White-Label Advantage Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            {/* Cards Grid - 3 cards per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - The White-Label Advantage Header */}
              <div
                className="bg-transparent p-6 flex flex-col gap-2"
                style={{
                  width: '100%',
                  height: '280px',
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }}
              >
                <h2 className="text-[40px] font-normal mb-6 text-white leading-tight">
                  The White-Label Advantage
                </h2>
                <p
                  className="text-sm text-[#6B6B6B] leading-relaxed mb-10"
                  style={{
                    width: '100%',
                    height: 'auto',
                    opacity: 1,
                    transform: 'rotate(0deg)'
                  }}
                >
                  Unlike traditional SaaS platforms, CloserX.ai empowers agencies to completely rebrand our AI calling platform with your own logo, colors, and custom domain.
                </p>

              </div>

              {/* Feature Cards */}
              {whiteLabelFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-transparent border border-gray-800 p-6 transition-all duration-300 hover:bg-[#1A1A1A]"
                  style={{
                    width: '100%',
                    height: '280px',
                    borderRadius: '12px',
                    borderWidth: '1px',
                    opacity: 1,
                    transform: 'rotate(0deg)'
                  }}
                >
                  <div
                    className="flex flex-col gap-3 mb-4"
                    style={{
                      width: '100%',
                      height: 'auto',
                      opacity: 1,
                      transform: 'rotate(0deg)'
                    }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                      <img src={feature.iconUrl} alt={feature.title} className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                  </div>
                  <p
                    className="text-sm text-gray-400 leading-relaxed"
                    style={{
                      width: '100%',
                      height: 'auto',
                      opacity: 1,
                      transform: 'rotate(0deg)',
                      marginTop: 'auto',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* What We Do Section - First Instance (Design, Build, Launch, Scale) */}
        <ContentCarouselSectionWithButton
          title="What We Do"
          description="CloserX.ai provides an AI-powered voice calling platform that operates 24/7, 365 days a year with ultra-realistic voice agents"

          items={whatWeDoItems}
          itemsPerView={4}
          showNavigation={true}
          backgroundColor="bg-black"
          renderItem={(item) => (
            <div
              className="bg-transparent border border-gray-800 p-8 flex flex-col transition-all duration-300 hover:bg-[#1A1A1A]"
              style={{
                width: '280px',
                height: '240px',
                opacity: 1,
                transform: 'rotate(0deg)',
                borderRadius: '12px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#1F1F1F'
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <img src={item.iconUrl} alt={item.title} className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          )}
        />

        {/* Pricing Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
              {/* Left Column - Header with Decorative Element */}
              <div className="relative">
                <p className="text-sm text-gray-400 mb-2 border border-gray-700 rounded-full px-4 py-2 inline-block">Choose Your Plan</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Pay only for what you use
                </h2>
                <p className="text-base text-gray-400">
                  Plans built for creators and business of all sizes
                </p>


              </div>

              {/* Right Column - Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Starter Plan */}
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8 flex flex-col">
                  <h3 className="text-[18px] font-medium text-white mb-2">Starter</h3>
                  <p className="text-sm text-gray-400 mb-16">For startups and publishers</p>
                  <p className="text-xs text-gray-500 mb-2">UP TO 3 Sub-Accounts</p>
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">$29</span>
                    <span className="text-base text-gray-400">Per Month</span>
                  </div>
                  <a href="https://offer.closerx.ai?utm_source=website&utm_medium=button&utm_campaign=about_page&utm_content=starter" target="_blank" rel="noopener noreferrer" className="w-full bg-transparent border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition-all text-center block">
                    Get Started
                  </a>
                  <ul className="space-y-3 flex-grow mt-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Basic dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Limited API access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Email Support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Up to 3 sub-accounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Basic analytics</span>
                    </li>
                  </ul>
                </div>

                {/* Professional Plan - Highlighted */}
                <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 rounded-2xl p-8 flex flex-col relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 px-4 py-2 rounded-full">
                    <span className="text-xs font-semibold text-white tracking-wide">MOST POPULAR</span>
                  </div>
                  <h3 className="text-[18px] font-medium text-white mb-2">Professional</h3>
                  <p className="text-sm text-white/90 mb-12">For rapidly scaling startups and publishers</p>
                  <p className="text-xs text-white/80 mb-2">UP TO 10 Sub-Accounts</p>
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">$97</span>
                    <span className="text-base text-white/90">Per Month</span>
                  </div>
                  <a href="https://offer.closerx.ai?utm_source=website&utm_medium=button&utm_campaign=about_page&utm_content=professional" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-purple-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-all text-center block">
                    Get Started
                  </a>
                  <ul className="space-y-3 flex-grow mt-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">Advanced dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">Priority API access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">Live chat support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">Up to 10 sub-accounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">Custom branding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">Call recording</span>
                    </li>
                  </ul>
                </div>

                {/* Growing Plan */}
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8 flex flex-col">
                  <h3 className="text-[18px] font-medium text-white mb-2">Growing</h3>
                  <p className="text-sm text-gray-400 mb-6">For enterprises that need volume based discounts and custom terms</p>
                  <p className="text-xs text-gray-500 mb-2">Unlimited Sub-Accounts</p>
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">$297</span>
                    <span className="text-base text-gray-400">Per Month</span>
                  </div>
                  <a href="https://offer.closerx.ai?utm_source=website&utm_medium=button&utm_campaign=about_page&utm_content=growing" target="_blank" rel="noopener noreferrer" className="w-full bg-transparent border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition-all text-center block">
                    Get Started
                  </a>
                  <ul className="space-y-3 flex-grow mt-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Full-featured dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Unlimited API calls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">24/7 dedicated support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Unlimited sub-accounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Custom AI models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">SLA guarantee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Priority processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <ContentCarouselSection
          tag="What We Do"
          title="What We Do"
          description="CloserX.ai provides an AI-powered voice calling platform that operates 24/7, 365 days a year with ultra-realistic voice agents"
          items={coreValuesItems}
          itemsPerView={4}
          showNavigation={false}
          backgroundColor="bg-black"
          renderItem={(item) => (
            <div className="bg-[#0D0D0D] border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          )}
        />


        {/* We Are Hiring Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white font-medium mb-8">
                  WE ARE HIRING
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  Join our team, we're building the future of enterprise.
                </h2>

                <p className="text-base text-gray-400 mb-6 leading-relaxed">
                  Today, CloserX.ai stands as the trusted AI calling solution for thousands of agencies worldwide, helping them differentiate their offerings, increase revenue streams, and deliver exceptional value to their clients. With proven templates, comprehensive training, and a 30-day money-back guarantee (terms and conditions applied), we provide everything needed to launch and scale a profitable AI calling agency.
                </p>

                <p className="text-base text-gray-400 mb-10 leading-relaxed">
                  Whether you're an established marketing agency looking to expand your service portfolio or an entrepreneur ready to enter the AI space, CloserX.ai provides the complete toolkit for success in the rapidly evolving world of AI-powered business communications.
                </p>

                <BorderedButton text="CONTACT US" />
              </div>

              {/* Right Column - Dashboard Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={dashboardImage}
                    alt="CloserX.ai Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div
              className="bg-[#121212] border border-gray-800 p-12 md:p-16 relative"
              style={{
                width: '1247px',
                height: '213px',
                left: '96px',
                borderRadius: '24px',
                opacity: 1,
                transform: 'rotate(0deg)'
              }}
            >
              <div className="flex flex-col justify-center h-full">
                <div
                  className="flex flex-col"
                  style={{
                    width: '503px',
                    height: '108px',
                    opacity: 1,
                    transform: 'rotate(0deg)',
                    gap: '12px'
                  }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white">
                    Start using an AI agent today
                  </h2>
                  <p className="text-base md:text-base text-white/70">
                    Join our growing network of partners and unlock new opportunities with AI-driven customer engagement.
                  </p>
                </div>
                <button
                  className="bg-purple-600 text-[14px] p-2 hover:bg-purple-700 text-white rounded-full font-normal transition-colors"
                  style={{
                    width: '120px',
                    height: '41px',
                    opacity: 1,
                    transform: 'rotate(0deg)',
                    marginTop: '12px'

                  }}
                >
                  <a href="/contact" className="inline-block">Get In Touch</a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

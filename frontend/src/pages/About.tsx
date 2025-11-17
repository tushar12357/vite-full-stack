import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Shield, 
  DollarSign, 
  Plus, 
  Square, 
  Circle, 
  Triangle,
  Check,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import dashboardImage from "@/assets/image.png";

const About = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-black min-h-screen py-10 md:py-16 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Circular Purple Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-white">O</span>
              </div>
            </div>
            
            {/* Why We Are Here Button */}
            <div className="flex justify-center mb-6">
              <button className="px-4 py-2 bg-gray-800 rounded-lg text-white text-sm font-semibold uppercase tracking-wide">
                WHY WE ARE HERE
              </button>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-3 leading-tight">
              The Voice of Technology. <br /> Bringing the World's Knowledge, <br/ > Stories and Agents to Life.
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
            <div className="grid md:grid-cols-2 gap-12 rounded-xl border-2 border-gray-800 bg-[#121212] lg:gap-16 items-center">
              {/* Left Column - Text */}
              <div className="p-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 ">
                  About us
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-4">
                  Founded in 2021, CloserX.ai has emerged as a pioneering force in the AI-powered business communications industry, revolutionizing how agencies and businesses approach sales automation and customer engagement.
                </p>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                  Born from the vision to democratize advanced AI calling technology, CloserX.ai has grown to serve over 5000+ agency partners worldwide, helping them transform their operations with cutting-edge artificial intelligence solutions.
                </p>
                <Link to="/contact">
                  <button className="px-6 py-3 bg-black border-2 border-dashed border-white text-white text-sm uppercase tracking-wide rounded-lg hover:bg-white hover:text-black transition-colors">
                    CONTACT US
                  </button>
                </Link>
              </div>
              
              {/* Right Column - Dashboard Screenshot */}
              <div className="relative h-[280px] sm:h-[400px] md:h-[450px] lg:h-[450px] xl:h-[550px]">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 h-full">
                  <img 
                    src={dashboardImage} 
                    alt="Dashboard Screenshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Our mission is to democratize access to advanced AI technology and empower businesses to create, deploy, and manage their own AI-powered agents. We believe that every organization, regardless of size, should have access to cutting-edge AI solutions that drive innovation and growth.
            </p>
          </div>
        </section>

        {/* The White-Label Advantage Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
              {/* Left Column - Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  The White-Label Advantage
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                  Our white-label solution allows you to fully customize and brand the platform according to your business needs. Seamlessly integrate our technology into your existing infrastructure while maintaining complete control over your brand identity and customer experience.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
                  Read More
                </Button>
              </div>
              
              {/* Right Column - Three Feature Cards */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Full brand control</h3>
                  </div>
                  <p className="text-white/70">
                    Customize every aspect of the platform to match your brand identity and create a seamless experience for your customers.
                  </p>
                </div>
                
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Secure and private</h3>
                  </div>
                  <p className="text-white/70">
                    Enterprise-grade security ensures your data and your customers' information remain protected and private at all times.
                  </p>
                </div>
                
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Cost-effective</h3>
                  </div>
                  <p className="text-white/70">
                    Reduce development costs and time-to-market by leveraging our proven platform instead of building from scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section - First Instance (Design, Build, Launch, Scale) */}
        <section className="bg-white py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                What We Do
              </h2>
              <p className="text-lg text-black/70">
                We provide end-to-end solutions for creating and managing AI-powered agents.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-400 mb-4">01</div>
                <h3 className="text-2xl font-bold text-black mb-4">Design</h3>
                <p className="text-black/70 leading-relaxed">
                  We work with you to design AI agents that align with your business goals and customer needs, ensuring seamless integration with your existing workflows.
                </p>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-gray-400 mb-4">02</div>
                <h3 className="text-2xl font-bold text-black mb-4">Build</h3>
                <p className="text-black/70 leading-relaxed">
                  Our team of experts builds robust and scalable AI agents using the latest technologies and best practices in artificial intelligence.
                </p>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-gray-400 mb-4">03</div>
                <h3 className="text-2xl font-bold text-black mb-4">Launch</h3>
                <p className="text-black/70 leading-relaxed">
                  We help you launch your AI agents quickly and efficiently, ensuring they are ready to handle real-world interactions from day one.
                </p>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-gray-400 mb-4">04</div>
                <h3 className="text-2xl font-bold text-black mb-4">Scale</h3>
                <p className="text-black/70 leading-relaxed">
                  As your business grows, we provide the infrastructure and support needed to scale your AI agents to handle increasing volumes of interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
              {/* Left Column - Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Pricing
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-4">
                  Pay only for what you use.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  Our flexible pricing model ensures you only pay for the resources you need, with the ability to scale up or down as your business requirements change.
                </p>
              </div>
              
              {/* Right Column - Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Basic Plan */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
                  <div className="text-3xl font-bold text-white mb-4">€200</div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">10 agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">10 stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">10 knowledge bases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">Basic support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                    Select Plan
                  </Button>
                </div>
                
                {/* Pro Plan - Highlighted */}
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 flex flex-col relative transform scale-105 z-10">
                  <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                  <div className="text-3xl font-bold text-white mb-4">€700</div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">50 agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">50 stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">50 knowledge bases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">Advanced support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">Custom integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">API access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">Analytics</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white hover:bg-gray-100 text-purple-600 font-semibold">
                    Select Plan
                  </Button>
                </div>
                
                {/* Enterprise Plan */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-white mb-4">€2000</div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">Unlimited agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">Unlimited stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">Unlimited knowledge bases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">Dedicated support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">On-premise deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">Custom development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">SLA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">Training</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                    Select Plan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section - Second Instance (Integrations, Knowledge Bases, Bots & Agents, Analytics) */}
        <section className="bg-white py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                What We Do
              </h2>
              <p className="text-lg text-black/70">
                Comprehensive solutions for modern AI-powered businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Plus className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Integrations</h3>
                <p className="text-black/70 leading-relaxed">
                  Connect seamlessly with your existing tools and platforms through our extensive integration ecosystem, enabling smooth data flow and workflow automation.
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Square className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Knowledge Bases</h3>
                <p className="text-black/70 leading-relaxed">
                  Create and manage comprehensive knowledge bases that power your AI agents with accurate, up-to-date information from your organization.
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Circle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Bots & Agents</h3>
                <p className="text-black/70 leading-relaxed">
                  Develop intelligent bots and agents that can handle complex interactions, learn from conversations, and provide exceptional customer experiences.
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Triangle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Analytics</h3>
                <p className="text-black/70 leading-relaxed">
                  Monitor and analyze the performance of your AI agents with comprehensive analytics and insights that help you optimize and improve continuously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Careers
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-4">
                  Join our team, we're exploring the future of enterprise.
                </p>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  We're building the next generation of AI-powered solutions and we're looking for talented individuals who share our passion for innovation. Our team is composed of experts in AI, machine learning, software engineering, and product design who work together to create cutting-edge solutions.
                </p>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  We offer a collaborative environment where creativity thrives, ideas are valued, and every team member has the opportunity to make a significant impact. If you're excited about pushing the boundaries of what's possible with AI, we'd love to hear from you.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
                  Learn More
                </Button>
          </div>

              {/* Right Column - Screenshot */}
              <div className="relative">
                <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                  <div className="bg-black rounded-lg overflow-hidden">
                    {/* Mock Dashboard UI */}
                    <div className="p-6">
                      <div className="flex gap-4 mb-6">
                        <div className="text-white/60 text-sm">Dashboard</div>
                        <div className="text-white text-sm font-semibold">Agents</div>
                        <div className="text-white/60 text-sm">Stories</div>
                        <div className="text-white/60 text-sm">Knowledge</div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-purple-600"></div>
                            <div>
                              <div className="text-white font-semibold">Agent 1</div>
                              <div className="text-white/60 text-sm">AI Assistant</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-purple-600"></div>
                            <div>
                              <div className="text-white font-semibold">Agent 2</div>
                              <div className="text-white/60 text-sm">Customer Support</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-black py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Start using AI to agent today!
                </h2>
                <p className="text-lg md:text-xl text-white/80">
                  Join our newsletter to stay up to date with our latest news and features.
                </p>
              </div>
              
              {/* Right Column - Newsletter Form */}
              <div>
                <form onSubmit={handleSubscribe} className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-gray-900 border-gray-800 text-white placeholder:text-white/50 h-12 px-4 rounded-lg"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg h-12"
                  >
                    Subscribe
                  </Button>
                </form>
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

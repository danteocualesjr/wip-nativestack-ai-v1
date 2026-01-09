
import { ArrowRight, Check, ChevronDown, Zap, Settings, Bot, Code, Sparkles } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-blue-50/30">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl text-center">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-primary font-medium text-sm">
                <Sparkles className="w-4 h-4" />
                AI-Powered Business Solutions
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-secondary via-gray-800 to-secondary bg-clip-text text-transparent">
                We help businesses thrive
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent">
                with AI
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-secondary/80 mb-8 sm:mb-10 px-4 leading-relaxed">
              We help businesses build internal tools, AI-powered systems, and production-ready MVPs, such as custom CRMs, dashboards, SaaS applications, AI agents, and chatbots to streamline workflows and drive revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <a 
                href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-white rounded-2xl hover:from-primary/90 hover:to-orange-500/90 transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link 
                to="/our-services" 
                className="group px-8 py-4 border-2 border-primary/20 text-primary rounded-2xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-orange-500/5 transition-all duration-300 flex items-center justify-center gap-2 text-base font-semibold backdrop-blur-sm bg-white/80"
              >
                Our Services 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative mt-16 sm:mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <div className="relative w-full max-w-5xl">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                  <img
                    src="/lovable-uploads/7f364202-7528-4542-97f4-0639e1e1ed41.png"
                    alt="Dashboard Preview"
                    className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto border border-white/20 mx-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-white/50 to-gradient-to-br from-blue-50/30 to-purple-50/20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
          
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center mb-16 sm:mb-20">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 font-medium text-sm">
                  <Zap className="w-4 h-4" />
                  Our Expertise
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-gray-700 bg-clip-text text-transparent mb-6">
                Services designed for your business
              </h2>
              <p className="text-secondary/70 max-w-2xl mx-auto text-lg px-4">
                Tailored solutions to help your business leverage AI and drive growth
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {[
                {
                  title: "Building Internal Tools and AI-Powered Systems for Businesses",
                  description: "We create custom internal tools and AI systems that align with your company's unique needs, enhancing productivity and optimizing business processes.",
                  icon: <Settings className="w-8 h-8 text-white" />,
                  gradient: "from-[#667eea] to-[#764ba2]",
                  glowColor: "from-[#667eea]/20 to-[#764ba2]/20",
                },
                {
                  title: "SaaS Applications for Entrepreneurs and Startups",
                  description: "We develop scalable, market-ready SaaS solutions that help entrepreneurs and startups bring innovative ideas to life and gain competitive advantage.",
                  icon: <Code className="w-8 h-8 text-white" />,
                  gradient: "from-[#f093fb] to-[#f5576c]",
                  glowColor: "from-[#f093fb]/20 to-[#f5576c]/20",
                },
                {
                  title: "AI Agents for Companies and Teams",
                  description: "We build AI agents that automate complex tasks, enhance team productivity, and provide valuable insights to drive business decisions.",
                  icon: <Bot className="w-8 h-8 text-white" />,
                  gradient: "from-[#4facfe] to-[#00f2fe]",
                  glowColor: "from-[#4facfe]/20 to-[#00f2fe]/20",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl transition-all duration-500 hover:translate-y-[-12px] border border-white/40 hover:shadow-2xl"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.glowColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  <div className="relative">
                    <div className={`mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r ${feature.gradient} inline-block shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-secondary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-secondary/70 text-base leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="pt-6 border-t border-gray-100">
                      <Link 
                        to="/our-services" 
                        className="text-primary font-semibold text-base flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-orange-500"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/20"></div>
          
          <div className="relative mx-auto max-w-4xl">
            <div className="text-center mb-12 sm:mb-16">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-600 font-medium text-sm">
                  <Check className="w-4 h-4" />
                  Questions & Answers
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary to-gray-700 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "How can AI benefit my business?",
                  answer: "AI can automate repetitive tasks, analyze large datasets for insights, improve customer experiences, and help make data-driven decisions.",
                },
                {
                  question: "What types of businesses do you work with?",
                  answer: "We work with businesses of all sizes across various industries, from startups to enterprise organizations looking to leverage AI.",
                },
                {
                  question: "How do I get started with NativeStack AI?",
                  answer: "Contact us for a free consultation where we'll discuss your business needs and how our AI solutions can help.",
                },
                {
                  question: "How long does it take to build an MVP?",
                  answer: "Depending on complexity, our MVPs typically take 2-6 weeks to develop. We focus on getting your core features to market quickly while ensuring quality and functionality.",
                },
                {
                  question: "Do you provide ongoing support after implementation?",
                  answer: "Yes, we offer various support and maintenance packages to ensure your AI solution continues to perform optimally and can be enhanced as your business grows.",
                },
                {
                  question: "What technologies do you use for development?",
                  answer: "We use cutting-edge technologies including React, Node.js, Python, various AI/ML frameworks, and cloud platforms like AWS and Azure to build scalable, modern solutions.",
                },
                {
                  question: "Can you integrate AI into our existing systems?",
                  answer: "Absolutely! We specialize in seamlessly integrating AI capabilities into your existing workflows and systems through APIs, custom integrations, and gradual implementation strategies.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group border border-gray-200 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300"
                >
                  <button
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-primary/5 hover:to-orange-500/5"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-semibold text-base sm:text-lg text-secondary group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-all duration-300 text-primary ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-gray-50/50 to-blue-50/30 border-t border-gray-100">
                      <p className="text-secondary/80 text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-r from-primary via-orange-500 to-red-500 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          
          <div className="relative mx-auto max-w-7xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-sm">
                <Sparkles className="w-4 h-4" />
                Ready to Transform?
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Ready to transform your business with AI?
            </h2>
            <p className="text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
              Join innovative companies that are already leveraging our AI expertise to build MVPs and drive growth.
            </p>
            <a 
              href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary rounded-2xl font-bold hover:bg-white/95 transition-all duration-300 text-base sm:text-lg shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import { ArrowRight, Check, ChevronDown, Zap, Settings, Bot, Code } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary mb-4 sm:mb-6">
              We help businesses thrive
              <br />
              <span className="text-primary">
                with AI
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-secondary mb-6 sm:mb-8 px-4">
              We help businesses build internal tools, AI-powered systems, and production-ready MVPs, such as custom CRMs, dashboards, SaaS applications, AI agents, and chatbots to streamline workflows and drive revenue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <a 
                href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Get Started
              </a>
              <Link to="/our-services" className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16">
            <div className="flex justify-center">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="Hero"
                className="rounded-2xl sm:rounded-3xl shadow-2xl max-w-[95%] sm:max-w-[90%] w-auto h-auto"
              />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-gradient-to-b from-surface to-background px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">Services designed for your business</h2>
              <p className="text-secondary/80 max-w-2xl mx-auto text-sm sm:text-base px-4">Tailored solutions to help your business leverage AI and drive growth</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Building Internal Tools and AI-Powered Systems for Businesses",
                  description: "We create custom internal tools and AI systems that align with your company's unique needs, enhancing productivity and optimizing business processes.",
                  icon: <Settings className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
                  gradient: "from-[#6495ED] to-[#4169E1]",
                },
                {
                  title: "SaaS Applications for Entrepreneurs and Startups",
                  description: "We develop scalable, market-ready SaaS solutions that help entrepreneurs and startups bring innovative ideas to life and gain competitive advantage.",
                  icon: <Code className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
                  gradient: "from-[#9370DB] to-[#8A2BE2]",
                },
                {
                  title: "AI Agents for Companies and Teams",
                  description: "We build AI agents that automate complex tasks, enhance team productivity, and provide valuable insights to drive business decisions.",
                  icon: <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
                  gradient: "from-[#FFA07A] to-[#FF6347]",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-2xl bg-white shadow-xl transition-all duration-300 hover:translate-y-[-8px] border border-border/10 group"
                >
                  <div className={`mb-5 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} inline-block`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-secondary/80 text-sm sm:text-base">{feature.description}</p>
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/30">
                    <Link 
                      to="/our-services" 
                      className="text-primary font-medium text-sm sm:text-base flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-secondary">Frequently Asked Questions</h2>
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
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-background/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-4 sm:px-6 py-3 sm:py-4 bg-background/50">
                      <p className="text-secondary text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary text-white px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Ready to transform your business with AI?</h2>
            <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Join innovative companies that are already leveraging our AI expertise to build MVPs and drive growth.
            </p>
            <a 
              href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors inline-block text-sm sm:text-base"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

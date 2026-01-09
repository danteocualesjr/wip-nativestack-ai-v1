import { ArrowRight, Check, ChevronDown, Zap, Settings, Bot, Code, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/20 via-amber-300/15 to-yellow-200/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-violet-400/15 via-purple-300/10 to-indigo-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-200/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative mx-auto max-w-7xl text-center"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-8 flex justify-center">
              <div className="section-badge bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200/60 text-orange-700 shadow-sm">
                <Sparkles className="w-4 h-4" />
                AI-Powered Business Solutions
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-balance"
            >
              <span className="gradient-text-dark">
                We help businesses thrive
              </span>
              <br />
              <span className="gradient-text-primary">
                with AI
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-600 mb-10 px-4 leading-relaxed text-balance"
            >
              We help businesses build internal tools, AI-powered systems, and production-ready MVPs, such as custom CRMs, dashboards, SaaS applications, AI agents, and chatbots to streamline workflows and drive revenue.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 px-4"
            >
              <a 
                href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link 
                to="/our-services" 
                className="btn-secondary group flex items-center justify-center gap-2"
              >
                Our Services 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative mt-20 sm:mt-24"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <div className="relative w-full max-w-5xl">
                  <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/30 via-amber-400/20 to-orange-500/30 rounded-[2.5rem] blur-2xl animate-glow"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-2 rounded-[2rem] shadow-2xl">
                    <img
                      src="/lovable-uploads/7f364202-7528-4542-97f4-0639e1e1ed41.png"
                      alt="Dashboard Preview"
                      className="rounded-[1.5rem] w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-gray-50/50 to-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.03),transparent_50%)]"></div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative mx-auto max-w-7xl"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <div className="mb-6 flex justify-center">
                <div className="section-badge bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200/60 text-violet-700 shadow-sm">
                  <Zap className="w-4 h-4" />
                  Our Expertise
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-dark mb-6 text-balance">
                Services designed for your business
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg px-4">
                Tailored solutions to help your business leverage AI and drive growth
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Building Internal Tools and AI-Powered Systems for Businesses",
                  description: "We create custom internal tools and AI systems that align with your company's unique needs, enhancing productivity and optimizing business processes.",
                  icon: <Settings className="w-7 h-7 text-white" />,
                  gradient: "from-violet-500 to-purple-600",
                  bgLight: "bg-violet-50",
                },
                {
                  title: "SaaS Applications for Entrepreneurs and Startups",
                  description: "We develop scalable, market-ready SaaS solutions that help entrepreneurs and startups bring innovative ideas to life and gain competitive advantage.",
                  icon: <Code className="w-7 h-7 text-white" />,
                  gradient: "from-rose-500 to-pink-600",
                  bgLight: "bg-rose-50",
                },
                {
                  title: "AI Agents for Companies and Teams",
                  description: "We build AI agents that automate complex tasks, enhance team productivity, and provide valuable insights to drive business decisions.",
                  icon: <Bot className="w-7 h-7 text-white" />,
                  gradient: "from-cyan-500 to-blue-600",
                  bgLight: "bg-cyan-50",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group card-elevated p-8 sm:p-10"
                >
                  <div className={`mb-8 p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} inline-flex shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:gradient-text-primary transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                    <Link 
                      to="/our-services" 
                      className="text-orange-600 font-semibold text-base flex items-center gap-2 group-hover:gap-3 transition-all hover:text-orange-500"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent"></div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative mx-auto max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="mb-6 flex justify-center">
                <div className="section-badge bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200/60 text-emerald-700 shadow-sm">
                  <Check className="w-4 h-4" />
                  Questions & Answers
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-dark text-balance">
                Frequently Asked Questions
              </h2>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-4">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group card-elevated overflow-hidden"
                >
                  <button
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-orange-50/50 transition-colors duration-300"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-orange-600 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 text-orange-500 ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 py-5 bg-gradient-to-r from-orange-50/50 to-amber-50/50 border-t border-orange-100/50">
                          <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          
          {/* Animated particles/dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-2 h-2 bg-orange-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-40 right-[15%] w-3 h-3 bg-purple-400 rounded-full animate-float opacity-40" style={{ animationDelay: '-2s' }}></div>
            <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-amber-300 rounded-full animate-float opacity-50" style={{ animationDelay: '-4s' }}></div>
            <div className="absolute bottom-20 right-[25%] w-2 h-2 bg-orange-300 rounded-full animate-float opacity-40" style={{ animationDelay: '-1s' }}></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-7xl text-center px-4 sm:px-6 lg:px-8"
          >
            <div className="mb-8 flex justify-center">
              <div className="section-badge glass-dark text-white/90">
                <Sparkles className="w-4 h-4 text-orange-400" />
                Ready to Transform?
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white text-balance">
              Ready to transform your business
              <br />
              <span className="gradient-text-primary">with AI?</span>
            </h2>
            <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
              Join innovative companies that are already leveraging our AI expertise to build MVPs and drive growth.
            </p>
            <a 
              href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:shadow-orange-500/30"
              style={{ boxShadow: '0 8px 32px -8px rgba(251, 146, 60, 0.5)' }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

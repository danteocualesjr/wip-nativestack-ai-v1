import { ArrowRight, Check, ChevronDown, Briefcase, Settings, BarChart3 } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding for navigation */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-secondary mb-6">
              We help businesses thrive
              <br />
              <span className="text-primary">
                with AI
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
              We help businesses build tools and systems to streamline workflows and drive revenue.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors flex items-center gap-2">
                Our Services <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative mt-16 space-y-10">
            {/* Main Dashboard Image */}
            <div className="flex justify-center">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="Hero"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
              />
            </div>
            
            {/* KPI Dashboard Image */}
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/987c42c5-fb90-4199-a3b1-847454a8df17.png"
                alt="KPI Dashboard"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Services designed for your business</h2>
              <p className="text-secondary/80 max-w-2xl mx-auto">Tailored solutions to help your business leverage AI and drive growth</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Strategy Consulting",
                  description: "Expert guidance to integrate AI into your business workflows",
                  icon: <Briefcase className="w-8 h-8 text-primary" />,
                },
                {
                  title: "Custom AI Development",
                  description: "Tailor-made AI solutions to address your specific business needs",
                  icon: <Settings className="w-8 h-8 text-primary" />,
                },
                {
                  title: "Data Analysis & Insights",
                  description: "AI-powered analytics to unlock valuable insights from your data",
                  icon: <BarChart3 className="w-8 h-8 text-primary" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-border/30 hover:border-primary/30 group"
                >
                  <div className="mb-6 p-4 rounded-full bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-secondary/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16 text-secondary">Frequently Asked Questions</h2>
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
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-background/50">
                      <p className="text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Ready to transform your business with AI?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join innovative companies that are already leveraging our AI expertise to drive growth.
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

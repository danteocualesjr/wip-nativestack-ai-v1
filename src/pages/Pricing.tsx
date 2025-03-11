
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DollarSign, Check, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding for navigation */}
      <main className="pt-16">
        {/* Hero Section - Updated gradient colors to match the site's color scheme */}
        <section className="px-6 lg:px-8 py-24 bg-gradient-to-br from-[#FF9D5C] to-[#FF6601] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium">Pricing</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium mb-3">All in one digital transformation team</h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Flexible Pricing
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-12">
              Partner with a team dedicated to driving impactful digital transformations. Our proven strategies and 
              cutting-edge solutions empower your business to scale and thrive in today's fast-paced digital landscape.
            </p>
            <a 
              href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full text-lg py-6 px-8 bg-white text-primary hover:bg-white/90 shadow-lg flex items-center gap-2 mx-auto inline-flex"
            >
              Get Started Today <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Pricing Content */}
        <section className="px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center bg-primary/10 w-12 h-12 rounded-full">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">Enterprise Plan</h2>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">$5,000</span>
                  <span className="text-xl text-muted-foreground ml-2">/month</span>
                </div>
                <p className="text-lg text-secondary/80 mb-6">
                  Comprehensive AI transformation services tailored for businesses ready to leverage cutting-edge technology.
                </p>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-semibold mb-6">What's included:</h3>
                <ul className="space-y-4">
                  {[
                    "Three production-ready MVPs per quarter",
                    "Ongoing maintenance of all systems and tools",
                    "Weekly strategy and implementation sessions",
                    "Custom AI training for your team (up to 10 members)",
                    "Tailored tech stack curation and implementation",
                    "AI-powered sales support and optimization",
                    "Data analysis and actionable insights",
                    "Integration with existing systems",
                    "24/7 priority support",
                    "Monthly performance reports"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <span className="text-secondary/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Book a Call Section - Updated color to match the brand */}
            <div className="mt-16 bg-zinc-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Book a call</h3>
                <p className="text-white/70">Book a 15-minute free call with our team</p>
              </div>
              <a 
                href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full py-6 px-8 bg-primary text-white hover:bg-primary/90 shadow-lg flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Book a call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

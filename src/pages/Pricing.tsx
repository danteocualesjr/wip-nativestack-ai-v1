
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Rocket, Check } from "lucide-react";
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
              Partner with NativeStack AI to build AI-powered internal tools and systems that streamline workflows, enhance productivity, and drive revenue. Our tailored solutions empower businesses to scale efficiently and stay ahead in an AI-driven world.
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
          <div className="max-w-5xl mx-auto">
            {/* Startup Plan - Now centered as the only plan */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
              <div className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center bg-primary/10 w-12 h-12 rounded-full">
                    <Rocket className="h-6 w-6 text-primary" />
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">Startup Plan</h2>
                </div>
                <p className="text-lg text-secondary/80 mb-6">
                  For early-stage startups and small teams looking to leverage AI-powered tools efficiently.
                </p>
                <div className="flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-primary">$5,000</span>
                  <span className="text-secondary/80 ml-1">/month</span>
                </div>
                <a 
                  href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full rounded-lg bg-primary text-white py-3 px-4 hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Book a Call
                </a>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-semibold mb-6">What's included:</h3>
                <ul className="space-y-4">
                  {[
                    "Up to 10 requests & revisions per month",
                    "Up to 3 production-ready MVPs per month (e.g., custom CRMs, dashboards, automation tools, SaaS applications)",
                    "Workflow automation & optimization for sales, productivity, and analytics",
                    "Weekly progress updates & strategy calls",
                    "Email & Slack support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <span className="text-secondary/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-secondary/90 font-medium">
                    <span className="font-semibold text-primary">Ideal for:</span> Early-stage startups and small teams looking to leverage AI-powered tools efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book a Call Section */}
          <div className="mt-16 bg-zinc-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

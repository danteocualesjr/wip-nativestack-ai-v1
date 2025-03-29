
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  LineChart, 
  BarChart, 
  PieChart, 
  AreaChart, 
  Laptop, 
  BookOpen, 
  Plane, 
  ShoppingBag, 
  PenTool, 
  Search, 
  Zap, 
  Compass, 
  Brain, 
  Bot, 
  Globe,
  Image 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding for navigation */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-24 bg-gradient-to-br from-[#FF9D5C] to-[#FF6601] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Innovative Solutions<br />for Modern Businesses
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-8">
              Explore our collection of AI-powered tools, dashboards, and applications that help businesses streamline operations, increase productivity, and drive growth.
            </p>
            <Link to="/contact">
              <Button className="rounded-full text-lg py-6 px-8 bg-white text-primary hover:bg-white/90 shadow-lg">
                Let's Build Together
              </Button>
            </Link>
          </div>
        </section>

        {/* Category: Dashboards & Analytics */}
        <section className="px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dashboards & Analytics</h2>
              <p className="text-secondary/80 max-w-2xl mx-auto">
                Data visualization tools that provide real-time insights into your business performance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* General Dashboard */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-blue-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/7f364202-7528-4542-97f4-0639e1e1ed41.png" 
                      alt="General Dashboard" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">General Dashboard</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    Comprehensive dashboard for tracking budget, spending, and savings in real-time with visual representations and insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Budget Tracking</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Expense Analytics</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Savings Overview</span>
                  </div>
                </div>
              </div>

              {/* KPI Dashboard */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-indigo-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/7bb80330-15e0-4a49-825a-f50e1ece723c.png" 
                      alt="KPI Dashboard" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <AreaChart className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">KPI Dashboard</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    Visualize and monitor key performance indicators for your team, providing actionable insights to improve business outcomes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Metric Tracking</span>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Performance Analytics</span>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Revenue Monitoring</span>
                  </div>
                </div>
              </div>

              {/* Performance Dashboard */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-cyan-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/1ad2a634-2c90-44bf-8240-5e3ec4bcb339.png" 
                      alt="Performance Dashboard" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Performance Dashboard</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    Monitor team performance metrics including response times, conversion rates, and customer satisfaction scores.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">Team Metrics</span>
                    <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">Response Analytics</span>
                    <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">Customer Satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Sales Dashboard */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-green-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/7adc144d-ba70-4fc9-8857-85a6317630a3.png" 
                      alt="Sales Dashboard & Leaderboard" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Sales Dashboard & Leaderboard</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    Track sales performance, team capacity, and leaderboard rankings to motivate and optimize your sales operations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Performance Tracking</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Team Leaderboard</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Capacity Management</span>
                  </div>
                </div>
              </div>

              {/* Custom CRM */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-purple-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/7418c782-9d00-4602-b801-9bb6b5456863.png" 
                      alt="Custom CRM" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <PenTool className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Custom CRM</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    Tailor-made customer relationship management system to streamline sales processes, track interactions, and manage leads.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Lead Management</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Task Automation</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Contact Organization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Solutions Section */}
        <section className="px-6 lg:px-8 py-20 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Solutions</h2>
              <p className="text-secondary/80 max-w-2xl mx-auto">
                Intelligent tools that leverage artificial intelligence to automate tasks and provide valuable insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Leadscape AI */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-orange-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/095327d1-01ef-4931-8a3e-bac9e7788a94.png" 
                      alt="Leadscape AI" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Leadscape AI</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    AI-powered research agent that delivers detailed insights about companies including size, industry, tech stack, funding, and customer fit.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Market Research</span>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Company Intelligence</span>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Lead Qualification</span>
                  </div>
                </div>
              </div>

              {/* PitchPilot AI */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-teal-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/72d7a8b8-39e7-4f36-96f5-7f7651be62b1.png" 
                      alt="PitchPilot AI" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">PitchPilot AI</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    AI sales playbook coach that analyzes sales calls and provides real-time conversation guidance and feedback to improve sales performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Sales Coaching</span>
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Conversation Analysis</span>
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Performance Insights</span>
                  </div>
                </div>
              </div>

              {/* AgentFly */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-blue-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/5f78e01d-50ff-469d-9b80-d9ddb29ffb10.png" 
                      alt="AgentFly" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">AgentFly</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    AI-powered platform for finding optimal award flights by optimizing loyalty points strategy to unlock premium travel experiences at unbeatable values.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Loyalty Points</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Travel Optimization</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">AI Recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category: Web Applications */}
        <section className="px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Applications</h2>
              <p className="text-secondary/80 max-w-2xl mx-auto">
                Beautifully designed, functional web applications that solve real-world problems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Airways */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-sky-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/99f8e941-802d-472d-a960-61c41bf5ec48.png" 
                      alt="Airways" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Airways</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    Smart reward points travel platform that helps users find and book the perfect award flights, maximizing the value of their travel rewards.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full">Award Flights</span>
                    <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full">Points Optimization</span>
                    <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full">Travel Search</span>
                  </div>
                </div>
              </div>

              {/* MindCraft */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-indigo-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/00967524-9b73-4b04-a7db-ad1ae449ca70.png" 
                      alt="MindCraft" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">MindCraft</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    Ed-tech platform offering expert-led AI courses with personalized learning paths, industry expert instructors, and real-world projects.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">AI Education</span>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Learning Platform</span>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Career Development</span>
                  </div>
                </div>
              </div>

              {/* Blooms & Petals */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100">
                <div className="h-52 flex items-center justify-center bg-pink-50 overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full w-full">
                    <img 
                      src="/lovable-uploads/8895b6cb-f451-4cf7-bb35-620b8fb496f0.png" 
                      alt="Blooms & Petals" 
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Blooms & Petals</h3>
                  </div>
                  <p className="text-secondary/80 mb-4">
                    An elegant e-commerce platform for handcrafted flower arrangements, bringing nature's artistry to customers' doorsteps. Discover beautifully curated bouquets created with care and delivered with love.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">E-commerce</span>
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">Floral Design</span>
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">Online Shopping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-8 py-20 bg-zinc-900 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
              Let our team of experts build AI-powered tools that streamline your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" className="rounded-full py-6 px-8 text-white border-white hover:bg-white hover:text-zinc-900">
                  Contact Us
                </Button>
              </Link>
              <a 
                href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full py-6 px-8 bg-primary text-white hover:bg-primary/90 shadow-lg inline-flex items-center justify-center"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurWork;

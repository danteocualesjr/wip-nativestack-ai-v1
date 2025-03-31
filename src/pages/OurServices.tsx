
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Robot, Settings, Code } from "lucide-react";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding for navigation */}
      <main className="pt-16">
        {/* Hero Section with gradient matching Pricing page */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#FF9D5C] to-[#FF6601] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium">Our Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8">
              Our <span className="text-white">Services</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 px-4">
              Comprehensive AI solutions designed to transform your business operations, 
              enhance productivity, and drive sustainable growth through effective MVPs.
            </p>
          </div>
        </section>

        {/* KPI Dashboard Image */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-surface">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/987c42c5-fb90-4199-a3b1-847454a8df17.png"
                alt="KPI Dashboard"
                className="rounded-xl sm:rounded-3xl shadow-2xl max-w-full w-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Service Icons Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#6495ED] to-[#4169E1] inline-block mb-4">
                  <Settings className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Internal Tools & AI Systems</h3>
              </div>
              
              {/* Service 2 Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#9370DB] to-[#8A2BE2] inline-block mb-4">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold">SaaS Applications</h3>
              </div>
              
              {/* Service 3 Icon - UPDATED to Robot */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFA07A] to-[#FF6347] inline-block mb-4">
                  <Robot className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold">AI Agents</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Content - Updated with new service descriptions */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            {/* Service 1 */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Building Internal Tools and AI-Powered Systems for Businesses</h2>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                We build AI-powered sales, productivity, and analytics tools—such as custom CRMs, dashboards, and SaaS applications—to help businesses streamline workflows and drive revenue.
              </p>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                Our core service is designing and developing internal tools and AI-powered systems that align with your company's unique needs. We specialize in creating custom CRMs, workflow automation tools, analytics dashboards, and SaaS applications that enhance productivity, improve decision-making, and optimize business processes. Whether you're a startup looking to scale operations or an enterprise aiming to boost efficiency, we build tailored, no-code and AI-driven solutions that integrate seamlessly into your existing workflows.
              </p>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                By automating repetitive tasks, enhancing data insights, and providing user-friendly internal tools, we empower your team to focus on high-impact work, make data-driven decisions, and ultimately increase revenue. Our approach ensures that your organization adopts AI in a way that is practical, scalable, and designed for real business growth. We focus on delivering production-ready MVPs quickly, allowing you to validate your tools before investing in full-scale development.
              </p>
            </div>

            {/* Service 2 */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">SaaS Applications for Entrepreneurs and Startups</h2>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                We develop market-ready SaaS applications that help entrepreneurs and startups bring innovative ideas to life and gain a competitive advantage in their industries.
              </p>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                Our team specializes in creating scalable, user-centric SaaS solutions that address specific market needs. From concept to launch, we guide entrepreneurs through the entire development process, ensuring that the final product aligns with your vision and business objectives. We focus on building applications with intuitive interfaces, robust functionality, and the flexibility to evolve as your business grows.
              </p>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                We emphasize creating SaaS products that not only solve real problems but also offer exceptional user experiences. By leveraging AI capabilities, we help startups differentiate their offerings in competitive markets, establish recurring revenue streams, and build scalable business models that attract both users and investors. Our MVP-first approach prioritizes rapid iterations, market feedback integration, and strategic feature prioritization to maximize your product's chances of success while minimizing initial development costs.
              </p>
            </div>

            {/* Service 3 - Updated */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">AI Agents for Companies and Teams</h2>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                We build intelligent AI agents that automate complex tasks, enhance team productivity, and provide valuable insights to drive business decisions across various departments.
              </p>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                Our AI agents go beyond simple automation by bringing context-aware intelligence to your team's workflows. We create specialized agents that can handle data analysis, customer support, content generation, research, and other specialized tasks that traditionally require significant human time and expertise. These agents learn from interactions, adapt to your company's unique processes, and continuously improve their performance over time.
              </p>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                By deploying AI agents strategically across your organization, we help companies achieve new levels of operational efficiency and innovation. Our agents are designed to complement human workers rather than replace them—freeing your team from routine tasks so they can focus on creative, strategic work that drives growth. We build MVPs of these AI agents quickly, allowing you to test their effectiveness and refine their capabilities before scaling them across your organization. Our integration approach ensures seamless adoption with your existing tools and systems, maximizing the return on your AI investment.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurServices;

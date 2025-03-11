
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
              enhance productivity, and drive sustainable growth.
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

        {/* Services Content */}
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
                By automating repetitive tasks, enhancing data insights, and providing user-friendly internal tools, we empower your team to focus on high-impact work, make data-driven decisions, and ultimately increase revenue. Our approach ensures that your organization adopts AI in a way that is practical, scalable, and designed for real business growth.
              </p>
            </div>

            {/* Service 2 */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Training in Essential AI Skills</h2>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                Engaging virtual events and hands-on demos showcasing the latest AI tools and resources, with practical guidance on integrating them into your or your team's workflows.
              </p>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                Our training sessions are designed to make AI accessible, actionable, and relevant to your day-to-day operations. We cover a range of topics tailored for both beginners and advanced users, including foundational AI concepts, building AI agents, and creating custom web apps using tools like v0, Cursor, and Replit Agent. By offering flexible training options—from introductory sessions to in-depth, specialized workshops—we ensure that every participant gains the skills needed to apply AI effectively, whether they're enhancing personal productivity or leading a team's AI transformation.
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

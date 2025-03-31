
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InternalTools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#6495ED] to-[#4169E1] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium">Internal Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8">
              Building <span className="text-white">Internal Tools</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 px-4">
              Custom internal solutions designed to streamline workflows, improve efficiency, and drive better decision-making.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Tailored Internal Solutions</h2>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                We design and develop custom internal tools that align with your company's unique needs. Our solutions focus on enhancing productivity, improving decision-making, and optimizing business processes through user-friendly interfaces and powerful functionality.
              </p>
              
              <h3 className="text-lg font-semibold text-secondary mb-2 mt-6">Our Internal Tools Include</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">Custom CRMs</h4>
                  <p className="text-sm text-secondary/90">Tailored customer relationship management systems that fit your specific sales process and customer journey.</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">Workflow Automation</h4>
                  <p className="text-sm text-secondary/90">Tools that automate repetitive tasks and streamline processes across departments.</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">Analytics Dashboards</h4>
                  <p className="text-sm text-secondary/90">Custom visualization tools that present critical business data in an actionable format.</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">Document Management</h4>
                  <p className="text-sm text-secondary/90">Intelligent systems for organizing, retrieving, and collaborating on important documents.</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-secondary mb-2 mt-6">Our Approach</h3>
              <ol className="list-decimal pl-5 space-y-2 text-secondary/90 mb-6">
                <li><strong>Needs Assessment:</strong> We begin by understanding your current workflows, pain points, and objectives.</li>
                <li><strong>Design and Prototyping:</strong> We create intuitive interfaces and user experiences tailored to your team's needs.</li>
                <li><strong>Development:</strong> Our engineers build robust, scalable solutions using modern technologies.</li>
                <li><strong>Integration:</strong> We ensure seamless integration with your existing systems and data sources.</li>
                <li><strong>Training and Support:</strong> We provide comprehensive training and ongoing support to ensure successful adoption.</li>
              </ol>
              
              <div className="bg-surface p-6 rounded-xl mt-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Ready to optimize your internal processes?</h3>
                <p className="text-secondary/90 mb-4">
                  Contact us to discuss how custom internal tools can transform your business operations.
                </p>
                <a 
                  href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InternalTools;

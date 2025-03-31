
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AISystems = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#9370DB] to-[#8A2BE2] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium">AI Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8">
              AI-Powered <span className="text-white">Systems for Businesses</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 px-4">
              Intelligent solutions that leverage AI to automate tasks, enhance insights, and drive business growth.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Transformative AI-Powered Systems</h2>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                We build tailored, no-code and AI-driven solutions that integrate seamlessly with your business operations. Our systems are designed to automate repetitive tasks, enhance data insights, and provide intuitive interfaces that drive efficiency and growth.
              </p>
              
              <h3 className="text-lg font-semibold text-secondary mb-2 mt-6">Key Benefits</h3>
              <ul className="list-disc pl-5 space-y-2 text-secondary/90 mb-6">
                <li><strong>Automation:</strong> Reduce manual effort and human error by automating routine tasks and workflows</li>
                <li><strong>Enhanced Decision-Making:</strong> Access AI-powered insights and recommendations based on your business data</li>
                <li><strong>Improved Customer Experience:</strong> Deliver personalized interactions and faster service through intelligent systems</li>
                <li><strong>Operational Efficiency:</strong> Optimize resources and streamline processes with AI-driven optimization</li>
                <li><strong>Scalability:</strong> Easily scale operations without proportionally increasing overhead costs</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-secondary mb-2 mt-6">Our AI Solutions</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-surface p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">Intelligent Document Processing</h4>
                  <p className="text-sm text-secondary/90">Systems that can extract, classify, and process information from documents, emails, and forms, automating data entry and document management.</p>
                </div>
                <div className="bg-surface p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">Predictive Analytics Platforms</h4>
                  <p className="text-sm text-secondary/90">Tools that analyze historical data to identify patterns and predict future trends, enabling proactive business decisions.</p>
                </div>
                <div className="bg-surface p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">AI-Powered Customer Service</h4>
                  <p className="text-sm text-secondary/90">Intelligent systems that handle customer inquiries, provide personalized recommendations, and escalate complex issues to human agents.</p>
                </div>
                <div className="bg-surface p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">Process Optimization Systems</h4>
                  <p className="text-sm text-secondary/90">AI solutions that continuously analyze operational data to identify bottlenecks and suggest process improvements.</p>
                </div>
              </div>
              
              <div className="bg-surface p-6 rounded-xl mt-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Ready to leverage AI for your business?</h3>
                <p className="text-secondary/90 mb-4">
                  Contact us to discuss how AI-powered systems can transform your operations and drive growth.
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

export default AISystems;

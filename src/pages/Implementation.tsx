
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Implementation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#20B2AA] to-[#008B8B] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium">Implementation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8">
              Seamless <span className="text-white">Implementation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 px-4">
              Expert deployment and integration services to ensure your AI solutions deliver maximum value.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Comprehensive Implementation Services</h2>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                Our implementation services are designed to ensure a smooth transition from concept to deployment, with minimal disruption to your existing operations. We handle every aspect of implementation, from system integration and data migration to user training and post-launch support.
              </p>
              
              <h3 className="text-lg font-semibold text-secondary mb-2 mt-6">Our Implementation Process</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Planning and Preparation</h4>
                    <p className="text-sm text-secondary/90">We develop a detailed implementation plan, including timelines, resource allocation, and risk mitigation strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">System Integration</h4>
                    <p className="text-sm text-secondary/90">We integrate new AI solutions with your existing systems, ensuring seamless data flow and functionality.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Data Migration and Validation</h4>
                    <p className="text-sm text-secondary/90">We carefully migrate your data to the new system, ensuring accuracy and completeness through rigorous validation processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">User Training and Change Management</h4>
                    <p className="text-sm text-secondary/90">We provide comprehensive training for your team and implement change management strategies to ensure successful adoption.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Go-Live Support and Monitoring</h4>
                    <p className="text-sm text-secondary/90">Our team provides dedicated support during the critical go-live period, ensuring any issues are quickly resolved.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Ongoing Optimization</h4>
                    <p className="text-sm text-secondary/90">We continuously monitor system performance and user feedback, making adjustments to optimize functionality and user experience.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-secondary mb-2 mt-6">Key Benefits of Our Implementation Services</h3>
              <ul className="list-disc pl-5 space-y-2 text-secondary/90 mb-6">
                <li><strong>Reduced Risk:</strong> Professional implementation minimizes the risk of costly errors and system failures</li>
                <li><strong>Faster Time-to-Value:</strong> Expert deployment ensures you start realizing benefits from your AI solutions sooner</li>
                <li><strong>Minimal Disruption:</strong> Carefully planned transitions minimize impact on your daily operations</li>
                <li><strong>Higher Adoption Rates:</strong> Comprehensive training and support lead to better user acceptance and utilization</li>
                <li><strong>Optimized Performance:</strong> Professional configuration ensures your systems operate at peak efficiency</li>
              </ul>
              
              <div className="bg-surface p-6 rounded-xl mt-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Ready to implement AI solutions in your business?</h3>
                <p className="text-secondary/90 mb-4">
                  Contact us to discuss how our implementation services can ensure the successful deployment of your AI initiatives.
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

export default Implementation;

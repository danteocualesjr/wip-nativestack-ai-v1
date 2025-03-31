
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#FF9D5C] to-[#FF6601] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium">AI Training</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8">
              Training in <span className="text-white">Essential AI Skills</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 px-4">
              Equipping your team with the knowledge and skills needed to leverage AI effectively in your business.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Comprehensive AI Training Programs</h2>
              <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
                Our training sessions are designed to make AI accessible and actionable for your team. Through engaging virtual events and hands-on demos, we showcase the latest AI tools and resources, providing practical guidance on integrating them into your daily workflows.
              </p>
              
              <h3 className="text-lg font-semibold text-secondary mb-2 mt-6">What You'll Learn</h3>
              <ul className="list-disc pl-5 space-y-2 text-secondary/90 mb-6">
                <li>Foundational AI concepts and terminology</li>
                <li>How to build and deploy AI agents for specific business tasks</li>
                <li>Creating custom web applications using tools like v0, Cursor, and Replit Agent</li>
                <li>Prompt engineering techniques to get the most from AI models</li>
                <li>Integrating AI tools into existing workflows and processes</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-secondary mb-2 mt-6">Training Formats</h3>
              <ul className="list-disc pl-5 space-y-2 text-secondary/90 mb-6">
                <li>Introductory workshops for teams new to AI</li>
                <li>Advanced specialized sessions for technical teams</li>
                <li>Executive briefings for leadership teams</li>
                <li>Hands-on laboratory sessions for practical skills development</li>
                <li>Custom training programs tailored to your organization's needs</li>
              </ul>
              
              <div className="bg-surface p-6 rounded-xl mt-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Ready to upskill your team?</h3>
                <p className="text-secondary/90 mb-4">
                  Contact us to discuss how our AI training programs can be customized for your organization's specific needs.
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

export default Training;

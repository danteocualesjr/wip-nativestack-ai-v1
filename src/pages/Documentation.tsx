
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 flex items-center justify-center">
        <div className="text-center max-w-xl mx-auto px-4 py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Documentation
          </h1>
          <p className="text-secondary/80 text-lg mb-8">
            Coming soon! Comprehensive documentation for our AI systems, APIs, and integration processes is being prepared to help your technical team.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;

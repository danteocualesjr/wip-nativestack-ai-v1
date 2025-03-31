
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding for navigation */}
      <main className="pt-16">
        {/* Hero Section with gradient matching Pricing page */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#FF9D5C] to-[#FF6601] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8">
              About <span className="text-white">NativeStack AI</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 px-4">
              Empowering businesses to thrive in the AI era by providing the tools, 
              strategies, and support needed to become truly AI-native through effective MVPs.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl prose prose-sm sm:prose-base lg:prose-lg">
            <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
              At NativeStack AI, our mission is to help businesses thrive by transitioning to the AI era and becoming AI-native. We equip organizations with the tools and strategies needed to succeed in an AI-driven world. Our goal is simple yet powerful: to enable businesses across industries to adopt AI at their core, starting with essential areas like sales. By leveraging no-code tools, building custom micro-apps, and curating AI-powered solutions, we empower clients to streamline workflows, make data-driven decisions, and achieve maximum impact through production-ready MVPs.
            </p>
            
            <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
              Our approach combines consultation, training, and hands-on support to transform businesses in ed-tech, healthcare, higher education, and beyond. Through interactive virtual events, tailored AI training, and expertly designed tech stacks, we ensure that teams of all sizes can access and integrate the latest advancements in artificial intelligence. We specialize in quickly developing production-ready MVPs that allow businesses to validate their ideas and iterate rapidly, whether you're a startup aiming for rapid growth or an established enterprise looking to optimize operations.
            </p>
            
            <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
              At NativeStack AI, we are committed to delivering real value and driving meaningful change. Our services address the unique needs of every client, with a global perspective and a personal touch. From enabling educators to enhance their classrooms with AI tools to helping healthcare providers improve patient experiences, we deliver innovative, AI-first solutions that elevate customer satisfaction and drive measurable success. We're here to guide you on the journey to becoming truly AI-native, transforming challenges into opportunities for growth through quick-to-market, effective MVPs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

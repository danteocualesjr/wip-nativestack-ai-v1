
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trackInteraction } from "@/utils/analytics";

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
              strategies, and support needed to become truly AI-native.
            </p>
          </div>
        </section>

        {/* Logo Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center mb-8">
              <img 
                src="/public/lovable-uploads/0240a07a-6ae8-4265-962d-ca5f7940033e.png" 
                alt="NativeStack AI Logo" 
                className="w-48 sm:w-56 md:w-64 h-auto mb-6"
                onClick={() => trackInteraction('logo_click', 'about_page')}
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                Our Brand Identity
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              The NativeStack AI logo represents our commitment to innovation and intelligence. 
              The geometric orange brain symbolizes how we bring structure and clarity to complex AI 
              challenges, transforming raw technology into smart business solutions.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl prose prose-sm sm:prose-base lg:prose-lg">
            <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
              At NativeStack AI, our mission is to help businesses thrive by transitioning to the AI era and becoming AI-native. We equip organizations with the tools and strategies needed to succeed in an AI-driven world. Our goal is simple yet powerful: to enable businesses across industries to adopt AI at their core, starting with essential areas like sales. By leveraging no-code tools, building custom micro-apps, and curating AI-powered solutions, we empower clients to streamline workflows, make data-driven decisions, and achieve maximum impact.
            </p>
            
            <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
              Our approach combines consultation, training, and hands-on support to transform businesses in ed-tech, healthcare, higher education, and beyond. Through interactive virtual events, tailored AI training, and expertly designed tech stacks, we ensure that teams of all sizes can access and integrate the latest advancements in artificial intelligence. Whether you're a startup aiming for rapid growth or an established enterprise looking to optimize operations, we are passionate about making AI adoption accessible and efficient.
            </p>
            
            <p className="mb-4 sm:mb-6 text-secondary/90 leading-relaxed text-sm sm:text-base">
              At NativeStack AI, we are committed to delivering real value and driving meaningful change. Our services address the unique needs of every client, with a global perspective and a personal touch. From enabling educators to enhance their classrooms with AI tools to helping healthcare providers improve patient experiences, we deliver innovative, AI-first solutions that elevate customer satisfaction and drive measurable success. We're here to guide you on the journey to becoming truly AI-native, transforming challenges into opportunities for growth.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

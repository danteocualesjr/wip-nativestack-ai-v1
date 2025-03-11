
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding for navigation */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary mb-8">
              About <span className="text-primary">NativeStack AI</span>
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <p className="mb-6 text-secondary/90 leading-relaxed">
              At NativeStack AI, our mission is to help businesses thrive by transitioning to the AI era and becoming AI-native. We equip organizations with the tools and strategies needed to succeed in an AI-driven world. Our goal is simple yet powerful: to enable businesses across industries to adopt AI at their core, starting with essential areas like sales. By leveraging no-code tools, building custom micro-apps, and curating AI-powered solutions, we empower clients to streamline workflows, make data-driven decisions, and achieve maximum impact.
            </p>
            
            <p className="mb-6 text-secondary/90 leading-relaxed">
              Our approach combines consultation, training, and hands-on support to transform businesses in ed-tech, healthcare, higher education, and beyond. Through interactive virtual events, tailored AI training, and expertly designed tech stacks, we ensure that teams of all sizes can access and integrate the latest advancements in artificial intelligence. Whether you're a startup aiming for rapid growth or an established enterprise looking to optimize operations, we are passionate about making AI adoption accessible and efficient.
            </p>
            
            <p className="mb-6 text-secondary/90 leading-relaxed">
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

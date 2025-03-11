
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding for navigation */}
      <main className="pt-16">
        {/* Hero Section with gradient matching Pricing page */}
        <section className="px-6 lg:px-8 py-24 bg-gradient-to-br from-[#FF9D5C] to-[#FF6601] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Our <span className="text-white">Services</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-12">
              Comprehensive AI solutions designed to transform your business operations, 
              enhance productivity, and drive sustainable growth.
            </p>
          </div>
        </section>

        {/* Services Content */}
        <section className="px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-3xl">
            {/* Service 1 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary mb-4">Training in Essential AI Skills</h2>
              <p className="mb-6 text-secondary/90 leading-relaxed">
                Engaging virtual events and hands-on demos showcasing the latest AI tools and resources, with practical guidance on integrating them into your or your team's workflows.
              </p>
              <p className="mb-6 text-secondary/90 leading-relaxed">
                Our training sessions are designed to make AI accessible, actionable, and relevant to your day-to-day operations. We cover a range of topics tailored for both beginners and advanced users, including foundational AI concepts, building AI agents, and creating custom web apps using tools like v0, Cursor, and Replit Agent. By offering flexible training options—from introductory sessions to in-depth, specialized workshops—we ensure that every participant gains the skills needed to apply AI effectively, whether they're enhancing personal productivity or leading a team's AI transformation.
              </p>
            </div>

            {/* Service 2 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary mb-4">Building or Curating a Stack of Tools</h2>
              <p className="mb-6 text-secondary/90 leading-relaxed">
                Developing or curating a tailored stack of no-code tools, including web apps and micro-apps, to automate workflows, enhance productivity, and enable data-driven decisions that elevate customer satisfaction and drive company revenue.
              </p>
              <p className="mb-6 text-secondary/90 leading-relaxed">
                Our tool-building service focuses on creating a customized, AI-powered tech stack that aligns with your business goals. We specialize in integrating no-code solutions that empower your team to streamline tasks and optimize processes without the need for extensive coding knowledge. From automating repetitive workflows to developing micro-apps that solve specific challenges, we design each tool to fit seamlessly into your operations. This tailored approach not only boosts efficiency but also gives your team the insights needed to make data-driven choices, ultimately enhancing customer satisfaction and driving sustainable revenue growth.
              </p>
            </div>

            {/* Service 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Your AI-Powered Sales Arm</h2>
              <p className="mb-6 text-secondary/90 leading-relaxed">
                Providing AI-driven sales support tailored to the unique needs of startups, enterprises, ed-tech companies, higher-ed institutions, healthcare providers, and business coaches and consultants.
              </p>
              <p className="mb-6 text-secondary/90 leading-relaxed">
                NativeStack AI partners with your business to elevate your sales strategies through AI-driven solutions. Our support includes leveraging AI to personalize customer outreach, automate lead generation, and deliver actionable insights that refine your campaigns. By integrating AI into your sales efforts, we help your team increase efficiency, reach the right audience, and maximize engagement. This service is designed to make your organization more competitive, whether you're looking to scale quickly, deepen customer relationships, or break into new markets with data-backed strategies.
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

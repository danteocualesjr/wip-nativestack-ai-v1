
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: ["AI Strategy", "Custom Development", "Data Analysis", "Implementation"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Resources",
      links: ["Case Studies", "Knowledge Base", "Documentation", "Guides"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookies"],
    },
  ];

  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
            <p className="text-white/70">Transform your business with AI-powered tools</p>
          </div>
          <a 
            href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-white text-primary hover:bg-white/90 py-3 px-6 flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Book a call
          </a>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2025 NativeStack AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="https://x.com/danteocualesjr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              X/Twitter
            </Link>
            <Link to="https://www.linkedin.com/in/danteocualesjr/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link to="https://github.com/danteocualesjr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

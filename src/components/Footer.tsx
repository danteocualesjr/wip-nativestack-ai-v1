
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: ["Training in Essential AI Skills", "Building Internal Tools", "AI-Powered Systems for Businesses", "Implementation"],
      routes: ["/training", "/internal-tools", "/ai-systems", "/implementation"]
    },
    {
      title: "Company",
      links: ["About Us", "Blog", "Careers", "Press"],
      routes: ["/about-us", "/blog", "/careers", "/press"]
    },
    {
      title: "Resources",
      links: ["Case Studies", "Knowledge Base", "Documentation", "Guides"],
      routes: ["/case-studies", "/knowledge-base", "/documentation", "/guides"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookies"],
      routes: ["/privacy", "/terms", "/security", "/cookies"]
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
                {section.links.map((link, i) => (
                  <li key={link}>
                    <Link
                      to={section.routes ? section.routes[i] : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
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
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2025 NativeStack AI LLC. All rights reserved.
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

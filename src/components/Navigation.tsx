
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-medium" : "text-secondary hover:text-primary transition-colors";
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-primary">
          NativeStack AI
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about-us" className={isActive("/about-us")}>
            About Us
          </Link>
          <Link to="/our-services" className={isActive("/our-services")}>
            Our Services
          </Link>
          <Link to="/pricing" className={isActive("/pricing")}>
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/contact">
            <Button variant="ghost" className="hidden md:inline-flex text-secondary hover:text-primary hover:bg-primary/10">
              Contact Us
            </Button>
          </Link>
          <a 
            href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

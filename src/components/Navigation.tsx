
import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {

  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {

    return location.pathname === path ? "text-primary font-medium" : "text-secondary hover:text-primary transition-colors";
  };
  
  const toggleMobileMenu = () => {

    setIsMobileMenuOpen(!isMobileMenuOpen);
    
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-primary">
          NativeStack AI
        </Link>
        
        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center space-x-8">
          
          <Link to="/about-us" className={isActive("/about-us")}>
            About Us
          </Link>
          <Link to="/our-services" className={isActive("/our-services")}>
            Our Services
          </Link>
          <Link to="/our-work" className={isActive("/our-work")}>
            Our Work
          </Link>
          <Link to="/pricing" className={isActive("/pricing")}>
            Pricing
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact">
            <Button variant="ghost" className="text-secondary hover:text-primary hover:bg-primary/10">
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
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/about-us" 
              className={`${isActive("/about-us")} py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/our-services" 
              className={`${isActive("/our-services")} py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link 
              to="/our-work" 
              className={`${isActive("/our-work")} py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link 
              to="/pricing" 
              className={`${isActive("/pricing")} py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <a 
              href="https://calendly.com/danteocualesjr/chat-with-dante-nativestack-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white hover:bg-primary/90 py-2 px-4 rounded-md text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

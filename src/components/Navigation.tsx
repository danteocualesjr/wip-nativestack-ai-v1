
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-primary">
          NativeStack AI
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about-us" className="text-secondary hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/our-services" className="text-secondary hover:text-primary transition-colors">
            Our Services
          </Link>
          <Link to="/pricing" className="text-secondary hover:text-primary transition-colors">
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex text-secondary hover:text-primary hover:bg-primary/10">
            Contact
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

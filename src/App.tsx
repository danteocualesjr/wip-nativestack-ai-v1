import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import OurWork from "./pages/OurWork";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Training from "./pages/Training";
import InternalTools from "./pages/InternalTools";
import AISystems from "./pages/AISystems";
import Implementation from "./pages/Implementation";
import CaseStudies from "./pages/CaseStudies";
import KnowledgeBase from "./pages/KnowledgeBase";
import Documentation from "./pages/Documentation";
import Guides from "./pages/Guides";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Cookies from "./pages/Cookies";
import { pageView } from "./utils/analytics";

const queryClient = new QueryClient();

// Analytics tracker component

const AnalyticsTracker = () => {

  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {

    // Only track page views on push (new navigation) not on replace or pop

    if (navigationType === 'PUSH') {

      pageView(location.pathname, document.title);
      
    }
  }, [location, navigationType]);

  return null;
};

const App = () => (
  
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/training" element={<Training />} />
          <Route path="/internal-tools" element={<InternalTools />} />
          <Route path="/ai-systems" element={<AISystems />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

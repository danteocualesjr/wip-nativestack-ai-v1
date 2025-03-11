
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding for navigation */}
      <main className="pt-16">
        {/* Hero Section with gradient matching other pages */}
        <section className="px-6 lg:px-8 py-24 bg-gradient-to-br from-[#FF9D5C] to-[#FF6601] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Contact <span className="text-white">Us</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-12">
              We're here to help with any questions you may have about our services.
              Reach out and let's start a conversation.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Contact us</h2>
              <p className="text-secondary/90 leading-relaxed mb-12">
                If you have any questions or comments, please contact us via email or
                phone, or send us a message using the contact form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <p className="text-secondary/90">dante@nativestack.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                    <p className="text-secondary/90">+63 (956) 285-3231</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-surface rounded-lg p-6 shadow-sm border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                      Name <span className="text-xs text-secondary/60">(required)</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                      Email <span className="text-xs text-secondary/60">(required)</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
                      Phone <span className="text-xs text-secondary/60">(required)</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-1">
                      Subject <span className="text-xs text-secondary/60">(required)</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                      Message <span className="text-xs text-secondary/60">(required)</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-black hover:bg-black/90 text-white"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

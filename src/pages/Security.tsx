import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-8">
          Security Policy
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-6">
            Last updated: March 31, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment to Security</h2>
          <p>
            At NativeStack AI, security is at the core of everything we build. We understand that when you use our services, 
            you're entrusting us with your valuable information. We take this responsibility seriously and are committed to 
            implementing robust security measures to protect your data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Infrastructure Security</h2>
          <p>
            Our cloud infrastructure is built on AWS and follows industry best practices for security:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Network Protection:</strong> We employ multiple layers of firewalls, DDoS protection, and intrusion detection systems.</li>
            <li><strong>Encryption:</strong> All data in transit is protected with TLS 1.3, and data at rest is encrypted using AES-256.</li>
            <li><strong>Availability:</strong> Our systems are distributed across multiple availability zones to ensure high availability and redundancy.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We implement strict controls to protect your data:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Access Control:</strong> Role-based access control (RBAC) ensures that employees have minimal access to customer data.</li>
            <li><strong>Regular Audits:</strong> We perform regular security audits and vulnerability assessments of our systems.</li>
            <li><strong>Data Isolation:</strong> Customer data is logically isolated to prevent unauthorized access between customers.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Compliance</h2>
          <p>
            NativeStack AI maintains compliance with relevant security standards:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>SOC 2 Type II:</strong> We maintain SOC 2 Type II compliance for security, availability, and confidentiality.</li>
            <li><strong>GDPR Compliance:</strong> Our services are designed to help customers meet their GDPR obligations.</li>
            <li><strong>Regular Assessments:</strong> We undergo independent security assessments on a regular basis.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Incident Response</h2>
          <p>
            We have established incident response procedures to:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Quickly identify and address security incidents</li>
            <li>Contain and mitigate the impact of incidents</li>
            <li>Notify affected customers in accordance with our service agreements and applicable laws</li>
            <li>Continuously improve our security measures based on lessons learned</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Security Contact</h2>
          <p>
            For security concerns or to report a vulnerability, please contact our security team at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> dante@nativestack.ai
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;

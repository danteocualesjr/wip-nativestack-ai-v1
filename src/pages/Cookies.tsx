
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-8">
          Cookie Policy
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-6">
            Last updated: May 5, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p>
            NativeStack AI LLC uses cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.</li>
            <li><strong>Preference Cookies:</strong> These cookies remember information that changes the way the website behaves or looks, such as your preferred language or the region you are in.</li>
            <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
            <li><strong>Marketing Cookies:</strong> These are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <table className="min-w-full border-collapse border border-gray-300 my-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Cookie Type</th>
                <th className="border border-gray-300 px-4 py-2">Purpose</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Session</td>
                <td className="border border-gray-300 px-4 py-2">To maintain your session while you browse our website</td>
                <td className="border border-gray-300 px-4 py-2">Session</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Authentication</td>
                <td className="border border-gray-300 px-4 py-2">To identify you when you log in to your account</td>
                <td className="border border-gray-300 px-4 py-2">30 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Analytics</td>
                <td className="border border-gray-300 px-4 py-2">To collect information about how you use our website</td>
                <td className="border border-gray-300 px-4 py-2">2 years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Marketing</td>
                <td className="border border-gray-300 px-4 py-2">To provide you with relevant advertisements</td>
                <td className="border border-gray-300 px-4 py-2">90 days</td>
              </tr>
            </tbody>
          </table>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How to Control Cookies</h2>
          <p>
            You can manage your cookie preferences by adjusting your browser settings. Most web browsers allow you to control 
            cookies through their settings preferences. For more information about how to do this, visit:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-primary hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-primary hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline">Microsoft Edge</a></li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Our Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us:
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

export default Cookies;

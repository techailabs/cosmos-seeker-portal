
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 cosmic-text">Contact Us</h1>
              <p className="text-xl text-gray-600">
                Ready to begin your spiritual journey? We're here to guide you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 cosmic-text">Send us a message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>Astrology Reading</option>
                      <option>Palmistry</option>
                      <option>Hypnotherapy</option>
                      <option>Meditation Guidance</option>
                      <option>Music Therapy</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us about your spiritual journey and how we can help..."
                    ></textarea>
                  </div>
                  <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 cosmic-text">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📧</span>
                      <span className="text-gray-700">hello@gurujicosmos.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <span className="text-gray-700">+1 (555) COSMOS-1</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌍</span>
                      <span className="text-gray-700">Global Virtual Sessions</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 cosmic-text">Office Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>12:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-purple-600 mt-4">All times in your local timezone</p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 cosmic-text">Emergency Support</h3>
                  <p className="text-gray-700 mb-4">
                    Need immediate spiritual guidance? Our 24/7 support line is here for you.
                  </p>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                    Emergency Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

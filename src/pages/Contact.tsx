
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [selectedService, setSelectedService] = useState('');

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 cosmic-text">Send Us a Signal</h1>
              <p className="text-lg md:text-xl text-gray-600">
                We're listening, always. Whether it's a big life shift or a tiny soul whisper, drop in below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 cosmic-text">What do you need help with?</h2>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What brings you here?</label>
                    <select 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                    >
                      <option value="">Choose your path...</option>
                      <option value="soul-session">Soul Session Inquiry</option>
                      <option value="spiritual-crisis">Spiritual Crisis Support</option>
                      <option value="astrology">Astrology Reading</option>
                      <option value="hypnotherapy">Hypnotherapy</option>
                      <option value="music-therapy">Music Therapy</option>
                      <option value="meditation">Meditation Guidance</option>
                      <option value="palmistry">Palm & Face Reading</option>
                      <option value="collaboration">Team Collaboration</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                      placeholder="Share what's on your soul. We're here to listen..."
                    ></textarea>
                  </div>
                  <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity text-sm md:text-base py-2 md:py-3">
                    Send Signal 📡
                  </Button>
                </form>
                
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-purple-50 rounded-lg">
                  <p className="text-xs md:text-sm text-purple-700">
                    <strong>What happens next:</strong> You'll hear from us within 24 hours. Our replies are personal, not robotic.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 md:space-y-8">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-4 cosmic-text">Immediate Spiritual Guidance</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl md:text-2xl">📱</span>
                      <div>
                        <div className="font-medium text-gray-800">WhatsApp Support</div>
                        <div className="text-sm text-gray-600">+1 (555) COSMOS-1</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl md:text-2xl">📧</span>
                      <div>
                        <div className="font-medium text-gray-800">Email</div>
                        <div className="text-sm text-gray-600">hello@gurujicosmos.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl md:text-2xl">🌍</span>
                      <div>
                        <div className="font-medium text-gray-800">Global Sessions</div>
                        <div className="text-sm text-gray-600">Available worldwide via video</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 md:mt-6 golden-gradient text-white hover:opacity-90 transition-opacity text-sm md:text-base">
                    Message Us on WhatsApp 💬
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-4 cosmic-text">Sacred Hours</h3>
                  <div className="space-y-2 text-gray-700 text-sm md:text-base">
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
                  <p className="text-xs md:text-sm text-purple-600 mt-3 md:mt-4">All times in your local timezone</p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 md:p-8 shadow-lg border border-red-100">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-red-700">Spiritual Crisis Support</h3>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    Experiencing a dark night of the soul? Our 24/7 emergency guidance line is here for immediate support.
                  </p>
                  <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50 text-sm md:text-base">
                    Emergency Spiritual Support 🆘
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

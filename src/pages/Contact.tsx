
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consultation: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Handle form submission
  };

  return (
    <Layout>
      {/* Hero Section with Cosmic Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 mystical-gradient"></div>
        <div className="absolute inset-0 star-field opacity-50"></div>
        
        {/* Floating Communication Symbols */}
        <div className="absolute top-20 left-16 animate-float">
          <div className="text-6xl opacity-70 animate-pulse-soft text-glow-golden">📞</div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-5xl opacity-80 animate-pulse-soft text-glow">💌</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '4s'}}>
          <div className="text-4xl opacity-90 animate-pulse-soft text-glow-golden">🌐</div>
        </div>
        <div className="absolute bottom-20 right-16 animate-float" style={{animationDelay: '1s'}}>
          <div className="text-5xl opacity-60 animate-pulse-soft text-glow">📍</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto mb-16">
            <div className="animate-scale-in mb-8">
              <span className="text-9xl animate-cosmic-rotate">🌌</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-playfair text-glow-golden animate-fade-in-up">
              Connect With Us
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Begin your spiritual journey with a conversation that could change your life
            </p>
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="glassmorphism rounded-3xl p-8 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-white font-playfair text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/90 font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/30 text-white placeholder-white/60 backdrop-blur-sm"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/30 text-white placeholder-white/60 backdrop-blur-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/90 font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/10 border-white/30 text-white placeholder-white/60 backdrop-blur-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 font-medium mb-2">Consultation Type</label>
                    <select
                      name="consultation"
                      value={formData.consultation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white backdrop-blur-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    >
                      <option value="general" className="text-gray-800">General Inquiry</option>
                      <option value="astrology" className="text-gray-800">Astrology Reading</option>
                      <option value="palmistry" className="text-gray-800">Palmistry Session</option>
                      <option value="hypnotherapy" className="text-gray-800">Hypnotherapy</option>
                      <option value="meditation" className="text-gray-800">Meditation Guidance</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/90 font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/10 border-white/30 text-white placeholder-white/60 backdrop-blur-sm"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/90 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                    placeholder="Tell us about your spiritual journey and what guidance you're seeking..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full golden-gradient text-white hover:opacity-90 transition-opacity py-4 text-lg font-semibold"
                >
                  Send Message ✨
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {/* Contact Details */}
              <div className="glassmorphism rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white font-playfair">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl animate-pulse-soft">📍</div>
                    <div>
                      <h4 className="text-white font-semibold">Sacred Center</h4>
                      <p className="text-white/80">123 Spiritual Lane, Mystic City, MC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl animate-pulse-soft">📞</div>
                    <div>
                      <h4 className="text-white font-semibold">Call Us</h4>
                      <p className="text-white/80">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl animate-pulse-soft">💌</div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-white/80">hello@gurujicosmos.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl animate-pulse-soft">🕐</div>
                    <div>
                      <h4 className="text-white font-semibold">Hours</h4>
                      <p className="text-white/80">Mon-Sun: 9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glassmorphism rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white font-playfair">Quick Actions</h3>
                <div className="space-y-4">
                  <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity">
                    📅 Book Free Consultation
                  </Button>
                  <Button className="w-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                    💬 Live Chat Support
                  </Button>
                  <Button className="w-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                    📋 Download Brochure
                  </Button>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="glassmorphism rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-white font-playfair">24/7 Spiritual Support</h3>
                <p className="text-white/80 mb-4">
                  Need immediate guidance? Our emergency spiritual support line is available 24/7.
                </p>
                <Button className="w-full bg-red-500/80 text-white hover:bg-red-500 transition-colors">
                  🆘 Emergency Hotline
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 cosmic-text font-playfair">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in-up">
              <h3 className="text-lg font-semibold cosmic-text mb-3">How quickly will you respond?</h3>
              <p className="text-gray-600">We typically respond within 2-4 hours during business hours, and within 24 hours on weekends.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-lg font-semibold cosmic-text mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-600">Yes! We offer a complimentary 15-minute consultation to understand your needs and recommend the best service.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-lg font-semibold cosmic-text mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, UPI, net banking, and cash payments for in-person sessions.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-lg font-semibold cosmic-text mb-3">Can I reschedule my appointment?</h3>
              <p className="text-gray-600">Yes, you can reschedule up to 24 hours before your appointment without any charges.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

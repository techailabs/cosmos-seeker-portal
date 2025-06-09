
import Layout from '@/components/Layout';
import { useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'general', name: 'General', icon: '🌟' },
    { id: 'services', name: 'Services', icon: '🔮' },
    { id: 'booking', name: 'Booking', icon: '📅' },
    { id: 'payments', name: 'Payments', icon: '💳' },
    { id: 'practitioners', name: 'Practitioners', icon: '🧙‍♂️' },
  ];

  const faqs = {
    general: [
      {
        question: "What makes Guruji Cosmos Trust different from other spiritual services?",
        answer: "We combine ancient wisdom traditions with modern healing techniques, creating a unique 'sacred-tech fusion' approach. Our practitioners are highly trained in both traditional methods and contemporary therapeutic practices, offering you the best of both worlds."
      },
      {
        question: "How accurate are the readings?",
        answer: "Our practitioners have decades of experience and thousands of satisfied clients. While we cannot predict the future with 100% certainty, our readings provide valuable insights and guidance that help you make informed decisions about your life path."
      },
      {
        question: "Do I need to believe in astrology or spirituality for the sessions to work?",
        answer: "An open mind is helpful, but you don't need to be a believer. Many of our clients are initially skeptical but find value in the psychological insights and practical guidance provided during sessions."
      },
      {
        question: "Is everything confidential?",
        answer: "Absolutely. All sessions are completely confidential. We maintain the highest standards of privacy and never share your personal information or session details with anyone."
      }
    ],
    services: [
      {
        question: "Which service should I choose first?",
        answer: "We recommend starting with our free spiritual assessment or a Vedic astrology reading to get a comprehensive overview of your spiritual path and current life situation."
      },
      {
        question: "Can I combine multiple services?",
        answer: "Yes! Many clients benefit from combining services. For example, astrology reading followed by meditation guidance, or palmistry with hypnotherapy for deeper insights."
      },
      {
        question: "How long are the sessions?",
        answer: "Session lengths vary by service: Astrology (90 min), Palmistry (60 min), Hypnotherapy (90 min), Meditation (45 min), Music Therapy (60 min), and Face Reading (60 min)."
      },
      {
        question: "Do you offer group sessions?",
        answer: "Yes, we offer group meditation sessions, spiritual workshops, and family astrology consultations. Group rates are available for 3 or more people."
      }
    ],
    booking: [
      {
        question: "How far in advance can I book?",
        answer: "You can book sessions up to 3 months in advance. We recommend booking at least 1 week ahead for better availability, especially for popular practitioners."
      },
      {
        question: "Can I reschedule my appointment?",
        answer: "Yes, you can reschedule up to 24 hours before your appointment without any charges. Same-day cancellations may incur a 50% fee."
      },
      {
        question: "What if I'm running late?",
        answer: "Please call us immediately if you're running late. We can accommodate up to 15 minutes delay, but longer delays may require rescheduling to respect other clients' time."
      },
      {
        question: "Do you offer online sessions?",
        answer: "Yes! We offer online sessions via video call for most services. Online sessions are just as effective as in-person consultations."
      }
    ],
    payments: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, all major credit/debit cards, UPI payments, net banking, and digital wallets like Paytm, PhonePe, and Google Pay."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer EMI options for packages above ₹5,000. You can split payments into 3, 6, or 12 monthly installments with zero additional charges."
      },
      {
        question: "Is there a money-back guarantee?",
        answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your session within 48 hours, we provide a full refund, no questions asked."
      },
      {
        question: "Are there any hidden charges?",
        answer: "No hidden charges. The price you see is the price you pay. All taxes are included in the displayed pricing."
      }
    ],
    practitioners: [
      {
        question: "How are practitioners selected?",
        answer: "All our practitioners undergo rigorous screening including credential verification, practical assessments, and client feedback reviews. Only the top 5% of applicants are accepted."
      },
      {
        question: "Can I choose my practitioner?",
        answer: "Absolutely! You can view practitioner profiles, read reviews, and select the one that resonates with you. We also offer practitioner matching based on your needs."
      },
      {
        question: "What if I don't connect with my practitioner?",
        answer: "If you don't feel a connection, we'll happily match you with another practitioner at no extra cost. Your comfort and satisfaction are our priorities."
      },
      {
        question: "Are practitioners available for follow-up questions?",
        answer: "Yes, practitioners are available for brief follow-up questions within 7 days of your session at no additional charge. Extended consultations can be booked separately."
      }
    ]
  };

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 divine-gradient"></div>
        <div className="absolute inset-0 sacred-geometry opacity-20"></div>
        
        {/* Floating Question Marks */}
        <div className="absolute top-20 left-16 animate-float">
          <div className="text-6xl opacity-70 animate-pulse-soft text-glow-golden">❓</div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-5xl opacity-80 animate-pulse-soft text-glow">💡</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '4s'}}>
          <div className="text-4xl opacity-90 animate-pulse-soft text-glow-golden">🤔</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <div className="animate-scale-in mb-8">
              <span className="text-9xl animate-cosmic-rotate">❓</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-playfair text-glow-golden animate-fade-in-up">
              Frequently Asked Questions
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Everything you need to know about your spiritual journey with us
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-lg bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70">
                  <span className="text-2xl">🔍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'cosmic-gradient text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 shadow-md'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-xl font-semibold cosmic-text mb-4 flex items-start">
                  <span className="text-2xl mr-3 text-purple-500">Q:</span>
                  {faq.question}
                </h3>
                <div className="flex items-start">
                  <span className="text-2xl mr-3 text-green-500 flex-shrink-0">A:</span>
                  <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-16 animate-fade-in-up">
              <div className="text-6xl mb-4">🤷‍♀️</div>
              <h3 className="text-2xl font-bold cosmic-text mb-2">No matches found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or browse different categories</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="cosmic-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Still Have Questions */}
          <div className="text-center mt-20 animate-fade-in-up">
            <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 cosmic-text font-playfair">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 mb-8">We're here to help you on your spiritual journey</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-4">Get instant answers</p>
                  <button className="cosmic-gradient text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Start Chat
                  </button>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-4">Speak with our team</p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Call Now
                  </button>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-4">Detailed responses</p>
                  <button className="border border-purple-200 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;

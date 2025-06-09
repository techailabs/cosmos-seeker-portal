
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const BookSession = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPractitioner, setSelectedPractitioner] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const services = [
    {
      id: 'astrology',
      icon: "⭐",
      title: "Vedic Astrology Reading",
      duration: "90 minutes",
      price: "₹2,999",
      originalPrice: "₹3,999",
      description: "Complete birth chart analysis with life guidance",
      features: ["Birth Chart Analysis", "Life Path Guidance", "Career Insights", "Relationship Compatibility", "Lucky Gems & Colors", "Detailed Report"],
      practitioner: "Guruji Ananda",
      rating: 4.9,
      sessions: 1247
    },
    {
      id: 'palmistry',
      icon: "🤲",
      title: "Advanced Palmistry Session", 
      duration: "60 minutes",
      price: "₹1,999",
      originalPrice: "₹2,499",
      description: "Comprehensive palm reading with karmic insights",
      features: ["Life Line Analysis", "Career Line Reading", "Love & Marriage Lines", "Health Indicators", "Lucky Signs", "Photo Documentation"],
      practitioner: "Master Priya",
      rating: 4.8,
      sessions: 932
    },
    {
      id: 'mind-reading',
      icon: "🧠",
      title: "Mind Pattern Analysis",
      duration: "75 minutes",
      price: "₹2,499",
      originalPrice: "₹2,999",
      description: "Unlock subconscious blocks and mental patterns",
      features: ["Subconscious Analysis", "Pattern Recognition", "Block Removal", "Mental Clarity", "Confidence Boost", "Action Plan"],
      practitioner: "Dr. Raj Meditation",
      rating: 4.9,
      sessions: 856
    },
    {
      id: 'face-reading',
      icon: "👁️",
      title: "Facial Feature Analysis",
      duration: "60 minutes",
      price: "₹1,799",
      originalPrice: "₹2,199",
      description: "Personality traits and destiny through facial features",
      features: ["Personality Analysis", "Character Traits", "Career Suitability", "Relationship Patterns", "Health Indicators", "Future Predictions"],
      practitioner: "Master Priya",
      rating: 4.8,
      sessions: 645
    },
    {
      id: 'hypnotherapy',
      icon: "💫",
      title: "Clinical Hypnotherapy",
      duration: "90 minutes",
      price: "₹3,499",
      originalPrice: "₹3,999",
      description: "Deep healing through guided hypnosis",
      features: ["Trauma Healing", "Habit Breaking", "Confidence Building", "Fear Removal", "Past Life Regression", "Self-Hypnosis Training"],
      practitioner: "Dr. Raj Meditation",
      rating: 4.9,
      sessions: 723
    },
    {
      id: 'music-therapy',
      icon: "🎵",
      title: "Sacred Sound Healing",
      duration: "60 minutes",
      price: "₹1,499",
      originalPrice: "₹1,899",
      description: "Healing through sacred frequencies and mantras",
      features: ["Chakra Balancing", "Stress Relief", "Emotional Release", "Energy Cleansing", "Tibetan Bowls", "Personalized Mantras"],
      practitioner: "Sage Melody",
      rating: 4.7,
      sessions: 789
    },
    {
      id: 'meditation',
      icon: "🧘",
      title: "Personalized Meditation",
      duration: "45 minutes",
      price: "₹1,299",
      originalPrice: "₹1,599",
      description: "Custom meditation practice for your spiritual level",
      features: ["Technique Training", "Personalized Practice", "Breathing Exercises", "Mindfulness Training", "Progress Tracking", "Home Practice Guide"],
      practitioner: "Yogi Arjun",
      rating: 4.9,
      sessions: 645
    },
    {
      id: 'tarot',
      icon: "🌙",
      title: "Mystical Tarot Reading",
      duration: "60 minutes",
      price: "₹1,699",
      originalPrice: "₹1,999",
      description: "Intuitive guidance through sacred tarot cards",
      features: ["3-Card Spread", "Celtic Cross", "Love Reading", "Career Guidance", "Spiritual Path", "Oracle Messages"],
      practitioner: "Mystic Luna",
      rating: 4.8,
      sessions: 567
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 golden-gradient"></div>
        <div className="absolute inset-0 sacred-geometry opacity-30"></div>
        
        {/* Floating Booking Elements */}
        <div className="absolute top-20 left-16 animate-float">
          <div className="text-6xl opacity-70 animate-pulse-soft text-glow">📅</div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-5xl opacity-80 animate-pulse-soft text-glow-golden">⏰</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '4s'}}>
          <div className="text-4xl opacity-90 animate-pulse-soft text-glow">✨</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <div className="animate-scale-in mb-8">
              <span className="text-9xl animate-cosmic-rotate">🌟</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-playfair text-glow-golden animate-fade-in-up">
              Book Your Transformation
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Choose your path to spiritual awakening and inner healing
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">🎯</div>
                <div className="text-3xl font-bold mb-2 font-playfair">Instant</div>
                <div className="text-purple-100">Booking Confirmation</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">💳</div>
                <div className="text-3xl font-bold mb-2 font-playfair">Secure</div>
                <div className="text-purple-100">Payment Gateway</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">🔄</div>
                <div className="text-3xl font-bold mb-2 font-playfair">Free</div>
                <div className="text-purple-100">Rescheduling</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">📋</div>
                <div className="text-3xl font-bold mb-2 font-playfair">Detailed</div>
                <div className="text-purple-100">Session Reports</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 cosmic-text font-playfair">Choose Your Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed to address specific aspects of your spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 animate-fade-in-up ${
                  selectedService === service.id ? 'ring-4 ring-purple-400 bg-purple-50' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-pulse-soft">{service.icon}</div>
                  <h3 className="text-2xl font-bold cosmic-text mb-2 font-playfair">{service.title}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-gray-500 line-through text-lg">{service.originalPrice}</span>
                    <span className="text-3xl font-bold text-green-600">{service.price}</span>
                  </div>
                  <p className="text-purple-600 font-semibold mb-4">{service.duration}</p>
                </div>
                
                <p className="text-gray-700 mb-6 text-center leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-center">What's Included:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-semibold text-gray-800">{service.practitioner}</div>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm text-gray-600">{service.rating} ({service.sessions} sessions)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className={`w-full transition-all duration-300 ${
                    selectedService === service.id 
                      ? 'golden-gradient text-white' 
                      : 'cosmic-gradient text-white hover:opacity-90'
                  }`}
                >
                  {selectedService === service.id ? 'Selected ✓' : 'Select This Service'}
                </Button>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          {selectedService && (
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold mb-8 cosmic-text text-center font-playfair">Complete Your Booking</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Date & Time Selection */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Select Date & Time</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Available Time Slots</label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                                selectedTime === time
                                  ? 'bg-purple-500 text-white border-purple-500'
                                  : 'border-gray-300 hover:border-purple-300 hover:bg-purple-50'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Your Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Birth Date (for astrology)</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
                        <textarea
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                          rows={3}
                          placeholder="Any specific areas you'd like to focus on..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-4 cosmic-text">Booking Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><span className="font-medium">Service:</span> {services.find(s => s.id === selectedService)?.title}</p>
                      <p><span className="font-medium">Duration:</span> {services.find(s => s.id === selectedService)?.duration}</p>
                      <p><span className="font-medium">Practitioner:</span> {services.find(s => s.id === selectedService)?.practitioner}</p>
                    </div>
                    <div>
                      <p><span className="font-medium">Date:</span> {selectedDate || 'Not selected'}</p>
                      <p><span className="font-medium">Time:</span> {selectedTime || 'Not selected'}</p>
                      <p><span className="font-medium">Investment:</span> <span className="text-2xl font-bold text-green-600">{services.find(s => s.id === selectedService)?.price}</span></p>
                    </div>
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="mt-8 text-center">
                  <Button 
                    className="golden-gradient text-white hover:opacity-90 transition-opacity px-12 py-4 text-xl font-semibold"
                    disabled={!selectedDate || !selectedTime}
                  >
                    Complete Booking & Pay {services.find(s => s.id === selectedService)?.price} ✨
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    Secure payment • Free cancellation up to 24 hours • Instant confirmation
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BookSession;

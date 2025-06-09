
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Practitioners = () => {
  const practitioners = [
    {
      name: "Guruji Ananda",
      specialties: ["Vedic Astrology", "Life Path Guidance", "Karma Reading"],
      experience: "25+ years",
      image: "🧙‍♂️",
      description: "Master astrologer with deep knowledge of Vedic traditions and cosmic wisdom. Specializes in birth chart analysis and life purpose discovery.",
      achievements: ["10,000+ consultations", "Ancient Vedic Certification", "Spiritual Mentor Award"],
      rating: 4.9,
      sessions: 1247
    },
    {
      name: "Master Priya",
      specialties: ["Palmistry", "Face Reading", "Karmic Insights"],
      experience: "18+ years",
      image: "🔮",
      description: "Expert in reading life patterns through palmistry and facial analysis. Helps unlock karmic blocks and past-life influences.",
      achievements: ["8,500+ palm readings", "Karmic Healing Specialist", "Mystical Arts Master"],
      rating: 4.8,
      sessions: 932
    },
    {
      name: "Dr. Raj Meditation",
      specialties: ["Hypnotherapy", "Trauma Healing", "Mind Mastery"],
      experience: "15+ years",
      image: "🧠",
      description: "Licensed therapist specializing in subconscious healing and pattern breaking. Expert in clinical hypnotherapy and NLP.",
      achievements: ["PhD in Psychology", "7,200+ healing sessions", "Trauma Recovery Expert"],
      rating: 4.9,
      sessions: 856
    },
    {
      name: "Sage Melody",
      specialties: ["Music Therapy", "Sound Healing", "Chakra Balancing"],
      experience: "12+ years",
      image: "🎵",
      description: "Sound healer using sacred frequencies for emotional release and spiritual connection. Expert in Tibetan singing bowls and mantras.",
      achievements: ["Sound Healing Certification", "6,100+ sessions", "Chakra Mastery Award"],
      rating: 4.7,
      sessions: 723
    },
    {
      name: "Mystic Luna",
      specialties: ["Tarot Reading", "Oracle Cards", "Intuitive Guidance"],
      experience: "14+ years",
      image: "🌙",
      description: "Intuitive reader specializing in tarot and oracle card divination. Helps navigate life transitions and spiritual awakening.",
      achievements: ["Certified Tarot Master", "5,800+ readings", "Intuitive Arts Teacher"],
      rating: 4.8,
      sessions: 645
    },
    {
      name: "Yogi Arjun",
      specialties: ["Meditation", "Kundalini Yoga", "Spiritual Coaching"],
      experience: "20+ years",
      image: "🧘",
      description: "Meditation master and Kundalini yoga teacher. Guides students through advanced spiritual practices and consciousness expansion.",
      achievements: ["Yoga Alliance Certification", "4,900+ students taught", "Meditation Teacher Award"],
      rating: 4.9,
      sessions: 789
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Crystal Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 aurora-gradient"></div>
        <div className="absolute inset-0 sacred-geometry opacity-25"></div>
        
        {/* Floating Crystals */}
        <div className="absolute top-16 left-10 animate-float">
          <div className="text-5xl opacity-70 animate-pulse-soft text-glow">💎</div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="text-6xl opacity-60 animate-pulse-soft text-glow-golden">🔮</div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '3s'}}>
          <div className="text-4xl opacity-80 animate-pulse-soft text-glow">💫</div>
        </div>
        <div className="absolute bottom-20 right-16 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-5xl opacity-70 animate-pulse-soft text-glow-golden">✨</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <div className="animate-scale-in mb-8">
              <span className="text-9xl animate-cosmic-rotate">🌟</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-playfair text-glow-golden animate-fade-in-up">
              Our Spiritual Masters
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Meet the enlightened souls who will guide your transformation journey
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">🏆</div>
                <div className="text-3xl font-bold mb-2 font-playfair">25+</div>
                <div className="text-purple-100">Years Combined Experience</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">👥</div>
                <div className="text-3xl font-bold mb-2 font-playfair">50K+</div>
                <div className="text-purple-100">Lives Transformed</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">⭐</div>
                <div className="text-3xl font-bold mb-2 font-playfair">4.8</div>
                <div className="text-purple-100">Average Rating</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">🎯</div>
                <div className="text-3xl font-bold mb-2 font-playfair">95%</div>
                <div className="text-purple-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners Grid */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {practitioners.map((practitioner, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-center">
                    <div className="text-7xl mb-4 animate-pulse-soft">{practitioner.image}</div>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ {practitioner.rating}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold cosmic-text mb-2 font-playfair">{practitioner.name}</h3>
                    <p className="text-purple-600 font-semibold mb-4 text-lg">{practitioner.experience} of experience</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{practitioner.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-lg">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {practitioner.specialties.map((specialty, specIndex) => (
                          <span 
                            key={specIndex}
                            className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-lg">Achievements:</h4>
                      <div className="space-y-2">
                        {practitioner.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-2">
                            <span className="text-yellow-500">🏆</span>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold cosmic-text">{practitioner.sessions}</div>
                        <div className="text-gray-600 text-sm">Sessions Completed</div>
                      </div>
                      <Link to="/book-session">
                        <Button className="golden-gradient text-white hover:opacity-90 transition-opacity px-6 py-3 text-lg font-semibold">
                          Book Session
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Practitioners */}
      <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 text-glow-golden font-playfair">Why Choose Our Masters?</h2>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto">Experience the difference of authentic spiritual guidance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-fade-in-up">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 font-playfair">Certified Experts</h3>
              <p className="text-purple-100">All practitioners are certified and have years of training</p>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-xl font-bold mb-3 font-playfair">Personalized Care</h3>
              <p className="text-purple-100">Each session is tailored to your unique spiritual needs</p>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 font-playfair">Complete Privacy</h3>
              <p className="text-purple-100">All sessions are confidential and held in sacred space</p>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl mb-4">💫</div>
              <h3 className="text-xl font-bold mb-3 font-playfair">Proven Results</h3>
              <p className="text-purple-100">Thousands of transformed lives speak for our effectiveness</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Practitioners;

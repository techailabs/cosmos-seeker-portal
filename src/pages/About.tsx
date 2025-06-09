
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Sacred Geometry */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 divine-gradient"></div>
        <div className="absolute inset-0 sacred-geometry opacity-20"></div>
        
        {/* Floating Sacred Symbols */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="text-6xl opacity-60 animate-pulse-soft text-glow-golden">🕉️</div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-5xl opacity-70 animate-pulse-soft text-glow">🔱</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '4s'}}>
          <div className="text-4xl opacity-80 animate-pulse-soft text-glow-golden">☸️</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <div className="animate-scale-in mb-8">
              <span className="text-8xl animate-cosmic-rotate">🌌</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-playfair text-glow-golden animate-fade-in-up">
              Our Sacred Journey
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Where Ancient Wisdom Meets the Next Generation of Seekers
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">🧘</div>
                <h3 className="text-2xl font-bold mb-3 font-playfair">Ancient Wisdom</h3>
                <p className="text-purple-100">Rooted in timeless traditions</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold mb-3 font-playfair">Modern Science</h3>
                <p className="text-purple-100">Backed by research & technology</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3 font-playfair">Transformation</h3>
                <p className="text-purple-100">Life-changing results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-bold mb-8 sacred-text font-playfair">Our Sacred Mission</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We don't just guide — we transform. Guruji Cosmos Trust is your sacred-tech fusion hub: 
                  where spiritual depth meets modern-day healing.
                </p>
                <p>
                  Whether you're lost in chaos or seeking deeper truths, we channel time-tested practices 
                  into a future-ready path of clarity, emotional mastery, and inner awakening.
                </p>
                <p>
                  Our approach combines ancient wisdom traditions with cutting-edge healing techniques, 
                  creating a personalized journey that honors both your spiritual heritage and your 
                  contemporary lifestyle.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/free-soul-report">
                  <Button className="golden-gradient text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold">
                    Start Your Transformation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="glassmorphism-dark rounded-3xl p-10 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-7xl mb-6 animate-cosmic-rotate">🔮</div>
                  <h3 className="text-3xl font-bold sacred-text font-playfair">Sacred-Tech Fusion</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">⭐</span>
                    <span className="text-gray-700 text-lg">Ancient wisdom traditions</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🧠</span>
                    <span className="text-gray-700 text-lg">Modern healing techniques</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🌟</span>
                    <span className="text-gray-700 text-lg">Personalized guidance</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💫</span>
                    <span className="text-gray-700 text-lg">Transformative results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 mystical-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 text-glow-golden font-playfair">Our Core Values</h2>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto">Guiding principles that shape every interaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
              <div className="text-6xl mb-6 animate-pulse-soft">🧘</div>
              <h3 className="text-2xl font-bold mb-4 text-glow-golden font-playfair">Authentic Guidance</h3>
              <p className="text-purple-100 text-lg leading-relaxed">We provide genuine, heart-centered wisdom rooted in ancient traditions</p>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 animate-pulse-soft">🌙</div>
              <h3 className="text-2xl font-bold mb-4 text-glow-golden font-playfair">Sacred Space</h3>
              <p className="text-purple-100 text-lg leading-relaxed">Every session is held in complete confidentiality and spiritual safety</p>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-6xl mb-6 animate-pulse-soft">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-glow-golden font-playfair">Lasting Transformation</h3>
              <p className="text-purple-100 text-lg leading-relaxed">Our goal is not temporary relief but profound, lasting positive change</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 cosmic-text font-playfair">Meet Our Spiritual Guides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The visionary minds behind your transformation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">🧙‍♂️</div>
                <h3 className="text-3xl font-bold cosmic-text mb-2 font-playfair">Guruji Ananda</h3>
                <p className="text-purple-600 font-semibold text-lg">Chief Spiritual Guide</p>
              </div>
              <p className="text-gray-700 text-center leading-relaxed text-lg">
                With over 25 years of experience in Vedic astrology and ancient wisdom traditions, 
                Guruji Ananda has guided thousands of souls toward their highest potential and life purpose.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">🔮</div>
                <h3 className="text-3xl font-bold cosmic-text mb-2 font-playfair">Master Priya</h3>
                <p className="text-purple-600 font-semibold text-lg">Karmic Healing Specialist</p>
              </div>
              <p className="text-gray-700 text-center leading-relaxed text-lg">
                A master palmist and face reader with 18+ years of experience, specializing in 
                karmic patterns and soul-level healing through ancient Indian mystical arts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

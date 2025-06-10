
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Sparkles, Moon, Sun } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const EnhancedHero = () => {
  const { user } = useAuth();
  const [currentText, setCurrentText] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  const heroTexts = [
    "Discover Your Cosmic Destiny",
    "Unlock Ancient Wisdom",
    "Transform Your Spiritual Journey",
    "Connect with Divine Energy"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-float opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          >
            {particle.id % 3 === 0 ? (
              <Star className="text-yellow-300 w-4 h-4" />
            ) : particle.id % 3 === 1 ? (
              <Sparkles className="text-pink-300 w-3 h-3" />
            ) : (
              <Moon className="text-blue-300 w-5 h-5" />
            )}
          </div>
        ))}

        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 400 400" className="animate-spin-slow">
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="none" stroke="url(#grad1)" strokeWidth="2" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="url(#grad1)" strokeWidth="1" />
            <circle cx="200" cy="200" r="50" fill="none" stroke="url(#grad1)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Cosmic Symbol */}
        <div className="mb-8 text-8xl md:text-9xl animate-pulse-soft">
          🕉️
        </div>

        {/* Dynamic Heading */}
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x font-serif">
            {heroTexts[currentText]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl lg:text-4xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
          Experience the ancient wisdom of{' '}
          <span className="text-yellow-300 font-semibold">Vedic Astrology</span>,{' '}
          <span className="text-pink-300 font-semibold">Spiritual Healing</span>, and{' '}
          <span className="text-purple-300 font-semibold">Divine Guidance</span>
        </p>

        {/* Enhanced Pricing */}
        <div className="mb-12 text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Starting from just{' '}
            <span className="text-3xl md:text-4xl font-bold text-yellow-300">₹799</span>
            <span className="text-gray-400 line-through ml-2">₹1,299</span>
          </p>
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
            🔥 Limited Time Offer - 38% OFF
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          {user ? (
            <Link to="/dashboard">
              <Button className="px-8 py-6 text-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                Your Cosmic Dashboard
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/auth">
                <Button className="px-8 py-6 text-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to="/book-session">
                <Button variant="outline" className="px-8 py-6 text-xl font-semibold border-2 border-white text-white hover:bg-white hover:text-purple-900 shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Book Free Consultation
                  <Sun className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-lg">4.9/5 Rating</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">👥</span>
            <span className="text-lg">10,000+ Happy Souls</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🏆</span>
            <span className="text-lg">15+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;

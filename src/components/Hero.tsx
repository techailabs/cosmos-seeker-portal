
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden star-field">
      {/* Background */}
      <div className="absolute inset-0 mystical-gradient opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 rounded-full bg-yellow-400 opacity-70"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 rounded-full bg-purple-400 opacity-60"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-3 h-3 rounded-full bg-pink-400 opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-pulse-soft mb-8">
          <span className="text-6xl">🔮</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
          Transform Your
          <span className="block golden-gradient bg-clip-text text-transparent">
            Spiritual Journey
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Where ancient wisdom meets the next generation of seekers. 
          Experience deep cosmic guidance, healing therapies, and personalized spiritual growth 
          in one sacred-tech fusion hub.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/free-soul-report">
            <Button 
              size="lg" 
              className="golden-gradient text-white hover:opacity-90 transition-all duration-300 px-8 py-4 text-lg font-semibold glow"
            >
              Get Your Free Soul Report 🌟
            </Button>
          </Link>
          <Link to="/services/astrology">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-900 transition-all duration-300 px-8 py-4 text-lg"
            >
              Explore Services
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold mb-1">10,000+</div>
            <div className="text-gray-200">Transformations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">🧘</div>
            <div className="text-2xl font-bold mb-1">7</div>
            <div className="text-gray-200">Healing Modalities</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">🌙</div>
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-gray-200">Spiritual Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Don't Just Heal. Awaken.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden star-field">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 sacred-gradient opacity-90"></div>
      <div className="absolute inset-0 sacred-geometry opacity-30"></div>
      
      {/* Floating Elements - Enhanced with Sacred Symbols */}
      <div className="absolute top-16 left-4 md:top-20 md:left-10 animate-float">
        <div className="text-4xl md:text-6xl opacity-70 animate-pulse-soft text-glow-golden">♈</div>
      </div>
      <div className="absolute top-32 right-4 md:top-40 md:right-20 animate-float" style={{
        animationDelay: '2s'
      }}>
        <div className="text-5xl md:text-7xl opacity-60 animate-pulse-soft text-glow">☽</div>
      </div>
      <div className="absolute bottom-32 left-4 md:bottom-40 md:left-20 animate-float" style={{
        animationDelay: '4s'
      }}>
        <div className="text-4xl md:text-5xl opacity-80 animate-pulse-soft text-glow-golden">✧</div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float hidden sm:block" style={{
        animationDelay: '1s'
      }}>
        <div className="text-3xl md:text-4xl opacity-50 animate-pulse-soft text-glow">☿</div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float hidden sm:block" style={{
        animationDelay: '3s'
      }}>
        <div className="text-4xl md:text-5xl opacity-60 animate-pulse-soft text-glow-golden">♃</div>
      </div>
      <div className="absolute top-1/4 left-1/2 animate-float hidden lg:block" style={{
        animationDelay: '5s'
      }}>
        <div className="text-3xl md:text-4xl opacity-70 animate-pulse-soft text-glow">🕉️</div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-float hidden lg:block" style={{
        animationDelay: '6s'
      }}>
        <div className="text-4xl md:text-5xl opacity-50 animate-pulse-soft text-glow-golden">🔱</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
        <div className="animate-pulse-soft mb-8 md:mb-12">
          <span className="text-6xl md:text-8xl animate-cosmic-rotate">🔮</span>
        </div>
        
        <h1 className="hero-title font-playfair mb-6 md:mb-8 text-glow-golden leading-tight animate-fade-in-up">
          <span className="block divine-text">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        
        <p className="hero-description font-inter mb-8 md:mb-12 text-gray-100 max-w-5xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          We decode your karma, rewire your emotions, and realign you with your purpose — 
          using <span className="sacred-text font-semibold">ancient science</span> and <span className="cosmic-text font-semibold">modern therapy</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <Link to="/cosmic-quiz" className="w-full sm:w-auto">
            <Button size="lg" className="sacred-gradient text-white hover:opacity-90 transition-all duration-300 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold glow-golden w-full sm:w-auto font-inter">
              Get Your Soul Map Free 🌟
            </Button>
          </Link>
          <Link to="/book-session" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl w-full sm:w-auto font-inter">
              Book a Session
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center animate-fade-in-up" style={{animationDelay: '1.5s'}}>
          <div className="glassmorphism rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl mb-3">⚡</div>
            <div className="text-2xl md:text-3xl font-bold mb-2 font-playfair">89%</div>
            <div className="text-base md:text-lg text-gray-200 font-inter">Feel clarity in 2 sessions</div>
          </div>
          <div className="glassmorphism rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl mb-3">🎯</div>
            <div className="text-2xl md:text-3xl font-bold mb-2 font-playfair">73%</div>
            <div className="text-base md:text-lg text-gray-200 font-inter">Find breakthrough decisions</div>
          </div>
          <div className="glassmorphism rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl mb-3">💫</div>
            <div className="text-2xl md:text-3xl font-bold mb-2 font-playfair">95%</div>
            <div className="text-base md:text-lg text-gray-200 font-inter">Would recommend to friends</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden star-field">
      {/* Background */}
      <div className="absolute inset-0 mystical-gradient opacity-90"></div>
      
      {/* Floating Elements - Enhanced Astrological Symbols */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="text-4xl opacity-70 animate-pulse-soft">♈</div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{
      animationDelay: '2s'
    }}>
        <div className="text-5xl opacity-60 animate-pulse-soft">☽</div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{
      animationDelay: '4s'
    }}>
        <div className="text-3xl opacity-80 animate-pulse-soft">✧</div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{
      animationDelay: '1s'
    }}>
        <div className="text-3xl opacity-50 animate-pulse-soft">☿</div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float" style={{
      animationDelay: '3s'
    }}>
        <div className="text-4xl opacity-60 animate-pulse-soft">♃</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-pulse-soft mb-8">
          <span className="text-6xl">🔮</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
          Don't Just Heal.
          <span className="block golden-gradient bg-clip-text text-slate-50">
            Awaken.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          We decode your karma, rewire your emotions, and realign you with your purpose — 
          using ancient science and modern therapy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/cosmic-quiz">
            <Button size="lg" className="golden-gradient text-white hover:opacity-90 transition-all duration-300 px-8 py-4 text-lg font-semibold glow">
              Get Your Soul Map Free 🌟
            </Button>
          </Link>
          <Link to="/book-session">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 transition-all duration-300 px-8 py-4 text-lg">
              Book a Session
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold mb-1">89%</div>
            <div className="text-gray-200">Feel clarity in 2 sessions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold mb-1">73%</div>
            <div className="text-gray-200">Find breakthrough decisions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">💫</div>
            <div className="text-2xl font-bold mb-1">95%</div>
            <div className="text-gray-200">Would recommend to friends</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
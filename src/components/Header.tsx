
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white/95 backdrop-blur-md border-b border-purple-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full cosmic-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">🔮</span>
            </div>
            <div>
              <h1 className="text-xl font-bold cosmic-text">Guruji Cosmos Trust</h1>
              <p className="text-xs text-gray-600">Where Ancient Wisdom Meets Modern Seekers</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services/astrology" className="text-gray-700 hover:text-purple-600 transition-colors">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
            <Link to="/practitioners" className="text-gray-700 hover:text-purple-600 transition-colors">Practitioners</Link>
            <Link to="/free-soul-report">
              <Button className="cosmic-gradient text-white hover:opacity-90 transition-opacity">
                Begin Your Journey
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-700"></div>
              <div className="w-full h-0.5 bg-gray-700"></div>
              <div className="w-full h-0.5 bg-gray-700"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/services/astrology" className="text-gray-700 hover:text-purple-600 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
              <Link to="/practitioners" className="text-gray-700 hover:text-purple-600 transition-colors">Practitioners</Link>
              <Link to="/free-soul-report">
                <Button className="cosmic-gradient text-white hover:opacity-90 transition-opacity w-full">
                  Begin Your Journey
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

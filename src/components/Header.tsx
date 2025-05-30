
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut, Settings } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  // TODO: Replace with actual auth state from Supabase
  const isAuthenticated = false;
  const user = null;

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
            
            {/* User Authentication */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <User size={20} />
                  <span>Account</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors">
                      Dashboard
                    </Link>
                    <Link to="/dashboard/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors">
                      <Settings size={16} className="mr-2" />
                      Settings
                    </Link>
                    <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors">
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" className="border-purple-200 text-purple-600">
                    Sign In
                  </Button>
                </Link>
                <Link to="/free-soul-report">
                  <Button className="cosmic-gradient text-white hover:opacity-90 transition-opacity">
                    Begin Your Journey
                  </Button>
                </Link>
              </div>
            )}
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
              
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">Dashboard</Link>
                  <button className="text-left text-gray-700 hover:text-purple-600 transition-colors">Sign Out</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-purple-600 transition-colors">Sign In</Link>
                  <Link to="/free-soul-report">
                    <Button className="cosmic-gradient text-white hover:opacity-90 transition-opacity w-full">
                      Begin Your Journey
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut, Settings, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // TODO: Replace with actual auth state from Supabase
  const isAuthenticated = false;
  const user = null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic header styling based on route
  const getHeaderStyle = () => {
    if (location.pathname === '/') {
      return isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-purple-100' 
        : 'bg-transparent';
    }
    if (location.pathname.startsWith('/admin')) {
      return 'bg-gray-900 border-b border-gray-700';
    }
    if (location.pathname.startsWith('/services')) {
      return 'bg-gradient-to-r from-purple-900/95 to-indigo-900/95 backdrop-blur-md border-b border-purple-500/30';
    }
    return 'bg-white/95 backdrop-blur-md border-b border-purple-100';
  };

  const getTextColor = () => {
    if (location.pathname === '/' && !isScrolled) return 'text-white';
    if (location.pathname.startsWith('/admin')) return 'text-white';
    if (location.pathname.startsWith('/services')) return 'text-white';
    return 'text-gray-700';
  };

  const getLogo = () => {
    if (location.pathname.startsWith('/admin')) {
      return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white font-bold text-lg">🎯</span>
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-full cosmic-gradient flex items-center justify-center glow">
        <span className="text-white font-bold text-lg">🔮</span>
      </div>
    );
  };

  const navigation = [
    { name: 'Services', href: '/services/astrology', submenu: [
      { name: 'Astrology Reading', href: '/services/astrology', icon: '⭐' },
      { name: 'Palmistry', href: '/services/palmistry', icon: '🤲' },
      { name: 'Mind Reading', href: '/services/mind-reading', icon: '🧠' },
      { name: 'Face Reading', href: '/services/face-reading', icon: '👁️' },
      { name: 'Hypnotherapy', href: '/services/hypnotherapy', icon: '💫' },
      { name: 'Music Therapy', href: '/services/music-therapy', icon: '🎵' },
      { name: 'Meditation', href: '/services/meditation', icon: '🧘' },
    ]},
    { name: 'About', href: '/about' },
    { name: 'Practitioners', href: '/practitioners' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {getLogo()}
            <div className="group-hover:scale-105 transition-transform duration-300">
              <h1 className={`text-xl font-bold font-playfair ${getTextColor()}`}>
                {location.pathname.startsWith('/admin') ? 'Admin Portal' : 'Guruji Cosmos Trust'}
              </h1>
              <p className={`text-xs font-inter ${getTextColor()} opacity-80`}>
                {location.pathname.startsWith('/admin') 
                  ? 'Management Dashboard' 
                  : 'Where Ancient Wisdom Meets Modern Seekers'
                }
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {!location.pathname.startsWith('/admin') && navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.href} 
                  className={`${getTextColor()} hover:text-purple-400 transition-colors font-inter font-medium relative`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Mega Menu for Services */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-4 font-playfair">Our Services</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group/item"
                          >
                            <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
                              {subItem.icon}
                            </span>
                            <span className="text-gray-700 font-inter group-hover/item:text-purple-600 transition-colors">
                              {subItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* User Authentication */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center space-x-2 ${getTextColor()} hover:text-purple-400 transition-colors font-inter`}
                >
                  <User size={20} />
                  <span>Account</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-purple-100 z-50">
                    <Link to="/dashboard" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 transition-colors rounded-t-xl font-inter">
                      Dashboard
                    </Link>
                    <Link to="/dashboard/profile" className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 transition-colors font-inter">
                      <Settings size={16} className="mr-2" />
                      Settings
                    </Link>
                    <button className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-purple-50 transition-colors rounded-b-xl font-inter">
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" className={`border-2 ${
                    location.pathname === '/' && !isScrolled 
                      ? 'border-white/30 text-white hover:bg-white/10' 
                      : 'border-purple-200 text-purple-600 hover:bg-purple-50'
                  } transition-all duration-300 font-inter`}>
                    Sign In
                  </Button>
                </Link>
                <Link to="/free-soul-report">
                  <Button className="sacred-gradient text-white hover:opacity-90 transition-opacity glow font-inter">
                    Begin Your Journey
                  </Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-lg ${getTextColor()} hover:bg-white/10 transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-purple-100/30">
            <nav className="flex flex-col space-y-4">
              {!location.pathname.startsWith('/admin') && navigation.map((item) => (
                <div key={item.name}>
                  <Link 
                    to={item.href} 
                    className={`${getTextColor()} hover:text-purple-400 transition-colors font-inter block py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`flex items-center space-x-2 ${getTextColor()} hover:text-purple-400 transition-colors text-sm font-inter py-1`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{subItem.icon}</span>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`${getTextColor()} hover:text-purple-400 transition-colors font-inter py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button className={`text-left ${getTextColor()} hover:text-purple-400 transition-colors font-inter py-2`}>
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className={`${getTextColor()} hover:text-purple-400 transition-colors font-inter py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link to="/free-soul-report" onClick={() => setIsMenuOpen(false)}>
                    <Button className="sacred-gradient text-white hover:opacity-90 transition-opacity w-full mt-2 font-inter">
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

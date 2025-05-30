
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full cosmic-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Guruji Cosmos Trust</h3>
                <p className="text-gray-400 text-sm">Sacred-Tech Fusion Hub</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Where ancient wisdom meets the next generation of seekers. 
              Transform your spiritual journey with personalized guidance and modern healing techniques.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-colors">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <span className="text-sm">🐦</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Astrology</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Palmistry</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Hypnotherapy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Meditation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Music Therapy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Book Session</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Free Reading</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Guruji Cosmos Trust. All rights reserved. Transforming souls since the beginning of time. ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

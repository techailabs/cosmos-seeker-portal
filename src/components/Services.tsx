
import { Link } from 'react-router-dom';
import { Clock, Users, Star, IndianRupee } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: "⭐",
      title: "Astrology",
      description: "Personalized birth chart decoding",
      tagline: "See the map written in the stars",
      features: ["Detailed Birth Chart Analysis", "Transit Forecasts", "Love, Career & Health Guidance"],
      price: "₹1,999",
      originalPrice: "₹2,999",
      duration: "60 mins",
      type: "1-on-1",
      rating: 4.9,
      link: "/services/astrology"
    },
    {
      icon: "💫",
      title: "Hypnotherapy", 
      description: "Heal subconscious patterns",
      tagline: "Reprogram, release, renew",
      features: ["Anxiety & Phobia Relief", "Inner Child Work", "Breaking Negative Loops"],
      price: "₹2,499",
      originalPrice: "₹3,499",
      duration: "90 mins",
      type: "1-on-1",
      rating: 4.8,
      link: "/services/hypnotherapy"
    },
    {
      icon: "🎵",
      title: "Music Therapy",
      description: "Emotional alignment through sound",
      tagline: "Heal through frequency",
      features: ["Sound Healing Sessions", "Chakra Alignment", "Guided Mantra Tracks"],
      price: "₹1,499",
      originalPrice: "₹1,999",
      duration: "45 mins",
      type: "Group",
      rating: 4.7,
      link: "/services/music-therapy"
    },
    {
      icon: "🤲",
      title: "Palm & Face Reading",
      description: "Decode life maps and karmic traits",
      tagline: "Your truth, written in your features",
      features: ["Life Path Reading", "Personality Analysis", "Karmic Insights"],
      price: "₹1,299",
      originalPrice: "₹1,799",
      duration: "45 mins",
      type: "1-on-1",
      rating: 4.6,
      link: "/services/palmistry"
    },
    {
      icon: "🧘",
      title: "Meditation",
      description: "Inner calm through breath and mindfulness",
      tagline: "Stillness is your superpower",
      features: ["Guided Visualizations", "Breathwork Sessions", "Cosmic Energy Journeys"],
      price: "₹799",
      originalPrice: "₹1,199",
      duration: "30 mins",
      type: "Group",
      rating: 4.9,
      link: "/services/meditation"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="divine-text text-glow">What We Offer</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock the tools of self-realization. Our services blend timeless spiritual knowledge 
            with therapeutic precision to support your healing, growth, and evolution.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
            <IndianRupee className="w-4 h-4 text-green-600" />
            <span className="text-green-700 font-semibold">All Prices in Indian Rupees (₹)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center relative overflow-hidden glow"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Save {Math.round((1 - parseInt(service.price.slice(1)) / parseInt(service.originalPrice.slice(1))) * 100)}%
              </div>

              <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2 sacred-text text-glow-golden">{service.title}</h3>
              <p className="text-xs md:text-sm text-purple-600 mb-2 md:mb-3 italic font-semibold">{service.tagline}</p>
              
              {/* Rating */}
              <div className="flex items-center justify-center mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600 ml-1 font-medium">{service.rating}</span>
              </div>

              <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">{service.description}</p>
              
              {/* Service Details */}
              <div className="flex items-center justify-center space-x-4 mb-3 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{service.type}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg font-bold divine-text text-glow">{service.price}</span>
                  <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                </div>
                <p className="text-xs text-gray-500">+ 18% GST</p>
              </div>

              <ul className="space-y-1 mb-3 md:mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center text-xs text-gray-500">
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full cosmic-gradient mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={service.link}>
                <button className="w-full py-2 px-3 md:px-4 golden-gradient text-white rounded-lg hover:opacity-90 transition-all duration-300 text-xs md:text-sm glow-golden">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto glassmorphism">
            <h3 className="text-xl font-bold cosmic-text mb-4 text-glow">Why Choose Our Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600">✓</span>
                <span className="font-medium">Instant Results & Reports</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600">✓</span>
                <span className="font-medium">Experienced Practitioners</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600">✓</span>
                <span className="font-medium">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: "⭐",
      title: "Astrology",
      description: "Personalized birth chart decoding",
      tagline: "See the map written in the stars",
      features: ["Detailed Birth Chart Analysis", "Transit Forecasts", "Love, Career & Health Guidance"],
      link: "/services/astrology"
    },
    {
      icon: "💫",
      title: "Hypnotherapy", 
      description: "Heal subconscious patterns",
      tagline: "Reprogram, release, renew",
      features: ["Anxiety & Phobia Relief", "Inner Child Work", "Breaking Negative Loops"],
      link: "/services/hypnotherapy"
    },
    {
      icon: "🎵",
      title: "Music Therapy",
      description: "Emotional alignment through sound",
      tagline: "Heal through frequency",
      features: ["Sound Healing Sessions", "Chakra Alignment", "Guided Mantra Tracks"],
      link: "/services/music-therapy"
    },
    {
      icon: "🤲",
      title: "Palm & Face Reading",
      description: "Decode life maps and karmic traits",
      tagline: "Your truth, written in your features",
      features: ["Life Path Reading", "Personality Analysis", "Karmic Insights"],
      link: "/services/palmistry"
    },
    {
      icon: "🧘",
      title: "Meditation",
      description: "Inner calm through breath and mindfulness",
      tagline: "Stillness is your superpower",
      features: ["Guided Visualizations", "Breathwork Sessions", "Cosmic Energy Journeys"],
      link: "/services/meditation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="cosmic-text">What We Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the tools of self-realization. Our services blend timeless spiritual knowledge 
            with therapeutic precision to support your healing, growth, and evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 cosmic-text">{service.title}</h3>
              <p className="text-sm text-purple-600 mb-3 italic">{service.tagline}</p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-1 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full cosmic-gradient mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={service.link}>
                <button className="w-full py-2 px-4 border-2 border-purple-200 text-purple-600 rounded-lg hover:cosmic-gradient hover:text-white transition-all duration-300 text-sm">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: "⭐",
      title: "Astrology",
      description: "Deep birth chart dives + actionable cosmic guidance for your life path",
      features: ["Detailed Birth Chart Analysis", "Yearly Predictions", "Relationship Compatibility"],
      link: "/services/astrology"
    },
    {
      icon: "🤲",
      title: "Palmistry", 
      description: "Decode your life map from your hands and unlock your destiny",
      features: ["Life Line Reading", "Career Guidance", "Health Indicators"],
      link: "/services/palmistry"
    },
    {
      icon: "🧠",
      title: "Mind Reading",
      description: "Unlock subconscious blocks and reveal hidden potential",
      features: ["Subconscious Analysis", "Pattern Recognition", "Mental Clarity"],
      link: "/services/mind-reading"
    },
    {
      icon: "👤",
      title: "Face Reading",
      description: "Understand character traits + karmic clues written in your features",
      features: ["Personality Analysis", "Life Purpose", "Karmic Insights"],
      link: "/services/face-reading"
    },
    {
      icon: "💫",
      title: "Hypnotherapy",
      description: "Heal trauma, crush bad patterns, reprogram self-worth",
      features: ["Trauma Healing", "Habit Breaking", "Confidence Building"],
      link: "/services/hypnotherapy"
    },
    {
      icon: "🎵",
      title: "Music Therapy",
      description: "Sacred soundscapes for emotional release and spiritual connection",
      features: ["Healing Frequencies", "Emotional Release", "Chakra Balancing"],
      link: "/services/music-therapy"
    },
    {
      icon: "🧘",
      title: "Meditation",
      description: "Guided journeys into inner peace, daily presence, and soul strength",
      features: ["Daily Practice", "Guided Sessions", "Mindfulness Training"],
      link: "/services/meditation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="cosmic-text">Sacred Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your path through our holistic wellness suite, 
            where ancient wisdom meets modern healing techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 cosmic-text">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={service.link}>
                <button className="mt-4 w-full py-2 px-4 border-2 border-purple-200 text-purple-600 rounded-lg hover:cosmic-gradient hover:text-white transition-all duration-300">
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

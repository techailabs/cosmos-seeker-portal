
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EnhancedServices = () => {
  const premiumServices = [
    {
      icon: "💎",
      title: "Crystal Healing",
      description: "Harness crystal energy for chakra alignment",
      tagline: "Activate your energy centers",
      features: ["Personalized Crystal Selection", "Chakra Balancing", "Energy Grid Creation"],
      price: "$120",
      duration: "75 min",
      link: "/services/crystal-healing"
    },
    {
      icon: "🌈",
      title: "Aura Reading",
      description: "Visualize and cleanse your energy field",
      tagline: "See your soul's colors",
      features: ["Aura Photography", "Energy Field Analysis", "Cleansing Rituals"],
      price: "$89",
      duration: "45 min",
      link: "/services/aura-reading"
    },
    {
      icon: "🔥",
      title: "Tantric Healing",
      description: "Sacred intimacy and relationship alignment",
      tagline: "Divine union and healing",
      features: ["Sacred Sexuality", "Relationship Healing", "Energy Exchange"],
      price: "$199",
      duration: "90 min",
      link: "/services/tantric-healing"
    },
    {
      icon: "📿",
      title: "Karma Clearing",
      description: "Release past-life patterns and blockages",
      tagline: "Break the karmic cycle",
      features: ["Past Life Regression", "Karmic Debt Analysis", "Soul Contract Reading"],
      price: "$159",
      duration: "2 hours",
      link: "/services/karma-clearing"
    },
    {
      icon: "🌙",
      title: "Moon Ceremony",
      description: "Harness lunar energy for manifestation",
      tagline: "Align with cosmic cycles",
      features: ["New/Full Moon Rituals", "Manifestation Ceremonies", "Group Energy Work"],
      price: "$75",
      duration: "60 min",
      link: "/services/moon-ceremony"
    },
    {
      icon: "⚡",
      title: "Energy Healing",
      description: "Reiki, Pranic healing, and light codes",
      tagline: "Channel divine healing light",
      features: ["Multi-Modal Energy Work", "Chakra Restoration", "Light Code Activation"],
      price: "$139",
      duration: "90 min",
      link: "/services/energy-healing"
    },
    {
      icon: "🎭",
      title: "Shadow Work",
      description: "Integrate your hidden aspects for wholeness",
      tagline: "Embrace your darkness to find light",
      features: ["Shadow Integration", "Inner Child Healing", "Archetype Work"],
      price: "$169",
      duration: "2 hours",
      link: "/services/shadow-work"
    },
    {
      icon: "🌸",
      title: "Flower Essence Therapy",
      description: "Vibrational healing through nature's wisdom",
      tagline: "Nature's medicine for the soul",
      features: ["Custom Essence Blends", "Emotional Healing", "Vibrational Alignment"],
      price: "$95",
      duration: "60 min",
      link: "/services/flower-essence"
    }
  ];

  const groupServices = [
    {
      icon: "🔮",
      title: "Full Moon Circle",
      description: "Monthly group ceremony for release and renewal",
      nextDate: "Dec 15, 2024",
      price: "$35",
      spots: "8 spots left"
    },
    {
      icon: "🧘‍♀️",
      title: "Group Meditation",
      description: "Weekly guided meditation with cosmic themes",
      nextDate: "Every Sunday",
      price: "$20",
      spots: "12 spots left"
    },
    {
      icon: "💫",
      title: "Soul Family Gathering",
      description: "Connect with your spiritual tribe",
      nextDate: "Dec 22, 2024",
      price: "$45",
      spots: "5 spots left"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-pink-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Premium Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cosmic-text leading-tight">
            Premium Healing Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep transformation through advanced spiritual practices and healing modalities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {premiumServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 cosmic-gradient opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-purple-300 mb-3 italic">{service.tagline}</p>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full cosmic-gradient mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-purple-300">{service.duration}</span>
                  <span className="text-xl font-bold text-white">{service.price}</span>
                </div>
                
                <Link to={service.link}>
                  <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity text-sm">
                    Book Session
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Group Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cosmic-text">
            Group Ceremonies & Workshops
          </h2>
          <p className="text-lg text-gray-300">
            Connect with your soul family in sacred group experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groupServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-300">Next Session:</span>
                  <span className="text-white">{service.nextDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Investment:</span>
                  <span className="text-white font-bold">{service.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Availability:</span>
                  <span className="text-yellow-300">{service.spots}</span>
                </div>
              </div>
              
              <Button className="w-full golden-gradient text-white hover:opacity-90 transition-opacity text-sm">
                Join Circle
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedServices;

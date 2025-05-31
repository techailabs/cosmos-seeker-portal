
import { useState, useEffect } from 'react';

const CosmicForecast = () => {
  const [currentForecast, setCurrentForecast] = useState(0);
  
  const forecasts = [
    {
      energy: "Reflect + Release",
      description: "Today's lunar energy supports deep introspection and letting go",
      icon: "🌙",
      color: "from-blue-500 to-purple-600"
    },
    {
      energy: "Mercury Retrograde Alert",
      description: "Journal, don't decide. Perfect time for review and reflection",
      icon: "☿",
      color: "from-orange-500 to-red-600"
    },
    {
      energy: "Venus Blessing",
      description: "Love and creativity flow freely. Express your heart today",
      icon: "♀",
      color: "from-pink-500 to-rose-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentForecast((prev) => (prev + 1) % forecasts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [forecasts.length]);

  const current = forecasts[currentForecast];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="cosmic-text">Live Cosmic Forecast</span>
          </h2>
          <p className="text-xl text-gray-600">Real-time celestial guidance for your day</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`bg-gradient-to-r ${current.color} rounded-xl p-8 text-white text-center shadow-lg`}>
            <div className="text-6xl mb-4 animate-pulse-soft">{current.icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Today's Energy: {current.energy}
            </h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              {current.description}
            </p>
            <div className="mt-6 flex justify-center space-x-2">
              {forecasts.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentForecast ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmicForecast;

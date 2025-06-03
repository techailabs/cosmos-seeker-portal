
import { useState, useEffect } from 'react';

const UnlockJourney = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      number: 1,
      title: "You feel stuck, anxious, unclear",
      icon: "😔",
      description: "Life feels heavy. Decisions are hard. You're seeking something deeper."
    },
    {
      number: 2,
      title: "You explore healing sessions",
      icon: "🔍",
      description: "You discover astrology, hypnotherapy, or energy work that resonates."
    },
    {
      number: 3,
      title: "You get real tools",
      icon: "🛠️",
      description: "Rituals, affirmations, timing guides - practical wisdom you can use."
    },
    {
      number: 4,
      title: "You feel lighter & aligned",
      icon: "✨",
      description: "The fog lifts. You're clearer on your path and purpose."
    },
    {
      number: 5,
      title: "You awaken others",
      icon: "🌟",
      description: "Just by being yourself, you inspire transformation in others."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="cosmic-text">Unlock Your Layers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your transformation journey, step by step
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 cosmic-gradient rounded-full opacity-20"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 cosmic-gradient rounded-full transition-all duration-1000"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>

            {/* Steps */}
            <div className="relative flex justify-between items-center">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center transition-all duration-500 ${
                    index <= currentStep ? 'scale-110 opacity-100' : 'scale-90 opacity-60'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-500 ${
                    index <= currentStep 
                      ? 'cosmic-gradient text-white shadow-lg' 
                      : 'bg-white border-2 border-gray-300'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="text-center max-w-32">
                    <div className="font-semibold text-sm cosmic-text mb-2">
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 hidden md:block">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Step Details */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl mb-4">{steps[currentStep].icon}</div>
              <h3 className="text-2xl font-bold cosmic-text mb-4">
                Step {steps[currentStep].number}: {steps[currentStep].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {steps[currentStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockJourney;

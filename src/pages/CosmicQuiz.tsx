
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CosmicQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What draws you most strongly?",
      options: [
        "The mysteries of the stars and cosmos",
        "Understanding people's deeper nature",
        "Healing and transformation",
        "Creative expression and flow"
      ]
    },
    {
      question: "When making important decisions, you rely on:",
      options: [
        "Cosmic timing and planetary influences",
        "Reading energy and intuition",
        "Inner wisdom and meditation",
        "Following your creative impulses"
      ]
    },
    {
      question: "Your ideal spiritual practice includes:",
      options: [
        "Studying birth charts and cosmic cycles",
        "Energy healing and chakra work",
        "Deep meditation and mindfulness",
        "Sacred music and sound healing"
      ]
    },
    {
      question: "You feel most connected to:",
      options: [
        "The rhythm of celestial movements",
        "The energy fields around people",
        "The stillness of inner peace",
        "The vibrations of sound and music"
      ]
    }
  ];

  const archetypes = [
    {
      name: "The Cosmic Navigator",
      icon: "⭐",
      description: "You're drawn to the wisdom of the stars and find guidance in cosmic patterns. Astrology and celestial wisdom are your natural allies.",
      service: "Astrology Reading"
    },
    {
      name: "The Energy Reader",
      icon: "🔮",
      description: "You have a natural gift for reading energy and understanding people's deeper nature. Palmistry and face reading resonate with your intuitive abilities.",
      service: "Palmistry or Face Reading"
    },
    {
      name: "The Inner Mystic",
      icon: "🧘",
      description: "You seek transformation through inner work and meditation. Your path involves deep spiritual practices and consciousness expansion.",
      service: "Meditation or Hypnotherapy"
    },
    {
      name: "The Sacred Artist",
      icon: "🎵",
      description: "You connect with the divine through creative expression and sound. Music and vibration are your gateways to spiritual experience.",
      service: "Music Therapy"
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getArchetype = () => {
    const counts = [0, 0, 0, 0];
    answers.forEach(answer => counts[answer]++);
    const maxIndex = counts.indexOf(Math.max(...counts));
    return archetypes[maxIndex];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!showResults ? (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-5xl font-bold mb-6 cosmic-text">What's Your Cosmic Archetype?</h1>
                  <p className="text-xl text-gray-600">
                    Discover your spiritual personality and find your perfect path
                  </p>
                  <div className="mt-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="cosmic-gradient h-2 rounded-full transition-all duration-300"
                        style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Question {currentQuestion + 1} of {questions.length}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-8 cosmic-text text-center">
                    {questions[currentQuestion].question}
                  </h2>
                  
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-5xl font-bold mb-6 cosmic-text">Your Cosmic Archetype</h1>
                  <div className="text-6xl mb-6">{getArchetype().icon}</div>
                  <h2 className="text-3xl font-bold mb-4 text-purple-600">{getArchetype().name}</h2>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                    {getArchetype().description}
                  </p>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold mb-4 cosmic-text">Perfect Service For You</h3>
                    <p className="text-lg font-semibold text-purple-600 mb-6">{getArchetype().service}</p>
                    <div className="space-y-4">
                      <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity">
                        Book Your {getArchetype().service} Session
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                        onClick={resetQuiz}
                      >
                        Retake Quiz
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 cosmic-text text-center">All Cosmic Archetypes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {archetypes.map((archetype, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="text-center mb-3">
                          <div className="text-3xl mb-2">{archetype.icon}</div>
                          <h4 className="font-bold text-purple-600">{archetype.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 text-center">{archetype.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CosmicQuiz;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FindPathQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your biggest challenge right now?",
      options: [
        { text: "Feeling lost or unclear about my purpose", value: "clarity" },
        { text: "Relationship patterns that keep repeating", value: "relationships" },
        { text: "Anxiety, stress, or emotional overwhelm", value: "emotional" },
        { text: "Career decisions or timing", value: "career" }
      ]
    },
    {
      question: "How do you prefer to receive guidance?",
      options: [
        { text: "Deep analysis and detailed insights", value: "analytical" },
        { text: "Intuitive and energy-based readings", value: "intuitive" },
        { text: "Practical tools and exercises", value: "practical" },
        { text: "Healing and transformative experiences", value: "healing" }
      ]
    },
    {
      question: "What resonates most with you?",
      options: [
        { text: "Stars, planets, and cosmic timing", value: "astrology" },
        { text: "Sound, music, and vibration", value: "music" },
        { text: "Mind, subconscious, and inner work", value: "mind" },
        { text: "Hands, face, and body wisdom", value: "reading" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    if (answers.includes('astrology') || answers.includes('career')) {
      return {
        service: 'Astrology Reading',
        description: 'Your cosmic blueprint reveals the perfect timing for your next moves.',
        link: '/services/astrology',
        icon: '⭐'
      };
    } else if (answers.includes('emotional') || answers.includes('healing')) {
      return {
        service: 'Hypnotherapy Session',
        description: 'Heal the emotional patterns holding you back from your true power.',
        link: '/services/hypnotherapy',
        icon: '💫'
      };
    } else if (answers.includes('music') || answers.includes('practical')) {
      return {
        service: 'Music Therapy',
        description: 'Let healing frequencies realign your energy and emotional state.',
        link: '/services/music-therapy',
        icon: '🎵'
      };
    } else {
      return {
        service: 'Palm & Face Reading',
        description: 'Your hands and face reveal the map to your deepest truths.',
        link: '/services/palmistry',
        icon: '🤲'
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    return (
      <section className="py-12 md:py-20 cosmic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-5xl md:text-6xl mb-4 md:mb-6">{recommendation.icon}</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Your Soul Path:</h2>
            <h3 className="text-xl md:text-2xl golden-gradient bg-clip-text text-transparent mb-4 md:mb-6">
              {recommendation.service}
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-purple-100">
              {recommendation.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to={recommendation.link} className="w-full sm:w-auto">
                <Button size="lg" className="golden-gradient text-white hover:opacity-90 px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                  Book Your Session
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-900 px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                onClick={resetQuiz}
              >
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 cosmic-text leading-tight">
              Find Your Path
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Discover which service aligns with your current energy
            </p>
            <div className="mt-3 md:mt-4">
              <div className="bg-white rounded-full h-2 overflow-hidden">
                <div 
                  className="cosmic-gradient h-2 transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center cosmic-text leading-tight">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-3 md:space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-3 md:p-4 text-left border-2 border-purple-100 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 text-sm md:text-base touch-manipulation"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindPathQuiz;

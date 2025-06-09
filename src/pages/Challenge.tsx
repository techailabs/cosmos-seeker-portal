
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Challenge = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [currentStep, setCurrentStep] = useState(0);

  const plans = [
    {
      id: 'basic',
      name: 'Essential Journey',
      price: '₹999',
      originalPrice: '₹1,499',
      features: [
        '7-Day Guided Program',
        'Daily Video Lessons',
        'Basic Meditation Practices',
        'Email Support',
        'Digital Workbook'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Complete Transformation',
      price: '₹1,999',
      originalPrice: '₹2,999',
      features: [
        '7-Day Guided Program',
        'Daily Video Lessons + Live Sessions',
        'Advanced Meditation Practices',
        'Personal Coach Support',
        'Digital + Physical Workbook',
        'Private WhatsApp Group',
        'Bonus: Chakra Healing Audio'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'VIP Experience',
      price: '₹3,999',
      originalPrice: '₹5,999',
      features: [
        '7-Day Guided Program',
        'Daily Video Lessons + Live Sessions',
        'Personalized Meditation Practices',
        '1-on-1 Coach Support',
        'Premium Physical Kit',
        'Exclusive VIP Group',
        'Bonus: Astrology Reading',
        'Bonus: Crystal Healing Set',
        '30-Day Extended Support'
      ],
      popular: false
    }
  ];

  const steps = [
    { title: "Intention Setting", icon: "🎯", description: "Set powerful intentions for transformation" },
    { title: "Mental Clearing", icon: "🧠", description: "Release limiting thoughts and beliefs" },
    { title: "Emotional Release", icon: "💧", description: "Let go of stored emotional blocks" },
    { title: "Energy Alignment", icon: "⚡", description: "Balance and align your chakras" },
    { title: "Soul Connection", icon: "🔮", description: "Deepen your spiritual awareness" },
    { title: "Inner Wisdom", icon: "📖", description: "Access your intuitive guidance" },
    { title: "Integration", icon: "✨", description: "Anchor your new state of being" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 aurora-gradient"></div>
        <div className="absolute inset-0 sacred-geometry opacity-25"></div>
        
        {/* Floating Transformation Elements */}
        <div className="absolute top-16 left-16 animate-float">
          <div className="text-6xl opacity-70 animate-pulse-soft text-glow-golden">🌅</div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="text-5xl opacity-80 animate-pulse-soft text-glow">🦋</div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '3s'}}>
          <div className="text-4xl opacity-90 animate-pulse-soft text-glow-golden">🌟</div>
        </div>
        <div className="absolute bottom-20 right-16 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-5xl opacity-75 animate-pulse-soft text-glow">🔥</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-6xl mx-auto">
            <div className="animate-scale-in mb-8">
              <span className="text-9xl animate-cosmic-rotate">🌅</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-playfair text-glow-golden animate-fade-in-up">
              7-Day Inner Cleanse
            </h1>
            <div className="text-3xl md:text-5xl font-bold mb-8 text-purple-200 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Transform Your Life Challenge
            </div>
            <p className="text-2xl md:text-3xl mb-12 text-purple-100 max-w-5xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Kickstart your spiritual transformation with our powerful 7-day journey. 
              Clear mental fog, release emotional blocks, and align with your highest self.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">👥</div>
                <div className="text-3xl font-bold mb-2 font-playfair">5,000+</div>
                <div className="text-purple-100">Lives Transformed</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">⭐</div>
                <div className="text-3xl font-bold mb-2 font-playfair">4.9/5</div>
                <div className="text-purple-100">Average Rating</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">🎯</div>
                <div className="text-3xl font-bold mb-2 font-playfair">97%</div>
                <div className="text-purple-100">Completion Rate</div>
              </div>
              <div className="glassmorphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">💫</div>
                <div className="text-3xl font-bold mb-2 font-playfair">92%</div>
                <div className="text-purple-100">Report Lasting Change</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Journey Steps */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 cosmic-text font-playfair">Your 7-Day Transformation Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each day brings new practices, deeper insights, and closer connection to your authentic self
            </p>
          </div>

          {/* Interactive Step Viewer */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Step Selector */}
              <div className="space-y-4 animate-fade-in-up">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      currentStep === index 
                        ? 'cosmic-gradient text-white shadow-2xl transform scale-105' 
                        : 'bg-white hover:bg-purple-50 shadow-lg'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`text-4xl ${currentStep === index ? 'animate-pulse-soft' : ''}`}>
                        {step.icon}
                      </div>
                      <div>
                        <div className={`text-sm font-semibold mb-1 ${currentStep === index ? 'text-purple-200' : 'text-purple-600'}`}>
                          Day {index + 1}
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${currentStep === index ? 'text-white' : 'cosmic-text'} font-playfair`}>
                          {step.title}
                        </h3>
                        <p className={`${currentStep === index ? 'text-purple-100' : 'text-gray-600'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Step Details */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-6 animate-cosmic-rotate">{steps[currentStep].icon}</div>
                  <h3 className="text-3xl font-bold cosmic-text mb-4 font-playfair">
                    Day {currentStep + 1}: {steps[currentStep].title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">What You'll Experience:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Guided meditation session (20-30 minutes)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Video lesson with practical techniques</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Journaling prompts for self-reflection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Daily affirmations and mantras</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Community support and sharing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h4 className="font-semibold mb-2 cosmic-text">Daily Focus:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {steps[currentStep].description}. This day is designed to help you break through 
                      barriers and connect with deeper aspects of your spiritual nature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
              >
                ← Previous Day
              </button>
              <button 
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className="px-6 py-3 cosmic-gradient text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                Next Day →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 mystical-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 text-glow-golden font-playfair">Choose Your Transformation Package</h2>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto">
              Select the level of support that resonates with your spiritual journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 cursor-pointer animate-fade-in-up ${
                  plan.popular 
                    ? 'bg-white text-gray-800 transform scale-105 shadow-2xl' 
                    : 'glassmorphism hover:bg-white/20'
                } ${selectedPlan === plan.id ? 'ring-4 ring-yellow-400' : ''}`}
                style={{animationDelay: `${index * 0.2}s`}}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="golden-gradient text-white px-6 py-2 rounded-full text-sm font-bold">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 font-playfair ${plan.popular ? 'cosmic-text' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-lg line-through opacity-60 ${plan.popular ? 'text-gray-500' : 'text-purple-200'}`}>
                      {plan.originalPrice}
                    </span>
                    <div className={`text-4xl font-bold ${plan.popular ? 'text-green-600' : 'text-white'}`}>
                      {plan.price}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className={`${plan.popular ? 'text-gray-700' : 'text-white'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'golden-gradient text-white hover:opacity-90' 
                      : selectedPlan === plan.id
                        ? 'bg-yellow-400 text-gray-800 hover:bg-yellow-300'
                        : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected ✓' : 'Choose This Plan'}
                </Button>
              </div>
            ))}
          </div>

          {/* Enrollment Form */}
          {selectedPlan && (
            <div className="max-w-2xl mx-auto mt-16 animate-fade-in-up">
              <div className="glassmorphism rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-8 text-center text-white font-playfair">
                  Complete Your Enrollment
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/90 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 font-medium mb-2">What's your biggest spiritual challenge?</label>
                    <textarea 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      rows={3}
                      placeholder="Tell us what you'd like to transform..."
                    />
                  </div>
                  
                  <Button className="w-full golden-gradient text-white hover:opacity-90 transition-opacity py-4 text-xl font-semibold">
                    Start My Transformation Journey • {plans.find(p => p.id === selectedPlan)?.price} ✨
                  </Button>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-white/80 text-sm">
                    💳 Secure payment • 💯 30-Day Money Back Guarantee • ⚡ Instant access
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 cosmic-text font-playfair">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations from people just like you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in-up">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">👩</div>
                <h3 className="font-bold cosmic-text">Priya S.</h3>
                <p className="text-gray-600">Software Engineer, Mumbai</p>
                <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "This 7-day challenge completely changed my perspective on life. I went from feeling 
                stuck and anxious to having clarity about my purpose. The meditations were so powerful!"
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">👨</div>
                <h3 className="font-bold cosmic-text">Rahul M.</h3>
                <p className="text-gray-600">Business Owner, Delhi</p>
                <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "I was skeptical at first, but the results speak for themselves. My stress levels dropped 
                dramatically, and I found inner peace I didn't know was possible. Worth every rupee!"
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">👩</div>
                <h3 className="font-bold cosmic-text">Anjali K.</h3>
                <p className="text-gray-600">Teacher, Bangalore</p>
                <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The emotional release I experienced during this challenge was incredible. I let go of 
                years of stored trauma and feel like a completely new person. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Challenge;

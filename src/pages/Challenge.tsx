
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Challenge = () => {
  return (
    <Layout>
      <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/20 animate-float"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-8 animate-pulse-soft">🌅</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              7-Day Inner Cleanse
              <span className="block text-3xl md:text-4xl mt-4 text-purple-200">
                Transform Your Life Challenge
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Kickstart your spiritual transformation with our powerful 7-day journey. 
              Clear mental fog, release emotional blocks, and align with your highest self.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 cosmic-text">Your 7-Day Journey</h2>
              <p className="text-xl text-gray-600">Each day brings new practices and deeper insights</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { day: 1, title: "Intention Setting", icon: "🎯", description: "Set powerful intentions for transformation" },
                { day: 2, title: "Mental Clearing", icon: "🧠", description: "Release limiting thoughts and beliefs" },
                { day: 3, title: "Emotional Release", icon: "💧", description: "Let go of stored emotional blocks" },
                { day: 4, title: "Energy Alignment", icon: "⚡", description: "Balance and align your chakras" },
                { day: 5, title: "Soul Connection", icon: "🔮", description: "Deepen your spiritual awareness" },
                { day: 6, title: "Inner Wisdom", icon: "📖", description: "Access your intuitive guidance" },
                { day: 7, title: "Integration", icon: "✨", description: "Anchor your new state of being" }
              ].map((day, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">{day.icon}</div>
                  <div className="text-sm font-semibold text-purple-600 mb-1">Day {day.day}</div>
                  <h3 className="text-lg font-bold cosmic-text mb-2">{day.title}</h3>
                  <p className="text-gray-600 text-sm">{day.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 cosmic-text">What's Included</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <h4 className="font-semibold mb-1">Daily Video Lessons</h4>
                      <p className="text-gray-600">10-15 minute guided sessions each day</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🧘</span>
                    <div>
                      <h4 className="font-semibold mb-1">Meditation Practices</h4>
                      <p className="text-gray-600">Specific meditations for each day's focus</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <h4 className="font-semibold mb-1">Journaling Prompts</h4>
                      <p className="text-gray-600">Deep reflection questions and exercises</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">👥</span>
                    <div>
                      <h4 className="font-semibold mb-1">Community Support</h4>
                      <p className="text-gray-600">Private group for sharing and encouragement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎁</span>
                    <div>
                      <h4 className="font-semibold mb-1">Bonus Resources</h4>
                      <p className="text-gray-600">Mantras, affirmations, and healing music</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 cosmic-text text-center">Join the Challenge</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">$47</div>
                  <div className="text-gray-600">Complete 7-Day Program</div>
                  <div className="text-sm text-green-600 font-semibold">30-Day Money Back Guarantee</div>
                </div>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <Button className="w-full golden-gradient text-white hover:opacity-90 transition-opacity text-lg py-4">
                    Start Your Transformation Today ✨
                  </Button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Join 5,000+ people who have already transformed their lives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Challenge;

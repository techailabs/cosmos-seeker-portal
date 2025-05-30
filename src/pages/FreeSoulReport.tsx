
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const FreeSoulReport = () => {
  return (
    <Layout>
      <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/20 animate-float"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-8 animate-pulse-soft">🌟</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Your Free Soul Report
              <span className="block text-3xl md:text-4xl mt-4 text-purple-200">
                Awaits Discovery
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Uncover the cosmic blueprint of your soul's journey. Get personalized insights into your 
              spiritual path, life purpose, and hidden potentials - completely free.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 cosmic-text">What's Included in Your Report</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🔮</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Soul Archetype Analysis</h3>
                      <p className="text-gray-600">Discover your core spiritual nature and cosmic personality type</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌙</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Life Purpose Insights</h3>
                      <p className="text-gray-600">Understand your soul's mission and how to align with it</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Spiritual Gifts & Talents</h3>
                      <p className="text-gray-600">Uncover your natural spiritual abilities and how to develop them</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🧘</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personalized Practices</h3>
                      <p className="text-gray-600">Custom meditation and spiritual practices for your journey</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 cosmic-text text-center">Get Your Free Report</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Question (Optional)</label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="What aspect of your spiritual journey would you like to explore?"
                    ></textarea>
                  </div>
                  <Button className="w-full golden-gradient text-white hover:opacity-90 transition-opacity text-lg py-4">
                    Generate My Free Soul Report ✨
                  </Button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Your information is completely secure and will never be shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeSoulReport;

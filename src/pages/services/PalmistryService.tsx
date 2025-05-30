
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PalmistryService = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">🤲</div>
              <h1 className="text-5xl font-bold mb-6 cosmic-text">Palmistry Reading</h1>
              <p className="text-xl text-gray-600">
                Decode your life map from your hands and unlock your destiny
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 cosmic-text">What Your Hands Reveal</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Life Line Reading</h3>
                      <p className="text-gray-600">Insights into your vitality, major life changes, and health patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Career Guidance</h3>
                      <p className="text-gray-600">Discover your natural talents and optimal career paths</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Relationship Patterns</h3>
                      <p className="text-gray-600">Understanding your love life and relationship compatibility</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Wealth & Success Indicators</h3>
                      <p className="text-gray-600">See potential for financial abundance and material success</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 cosmic-text">Session Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">60 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Format</span>
                    <span className="font-semibold">Video Call + Photos</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold text-purple-600">$99</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Includes</span>
                    <span className="font-semibold">Written Summary + Recording</span>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Link to="/book-session">
                    <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity">
                      Book Your Reading
                    </Button>
                  </Link>
                  <Link to="/free-soul-report">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Try Free Mini Reading First
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PalmistryService;

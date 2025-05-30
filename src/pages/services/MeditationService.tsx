
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MeditationService = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">🧘</div>
              <h1 className="text-5xl font-bold mb-6 cosmic-text">Meditation Guidance</h1>
              <p className="text-xl text-gray-600">
                Guided journeys into inner peace, daily presence, and soul strength
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 cosmic-text">Your Meditation Journey</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Practice</h3>
                      <p className="text-gray-600">Custom meditation techniques tailored to your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Guided Sessions</h3>
                      <p className="text-gray-600">Live guided meditations with experienced teachers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Mindfulness Training</h3>
                      <p className="text-gray-600">Learn to bring meditation into daily life</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Spiritual Growth</h3>
                      <p className="text-gray-600">Deepen your spiritual connection and awareness</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 cosmic-text">Session Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">45 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Format</span>
                    <span className="font-semibold">Live Guided Session</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold text-purple-600">$69</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Includes</span>
                    <span className="font-semibold">Practice Guide + Resources</span>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Link to="/book-session">
                    <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity">
                      Book Your Session
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

export default MeditationService;

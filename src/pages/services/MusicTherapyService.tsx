
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MusicTherapyService = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">🎵</div>
              <h1 className="text-5xl font-bold mb-6 cosmic-text">Music Therapy</h1>
              <p className="text-xl text-gray-600">
                Sacred soundscapes for emotional release and spiritual connection
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 cosmic-text">Healing Through Sound</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Healing Frequencies</h3>
                      <p className="text-gray-600">Experience sacred sound frequencies for deep healing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Emotional Release</h3>
                      <p className="text-gray-600">Release trapped emotions through vibrational therapy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Chakra Balancing</h3>
                      <p className="text-gray-600">Align and balance your energy centers with sound</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Stress Relief</h3>
                      <p className="text-gray-600">Deep relaxation and stress reduction through music</p>
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
                    <span className="font-semibold">Live Sound Session</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold text-purple-600">$89</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Includes</span>
                    <span className="font-semibold">Audio Recording + Playlist</span>
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

export default MusicTherapyService;

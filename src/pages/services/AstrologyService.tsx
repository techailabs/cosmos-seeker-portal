
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AstrologyService = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">⭐</div>
              <h1 className="text-5xl font-bold mb-6 cosmic-text">Astrology Reading</h1>
              <p className="text-xl text-gray-600">
                Deep birth chart dives + actionable cosmic guidance for your life path
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 cosmic-text">What You'll Discover</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Detailed Birth Chart Analysis</h3>
                      <p className="text-gray-600">Complete reading of your planetary positions and their influence on your life</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Yearly Predictions</h3>
                      <p className="text-gray-600">Insights into upcoming opportunities, challenges, and cosmic alignments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Relationship Compatibility</h3>
                      <p className="text-gray-600">Understanding your romantic and professional relationship patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                    <div>
                      <h3 className="font-semibold mb-1">Career & Life Purpose</h3>
                      <p className="text-gray-600">Discover your dharma and the path to your highest potential</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 cosmic-text">Session Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">90 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Format</span>
                    <span className="font-semibold">Video/Audio + Report</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold text-purple-600">$149</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Includes</span>
                    <span className="font-semibold">PDF Report + Recording</span>
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

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 cosmic-text text-center">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h4 className="font-semibold mb-2">Before Session</h4>
                  <p className="text-gray-600 text-sm">Provide birth details and questions. Receive preparation guide.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔮</div>
                  <h4 className="font-semibold mb-2">During Session</h4>
                  <p className="text-gray-600 text-sm">Deep chart analysis, Q&A, and personalized guidance.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h4 className="font-semibold mb-2">After Session</h4>
                  <p className="text-gray-600 text-sm">Receive detailed report, recording, and follow-up support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AstrologyService;

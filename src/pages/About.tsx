
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 cosmic-text">About Guruji Cosmos Trust</h1>
            <p className="text-xl text-gray-600 mb-12">
              Where Ancient Wisdom Meets the Next Generation of Seekers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 cosmic-text">Our Sacred Mission</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We don't just guide — we transform. Guruji Cosmos Trust is your sacred-tech fusion hub: 
                where spiritual depth meets modern-day healing. Whether you're lost in chaos or seeking 
                deeper truths, we channel time-tested practices into a future-ready path of clarity, 
                emotional mastery, and inner awakening.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our approach combines ancient wisdom traditions with cutting-edge healing techniques, 
                creating a personalized journey that honors both your spiritual heritage and your 
                contemporary lifestyle.
              </p>
              <Link to="/free-soul-report">
                <Button className="cosmic-gradient text-white hover:opacity-90 transition-opacity">
                  Start Your Transformation
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🔮</div>
                  <h3 className="text-2xl font-bold cosmic-text">Sacred-Tech Fusion</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⭐</span>
                    <span className="text-gray-700">Ancient wisdom traditions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧠</span>
                    <span className="text-gray-700">Modern healing techniques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌟</span>
                    <span className="text-gray-700">Personalized guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💫</span>
                    <span className="text-gray-700">Transformative results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 cosmic-text">Our Core Values</h2>
            <p className="text-xl text-gray-600">Guiding principles that shape every interaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🧘</div>
              <h3 className="text-xl font-bold mb-3 cosmic-text">Authentic Guidance</h3>
              <p className="text-gray-600">We provide genuine, heart-centered wisdom rooted in ancient traditions</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌙</div>
              <h3 className="text-xl font-bold mb-3 cosmic-text">Sacred Space</h3>
              <p className="text-gray-600">Every session is held in complete confidentiality and spiritual safety</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 cosmic-text">Lasting Transformation</h3>
              <p className="text-gray-600">Our goal is not temporary relief but profound, lasting positive change</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

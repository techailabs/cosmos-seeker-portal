
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BookSession = () => {
  const services = [
    {
      icon: "⭐",
      title: "Astrology Reading",
      duration: "90 minutes",
      price: "$149",
      description: "Deep birth chart analysis with life guidance"
    },
    {
      icon: "🤲",
      title: "Palmistry Session", 
      duration: "60 minutes",
      price: "$99",
      description: "Life map reading from your hands"
    },
    {
      icon: "🧠",
      title: "Mind Reading",
      duration: "75 minutes",
      price: "$129",
      description: "Unlock subconscious blocks and patterns"
    },
    {
      icon: "👤",
      title: "Face Reading",
      duration: "60 minutes",
      price: "$109",
      description: "Character traits and karmic insights"
    },
    {
      icon: "💫",
      title: "Hypnotherapy",
      duration: "90 minutes",
      price: "$179",
      description: "Heal trauma and reprogram limiting beliefs"
    },
    {
      icon: "🎵",
      title: "Music Therapy",
      duration: "60 minutes",
      price: "$89",
      description: "Sacred soundscapes for healing"
    },
    {
      icon: "🧘",
      title: "Meditation Guidance",
      duration: "45 minutes",
      price: "$69",
      description: "Personalized meditation practice"
    }
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 cosmic-text">Book Your Session</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your transformative journey. Each session is personalized to your unique needs and spiritual path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold cosmic-text mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-bold text-purple-600 text-lg">{service.price}</span>
                  </div>
                </div>
                
                <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity">
                  Select This Service
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 cosmic-text text-center">Not Sure Which Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🔮</div>
                <h3 className="text-xl font-semibold mb-3">Take Our Spiritual Assessment</h3>
                <p className="text-gray-600 mb-4">Answer a few questions to discover which service aligns best with your current spiritual needs.</p>
                <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  Start Assessment
                </Button>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-3">Speak with a Guide</h3>
                <p className="text-gray-600 mb-4">Have a free 15-minute consultation to discuss your journey and find the perfect starting point.</p>
                <Link to="/contact">
                  <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookSession;

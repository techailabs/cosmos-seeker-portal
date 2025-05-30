
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Practitioners = () => {
  const practitioners = [
    {
      name: "Guruji Ananda",
      specialties: ["Astrology", "Vedic Wisdom", "Life Path Guidance"],
      experience: "25+ years",
      image: "🧙‍♂️",
      description: "Master astrologer with deep knowledge of Vedic traditions and cosmic wisdom."
    },
    {
      name: "Master Priya",
      specialties: ["Palmistry", "Face Reading", "Karmic Insights"],
      experience: "18+ years",
      image: "🔮",
      description: "Expert in reading life patterns through palmistry and facial analysis."
    },
    {
      name: "Dr. Raj Meditation",
      specialties: ["Hypnotherapy", "Trauma Healing", "Mind Mastery"],
      experience: "15+ years",
      image: "🧠",
      description: "Licensed therapist specializing in subconscious healing and pattern breaking."
    },
    {
      name: "Sage Melody",
      specialties: ["Music Therapy", "Sound Healing", "Chakra Balancing"],
      experience: "12+ years",
      image: "🎵",
      description: "Sound healer using sacred frequencies for emotional release and spiritual connection."
    }
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 cosmic-text">Meet Our Spiritual Guides</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our carefully selected practitioners combine ancient wisdom with modern healing techniques 
              to guide you on your transformational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {practitioners.map((practitioner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{practitioner.image}</div>
                  <h3 className="text-2xl font-bold cosmic-text mb-2">{practitioner.name}</h3>
                  <p className="text-purple-600 font-semibold">{practitioner.experience} of experience</p>
                </div>
                
                <p className="text-gray-600 mb-6 text-center">{practitioner.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-center">Specialties:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {practitioner.specialties.map((specialty, specIndex) => (
                      <span 
                        key={specIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <Link to="/book-session">
                    <Button className="cosmic-gradient text-white hover:opacity-90 transition-opacity">
                      Book Session
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Practitioners;

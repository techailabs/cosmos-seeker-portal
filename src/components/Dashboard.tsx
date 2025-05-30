
const Dashboard = () => {
  const features = [
    {
      icon: "🗺️",
      title: "Personal Spiritual Roadmap",
      description: "Your evolving journey tracker with milestones and insights"
    },
    {
      icon: "📅",
      title: "Cosmic Calendar", 
      description: "Personalized good-bad day alerts and ritual windows"
    },
    {
      icon: "📚",
      title: "My Readings Archive",
      description: "Video/audio/text of all sessions plus notes and remedies"
    },
    {
      icon: "🌅",
      title: "Daily Healing Room",
      description: "Morning mantras, evening meditations, weekly chants"
    },
    {
      icon: "📊",
      title: "Progress Tracker",
      description: "Check-ins for stress levels, clarity, and energy"
    },
    {
      icon: "💬",
      title: "1-Click Guru Chat",
      description: "Follow-up questions and minor clarifications"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="cosmic-text">Your Seeker Portal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transformative, intimate dashboard designed for lifelong spiritual growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center mr-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Welcome back, Seeker</h3>
                  <p className="text-purple-200">Your spiritual journey continues...</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Weekly Progress</span>
                    <span className="text-yellow-400">⭐ 85%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2">
                    <div className="golden-gradient h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🧘</div>
                    <div className="text-xs">7-day streak</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🌙</div>
                    <div className="text-xs">Full Moon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-purple-50 transition-colors duration-300"
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 cosmic-text">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

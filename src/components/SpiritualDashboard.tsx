
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, Star, TrendingUp, Award, Heart, Zap } from 'lucide-react';

const SpiritualDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const spiritualMetrics = {
    soulAlignment: 78,
    karmaClearing: 45,
    energyLevel: 89,
    manifestationPower: 62,
    innerPeace: 71,
    spiritualGrowth: 84
  };

  const achievements = [
    { icon: "🎯", title: "Purpose Clarity", description: "Discovered life mission", date: "3 days ago" },
    { icon: "💎", title: "Chakra Master", description: "Balanced all 7 chakras", date: "1 week ago" },
    { icon: "🌙", title: "Moon Mystic", description: "Attended 5 moon ceremonies", date: "2 weeks ago" },
    { icon: "⚡", title: "Energy Healer", description: "Completed energy healing course", date: "1 month ago" }
  ];

  const upcomingSessions = [
    { service: "Astrology Reading", date: "Dec 12", time: "2:00 PM", practitioner: "Luna StarWeaver" },
    { service: "Crystal Healing", date: "Dec 15", time: "4:30 PM", practitioner: "Crystal Sage" },
    { service: "Group Meditation", date: "Dec 17", time: "7:00 PM", practitioner: "Master Om" }
  ];

  const cosmicInsight = {
    message: "Your Jupiter return is approaching, bringing expansion and wisdom to your spiritual path. This is a powerful time for manifestation and higher learning.",
    action: "Focus on setting intentions for spiritual growth and consider starting a new wisdom practice."
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">
            Your Spiritual Journey Dashboard
          </h2>
          <p className="text-xl text-gray-300">
            Track your soul's evolution and cosmic alignment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Spiritual Metrics */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Soul Metrics</h3>
                <div className="flex space-x-2">
                  {['week', 'month', 'year'].map((period) => (
                    <Button
                      key={period}
                      variant={selectedPeriod === period ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedPeriod(period)}
                      className={selectedPeriod === period ? "cosmic-gradient text-white" : "text-gray-300"}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(spiritualMetrics).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-bold text-white">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Cosmic Insight */}
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Today's Cosmic Insight</h3>
              </div>
              <p className="text-gray-200 mb-4">{cosmicInsight.message}</p>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm text-purple-200">
                  <strong>Recommended Action:</strong> {cosmicInsight.action}
                </p>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Recent Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{achievement.title}</h4>
                      <p className="text-sm text-gray-300">{achievement.description}</p>
                    </div>
                    <span className="text-xs text-purple-300">{achievement.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-bold text-white">Upcoming Sessions</h3>
              </div>
              <div className="space-y-3">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg">
                    <h4 className="font-medium text-white text-sm">{session.service}</h4>
                    <p className="text-xs text-gray-300">{session.date} at {session.time}</p>
                    <p className="text-xs text-purple-300">with {session.practitioner}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 cosmic-gradient text-white hover:opacity-90 text-sm">
                Book New Session
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4">This Month</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Sessions Completed</span>
                  <span className="text-lg font-bold text-white">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Meditation Minutes</span>
                  <span className="text-lg font-bold text-white">420</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Insights Gained</span>
                  <span className="text-lg font-bold text-white">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Energy Level</span>
                  <span className="text-lg font-bold text-green-400">High</span>
                </div>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-gradient-to-r from-red-900/40 to-pink-900/40 backdrop-blur-md rounded-xl p-6 border border-red-300/20">
              <div className="flex items-center mb-3">
                <Heart className="w-5 h-5 text-red-400 mr-2" />
                <h3 className="text-lg font-bold text-white">Need Support?</h3>
              </div>
              <p className="text-sm text-gray-200 mb-4">
                Experiencing a spiritual crisis or need immediate guidance?
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm">
                Emergency Spiritual Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualDashboard;

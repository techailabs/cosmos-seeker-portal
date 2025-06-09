
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, FileText, Users, Star, BookOpen, CreditCard, TrendingUp, Award, Clock, Zap } from 'lucide-react';

const Dashboard = () => {
  const [user] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    joinDate: '2024-01-15',
    karmaPoints: 150,
    upcomingSessions: 2,
    totalSessions: 8,
    level: 'Awakened Seeker',
    meditationStreak: 7,
    energyLevel: 85
  });

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Astrology Reading',
      practitioner: 'Guruji Ananda',
      avatar: '🧙‍♂️',
      date: '2024-06-02',
      time: '2:00 PM',
      type: 'Video Call',
      status: 'confirmed'
    },
    {
      id: 2,
      service: 'Meditation Session',
      practitioner: 'Master Priya',
      avatar: '🧘‍♀️',
      date: '2024-06-05',
      time: '6:00 PM',
      type: 'Group Session',
      status: 'pending'
    }
  ];

  const recentReports = [
    {
      id: 1,
      title: 'Birth Chart Analysis',
      date: '2024-05-20',
      type: 'Astrology',
      icon: '⭐',
      size: '2.4 MB',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Palm Reading Report',
      date: '2024-05-15',
      type: 'Palmistry',
      icon: '🤲',
      size: '1.8 MB',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Chakra Alignment Guide',
      date: '2024-05-10',
      type: 'Energy Healing',
      icon: '🌈',
      size: '3.2 MB',
      downloadUrl: '#'
    }
  ];

  const achievements = [
    { name: 'First Session Complete', icon: '🎯', earned: true },
    { name: 'Meditation Master', icon: '🧘', earned: true },
    { name: 'Karma Collector', icon: '⭐', earned: true },
    { name: 'Spiritual Scholar', icon: '📚', earned: false },
    { name: 'Enlightened Being', icon: '✨', earned: false },
  ];

  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 sacred-geometry opacity-10"></div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Welcome Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full sacred-gradient flex items-center justify-center text-2xl animate-pulse-soft">
                🔮
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold font-playfair cosmic-text">
                  Welcome back, {user.name}! 
                </h1>
                <p className="text-gray-600 font-inter">
                  Your spiritual journey continues... Level: <span className="sacred-text font-semibold">{user.level}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glassmorphism rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 animate-pulse-soft">⭐</div>
              <div className="text-3xl font-bold cosmic-text font-playfair">{user.karmaPoints}</div>
              <div className="text-gray-600 font-inter">Karma Points</div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div className="cosmic-gradient h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 animate-pulse-soft">📅</div>
              <div className="text-3xl font-bold divine-text font-playfair">{user.upcomingSessions}</div>
              <div className="text-gray-600 font-inter">Upcoming Sessions</div>
              <div className="mt-2 text-sm text-green-600 font-medium">Next: Tomorrow 2:00 PM</div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 animate-pulse-soft">🧘</div>
              <div className="text-3xl font-bold sacred-text font-playfair">{user.meditationStreak}</div>
              <div className="text-gray-600 font-inter">Day Streak</div>
              <div className="mt-2 text-sm text-orange-600 font-medium">Keep it up! 🔥</div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 animate-pulse-soft">⚡</div>
              <div className="text-3xl font-bold cosmic-text font-playfair">{user.energyLevel}%</div>
              <div className="text-gray-600 font-inter">Energy Level</div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div className="sacred-gradient h-2 rounded-full" style={{width: `${user.energyLevel}%`}}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Appointments */}
            <div className="lg:col-span-2">
              <Card className="glassmorphism border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold cosmic-text font-playfair flex items-center">
                    <Calendar className="mr-3" size={28} />
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAppointments.map(appointment => (
                      <div key={appointment.id} className="glassmorphism-dark rounded-xl p-6 hover:scale-102 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">{appointment.avatar}</div>
                            <div>
                              <h3 className="font-semibold text-lg font-playfair">{appointment.service}</h3>
                              <p className="text-gray-600 font-inter">with {appointment.practitioner}</p>
                            </div>
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                            appointment.status === 'confirmed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 font-inter">
                            {appointment.date} at {appointment.time}
                          </span>
                          <Button size="sm" className="sacred-gradient text-white glow">
                            <Zap className="mr-2" size={14} />
                            Join Session
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6 border-2 border-purple-200 text-purple-600 hover:bg-purple-50" variant="outline">
                    <Calendar className="mr-2" size={16} />
                    View All Appointments
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="glassmorphism border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold cosmic-text font-playfair">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full sacred-gradient text-white glow" size="sm">
                      <BookOpen className="mr-2" size={16} />
                      Book New Session
                    </Button>
                    <Button className="w-full border-purple-200 text-purple-600 hover:bg-purple-50" variant="outline" size="sm">
                      <FileText className="mr-2" size={16} />
                      View Reports
                    </Button>
                    <Button className="w-full border-purple-200 text-purple-600 hover:bg-purple-50" variant="outline" size="sm">
                      <Users className="mr-2" size={16} />
                      Join Community
                    </Button>
                    <Button className="w-full border-purple-200 text-purple-600 hover:bg-purple-50" variant="outline" size="sm">
                      <CreditCard className="mr-2" size={16} />
                      Manage Wallet
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="glassmorphism border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold cosmic-text font-playfair flex items-center">
                    <Award className="mr-2" size={20} />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        achievement.earned 
                          ? 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200' 
                          : 'bg-gray-50 opacity-60'
                      }`}>
                        <span className="text-2xl">{achievement.icon}</span>
                        <span className={`font-inter text-sm ${
                          achievement.earned ? 'text-gray-800 font-medium' : 'text-gray-500'
                        }`}>
                          {achievement.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="glassmorphism border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold cosmic-text font-playfair">Recent Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentReports.map(report => (
                      <div key={report.id} className="glassmorphism-dark rounded-lg p-4 hover:scale-102 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xl">{report.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-medium font-inter text-sm">{report.title}</h4>
                            <p className="text-xs text-gray-500">{report.date} • {report.size}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full text-xs border-purple-200 text-purple-600 hover:bg-purple-50">
                          <FileText className="mr-1" size={12} />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;

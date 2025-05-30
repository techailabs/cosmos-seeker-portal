
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, Users, Star, BookOpen, CreditCard } from 'lucide-react';

const Dashboard = () => {
  const [user] = useState({
    name: 'Sarah Johnson',
    joinDate: '2024-01-15',
    karmaPoints: 150,
    upcomingSessions: 2,
    totalSessions: 8
  });

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Astrology Reading',
      practitioner: 'Guruji Ananda',
      date: '2024-06-02',
      time: '2:00 PM',
      type: 'Video Call'
    },
    {
      id: 2,
      service: 'Meditation Session',
      practitioner: 'Master Priya',
      date: '2024-06-05',
      time: '6:00 PM',
      type: 'Group Session'
    }
  ];

  const recentReports = [
    {
      id: 1,
      title: 'Birth Chart Analysis',
      date: '2024-05-20',
      type: 'Astrology',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Palm Reading Report',
      date: '2024-05-15',
      type: 'Palmistry',
      downloadUrl: '#'
    }
  ];

  return (
    <Layout>
      <section className="py-8 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold cosmic-text mb-2">Welcome back, {user.name}! 🌟</h1>
            <p className="text-gray-600">Your spiritual journey continues...</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold cosmic-text">{user.karmaPoints}</div>
              <div className="text-gray-600">Karma Points</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-2xl font-bold cosmic-text">{user.upcomingSessions}</div>
              <div className="text-gray-600">Upcoming Sessions</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">🧘</div>
              <div className="text-2xl font-bold cosmic-text">{user.totalSessions}</div>
              <div className="text-gray-600">Total Sessions</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">💝</div>
              <div className="text-2xl font-bold cosmic-text">5</div>
              <div className="text-gray-600">Reports Available</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Appointments */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold cosmic-text mb-4 flex items-center">
                <Calendar className="mr-2" size={24} />
                Upcoming Appointments
              </h2>
              <div className="space-y-4">
                {upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="border border-purple-100 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{appointment.service}</h3>
                      <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        {appointment.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">with {appointment.practitioner}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {appointment.date} at {appointment.time}
                      </span>
                      <Button size="sm" className="cosmic-gradient text-white">
                        Join Session
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 border-purple-200 text-purple-600" variant="outline">
                View All Appointments
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold cosmic-text mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full cosmic-gradient text-white" size="sm">
                    <BookOpen className="mr-2" size={16} />
                    Book New Session
                  </Button>
                  <Button className="w-full border-purple-200 text-purple-600" variant="outline" size="sm">
                    <FileText className="mr-2" size={16} />
                    View Reports
                  </Button>
                  <Button className="w-full border-purple-200 text-purple-600" variant="outline" size="sm">
                    <Users className="mr-2" size={16} />
                    Join Community
                  </Button>
                  <Button className="w-full border-purple-200 text-purple-600" variant="outline" size="sm">
                    <CreditCard className="mr-2" size={16} />
                    Manage Wallet
                  </Button>
                </div>
              </div>

              {/* Recent Reports */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold cosmic-text mb-4">Recent Reports</h3>
                <div className="space-y-3">
                  {recentReports.map(report => (
                    <div key={report.id} className="border border-gray-200 rounded-lg p-3">
                      <h4 className="font-medium">{report.title}</h4>
                      <p className="text-sm text-gray-500">{report.date}</p>
                      <Button size="sm" variant="outline" className="mt-2 text-xs">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;

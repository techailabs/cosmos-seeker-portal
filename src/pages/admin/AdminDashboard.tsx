
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Calendar, DollarSign, Star, TrendingUp, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  const [stats] = useState({
    totalUsers: 2847,
    activeBookings: 156,
    monthlyRevenue: 45890,
    averageRating: 4.8,
    newUsersThisWeek: 89,
    completedSessions: 1234
  });

  const revenueData = [
    { month: 'Jan', revenue: 35000 },
    { month: 'Feb', revenue: 42000 },
    { month: 'Mar', revenue: 38000 },
    { month: 'Apr', revenue: 51000 },
    { month: 'May', revenue: 45890 },
  ];

  const serviceData = [
    { name: 'Astrology', value: 35, color: '#8B5CF6' },
    { name: 'Meditation', value: 25, color: '#06B6D4' },
    { name: 'Palmistry', value: 20, color: '#F59E0B' },
    { name: 'Hypnotherapy', value: 20, color: '#EF4444' },
  ];

  const recentAlerts = [
    { id: 1, type: 'warning', message: 'Low practitioner availability for weekend slots', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'New user registration spike detected', time: '4 hours ago' },
    { id: 3, type: 'success', message: 'Monthly revenue target achieved', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold cosmic-text">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, Admin</span>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm">
              A
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Users</p>
                <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                <p className="text-green-600 text-sm">+{stats.newUsersThisWeek} this week</p>
              </div>
              <Users className="text-purple-600" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Bookings</p>
                <p className="text-2xl font-bold">{stats.activeBookings}</p>
                <p className="text-blue-600 text-sm">12% increase</p>
              </div>
              <Calendar className="text-blue-600" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Monthly Revenue</p>
                <p className="text-2xl font-bold">${stats.monthlyRevenue.toLocaleString()}</p>
                <p className="text-green-600 text-sm">+8.2% from last month</p>
              </div>
              <DollarSign className="text-green-600" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Average Rating</p>
                <p className="text-2xl font-bold">{stats.averageRating}</p>
                <p className="text-yellow-600 text-sm">Excellent service</p>
              </div>
              <Star className="text-yellow-600" size={32} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <TrendingUp className="mr-2" size={20} />
              Revenue Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="revenue" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Service Distribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Service Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <AlertCircle className="mr-2" size={20} />
            Recent Alerts
          </h3>
          <div className="space-y-3">
            {recentAlerts.map(alert => (
              <div key={alert.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    alert.type === 'warning' ? 'bg-yellow-500' :
                    alert.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
                  }`}></div>
                  <span>{alert.message}</span>
                </div>
                <span className="text-sm text-gray-500">{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

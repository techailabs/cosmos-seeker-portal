
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';
import { Users, Calendar, DollarSign, Star, TrendingUp, AlertCircle, Settings, BookOpen, UserCheck, CreditCard, MessageSquare, FileText, Activity, Eye, Search, Filter, Plus, Edit, Trash2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats] = useState({
    totalUsers: 2847,
    activeBookings: 156,
    monthlyRevenue: 458900, // in INR
    averageRating: 4.8,
    newUsersThisWeek: 89,
    completedSessions: 1234,
    pendingPayments: 12,
    activeSubscriptions: 892
  });

  // Enhanced Revenue Data with INR
  const revenueData = [
    { month: 'Jan', revenue: 350000, sessions: 245 },
    { month: 'Feb', revenue: 420000, sessions: 298 },
    { month: 'Mar', revenue: 380000, sessions: 267 },
    { month: 'Apr', revenue: 510000, sessions: 356 },
    { month: 'May', revenue: 458900, sessions: 324 },
    { month: 'Jun', revenue: 495000, sessions: 342 }
  ];

  const serviceDistribution = [
    { name: 'Astrology Reading', value: 35, revenue: 160000, color: '#8B5CF6' },
    { name: 'Palmistry', value: 25, revenue: 115000, color: '#06B6D4' },
    { name: 'Meditation', value: 20, revenue: 90000, color: '#F59E0B' },
    { name: 'Hypnotherapy', value: 12, revenue: 55000, color: '#EF4444' },
    { name: 'Face Reading', value: 8, revenue: 38900, color: '#10B981' }
  ];

  const userGrowthData = [
    { month: 'Jan', users: 2100, active: 1890 },
    { month: 'Feb', users: 2250, active: 2025 },
    { month: 'Mar', users: 2400, active: 2160 },
    { month: 'Apr', users: 2620, active: 2358 },
    { month: 'May', users: 2758, active: 2482 },
    { month: 'Jun', users: 2847, active: 2562 }
  ];

  // Sample Users Data (50 dummy users)
  const usersData = [
    { id: 1, name: 'Priya Sharma', email: 'priya.sharma@email.com', joinDate: '2024-01-15', sessions: 12, revenue: 8400, status: 'Premium', lastActive: '2 hours ago' },
    { id: 2, name: 'Raj Patel', email: 'raj.patel@email.com', joinDate: '2024-02-20', sessions: 8, revenue: 5600, status: 'Basic', lastActive: '1 day ago' },
    { id: 3, name: 'Anita Singh', email: 'anita.singh@email.com', joinDate: '2024-01-10', sessions: 15, revenue: 10500, status: 'Premium', lastActive: '3 hours ago' },
    { id: 4, name: 'Vikram Gupta', email: 'vikram.gupta@email.com', joinDate: '2024-03-05', sessions: 6, revenue: 4200, status: 'Basic', lastActive: '5 hours ago' },
    { id: 5, name: 'Deepika Jain', email: 'deepika.jain@email.com', joinDate: '2024-02-28', sessions: 10, revenue: 7000, status: 'Premium', lastActive: '1 hour ago' }
  ];

  // Sample Sessions Data
  const sessionsData = [
    { id: 1, user: 'Priya Sharma', service: 'Astrology Reading', practitioner: 'Guruji Ananda', date: '2024-06-10', time: '10:00 AM', amount: 1500, status: 'Completed' },
    { id: 2, user: 'Raj Patel', service: 'Palmistry', practitioner: 'Master Priya', date: '2024-06-11', time: '2:00 PM', amount: 1200, status: 'Scheduled' },
    { id: 3, user: 'Anita Singh', service: 'Meditation', practitioner: 'Guru Ravi', date: '2024-06-12', time: '6:00 PM', amount: 800, status: 'In Progress' },
    { id: 4, user: 'Vikram Gupta', service: 'Face Reading', practitioner: 'Master Kavya', date: '2024-06-13', time: '11:00 AM', amount: 1000, status: 'Pending' },
    { id: 5, user: 'Deepika Jain', service: 'Hypnotherapy', practitioner: 'Dr. Ashok', date: '2024-06-14', time: '4:00 PM', amount: 2000, status: 'Cancelled' }
  ];

  const recentAlerts = [
    { id: 1, type: 'warning', message: 'Low practitioner availability for weekend slots', time: '2 hours ago', severity: 'medium' },
    { id: 2, type: 'info', message: 'New user registration spike detected (+25% this week)', time: '4 hours ago', severity: 'low' },
    { id: 3, type: 'success', message: 'Monthly revenue target achieved (₹4,58,900)', time: '1 day ago', severity: 'low' },
    { id: 4, type: 'error', message: 'Payment gateway issue reported by 3 users', time: '6 hours ago', severity: 'high' },
    { id: 5, type: 'warning', message: 'Server load above 80% during peak hours', time: '8 hours ago', severity: 'medium' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* Enhanced Admin Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-xl border-b border-purple-100 px-6 py-4 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-3xl animate-pulse-soft">👑</div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-playfair">
                Admin Command Center
              </h1>
              <p className="text-gray-600 font-inter">Guruji Cosmos Trust - Spiritual Management Portal</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <Download className="mr-2" size={16} />
              Export Data
            </Button>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">Super Admin</span>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                SA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6 bg-white/80 backdrop-blur-md">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Activity size={16} />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Users size={16} />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="sessions" className="flex items-center space-x-2">
              <Calendar size={16} />
              <span className="hidden sm:inline">Sessions</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp size={16} />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center space-x-2">
              <FileText size={16} />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings size={16} />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Total Users</p>
                      <p className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                      <p className="text-purple-200 text-sm">+{stats.newUsersThisWeek} this week</p>
                    </div>
                    <Users className="text-purple-200" size={40} />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Active Bookings</p>
                      <p className="text-3xl font-bold">{stats.activeBookings}</p>
                      <p className="text-blue-200 text-sm">12% increase</p>
                    </div>
                    <Calendar className="text-blue-200" size={40} />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Monthly Revenue</p>
                      <p className="text-3xl font-bold">₹{stats.monthlyRevenue.toLocaleString()}</p>
                      <p className="text-green-200 text-sm">+8.2% from last month</p>
                    </div>
                    <DollarSign className="text-green-200" size={40} />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">Average Rating</p>
                      <p className="text-3xl font-bold">{stats.averageRating}</p>
                      <p className="text-yellow-200 text-sm">Excellent service</p>
                    </div>
                    <Star className="text-yellow-200" size={40} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Revenue & Sessions Chart */}
              <div className="lg:col-span-2">
                <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
                      <TrendingUp className="mr-3 text-purple-600" size={24} />
                      Revenue & Sessions Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <AreaChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                        <XAxis dataKey="month" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip 
                          formatter={(value, name) => [
                            name === 'revenue' ? `₹${value.toLocaleString()}` : value,
                            name === 'revenue' ? 'Revenue' : 'Sessions'
                          ]} 
                          contentStyle={{ background: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
                        />
                        <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" fill="url(#colorRevenue)" strokeWidth={3} />
                        <Area type="monotone" dataKey="sessions" stroke="#06B6D4" fill="url(#colorSessions)" strokeWidth={3} />
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Service Distribution */}
              <div>
                <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Service Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={serviceDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name} ${value}%`}
                          labelLine={false}
                        >
                          {serviceDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value, name) => [`${value}%`, 'Share']} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 space-y-2">
                      {serviceDistribution.map((service, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: service.color }}></div>
                            <span>{service.name}</span>
                          </div>
                          <span className="font-semibold">₹{service.revenue.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Alerts */}
            <Card className="mt-8 bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
                  <AlertCircle className="mr-3 text-purple-600" size={20} />
                  System Alerts & Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAlerts.map(alert => (
                    <div key={alert.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full mr-4 ${
                          alert.type === 'warning' ? 'bg-yellow-500' :
                          alert.type === 'info' ? 'bg-blue-500' : 
                          alert.type === 'error' ? 'bg-red-500' : 'bg-green-500'
                        }`}></div>
                        <div>
                          <span className="font-medium">{alert.message}</span>
                          <div className="text-sm text-gray-500 mt-1">
                            {alert.time} • Priority: {alert.severity}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Eye size={14} className="mr-1" />
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Management Tab */}
          <TabsContent value="users">
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    User Management
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Search className="mr-2" size={16} />
                      Search
                    </Button>
                    <Button size="sm" variant="outline">
                      <Filter className="mr-2" size={16} />
                      Filter
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                      <Plus className="mr-2" size={16} />
                      Add User
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Sessions</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData.map(user => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <div className="font-semibold">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{user.sessions}</TableCell>
                        <TableCell>₹{user.revenue.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Premium' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {user.status}
                          </span>
                        </TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye size={14} />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit size={14} />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sessions Management Tab */}
          <TabsContent value="sessions">
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Session Management
                  </CardTitle>
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <Plus className="mr-2" size={16} />
                    Schedule Session
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Practitioner</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sessionsData.map(session => (
                      <TableRow key={session.id}>
                        <TableCell className="font-semibold">{session.user}</TableCell>
                        <TableCell>{session.service}</TableCell>
                        <TableCell>{session.practitioner}</TableCell>
                        <TableCell>
                          <div>
                            <div>{session.date}</div>
                            <div className="text-sm text-gray-500">{session.time}</div>
                          </div>
                        </TableCell>
                        <TableCell>₹{session.amount.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            session.status === 'Completed' ? 'bg-green-100 text-green-700' :
                            session.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                            session.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                            session.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {session.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye size={14} />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit size={14} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    User Growth Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="users" stroke="#8B5CF6" strokeWidth={3} />
                      <Line type="monotone" dataKey="active" stroke="#06B6D4" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Revenue Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                      <Bar dataKey="revenue" fill="url(#gradient)" />
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={1}/>
                          <stop offset="95%" stopColor="#06B6D4" stopOpacity={1}/>
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Management Tab */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Services Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Manage all spiritual services, pricing, and availability.</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    Manage Services
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Practitioners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Add, edit, and manage spiritual practitioners and their schedules.</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    Manage Practitioners
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Content Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Upload and manage meditation guides, spiritual content, and resources.</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    Manage Content
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">System Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Payment Gateway</h4>
                    <p className="text-gray-600 text-sm mb-2">Configure Razorpay and other payment methods</p>
                    <Button variant="outline">Configure Payments</Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email Templates</h4>
                    <p className="text-gray-600 text-sm mb-2">Customize automated email notifications</p>
                    <Button variant="outline">Edit Templates</Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">API Settings</h4>
                    <p className="text-gray-600 text-sm mb-2">Manage third-party integrations</p>
                    <Button variant="outline">API Management</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Security & Backup</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Database Backup</h4>
                    <p className="text-gray-600 text-sm mb-2">Last backup: Today at 3:00 AM</p>
                    <Button variant="outline">Backup Now</Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Security Logs</h4>
                    <p className="text-gray-600 text-sm mb-2">Monitor system access and security events</p>
                    <Button variant="outline">View Logs</Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Admin Users</h4>
                    <p className="text-gray-600 text-sm mb-2">Manage admin access and permissions</p>
                    <Button variant="outline">Manage Admins</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

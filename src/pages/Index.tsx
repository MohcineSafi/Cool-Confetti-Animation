
import React, { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, DollarSign, UserCheck, AlertCircle, Zap, ChevronUp } from "lucide-react";

const Index = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  }, []);

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 45000, users: 1200 },
    { month: 'Feb', revenue: 52000, users: 1350 },
    { month: 'Mar', revenue: 48000, users: 1280 },
    { month: 'Apr', revenue: 61000, users: 1520 },
    { month: 'May', revenue: 55000, users: 1450 },
    { month: 'Jun', revenue: 67000, users: 1680 },
  ];

  const userActivityData = [
    { day: 'Mon', active: 850, inactive: 200 },
    { day: 'Tue', active: 920, inactive: 180 },
    { day: 'Wed', active: 780, inactive: 220 },
    { day: 'Thu', active: 1100, inactive: 150 },
    { day: 'Fri', active: 980, inactive: 170 },
    { day: 'Sat', active: 650, inactive: 300 },
    { day: 'Sun', active: 720, inactive: 280 },
  ];

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"],
      },
      links: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.7,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: ["circle", "triangle", "square"],
      },
      size: {
        value: { min: 1, max: 8 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
        },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      
      {/* Main Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SaaS Dashboard
              </h1>
              <p className="text-gray-600 mt-2">Monitor your business metrics in real-time</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="backdrop-blur-sm bg-white/50">
                Export Report
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Zap className="w-4 h-4 mr-2" />
                Upgrade Plan
              </Button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                  Monthly Recurring Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$67,000</div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <ChevronUp className="w-3 h-3 mr-1" />
                    +12.5%
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-500" />
                  Active Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">1,680</div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    <ChevronUp className="w-3 h-3 mr-1" />
                    +8.2%
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <UserCheck className="w-4 h-4 mr-2 text-purple-500" />
                  Conversion Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">3.2%</div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    <ChevronUp className="w-3 h-3 mr-1" />
                    +0.3%
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
                  Churn Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">2.1%</div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    -0.5%
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">vs last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Revenue Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                        border: 'none', 
                        borderRadius: '8px',
                        backdropFilter: 'blur(8px)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorRevenue)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-500" />
                  User Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                        border: 'none', 
                        borderRadius: '8px',
                        backdropFilter: 'blur(8px)'
                      }} 
                    />
                    <Bar dataKey="active" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="inactive" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { user: "John Doe", action: "Upgraded to Pro plan", time: "2 hours ago", type: "upgrade" },
                    { user: "Sarah Smith", action: "Created new project", time: "4 hours ago", type: "create" },
                    { user: "Mike Johnson", action: "Invited 3 team members", time: "6 hours ago", type: "invite" },
                    { user: "Emily Davis", action: "Completed onboarding", time: "8 hours ago", type: "complete" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'upgrade' ? 'bg-green-500' :
                          activity.type === 'create' ? 'bg-blue-500' :
                          activity.type === 'invite' ? 'bg-purple-500' :
                          'bg-orange-500'
                        }`} />
                        <div>
                          <p className="font-medium text-gray-900">{activity.user}</p>
                          <p className="text-sm text-gray-600">{activity.action}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <Users className="w-4 h-4 mr-2" />
                  Invite Team Members
                </Button>
                <Button variant="outline" className="w-full justify-start backdrop-blur-sm bg-white/50">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start backdrop-blur-sm bg-white/50">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Billing Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

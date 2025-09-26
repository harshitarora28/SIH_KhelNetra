import React from 'react';
import { Users, CheckCircle, XCircle, AlertTriangle, TrendingUp, MapPin } from 'lucide-react';
import StatsCard from './ui/StatsCard';
import PieChart from './charts/PieChart';
import LineChart from './charts/LineChart';
import ActivityFeed from './ui/ActivityFeed';

const Overview: React.FC = () => {
  const statsData = [
    {
      title: 'Total Candidates',
      value: '2,847',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Accepted Candidates',
      value: '1,234',
      change: '+8%',
      icon: CheckCircle,
      color: 'bg-green-500',
    },
    {
      title: 'Rejected Candidates',
      value: '987',
      change: '-3%',
      icon: XCircle,
      color: 'bg-red-500',
    },
    {
      title: 'Discrepancies Flagged',
      value: '47',
      change: '+15%',
      icon: AlertTriangle,
      color: 'bg-yellow-500',
    },
  ];

  const pieData = [
    { name: 'Accepted', value: 1234, color: '#10B981' },
    { name: 'Rejected', value: 987, color: '#EF4444' },
    { name: 'Under Review', value: 626, color: '#F59E0B' },
  ];

  const lineData = [
    { month: 'Jan', submissions: 120 },
    { month: 'Feb', submissions: 180 },
    { month: 'Mar', submissions: 250 },
    { month: 'Apr', submissions: 320 },
    { month: 'May', submissions: 290 },
    { month: 'Jun', submissions: 410 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Candidate Status Distribution</h3>
          <PieChart data={pieData} />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Submissions Over Time</h3>
          <LineChart data={lineData} />
        </div>
      </div>

      {/* Activity and Regional Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-navy-600" />
              Recent Activity
            </h3>
            <ActivityFeed />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-navy-600" />
            Top Regions
          </h3>
          <div className="space-y-3">
            {[
              { region: 'Maharashtra', count: 342, percentage: 78 },
              { region: 'Punjab', count: 298, percentage: 65 },
              { region: 'Karnataka', count: 267, percentage: 58 },
              { region: 'Tamil Nadu', count: 245, percentage: 52 },
              { region: 'Kerala', count: 189, percentage: 41 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{item.region}</p>
                  <p className="text-sm text-gray-600">{item.count} candidates</p>
                </div>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
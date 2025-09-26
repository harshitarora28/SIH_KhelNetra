import React, { useState } from 'react';
import { Plus, Settings, Shield, UserCheck, AlertTriangle, Trash2 } from 'lucide-react';

const Reviewers: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const reviewersData = [
    {
      id: 1,
      name: 'Dr. Rajesh Mehta',
      email: 'rajesh.mehta@khelnetra.gov.in',
      role: 'Admin',
      region: 'National',
      status: 'Active',
      lastLogin: '2024-01-15 10:30',
      reviewsCount: 234,
    },
    {
      id: 2,
      name: 'Sanjay Kumar',
      email: 'sanjay.kumar@punjab.gov.in',
      role: 'State Officer',
      region: 'Punjab',
      status: 'Active',
      lastLogin: '2024-01-15 09:45',
      reviewsCount: 156,
    },
    {
      id: 3,
      name: 'Priya Nair',
      email: 'priya.nair@kerala.gov.in',
      role: 'Reviewer',
      region: 'Kerala',
      status: 'Active',
      lastLogin: '2024-01-14 16:20',
      reviewsCount: 89,
    },
    {
      id: 4,
      name: 'Amit Sharma',
      email: 'amit.sharma@haryana.gov.in',
      role: 'Reviewer',
      region: 'Haryana',
      status: 'Inactive',
      lastLogin: '2024-01-10 14:15',
      reviewsCount: 67,
    },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Admin':
        return <Shield className="h-4 w-4" />;
      case 'State Officer':
        return <UserCheck className="h-4 w-4" />;
      case 'Reviewer':
        return <Settings className="h-4 w-4" />;
      default:
        return <Settings className="h-4 w-4" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'State Officer':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Reviewer':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Access Control Settings */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Shield className="h-6 w-6 mr-2 text-navy-600" />
          Access Control Settings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Admin Rights</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Full system access</li>
              <li>• Manage all users</li>
              <li>• Generate reports</li>
              <li>• System configuration</li>
            </ul>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">State Officer Rights</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Regional candidate management</li>
              <li>• Approve/reject candidates</li>
              <li>• Regional reports</li>
              <li>• Manage regional reviewers</li>
            </ul>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Reviewer Rights</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Review assigned candidates</li>
              <li>• Add assessment notes</li>
              <li>• View candidate profiles</li>
              <li>• Submit recommendations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviewers Management */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Reviewers Management</h2>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Reviewer</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reviewer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reviews
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reviewersData.map((reviewer) => (
                <tr key={reviewer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-navy-100 rounded-full flex items-center justify-center">
                        <span className="text-navy-600 font-medium text-sm">
                          {reviewer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{reviewer.name}</p>
                        <p className="text-sm text-gray-500">{reviewer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleColor(reviewer.role)}`}>
                      {getRoleIcon(reviewer.role)}
                      <span>{reviewer.role}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {reviewer.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(reviewer.status)}`}>
                      {reviewer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {reviewer.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {reviewer.reviewsCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-navy-600 hover:text-navy-900 mr-3">
                      <Settings className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Monitoring */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <AlertTriangle className="h-6 w-6 mr-2 text-yellow-500" />
          Recent Activities & Alerts
        </h2>
        
        <div className="space-y-3">
          {[
            {
              type: 'approval',
              message: 'Dr. Rajesh Mehta approved 5 candidates from Maharashtra',
              time: '2 hours ago',
              severity: 'info',
            },
            {
              type: 'alert',
              message: 'Unusual activity detected: 15 rejections in 1 hour by Amit Sharma',
              time: '3 hours ago',
              severity: 'warning',
            },
            {
              type: 'login',
              message: 'Priya Nair logged in from new device (IP: 192.168.1.100)',
              time: '5 hours ago',
              severity: 'info',
            },
            {
              type: 'system',
              message: 'System backup completed successfully',
              time: '1 day ago',
              severity: 'success',
            },
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className={`p-1 rounded-full ${
                activity.severity === 'warning' ? 'bg-yellow-100' :
                activity.severity === 'success' ? 'bg-green-100' : 'bg-blue-100'
              }`}>
                <AlertTriangle className={`h-4 w-4 ${
                  activity.severity === 'warning' ? 'text-yellow-600' :
                  activity.severity === 'success' ? 'text-green-600' : 'text-blue-600'
                }`} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviewers;
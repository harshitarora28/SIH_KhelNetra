import React from 'react';
import { Clock, User, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'approval',
      user: 'Dr. Rajesh Mehta',
      action: 'approved 12 candidates from Maharashtra region',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 2,
      type: 'rejection',
      user: 'Sanjay Kumar',
      action: 'rejected 3 candidates due to incomplete documentation',
      time: '3 hours ago',
      icon: XCircle,
      color: 'text-red-600',
    },
    {
      id: 3,
      type: 'alert',
      user: 'System Alert',
      action: 'flagged potential discrepancy in assessment scores',
      time: '4 hours ago',
      icon: AlertTriangle,
      color: 'text-yellow-600',
    },
    {
      id: 4,
      type: 'review',
      user: 'Priya Nair',
      action: 'completed review of 8 candidates from Kerala',
      time: '5 hours ago',
      icon: User,
      color: 'text-blue-600',
    },
    {
      id: 5,
      type: 'approval',
      user: 'Amit Sharma',
      action: 'approved batch processing for 25 candidates',
      time: '6 hours ago',
      icon: CheckCircle,
      color: 'text-green-600',
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => {
        const Icon = activity.icon;
        return (
          <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-shrink-0">
              <div className="p-1 bg-gray-100 rounded-full">
                <Icon className={`h-4 w-4 ${activity.color}`} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-800">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          </div>
        );
      })}
      
      <div className="text-center pt-4">
        <button className="text-sm text-navy-600 hover:text-navy-800 font-medium">
          View all activities
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;
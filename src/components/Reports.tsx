import React, { useState } from 'react';
import { Download, FileText, BarChart3, TrendingUp, Calendar, Filter } from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const reportTypes = [
    {
      title: 'Candidate Assessment Report',
      description: 'Comprehensive report of all candidate assessments and outcomes',
      format: 'PDF/Excel',
      lastGenerated: '2024-01-15',
      icon: FileText,
    },
    {
      title: 'Regional Performance Analysis',
      description: 'State-wise performance metrics and talent distribution',
      format: 'PDF/Excel',
      lastGenerated: '2024-01-14',
      icon: BarChart3,
    },
    {
      title: 'Reviewer Activity Report',
      description: 'Detailed log of reviewer actions and assessment patterns',
      format: 'PDF/Excel',
      lastGenerated: '2024-01-13',
      icon: TrendingUp,
    },
  ];

  const insights = [
    {
      metric: 'Top Performing State',
      value: 'Punjab',
      detail: '78% acceptance rate with 298 candidates',
      trend: 'positive',
    },
    {
      metric: 'Most Popular Sport',
      value: 'Cricket',
      detail: '32% of total applications (912 candidates)',
      trend: 'stable',
    },
    {
      metric: 'Average Assessment Score',
      value: '72.5/100',
      detail: 'Improved by 5.2 points from last month',
      trend: 'positive',
    },
    {
      metric: 'Processing Time',
      value: '3.2 days',
      detail: 'Average time from application to decision',
      trend: 'negative',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Report Generation */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Generate Reports</h2>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-600" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
              >
                <option value="all">All Regions</option>
                <option value="north">North India</option>
                <option value="south">South India</option>
                <option value="east">East India</option>
                <option value="west">West India</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reportTypes.map((report, index) => {
            const Icon = report.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-navy-100 rounded-lg">
                    <Icon className="h-6 w-6 text-navy-600" />
                  </div>
                  <span className="text-xs text-gray-500">{report.format}</span>
                </div>
                
                <h3 className="font-medium text-gray-800 mb-2">{report.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Last: {report.lastGenerated}
                  </span>
                  <button className="flex items-center space-x-1 px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors">
                    <Download className="h-3 w-3" />
                    <span>Generate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Auto-generated Insights */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Key Insights & Analytics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">{insight.metric}</h3>
                <div className={`w-2 h-2 rounded-full ${
                  insight.trend === 'positive' ? 'bg-green-500' :
                  insight.trend === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></div>
              </div>
              <p className="text-lg font-bold text-gray-800 mb-1">{insight.value}</p>
              <p className="text-xs text-gray-600">{insight.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Reports</h2>
        
        <div className="space-y-3">
          {[
            {
              name: 'Monthly Assessment Report - January 2024',
              type: 'Candidate Report',
              size: '2.4 MB',
              date: '2024-01-15',
              downloads: 23,
            },
            {
              name: 'Regional Analysis - Q4 2023',
              type: 'Performance Report',
              size: '1.8 MB',
              date: '2024-01-10',
              downloads: 45,
            },
            {
              name: 'Reviewer Activity Summary - Week 2',
              type: 'Activity Report',
              size: '890 KB',
              date: '2024-01-08',
              downloads: 12,
            },
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <FileText className="h-5 w-5 text-navy-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{report.name}</h3>
                  <p className="text-sm text-gray-600">{report.type} • {report.size} • {report.downloads} downloads</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">{report.date}</span>
                <button className="p-1 text-gray-600 hover:text-navy-600 transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
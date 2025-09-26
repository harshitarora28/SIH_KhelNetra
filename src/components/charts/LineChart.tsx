import React from 'react';

interface LineChartData {
  month: string;
  submissions: number;
}

interface LineChartProps {
  data: LineChartData[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.submissions));
  const minValue = Math.min(...data.map(d => d.submissions));
  const range = maxValue - minValue || 1;
  
  const chartWidth = 400;
  const chartHeight = 200;
  const padding = 40;
  
  const points = data.map((item, index) => {
    const x = padding + (index * (chartWidth - 2 * padding)) / (data.length - 1);
    const y = chartHeight - padding - ((item.submissions - minValue) / range) * (chartHeight - 2 * padding);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full">
      <svg width="100%" height="200" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => {
          const y = padding + (i * (chartHeight - 2 * padding)) / 4;
          return (
            <line
              key={i}
              x1={padding}
              y1={y}
              x2={chartWidth - padding}
              y2={y}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          );
        })}
        
        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="#1e40af"
          strokeWidth="3"
          className="drop-shadow-sm"
        />
        
        {/* Points */}
        {data.map((item, index) => {
          const x = padding + (index * (chartWidth - 2 * padding)) / (data.length - 1);
          const y = chartHeight - padding - ((item.submissions - minValue) / range) * (chartHeight - 2 * padding);
          
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="#1e40af"
                className="hover:r-6 transition-all cursor-pointer"
              />
              <text
                x={x}
                y={chartHeight - 10}
                textAnchor="middle"
                className="text-xs fill-gray-600 font-medium"
              >
                {item.month}
              </text>
            </g>
          );
        })}
        
        {/* Y-axis labels */}
        {[0, 1, 2, 3, 4].map((i) => {
          const value = minValue + (i * range) / 4;
          const y = chartHeight - padding - (i * (chartHeight - 2 * padding)) / 4;
          
          return (
            <text
              key={i}
              x={padding - 10}
              y={y + 4}
              textAnchor="end"
              className="text-xs fill-gray-600"
            >
              {Math.round(value)}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default LineChart;
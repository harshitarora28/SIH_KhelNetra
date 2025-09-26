import React from 'react';

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const createPath = (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  return (
    <div className="flex items-center space-x-6">
      <svg width="200" height="200" viewBox="0 0 200 200">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const angle = (percentage / 100) * 360;
          const startAngle = cumulativePercentage * 3.6;
          const endAngle = startAngle + angle;
          
          const path = createPath(100, 100, 80, startAngle, endAngle);
          cumulativePercentage += percentage;
          
          return (
            <path
              key={index}
              d={path}
              fill={item.color}
              stroke="white"
              strokeWidth="2"
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          );
        })}
        <circle cx="100" cy="100" r="40" fill="white" />
        <text x="100" y="95" textAnchor="middle" className="text-sm font-medium fill-gray-600">
          Total
        </text>
        <text x="100" y="110" textAnchor="middle" className="text-lg font-bold fill-gray-800">
          {total.toLocaleString()}
        </text>
      </svg>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
            <div>
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.value.toLocaleString()} ({Math.round((item.value / total) * 100)}%)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
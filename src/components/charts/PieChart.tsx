import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

type Item = { name: string; value: number; color?: string };

const AssetPieChart: React.FC<{ data: Item[] }> = ({ data }) => {
  const colors = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={120} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: 'white' }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssetPieChart;

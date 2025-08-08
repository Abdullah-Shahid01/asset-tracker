import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Item = { name: string; assets: number; liabilities: number };

const AssetsLiabilitiesBarChart: React.FC<{ data: Item[] }> = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: 'white' }} />
          <Legend />
          <Bar dataKey="assets" name="Assets" fill="#8b5cf6" />
          <Bar dataKey="liabilities" name="Liabilities" fill="#ec4899" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssetsLiabilitiesBarChart;

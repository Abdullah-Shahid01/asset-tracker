import React from 'react';
interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}
const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  children,
  className = ''
}) => {
  return <div className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden ${className}`}>
      <div className="p-5 border-b border-gray-700">
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>;
};
export default DashboardCard;
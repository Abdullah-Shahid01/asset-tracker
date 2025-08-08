import React from 'react';
import { Link } from 'react-router-dom';
import DashboardCard from '../components/DashboardCard';
import AssetPieChart from '../components/charts/PieChart';
import AssetsLiabilitiesBarChart from '../components/charts/BarChart';
import { assetData } from '../utils/mockData';
import { ArrowRightIcon, CalendarIcon, TrendingUpIcon, TrendingDownIcon, DollarSignIcon } from 'lucide-react';
const Dashboard = () => {
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center mt-2 text-gray-400">
            <CalendarIcon size={16} className="mr-2" />
            <span>Last updated: {assetData.lastUpdated}</span>
          </div>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Assets" className="border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-500 bg-opacity-20 mr-4">
              <TrendingUpIcon size={24} className="text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {assetData.totalAssets.toLocaleString()} AED
              </p>
              <p className="text-green-500">+2.5% from last month</p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard title="Total Liabilities" className="border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-500 bg-opacity-20 mr-4">
              <TrendingDownIcon size={24} className="text-red-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {assetData.totalLiabilities.toLocaleString()} AED
              </p>
              <p className="text-green-500">-2.8% from last month</p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard title="Net Worth" className="border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-500 bg-opacity-20 mr-4">
              <DollarSignIcon size={24} className="text-purple-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {assetData.netAssets.toLocaleString()} AED
              </p>
              <p className="text-green-500">+4.2% from last month</p>
            </div>
          </div>
        </DashboardCard>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Asset Breakdown">
          <AssetPieChart data={assetData.assetBreakdown} />
        </DashboardCard>
        <DashboardCard title="Assets vs Liabilities">
          <AssetsLiabilitiesBarChart data={assetData.monthlyComparison} />
        </DashboardCard>
      </div>
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/cash">
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Cash</h3>
              <ArrowRightIcon size={20} className="text-purple-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">
              {assetData.assetBreakdown.find(a => a.name === 'Cash')?.value.toLocaleString()}{' '}
              AED
            </p>
          </div>
        </Link>
        <Link to="/bank-balances">
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Bank Balances</h3>
              <ArrowRightIcon size={20} className="text-purple-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">
              {assetData.assetBreakdown.find(a => a.name === 'Bank Balances')?.value.toLocaleString()}{' '}
              AED
            </p>
          </div>
        </Link>
        <Link to="/investments">
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Investments</h3>
              <ArrowRightIcon size={20} className="text-purple-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">
              {assetData.assetBreakdown.find(a => a.name === 'Investments')?.value.toLocaleString()}{' '}
              AED
            </p>
          </div>
        </Link>
        <Link to="/liabilities">
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Liabilities</h3>
              <ArrowRightIcon size={20} className="text-purple-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">
              {assetData.totalLiabilities.toLocaleString()} AED
            </p>
          </div>
        </Link>
      </div>
    </div>;
};
export default Dashboard;
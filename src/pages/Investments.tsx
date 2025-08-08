import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { assetData } from '../utils/mockData';
import { TrendingUpIcon, TrendingDownIcon, PieChartIcon } from 'lucide-react';
const Investments = () => {
  const totalInvested = assetData.investments.reduce((sum, item) => sum + item.amount, 0);
  const totalCurrentValue = assetData.investments.reduce((sum, item) => sum + item.currentValue, 0);
  const totalGain = totalCurrentValue - totalInvested;
  const percentageGain = (totalGain / totalInvested * 100).toFixed(2);
  return <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6">Investments</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard title="Total Invested" className="border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-500 bg-opacity-20 mr-4">
              <PieChartIcon size={24} className="text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {totalInvested.toLocaleString()} AED
              </p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard title="Current Value" className="border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-500 bg-opacity-20 mr-4">
              <TrendingUpIcon size={24} className="text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {totalCurrentValue.toLocaleString()} AED
              </p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard title="Total Gain/Loss" className={`border-l-4 ${totalGain >= 0 ? 'border-green-500' : 'border-red-500'}`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${totalGain >= 0 ? 'bg-green-500 bg-opacity-20' : 'bg-red-500 bg-opacity-20'} mr-4`}>
              {totalGain >= 0 ? <TrendingUpIcon size={24} className="text-green-500" /> : <TrendingDownIcon size={24} className="text-red-500" />}
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {totalGain.toLocaleString()} AED
              </p>
              <p className={totalGain >= 0 ? 'text-green-500' : 'text-red-500'}>
                {percentageGain}%
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>
      <DashboardCard title="Investment Breakdown">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Amount Invested (AED)
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Current Value (AED)
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Gain/Loss (AED)
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Gain/Loss (%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {assetData.investments.map((investment, index) => {
              const gainPercentage = (investment.gain / investment.amount * 100).toFixed(2);
              return <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {investment.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                      {investment.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                      {investment.currentValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                      <span className={investment.gain >= 0 ? 'text-green-400' : 'text-red-400'}>
                        {investment.gain >= 0 ? '+' : ''}
                        {investment.gain.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                      <span className={investment.gain >= 0 ? 'text-green-400' : 'text-red-400'}>
                        {investment.gain >= 0 ? '+' : ''}
                        {gainPercentage}%
                      </span>
                    </td>
                  </tr>;
            })}
              <tr className="bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white text-right">
                  {totalInvested.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white text-right">
                  {totalCurrentValue.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  <span className={totalGain >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {totalGain >= 0 ? '+' : ''}
                    {totalGain.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  <span className={totalGain >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {totalGain >= 0 ? '+' : ''}
                    {percentageGain}%
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DashboardCard>
      <DashboardCard title="Add New Investment">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="investmentType" className="block text-sm font-medium text-gray-300 mb-1">
                Investment Type
              </label>
              <select id="investmentType" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select Type</option>
                <option value="Stocks">Stocks</option>
                <option value="Gold">Gold</option>
                <option value="Crypto">Crypto</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="investmentName" className="block text-sm font-medium text-gray-300 mb-1">
                Investment Name
              </label>
              <input type="text" id="investmentName" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter name (e.g., ETH, Gold, AAPL)" />
            </div>
            <div>
              <label htmlFor="amountInvested" className="block text-sm font-medium text-gray-300 mb-1">
                Amount Invested (AED)
              </label>
              <input type="number" id="amountInvested" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter amount invested" />
            </div>
            <div>
              <label htmlFor="currentValue" className="block text-sm font-medium text-gray-300 mb-1">
                Current Value (AED)
              </label>
              <input type="number" id="currentValue" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter current value" />
            </div>
            <div>
              <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-300 mb-1">
                Purchase Date
              </label>
              <input type="date" id="purchaseDate" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-1">
                Notes
              </label>
              <input type="text" id="notes" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Add notes (optional)" />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              Add Investment
            </button>
          </div>
        </form>
      </DashboardCard>
    </div>;
};
export default Investments;
import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { assetData } from '../utils/mockData';
const Summary = () => {
  // Calculate total for each category
  const totalCash = assetData.cash.reduce((sum, item) => sum + item.amount, 0);
  const totalBankBalances = assetData.bankBalances.reduce((sum, item) => sum + item.balance, 0);
  const totalInvestments = assetData.investments.reduce((sum, item) => sum + item.currentValue, 0);
  const totalReceivables = assetData.receivables.reduce((sum, item) => sum + item.amount, 0);
  const totalLiabilities = assetData.liabilities.reduce((sum, item) => sum + item.amount, 0);
  const totalCreditCards = assetData.creditCards.reduce((sum, item) => sum + item.balance, 0);
  // Calculate percentages for heatmap
  const totalAssets = totalCash + totalBankBalances + totalInvestments + totalReceivables;
  const getPercentage = (value: number) => (value / totalAssets * 100).toFixed(1);
  return <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6">Summary</h1>
      <DashboardCard title="Asset Categories">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Amount (AED)
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  % of Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Cash
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {totalCash.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {getPercentage(totalCash)}%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Bank Balances
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {totalBankBalances.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {getPercentage(totalBankBalances)}%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Investments
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {totalInvestments.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {getPercentage(totalInvestments)}%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Receivables
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {totalReceivables.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {getPercentage(totalReceivables)}%
                </td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Total Assets
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white text-right">
                  {totalAssets.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white text-right">
                  100%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DashboardCard>
      <DashboardCard title="Bank Balances">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Bank
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Balance (AED)
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {assetData.bankBalances.map((bank, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {bank.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                    {bank.balance.toLocaleString()}
                  </td>
                </tr>)}
              <tr className="bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white text-right">
                  {totalBankBalances.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DashboardCard>
      <DashboardCard title="Liabilities">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Amount (AED)
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Loans
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {totalLiabilities.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Credit Cards
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {totalCreditCards.toLocaleString()}
                </td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Total Liabilities
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white text-right">
                  {(totalLiabilities + totalCreditCards).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DashboardCard>
      <DashboardCard title="Asset Strength Heatmap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{
          name: 'Cash',
          value: totalCash
        }, {
          name: 'Bank Balances',
          value: totalBankBalances
        }, {
          name: 'Investments',
          value: totalInvestments
        }, {
          name: 'Receivables',
          value: totalReceivables
        }].map((asset, index) => {
          const percentage = parseFloat(getPercentage(asset.value));
          let bgColor = 'bg-red-600';
          if (percentage > 30) bgColor = 'bg-green-600';else if (percentage > 20) bgColor = 'bg-green-500';else if (percentage > 15) bgColor = 'bg-yellow-500';else if (percentage > 10) bgColor = 'bg-yellow-600';else if (percentage > 5) bgColor = 'bg-orange-500';
          return <div key={index} className={`${bgColor} rounded-lg p-4`}>
                <h3 className="text-sm font-medium text-white">{asset.name}</h3>
                <p className="text-2xl font-bold text-white mt-2">
                  {percentage}%
                </p>
                <p className="text-sm text-white opacity-80">
                  {asset.value.toLocaleString()} AED
                </p>
              </div>;
        })}
        </div>
      </DashboardCard>
    </div>;
};
export default Summary;
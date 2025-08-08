import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { assetData } from '../utils/mockData';
import { FileTextIcon, PlusIcon } from 'lucide-react';
const Liabilities = () => {
  const totalLiabilities = assetData.liabilities.reduce((sum, liability) => sum + liability.amount, 0);
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Liabilities</h1>
        <button className="flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
          <PlusIcon size={20} className="mr-2" />
          Add Liability
        </button>
      </div>
      <DashboardCard title={`Total Liabilities: ${totalLiabilities.toLocaleString()} AED`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Amount (AED)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Interest Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Payback Period
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {assetData.liabilities.map((liability, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {liability.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                    {liability.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {liability.interestRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {liability.paybackPeriod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-400 hover:text-blue-300 mr-3">
                      Edit
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      Delete
                    </button>
                  </td>
                </tr>)}
              <tr className="bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white text-right">
                  {totalLiabilities.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </DashboardCard>
      <DashboardCard title="Add New Liability">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="liabilityName" className="block text-sm font-medium text-gray-300 mb-1">
                Liability Name
              </label>
              <input type="text" id="liabilityName" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter liability name" />
            </div>
            <div>
              <label htmlFor="lender" className="block text-sm font-medium text-gray-300 mb-1">
                Lender
              </label>
              <input type="text" id="lender" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter lender name" />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
                Amount (AED)
              </label>
              <input type="number" id="amount" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter amount" />
            </div>
            <div>
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-300 mb-1">
                Interest Rate (%)
              </label>
              <input type="number" id="interestRate" step="0.01" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter interest rate" />
            </div>
            <div>
              <label htmlFor="paybackPeriod" className="block text-sm font-medium text-gray-300 mb-1">
                Payback Period
              </label>
              <input type="text" id="paybackPeriod" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="E.g., 5 years, 24 months" />
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-300 mb-1">
                Start Date
              </label>
              <input type="date" id="startDate" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-1">
              Notes
            </label>
            <textarea id="notes" rows={3} className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Add additional notes (optional)"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              Add Liability
            </button>
          </div>
        </form>
      </DashboardCard>
    </div>;
};
export default Liabilities;
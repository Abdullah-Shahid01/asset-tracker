import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { assetData } from '../utils/mockData';
import { CheckCircleIcon, XCircleIcon, PlusIcon } from 'lucide-react';
const Receivables = () => {
  const totalReceivables = assetData.receivables.reduce((sum, item) => sum + item.amount, 0);
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Receivables</h1>
        <button className="flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
          <PlusIcon size={20} className="mr-2" />
          Add Receivable
        </button>
      </div>
      <DashboardCard title={`Total Receivables: ${totalReceivables.toLocaleString()} AED`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Payer
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Amount (AED)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Expected Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {assetData.receivables.map((receivable, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {receivable.payer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                    {receivable.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {receivable.expectedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {receivable.status === 'pending' ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500 bg-opacity-20 text-yellow-400">
                        Pending
                      </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 bg-opacity-20 text-green-400">
                        Paid
                      </span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-green-400 hover:text-green-300 mr-3">
                      <CheckCircleIcon size={18} />
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 mr-3">
                      Edit
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      <XCircleIcon size={18} />
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </DashboardCard>
      <DashboardCard title="Add New Receivable">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="payer" className="block text-sm font-medium text-gray-300 mb-1">
                Payer
              </label>
              <input type="text" id="payer" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter payer name" />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
                Amount (AED)
              </label>
              <input type="number" id="amount" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter amount" />
            </div>
            <div>
              <label htmlFor="expectedDate" className="block text-sm font-medium text-gray-300 mb-1">
                Expected Payment Date
              </label>
              <input type="date" id="expectedDate" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
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
              Save Receivable
            </button>
          </div>
        </form>
      </DashboardCard>
    </div>;
};
export default Receivables;
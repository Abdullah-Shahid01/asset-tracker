import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { assetData } from '../utils/mockData';
import { BuildingIcon, EditIcon } from 'lucide-react';
const BankBalances = () => {
  const totalBalance = assetData.bankBalances.reduce((sum, bank) => sum + bank.balance, 0);
  return <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6">Bank Balances</h1>
      <div className="mb-6">
        <DashboardCard title={`Total Bank Balances: ${totalBalance.toLocaleString()} AED`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assetData.bankBalances.map((bank, index) => <div key={index} className="bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-purple-500 bg-opacity-20 mr-3">
                      <BuildingIcon size={20} className="text-purple-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {bank.name}
                    </h3>
                  </div>
                  <button className="p-1 rounded hover:bg-gray-600">
                    <EditIcon size={16} className="text-gray-400" />
                  </button>
                </div>
                <p className="mt-3 text-2xl font-bold text-white">
                  {bank.balance.toLocaleString()} AED
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Last updated: {assetData.lastUpdated}
                </p>
              </div>)}
          </div>
        </DashboardCard>
      </div>
      <DashboardCard title="Update Bank Balance">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="bank" className="block text-sm font-medium text-gray-300 mb-1">
                Bank
              </label>
              <select id="bank" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select Bank</option>
                {assetData.bankBalances.map((bank, index) => <option key={index} value={bank.name}>
                    {bank.name}
                  </option>)}
              </select>
            </div>
            <div>
              <label htmlFor="balance" className="block text-sm font-medium text-gray-300 mb-1">
                Current Balance (AED)
              </label>
              <input type="number" id="balance" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter current balance" />
            </div>
            <div className="flex items-end">
              <button type="submit" className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                Update Balance
              </button>
            </div>
          </div>
        </form>
      </DashboardCard>
      <DashboardCard title="Add New Bank">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="newBank" className="block text-sm font-medium text-gray-300 mb-1">
                Bank Name
              </label>
              <input type="text" id="newBank" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter bank name" />
            </div>
            <div>
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-300 mb-1">
                Account Type
              </label>
              <select id="accountType" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select Account Type</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
                <option value="Fixed Deposit">Fixed Deposit</option>
                <option value="Investment">Investment</option>
              </select>
            </div>
            <div>
              <label htmlFor="initialBalance" className="block text-sm font-medium text-gray-300 mb-1">
                Initial Balance (AED)
              </label>
              <input type="number" id="initialBalance" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter initial balance" />
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
              Add Bank
            </button>
          </div>
        </form>
      </DashboardCard>
    </div>;
};
export default BankBalances;
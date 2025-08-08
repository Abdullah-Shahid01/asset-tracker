import React, { useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import { assetData } from '../utils/mockData';
import { PlusIcon, FilterIcon } from 'lucide-react';
const Cash = () => {
  const [cashEntries, setCashEntries] = useState(assetData.cash);
  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    source: '',
    amount: 0,
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });
  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    setCashEntries([...cashEntries, newEntry]);
    setNewEntry({
      source: '',
      amount: 0,
      date: new Date().toISOString().split('T')[0],
      notes: ''
    });
    setShowForm(false);
  };
  const totalCash = cashEntries.reduce((sum, entry) => sum + entry.amount, 0);
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Cash</h1>
        <div className="flex space-x-2">
          <button className="p-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors" aria-label="Filter">
            <FilterIcon size={20} />
          </button>
          <button className="flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors" onClick={() => setShowForm(!showForm)}>
            <PlusIcon size={20} className="mr-2" />
            Add Cash Entry
          </button>
        </div>
      </div>
      {showForm && <DashboardCard title="Add New Cash Entry">
          <form onSubmit={handleAddEntry} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="source" className="block text-sm font-medium text-gray-300 mb-1">
                  Source
                </label>
                <input type="text" id="source" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" value={newEntry.source} onChange={e => setNewEntry({
              ...newEntry,
              source: e.target.value
            })} required />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
                  Amount (AED)
                </label>
                <input type="number" id="amount" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" value={newEntry.amount} onChange={e => setNewEntry({
              ...newEntry,
              amount: parseFloat(e.target.value)
            })} required />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                  Date
                </label>
                <input type="date" id="date" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" value={newEntry.date} onChange={e => setNewEntry({
              ...newEntry,
              date: e.target.value
            })} required />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-1">
                  Notes
                </label>
                <input type="text" id="notes" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" value={newEntry.notes} onChange={e => setNewEntry({
              ...newEntry,
              notes: e.target.value
            })} />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button type="button" className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                Save Entry
              </button>
            </div>
          </form>
        </DashboardCard>}
      <DashboardCard title={`Cash Entries (Total: ${totalCash.toLocaleString()} AED)`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Source
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Amount (AED)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Notes
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {cashEntries.map((entry, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {entry.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                    {entry.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {entry.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {entry.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-purple-400 hover:text-purple-300 mr-3">
                      Edit
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      Delete
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </div>;
};
export default Cash;
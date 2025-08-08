import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { assetData } from '../utils/mockData';
import { CreditCardIcon, PlusIcon, AlertCircleIcon } from 'lucide-react';
const CreditCards = () => {
  const totalOutstanding = assetData.creditCards.reduce((sum, card) => sum + card.balance, 0);
  // Calculate days until due
  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Credit Cards</h1>
        <button className="flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
          <PlusIcon size={20} className="mr-2" />
          Add Credit Card
        </button>
      </div>
      <DashboardCard title={`Total Outstanding: ${totalOutstanding.toLocaleString()} AED`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assetData.creditCards.map((card, index) => {
          const daysUntilDue = getDaysUntilDue(card.dueDate);
          let statusColor = 'bg-green-500';
          let statusText = 'Due in';
          if (daysUntilDue <= 3) {
            statusColor = 'bg-red-500';
            statusText = 'Due very soon';
          } else if (daysUntilDue <= 7) {
            statusColor = 'bg-yellow-500';
            statusText = 'Due soon';
          }
          return <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
                <div className={`${statusColor} py-1 px-4 flex items-center justify-between`}>
                  <span className="text-xs font-medium text-white">
                    {statusText}: {daysUntilDue} days
                  </span>
                  {daysUntilDue <= 3 && <AlertCircleIcon size={16} className="text-white" />}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-purple-500 bg-opacity-20 mr-3">
                        <CreditCardIcon size={20} className="text-purple-400" />
                      </div>
                      <h3 className="text-lg font-medium text-white">
                        {card.issuer}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-white">
                    {card.balance.toLocaleString()} AED
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Due date: {card.dueDate}
                  </p>
                  <div className="mt-4 flex justify-between">
                    <button className="text-purple-400 hover:text-purple-300 text-sm">
                      Update Balance
                    </button>
                    <button className="text-green-400 hover:text-green-300 text-sm">
                      Mark as Paid
                    </button>
                  </div>
                </div>
              </div>;
        })}
        </div>
      </DashboardCard>
      <DashboardCard title="Add New Credit Card">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cardIssuer" className="block text-sm font-medium text-gray-300 mb-1">
                Card Issuer
              </label>
              <input type="text" id="cardIssuer" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter card issuer (e.g., DIB, FAB)" />
            </div>
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-300 mb-1">
                Card Name
              </label>
              <input type="text" id="cardName" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter card name (e.g., Platinum)" />
            </div>
            <div>
              <label htmlFor="outstandingBalance" className="block text-sm font-medium text-gray-300 mb-1">
                Outstanding Balance (AED)
              </label>
              <input type="number" id="outstandingBalance" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter outstanding balance" />
            </div>
            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300 mb-1">
                Due Date
              </label>
              <input type="date" id="dueDate" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label htmlFor="creditLimit" className="block text-sm font-medium text-gray-300 mb-1">
                Credit Limit (AED)
              </label>
              <input type="number" id="creditLimit" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter credit limit" />
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
              Add Credit Card
            </button>
          </div>
        </form>
      </DashboardCard>
    </div>;
};
export default CreditCards;
import React, { useState } from 'react';
import { Search, Bell, Menu, User } from 'lucide-react';

const TopBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}ileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full bg-gray-700 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-gray-300 hover:text-white" aria-label="Notifications">
            <Bell size={22} />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
            <User size={18} />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="mt-3 md:hidden">
          <ul className="grid grid-cols-2 gap-2">
            {[
              { name: 'Dashboard', href: '/' },
              { name: 'Summary', href: '/summary' },
              { name: 'Cash', href: '/cash' },
              { name: 'Bank Balances', href: '/bank-balances' },
              { name: 'Receivables', href: '/receivables' },
              { name: 'Investments', href: '/investments' },
              { name: 'Credit Cards', href: '/credit-cards' },
              { name: 'Liabilities', href: '/liabilities' },
            ].map((i) => (
              <li key={i.href}>
                <a className="block p-2 text-gray-300 hover:bg-gray-700 rounded" href={i.href}>
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default TopBar;

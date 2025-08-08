import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, PieChart, DollarSign, Building2, TrendingUp, CreditCard, FileText } from 'lucide-react';

const Sidebar: React.FC = () => {
  const base = "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors";
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 p-4 hidden md:block">
      <div className="text-xl font-semibold mb-6">Asset Tracker</div>
      <nav className="space-y-2">
        <NavLink to="/" className={({isActive}) => `${base} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><Home size={18}/>Dashboard</NavLink>
        <NavLink to="/summary" className={({isActive}) => `${base} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><PieChart size={18}/>Summary</NavLink>
        <NavLink to="/cash" className={({isActive}) => `${base} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><DollarSign size={18}/>Cash</NavLink>
        <NavLink to="/bank-balances" className={({isActive}) => `${base} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><Building2 size={18}/>Bank Balances</NavLink>
        <NavLink to="/receivables" className={({isActive}) => `${base} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><FileText size={18}/>Receivables</NavLink>
        <NavLink to="/investments" className={({isActive}) => `${base} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><TrendingUp size={18}/>Investments</NavLink>
        <NavLink to="/credit-cards" className={({isActive}) => `${base} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><CreditCard size={18}/>Credit Cards</NavLink>
        <NavLink to="/liabilities" className={({isActive}) => `${base} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><FileText size={18}/>Liabilities</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;

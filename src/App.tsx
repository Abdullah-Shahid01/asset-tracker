import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Summary from './pages/Summary';
import Cash from './pages/Cash';
import BankBalances from './pages/BankBalances';
import Receivables from './pages/Receivables';
import Investments from './pages/Investments';
import CreditCards from './pages/CreditCards';
import Liabilities from './pages/Liabilities';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="/bank-balances" element={<BankBalances />} />
          <Route path="/receivables" element={<Receivables />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/liabilities" element={<Liabilities />} />
        </Routes>
      </Layout>
    </Router>;
}
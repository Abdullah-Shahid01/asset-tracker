/* Mock data for demonstration purposes */
export const assetData = {
  totalAssets: 1250000,
  totalLiabilities: 350000,
  netAssets: 900000,
  lastUpdated: '2023-06-15',
  assetBreakdown: [{
    name: 'Cash',
    value: 150000,
    color: '#8b5cf6'
  }, {
    name: 'Investments',
    value: 450000,
    color: '#3b82f6'
  }, {
    name: 'Bank Balances',
    value: 350000,
    color: '#10b981'
  }, {
    name: 'Crypto',
    value: 200000,
    color: '#f59e0b'
  }, {
    name: 'Gold',
    value: 100000,
    color: '#f97316'
  }],
  bankBalances: [{
    name: 'DIB',
    balance: 120000
  }, {
    name: 'FAB',
    balance: 85000
  }, {
    name: 'ADIB',
    balance: 65000
  }, {
    name: 'Mashreq',
    balance: 45000
  }, {
    name: 'Liv',
    balance: 35000
  }],
  liabilities: [{
    name: 'Mortgage',
    amount: 250000,
    interestRate: '3.5%',
    paybackPeriod: '20 years'
  }, {
    name: 'Car Loan',
    amount: 75000,
    interestRate: '4.2%',
    paybackPeriod: '5 years'
  }, {
    name: 'Personal Loan',
    amount: 25000,
    interestRate: '6.0%',
    paybackPeriod: '2 years'
  }],
  creditCards: [{
    issuer: 'DIB',
    balance: 15000,
    dueDate: '2023-07-05'
  }, {
    issuer: 'FAB',
    balance: 8000,
    dueDate: '2023-07-10'
  }, {
    issuer: 'Mashreq',
    balance: 5000,
    dueDate: '2023-07-15'
  }],
  cash: [{
    source: 'Safe',
    amount: 50000,
    date: '2023-06-01',
    notes: 'Emergency fund'
  }, {
    source: 'Wallet',
    amount: 5000,
    date: '2023-06-10',
    notes: 'Daily expenses'
  }, {
    source: 'Business Cash',
    amount: 95000,
    date: '2023-06-05',
    notes: 'Business operations'
  }],
  receivables: [{
    payer: 'Client A',
    amount: 35000,
    expectedDate: '2023-07-20',
    status: 'pending'
  }, {
    payer: 'Client B',
    amount: 22000,
    expectedDate: '2023-07-15',
    status: 'pending'
  }, {
    payer: 'Client C',
    amount: 18000,
    expectedDate: '2023-06-30',
    status: 'pending'
  }],
  investments: [{
    type: 'Stocks',
    amount: 200000,
    currentValue: 250000,
    gain: 50000
  }, {
    type: 'Gold',
    amount: 80000,
    currentValue: 100000,
    gain: 20000
  }, {
    type: 'Crypto',
    amount: 150000,
    currentValue: 200000,
    gain: 50000
  }],
  monthlyComparison: [{
    name: 'Jan',
    assets: 1100000,
    liabilities: 400000
  }, {
    name: 'Feb',
    assets: 1150000,
    liabilities: 390000
  }, {
    name: 'Mar',
    assets: 1180000,
    liabilities: 380000
  }, {
    name: 'Apr',
    assets: 1200000,
    liabilities: 370000
  }, {
    name: 'May',
    assets: 1220000,
    liabilities: 360000
  }, {
    name: 'Jun',
    assets: 1250000,
    liabilities: 350000
  }]
};
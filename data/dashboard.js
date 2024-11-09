// Sample data
const dashboardData = {
    user: {
      name: 'Andrew',
      role: 'Admin account'
    },
    card: {
      number: '5789 **** **** 2847',
      holder: 'Mike Smith',
      expiry: '06/21',
      balance: 2850.75,
      income: 1500.50,
      outcome: 350.60,
      limit: 4000
    },
    goals: [
      { name: 'Holidays', amount: 550, date: '12/20/20', icon: '🏔' },
      { name: 'Renovation', amount: 200, date: '12/20/20', icon: '🔨' },
      { name: 'Xbox', amount: 820, date: '12/20/20', icon: '🎮' }
    ],
    transactions: [
      { receiver: 'Tesco Market', type: 'Shopping', date: '13 Dec 2020', amount: 75.67 },
      { receiver: 'ElectroMen Market', type: 'Shopping', date: '14 Dec 2020', amount: 250.00 },
      { receiver: 'Fiorgio Restaurant', type: 'Food', date: '07 Dec 2020', amount: 19.50 },
      { receiver: 'John Mathew Kayne', type: 'Sport', date: '06 Dec 2020', amount: 350 },
      { receiver: 'Ann Marlin', type: 'Shopping', date: '31 Nov 2020', amount: 430 }
    ],
    statistics: [
      { category: 'Shopping', percentage: 52 },
      { category: 'Electronics', percentage: 21 },
      { category: 'Travels', percentage: 74 }
    ]
  };

module.exports = dashboardData;

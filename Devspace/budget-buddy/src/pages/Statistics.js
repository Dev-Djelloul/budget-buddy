import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Enregistrer les éléments nécessaires
ChartJS.register(ArcElement, Tooltip, Legend);

function Statistics() {
  const transactions = useSelector(state => state.transactions.transactions);
  
  const incomeData = {};
  const expenseData = {};
  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((transaction) => {
    if (transaction.amount > 0) {
      incomeData[transaction.title] = (incomeData[transaction.title] || 0) + transaction.amount;
      totalIncome += transaction.amount;
    } else {
      expenseData[transaction.title] = (expenseData[transaction.title] || 0) + Math.abs(transaction.amount);
      totalExpenses += Math.abs(transaction.amount);
    }
  });

  const totalNet = totalIncome - totalExpenses;

  const data = {
    labels: [...Object.keys(incomeData), ...Object.keys(expenseData)],
    datasets: [
      {
        data: [...Object.values(incomeData), ...Object.values(expenseData)],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="mt-4">
      <h2>Statistics</h2>
      
      <div className="row">
        <div className="col-md-6">
          <h3>Your Transactions</h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.title}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.amount > 0 ? 'Revenu' : 'Dépense'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Totals</h3>
          <p><strong>Total income :</strong> {totalIncome} €</p>
          <p><strong>Total Expenses :</strong> {totalExpenses} €</p>
          <p><strong>Net Total :</strong> {totalNet} €</p>
        </div>

        <div className="col-md-6">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default Statistics;

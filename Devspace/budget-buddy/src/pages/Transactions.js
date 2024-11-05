import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, removeTransaction } from '../redux/transactionsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

function Transactions() {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.transactions);
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = type === 'expense' ? -Math.abs(Number(amount)) : Math.abs(Number(amount));
    dispatch(addTransaction({ amount: amountValue, category, title }));
    setAmount(0);
    setCategory('');
    setTitle('');
  };

  const handleRemove = (index) => {
    dispatch(removeTransaction(index));
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <select className="form-select" value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="income">Revenues</option>
          <option value="expense">Expenses</option>
        </select>
        <input
          type="number"
          className="form-control mt-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="text"
          className="form-control mt-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <input
          type="text"
          className="form-control mt-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <button type="submit" className="btn btn-success mt-2">Add transaction</button>
      </form>

      <h2>Your Transactions</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.amount > 0 ? 'Revenu' : 'Dépense'}</td>
              <td>
                <button onClick={() => handleRemove(index)} className="btn btn-danger">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
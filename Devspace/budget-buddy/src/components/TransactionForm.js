import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/transactionsSlice';

function TransactionForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category
    };
    dispatch(addTransaction(newTransaction));
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Catégorie"
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TransactionForm;

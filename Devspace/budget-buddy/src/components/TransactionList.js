import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/transactionsSlice';

function TransactionList() {
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.description} - ${transaction.amount} ({transaction.category})
          <button onClick={() => dispatch(deleteTransaction(transaction.id))}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;

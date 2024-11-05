import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
  },
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
    removeTransaction(state, action) {
      const index = action.payload;
      state.transactions.splice(index, 1); // Supprime la transaction à l'index spécifié
    },
  },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

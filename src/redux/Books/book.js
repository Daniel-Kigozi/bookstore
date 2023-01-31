import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],

  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date(),
        title: action.payload.title,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

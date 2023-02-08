import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: 1,
      title: 'first-book',
      author: 'person1',

    },
  ],

  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => state.filter((book) => book.key !== action.payload.id),
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

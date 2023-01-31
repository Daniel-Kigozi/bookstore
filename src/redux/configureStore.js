import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/book';
import categoryReducer from './Categories/categories';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

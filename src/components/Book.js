import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/Books/book';

import BooksForm from './BookForm';

const Books = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook({ id }));
  };

  const books = useSelector((state) => state.books);
  return (
    <div className="container">
      {
        books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <button type="button" onClick={handleRemoveClick}>Remove</button>
            <button type="button">Edit</button>
          </li>
        ))
      }
      <BooksForm />
    </div>
  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,

};

export default Books;

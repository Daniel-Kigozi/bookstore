import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { getBooks, deleteBook } from '../redux/Books/book';
import BooksForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBookEvent = (id) => {
    dispatch(deleteBook(id));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (!books) return <p>No books available</p>;
  const value = 30;
  const chapter = 20;

  return (
    <div>
      {books.map((book) => (
        <section className="book" key={book.id}>
          <div className="book-info">
            <p className="book-category">
              {book.category}
            </p>
            <p className="book-title">
              {book.title}
            </p>
            {' '}
            <p className="author">
              {book.author}
            </p>
            <div className="button-container">
              <button className="button" type="submit">Comments</button>
              <button className="button" type="submit" onClick={() => deleteBookEvent(book.id)}>Remove</button>
              <button className="button" type="submit">Edit</button>
            </div>
          </div>
          <section>
            <div>
              <CircularProgressbar value={value} />
            </div>
            <div>
              <div>
                <p>
                  {value}
                  %
                </p>
                <p>Completed</p>
              </div>
            </div>
          </section>
          <div>
            <p>CURRENT CHAPTER</p>
            <p>
              CHAPTER :
              {' '}
              {chapter}
            </p>
            <button type="submit">UPDATE PROGRESS</button>
          </div>
        </section>
      ))}
      <BooksForm />

    </div>

  );
};

export default Books;

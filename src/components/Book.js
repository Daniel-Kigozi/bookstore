import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { getBooks, deleteBook } from '../redux/Books/book';
import 'react-circular-progressbar/dist/styles.css';
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
            <p className="books-title">
              {book.title}
            </p>
            {' '}
            <p className="author">
              {book.author}
            </p>
            <div className="buttons-container">
              <button className="buttons" type="submit">Comments</button>
              <button className="buttons" type="submit" onClick={() => deleteBookEvent(book.id)}>Remove</button>
              <button className="buttons" type="submit">Edit</button>
            </div>
          </div>
          <section className="progressive">
            <div className="progressive-success">
              <CircularProgressbar value={value} />
            </div>
            <div className="info-status">
              <div className="progression-info">
                <p className="progression">
                  {value}
                  %
                </p>
                <p className="progress-status">Completed</p>
              </div>
            </div>
          </section>
          <div className="chapters">
            <p className="chapter-now">CURRENT CHAPTER</p>
            <p className="chapter-digit">
              CHAPTER :
              {' '}
              {chapter}
            </p>
            <button className="continue-button" type="submit">UPDATE PROGRESS</button>
          </div>
        </section>
      ))}
      <BooksForm />

    </div>

  );
};

export default Books;

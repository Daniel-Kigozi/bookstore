import React from 'react';

import BooksForm from './BookForm';

const Books = () => {
  const books = [{ id: 1, title: 'title1', author: 'author1' },
    { id: 2, title: 'title2', author: 'author2' },
    { id: 3, title: 'title3', author: 'author3' },
    { id: 4, title: 'title4', author: 'author4' }];
  return (
    <div>
      <div>
        {books.map((book) => (
          <p key={book.id}>
            {book.title}
            {' '}
            {book.author}
            <ul>
              <li>
                <button type="button">Remove</button>
              </li>
              <li>
                <button type="button">Edit</button>
              </li>
            </ul>
          </p>

        ))}
      </div>

      <BooksForm />
    </div>
  );
};

export default Books;

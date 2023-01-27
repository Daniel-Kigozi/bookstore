import React from 'react';

const BooksForm = () => (
  <div>
    <h2>Add new book</h2>
    <form>
      <input
        type="text"
        name="title"
        placeholder="Add title"
      />
      <input
        type="text"
        name="author"
        placeholder="Add author"
      />
      <button type="submit" className="submit-btn">
        Add book
      </button>
    </form>
  </div>
);

export default BooksForm;

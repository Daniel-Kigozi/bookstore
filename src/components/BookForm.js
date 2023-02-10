import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { postBook } from '../redux/Books/book';

const BookForm = () => {
  const initialBook = {
    item_id: '',
    title: '',
    author: '',
    category: '',
  };
  const [bookState, setBookState] = useState(initialBook);
  const dispatch = useDispatch();

  const OnChange = (event) => {
    const { name, value } = event.target;
    setBookState({ ...bookState, [name]: value });
  };

  const Submit = () => {
    const book = { ...bookState, item_id: uuid() };
    dispatch(postBook(book));
    setBookState(initialBook);
  };

  return (
    <section className="Form">
      <span className="form-title">ADD A NEW BOOK</span>
      <form>
        <input
          type="text"
          name="title"
          value={bookState.title}
          placeholder="Book Title"
          onChange={OnChange}
        />
        <input
          type="text"
          name="author"
          value={bookState.author}
          placeholder="Author"
          onChange={OnChange}
        />
        <select
          className="cat"
          placeholder="categories"
          name="category"
          value={bookState.category}
          onChange={OnChange}
          required
        >
          <option value="">Category</option>
          <option value="Fiction">Science</option>
          <option value="Gospel">Geophysics</option>
          <option value="Math">Technology</option>

        </select>
        <button className="add-button" type="button" onClick={Submit}>
          Add Book
        </button>
      </form>
    </section>
  );
};

export default BookForm;

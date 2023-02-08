import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/Categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{categories}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>

  );
};

export default Categories;

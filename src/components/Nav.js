import React from 'react';
import { NavLink } from 'react-router-dom';

/* eslint-disable */
export const Navbar = () => (
  <nav className="nav-bar">
    <header>
      <h1>Book Store</h1>
    </header>
    <NavLink to="/">Books</NavLink>
    |
    <NavLink to="/categories">Categories</NavLink>
  </nav>
);
export default Navbar;
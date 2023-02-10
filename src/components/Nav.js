import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

/* eslint-disable */
export const Navbar = () => (
  <nav className="nav-bar">
    
    <header>
      <h1>Bookstore CMS</h1>
      <span className="nav-title">
      <NavLink className="category-nav" to="/">BOOKS</NavLink>
      
      <NavLink className="category-nav" to="/categories">CATEGORIES</NavLink>
      </span>
      <div className="userIcon">
      <FaRegUser />
      </div>
    </header>
    
  </nav>
);
export default Navbar;
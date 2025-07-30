import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Products() {
  return (
    <div className="container">
      <h2 className="text-center text-primary mb-4">Our Product Categories</h2>
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <Link className="nav-link bg-primary text-white mx-2" to="electronics">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link bg-success text-white mx-2" to="books">Books</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}




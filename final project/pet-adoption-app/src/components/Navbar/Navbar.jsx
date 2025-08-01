import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Photos/logo.jpg';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Pet Haven Logo"
            width="40"
            height="40"
            className="me-2"
            style={{ borderRadius: '50%' }}
          />
          <span className="fw-bold fs-4">Pet Haven</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/pets' ? 'active' : ''}`} to="/pets">Pets</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/adopt' ? 'active' : ''}`} to="/adopt">Adopt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

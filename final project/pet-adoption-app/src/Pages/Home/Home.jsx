import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <section className="hero-section text-white d-flex align-items-center">
      <div className="container text-center hero-content">
        <span className="welcome-msg">WELCOME TO PET HAVEN</span>
        <h1 className="display-4 fw-bold">Best Care of Our<br />Little Friends</h1>
        <Link to="/pets" className="btn btn-brown mt-3 px-4 py-2 fw-bold">
          OUR PETS
        </Link>
      </div>
    </section>
  );
}










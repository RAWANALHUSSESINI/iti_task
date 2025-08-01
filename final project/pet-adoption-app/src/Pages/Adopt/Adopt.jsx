import React from 'react';
import './Adopt.css';
import { Container, Button } from 'react-bootstrap';

export default function Adopt() {
  return (
    <Container className="py-5 text-center">
      <h1 className="mb-4">Adopt a Pet 🐾</h1>
      <p className="lead mb-4">
        Thank you for choosing to adopt! Fill out the form below and we’ll get in touch with you.
      </p>

      <form style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div className="mb-3 text-start">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="petName" className="form-label">Pet Name</label>
          <input
            type="text"
            className="form-control"
            id="petName"
            name="petName"
            autoComplete="off"
            required
          />
        </div>

        <Button variant="success" type="submit" className="mt-3">
          Submit Application
        </Button>
      </form>
    </Container>
  );
}

import React from 'react';

export default function NotFound() {
  return (
    <div className="container text-center">
      <i className="fas fa-exclamation-triangle fa-4x text-danger mb-3"></i>
      <h1 className="text-danger">404 - Page Not Found</h1>
      <p className="text-muted">The page you’re looking for doesn’t exist.</p>
    </div>
  );
}


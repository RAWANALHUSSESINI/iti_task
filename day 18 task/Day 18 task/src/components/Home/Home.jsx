import React, { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log("Counter updated!");
    }
  }, [count]);

  return (
    <div className="container text-center">
      <h1 className="mb-4 text-primary">Welcome to Day 18 Task 💻</h1>
      <h2 className="mb-3">Counter: {count}</h2>
      <button className="btn btn-success px-4 py-2" onClick={() => setCount(count + 1)}>
        <i className="fas fa-plus me-2"></i>Increase
      </button>
    </div>
  );
}



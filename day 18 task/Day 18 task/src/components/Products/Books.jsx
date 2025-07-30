import React, { useEffect, useState } from 'react';

export default function Books() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Books mounted');

    return () => {
      console.log('Books unmounted');
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log('Books updated');
    }
  }, [count]);

  return (
    <div className="alert alert-warning">
      <h3>Books Section</h3>
      <p>Views: {count}</p>
      <button className="btn btn-dark" onClick={() => setCount(count + 1)}>
        Increase Views
      </button>
    </div>
  );
}

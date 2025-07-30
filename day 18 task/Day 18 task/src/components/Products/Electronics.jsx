import React, { useEffect, useState } from 'react';

export default function Electronics() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    console.log('Electronics mounted');

    return () => {
      console.log('Electronics unmounted');
    };
  }, []);

  useEffect(() => {
    if (views > 0) {
      console.log('Electronics updated');
    }
  }, [views]);

  return (
    <div className="alert alert-info">
      <h3>Electronics Section</h3>
      <p>Views: {views}</p>
      <button className="btn btn-success" onClick={() => setViews(views + 1)}>
        Increase Views
      </button>
    </div>
  );
}

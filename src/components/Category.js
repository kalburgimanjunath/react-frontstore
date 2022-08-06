import React from 'react';
import { Link } from 'react-router-dom';
export default function Category({ Category }) {
  return (
    <div>
      {Category.map((item) => {
        return (
          <Link to={`../categorywise/${item}`}>
            <span class="badge bg-secondary" style={{ padding: 10, margin: 5 }}>
              {item}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

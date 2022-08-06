import React from 'react';
export default function Category({ Category }) {
  return (
    <div>
      {Category.map((item) => {
        return <span class="badge bg-secondary">{item}</span>;
      })}
    </div>
  );
}

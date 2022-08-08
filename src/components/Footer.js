import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div>
      Have awesome components to sell?{' '}
      <Link to="./upload">Upload Component</Link>
    </div>
  );
}

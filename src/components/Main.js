import React from 'react';
import Hero from './Hero';
import FilterList from './FilterList';
import Footer from './Footer';
export default function Main({ ProductList }) {
  return (
    <div style={{ flex: 1, justifyContent: 'center', alignText: 'center' }}>
      <div>
        <Hero />
      </div>
      <div>
        <FilterList products={ProductList} categorysearch="list" />
      </div>
      <Footer />
    </div>
  );
}

import React from 'react';
import Hero from './Hero';
import FilterList from './FilterList';
import Footer from './Footer';
export default function Main({ ProductList }) {
  const category = [
    'All',
    'Element',
    'Form',
    'Marketing',
    'Grid',
    'List',
    'Navigation',
    'Modal',
    'Social',
    'Complex',
    'Page',
    'Other',
  ];
  return (
    <div style={{ flex: 1, justifyContent: 'center', alignText: 'center' }}>
      <div>
        <Hero />
      </div>
      <div>
        <FilterList
          products={ProductList}
          categorysearch="all"
          category={category}
        />
      </div>
      <Footer />
    </div>
  );
}

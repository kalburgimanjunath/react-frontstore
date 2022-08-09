import React from 'react';
import Hero from './Hero';
import FilterList from './FilterList';
import Footer from './Footer';
import { useParams, Link } from 'react-router-dom';
export default function CategoryWise({ ProductList, categorysearch }) {
  const { id } = useParams();
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
    <div
      className="page"
      style={{ flex: 1, justifyContent: 'center', alignText: 'center' }}
    >
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="../">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {id}
            </li>
          </ol>
        </nav>

        <Hero />
      </div>
      <div>
        {id !== 'All' ? (
          <FilterList
            products={ProductList}
            categorysearch={id}
            category={category}
          />
        ) : (
          <FilterList
            products={ProductList}
            categorysearch="all"
            category={category}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

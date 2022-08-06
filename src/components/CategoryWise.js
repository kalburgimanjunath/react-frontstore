import React from 'react';
import Hero from './Hero';
import FilterList from './FilterList';
import Footer from './Footer';
import { useParams, Link } from 'react-router-dom';
export default function CategoryWise({ ProductList, categorysearch }) {
  const { id } = useParams();
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
        <FilterList products={ProductList} categorysearch={id} />
      </div>
      <Footer />
    </div>
  );
}

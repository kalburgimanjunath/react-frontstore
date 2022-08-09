import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FilterList from '../../components/FilterList';
export default function Templates({ ProductList }) {
  const { id } = useParams();
  const category = [
    'AllTemplates',
    'Profile',
    'Landing',
    'Form',
    'Portfolio',
    'Sanctioned',
  ];
  return (
    <div className="page">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-6 fw-bold fw-link">Choose a Starting Point</h1>

        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Or select one of the above categories to narrow things down a bit.
            You can also choose a blank canvas if you'd rather start from
            scratch.
          </p>
        </div>
      </div>
      <div>
        <div>
          <FilterList
            products={ProductList}
            categorysearch={id}
            category={category}
          />
        </div>
      </div>
    </div>
  );
}

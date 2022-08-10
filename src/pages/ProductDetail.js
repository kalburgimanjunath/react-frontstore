import React from 'react';
import { useParams } from 'react-router-dom';
import { TextStack } from '../components/FilterList';
import { Link } from 'react-router-dom';
export default function ProductDetail({ ProductList }) {
  const { id } = useParams();
  const filterData = ProductList.filter((item) => {
    return item.id == id;
  });
  return (
    <div className="page">
      <Link to="../">Back to Page</Link>
      <div>
        <h3>{filterData[0].title}</h3>
      </div>
      <div>
        <TextStack items={filterData[0].techStack} />
        <button
          className="btn btn-danger"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          View Demo
        </button>
        <button className="btn btn-secondary">Subscribe to Unlock</button> or
        <button className="btn btn-secondary">
          Buy for {filterData[0].price}
        </button>
      </div>
      <div style={{ padding: 20 }}>
        <img src={filterData[0].productImage} />
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

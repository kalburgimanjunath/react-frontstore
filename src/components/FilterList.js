import React from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';
export const TextStack = ({ items }) => {
  return items.map((item) => {
    return <span className="badge text-bg-success">{item}</span>;
  });
};
export default function FilterList({ products, categorysearch }) {
  // let categorysearch = 'list';
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
  let filterData;
  if (categorysearch !== 'all') {
    filterData = products.filter((item) => {
      return item.techStack.find((tech) => {
        return tech == categorysearch.toLowerCase();
      });
    });
    // console.log(filterData);
  } else {
    filterData = products;
  }

  return (
    <>
      <Category Category={category} />
      <div className="card-group">
        {filterData.map((item) => {
          return (
            <Link to={`productdetail/${item.id}`}>
              <div className="card" style={{ margin: 10 }}>
                <img
                  src={item.productImage}
                  size={300}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">{item.title} </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    {item.techStack && item.techStack.length > 0 ? (
                      <TextStack items={item.techStack} />
                    ) : (
                      ''
                    )}{' '}
                    <span>Price:{item.price}</span>
                    {/* <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal${item.id}`}
                    >
                      Mobal{`#exampleModal${item.id}`}
                    </button> */}
                  </small>
                </div>
              </div>
              <div
                className="modal fade"
                id={`#exampleModal${item.id}`}
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
            </Link>
          );
        })}
      </div>
    </>
  );
}

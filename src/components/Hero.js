import React from 'react';
import UnlockForm from './UnlockForm';
export default function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-6 fw-bold fw-link">
        FRONTWORK COMPONENT MARKETPLACE
      </h1>
      <h2 className="display-5 fw-regular">Buy and Sell Frontend Components</h2>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Buy and Sell Frontend Components Speed up development with React, Vue
          and HTML components. New components published weekly. Purchase
          individual items or subscribe to a monthly plan.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <UnlockForm />
        </div>
        <div>
          Get a free component download and emailed weekly with the best
          additions!
        </div>
      </div>
    </div>
  );
}

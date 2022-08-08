import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
export default function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <div>
        <div>
          <h3>Active Projects</h3>
          You don't have any active projects.
        </div>
        <div>
          <h3>Bids</h3>
          You don't have any open bids.
        </div>
        <div>
          <h3>Past Projects</h3>
          <div>You don't have any past projects.</div>
        </div>
      </div>
    </div>
  );
}

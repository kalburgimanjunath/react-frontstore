import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
export default function Upload() {
  return (
    <div className="page">
      <Formik>
        <Form>
          <div>
            <label htmlfor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlfor="price">
              Price (suggested price is $1-$10 per component)
            </label>
            <input type="text" name="price" />
          </div>
          <div>
            <label htmlfor="tags">Tags</label>
            <input type="text" name="tags" />
          </div>
          <div>
            <label htmlfor="screenshots">Screenshots (supports GIFs)</label>
            <input type="text" name="screenshots" />
          </div>
          <div>
            <label htmlfor="demoURL">
              Demo URL (a viewable demo or Storybook hosted on Vercel, Netlify
              or similar)
            </label>
            <input type="text" name="demoURL" />
          </div>
          <div>
            <label htmlfor="addinfo">
              Additional Information (shown when someone clicks on your
              component in the marketplace)
            </label>
            <input type="text" name="addinfo" />
          </div>
          <div>
            <label htmlfor="language">Languages</label>
            <select>
              <option>JavaScript</option>
              <option>TypeScript</option>
              <option>Flow</option>
            </select>
          </div>
          <div>
            <label htmlfor="language">Frameworks</label>
            <select>
              <option>React</option>
              <option>Vue</option>
              <option>Angular</option>
              <option>React Native</option>
              <option>Svelte</option>
              <option>WordPress</option>
            </select>
          </div>
          <div>
            <label htmlfor="language">Styling</label>
            <select>
              <option>CSS</option>
              <option>Sass</option>
              <option>Less</option>
              <option>Styled Components</option>
              <option>Emotion</option>
              <option>Tailwind</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            By publishing you agree to our{' '}
            <Link to="../howitworks">Terms and Conditions</Link>
          </div>
          <button type="button" className="btn btn-primary">
            Publish
          </button>
        </Form>
      </Formik>
    </div>
  );
}

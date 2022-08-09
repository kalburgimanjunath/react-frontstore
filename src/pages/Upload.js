import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
export default function Upload() {
  return (
    <div className="page">
      <Formik
        initialValues={{ price: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          } else {
            errors.name = 'Invalid name';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlfor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </div>
            <div>
              <label htmlfor="price">
                Price (suggested price is $1-$10 per component)
              </label>
              <input
                type="text"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </div>
            <div>
              <label htmlfor="tags">Tags</label>
              <input
                type="text"
                name="tags"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tags}
              />
            </div>
            <div>
              <label htmlfor="screenshots">Screenshots (supports GIFs)</label>
              <input
                type="file"
                name="screenshots"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.file}
              />
            </div>
            <div>
              <label htmlfor="demoURL">
                Demo URL (a viewable demo or Storybook hosted on Vercel, Netlify
                or similar)
              </label>
              <input
                type="text"
                name="demoURL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.demoURL}
              />
            </div>
            <div>
              <label htmlfor="addinfo">
                Additional Information (shown when someone clicks on your
                component in the marketplace)
              </label>
              <input
                type="text"
                name="addinfo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.addinfo}
              />
            </div>
            <div>
              <label htmlfor="language">Languages</label>
              <select onChange={handleChange} value={values.language}>
                <option>JavaScript</option>
                <option>TypeScript</option>
                <option>Flow</option>
              </select>
            </div>
            <div>
              <label htmlfor="frameworks">Frameworks</label>
              <select onChange={handleChange} value={values.frameworks}>
                <option>React</option>
                <option>Vue</option>
                <option>Angular</option>
                <option>React Native</option>
                <option>Svelte</option>
                <option>WordPress</option>
              </select>
            </div>
            <div>
              <label htmlfor="styling">Styling</label>
              <select onChange={handleChange} value={values.styling}>
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Publish
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

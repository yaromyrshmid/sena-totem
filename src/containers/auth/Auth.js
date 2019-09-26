import React from 'react';
import { Formik, Form, Field } from 'formik';

const Auth = (props) => {  

  return (
    <React.Fragment>
    <Formik
    initialValues={{ 
      email: '',
      password: ''
    }}
    onSubmit={(values, { setSubmitting }) => {

      props.submitHandler(values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting, values, setFieldValue }) => (
      <Form>
        <div>
          <label>
            <Field
              type="email"
              name="email"
              placeholder="Email"           
            />Email
          </label>
          <label>
            <Field
              type="password"
              name="password"
              placeholder="Password"              
            />Password
          </label>
        </div> 
        <button type="submit" disabled={isSubmitting}>
          Log In
        </button>
      </Form>
    )}
  </Formik>
  </React.Fragment>
  )
}

export default Auth;
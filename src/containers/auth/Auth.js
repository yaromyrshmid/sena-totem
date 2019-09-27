import React from 'react';
import { Formik, Form, Field } from 'formik';

import './Auth.css'
import { Container, Row, Col } from 'react-bootstrap';

const Auth = (props) => {  

  return (
    <Container>
      <Row>
        <Col>
          <div className="authForm">
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
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"           
                    />

                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"              
                    />
                <button type="submit" disabled={isSubmitting}>
                  Log In
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Auth;
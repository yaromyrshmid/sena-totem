import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';

import './Auth.css'
import { Container, Row, Col } from 'react-bootstrap';
import * as actions from '../../store/actions/index';

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
              props.logIn(values);
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

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (values) => dispatch(actions.logIn(values)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
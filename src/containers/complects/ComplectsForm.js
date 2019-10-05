import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from '../../axios';
import * as actions from '../../store/actions/index';

const ComplectsForm = props => {  

  const waresList = props.lists.wares.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });

  const subwaresList = props.lists.subwares.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });

  return (    
    <Formik
        initialValues={{
          name: '',
          complect: [
            {
              name: '',              
              copyColor: false
            }
          ]
      }}
      validate={values => {
        let errors = {};
        let checkIfComplectExists = 0;
        Object.keys(props.complectsData).map(key => {
          if (props.complectsData[key].name === values.name) {
            checkIfComplectExists++
          }
        })
        if ( checkIfComplectExists > 0 ) {
          errors.complectExists = 'Комплект вже існує'
        }
        if (values.name === '') {
          errors.name = 'Не внесено товару!'
        }
        if (values.complect.length < 1) {
          errors.complect = 'Не внесено супутнього товару!'
        }
        values.complect.map((line, index) => {          
          if (!values.complect[index].name || values.complect[index].name === '--Обери назву--' ) {
            errors.name = 'Назва супутнього товару не обрана!'
          }
        })
        return errors;
      }}

      isSubmitting={false}

      onSubmit={(values, { setSubmitting, resetForm }, initialValues) => {
        values.time = new Date().toISOString().split('T')[0];
        axios.post('/complects.json?auth=' + props.idToken, values)
        .then(response => {
          console.log(response);
          setSubmitting(false);
          const newComplectsData = {
            ...props.complectsData,
            [response.data.name]: values
          };
          props.setDataComplects(newComplectsData);
          resetForm(initialValues);
        })
        .catch(error => {
          props.showModal(error.response);
        })
      }}

      render={({ isSubmitting, values, setFieldValue }) => (
        <Container>
          <Row>
            <Col>
              <Form>
                <fieldset>
                  <label>Назва</label>
                  <Field component="select" name={`name`} >
                    <option value={'--Обери назву--'}>--Обери назву--</option>
                    {waresList}
                  </Field>
                </fieldset>               
                <FieldArray
                  name="complect"
                  render={arrayHelpers => (
                    <React.Fragment>
                      {values.complect && values.complect.length > 0 ? (
                        values.complect.map((line, index) => (
                          <Row key={index}>
                            <Col xs={5}>
                              <fieldset>
                                <label>Назва супутнього товару</label>
                                <Field component="select" name={`complect.${index}.name`} >
                                  <option value={'--Обери назву--'}>--Обери назву--</option>
                                  {subwaresList}
                                </Field>
                              </fieldset>
                            </Col>
                            <Col xs={2}>
                              <fieldset>
                                <label>Має колір</label>
                                <Field name={`complect.${index}.copyColor`} type="checkbox" value={`complect.${index}.copyColor`} className="checkbox"/>                          
                              </fieldset>
                            </Col>
                            <Col xs={1}>
                              <button
                                className="button-x"
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                x
                              </button>
                            </Col>
                          </Row>
                        ))
                      ) : null 
                      }
                      <Row>
                        <Col>
                          <button type="button" onClick={() => {
                            arrayHelpers.push({
                              name: '',              
                              copyColor: false
                            })
                          }}>                    
                            Додати рядок
                          </button>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={{ span: 3, offset: 9 }}>
                          <button className="submitData" type="submit" disabled={isSubmitting}>Внести</button>
                        </Col>
                      </Row>
                    </React.Fragment>
                  )}
                />
              </Form>
          </Col>
        </Row>
      </Container>
      )}
    />

  )
}

const mapStateToProps = state => {
  return {
    complectsData: state.data.complectsData,
    lists: state.data.lists,
    idToken: state.auth.idToken
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDataComplects: (complectsData) => dispatch(actions.setDataComplects(complectsData)),
    showModal: (response) => dispatch(actions.showModal(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplectsForm);
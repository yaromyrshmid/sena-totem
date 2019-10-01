import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
import axios from '../../axios';

const ExpForm = props => {
  const waresList = props.list.wares.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });

  const subwaresList = props.list.subwares.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });

  const colorsList = props.list.colors.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });


  return (    
    <Formik
      initialValues={{
        price: '',
        income: [
          {
            type: '',
            name: '',
            color: 'н/з',
            quantity: ''
          }
        ]
      }}
      validate={values => {
        let errors = {};
        if (!values.price || isNaN(values.price)) {
          errors.price = 'Невірна ціна!'
        }        
        values.income.map((line, index) => {
          if (!values.income[index].type) {
            errors.type = 'Категорія товару не обрана!'
          }
          if (!values.income[index].name) {
            errors.name = 'Назва товару не обрана!'
          }
          if (isNaN(values.income[index].quantity) || values.income[index].quantity === 0 || values.income[index].quantity === '') {
            errors.quantity = 'Невірна кількість!'
          }
        })
        return errors;
      }}

      isSubmitting={false}

      onSubmit={(values, { setSubmitting }) => {
        values.time = new Date().toISOString().split('T')[0];
        axios.post('/inc.json?auth=' + props.authData.idToken, values)
        .then(response => {
          console.log(response);
          setSubmitting(false);
          props.formSubmitHandler(response, values)
        })
      }}
      render={({ isSubmitting, values, setFieldValue }) => (
        <Container>
          <Row>
            <Col>
              <Form>
                <Row>
                  <Col>
                    <label>
                      Ціна
                      <Field className="input-number" name="price" type="number"/>
                      <span className="errorMessage"><ErrorMessage name="price" /></span>
                      <span className="errorMessage"><ErrorMessage name="type"/></span>
                      <span className="errorMessage"><ErrorMessage name="name"/></span>
                      <span className="errorMessage"><ErrorMessage name="quantity"/></span>    
                    </label>
                  </Col>
                </Row>
                <FieldArray
                  name="income"
                  render={arrayHelpers => (
                    <React.Fragment>
                      {values.income && values.income.length > 0 ? (
                        values.income.map((line, index) => (
                          <Row key={index}>
                            <Col>
                              <fieldset>
                                <Field
                                  className="radioInput"
                                  type="radio"
                                  name={`income.${index}.type`}
                                  value="Товар"
                                  checked={values.income[index].type === "Товар"}
                                  onChange={() => setFieldValue(`income.${index}.type`, "Товар")}
                                />
                                <label>Товар</label>

                              
                                <Field
                                  className="radioInput"
                                  type="radio"
                                  name={`income.${index}.type`}
                                  value="Супутній товар"
                                  checked={values.income[index].type === "Супутній товар"}
                                  onChange={() => setFieldValue(`income.${index}.type`, "Супутній товар")}
                                />
                                <label>Супутній товар</label>
                              </fieldset>
                              <fieldset>
                                <label>Назва</label>
                                <Field component="select" name={`income.${index}.name`} placeholder='111'>
                                  {values.income[index].type === 'Товар' && waresList}
                                  {values.income[index].type === 'Супутній товар' && subwaresList}
                                </Field>    
                              
                                <label>Колір</label>
                                <Field component="select" name={`income.${index}.color`}>
                                  {colorsList}
                                </Field>
                                
                                <label>Кількість</label>
                                <Field className="input-number" name={`income.${index}.quantity`} type="number"/>                          
                              </fieldset>
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
                            type: '',
                            name: '',
                            color: 'н/з',
                            quantity: ''                          
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

export default ExpForm;
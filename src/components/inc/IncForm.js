import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from '../../axios';
import * as actions from '../../store/actions/index';

const IncForm = props => {
  const [complectErrorMessage, setComplectErrorMessage] = useState(null);

  const waresList = props.lists.wares.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });

  const subwaresList = props.lists.subwares.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });

  const colorsList = props.lists.colors.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });
  
  const complectFormHandler = (values) => {
    if (values.income.length > 0) {
      if (values.income[0].quantity > 0 && values.income[0].color !== 'н/з') {
        if (values.income[0].type === 'Товар' && values.income.length === 1 && values.income[0].name !== '') {
          setComplectErrorMessage(null);
          let complect = null;
          Object.keys(props.complectsData).map(key => {
            if (props.complectsData[key].name === values.income[0].name) {
              complect = props.complectsData[key].complect;
            }
          })
          complect.map(key => {
            values.income.push({
              type: 'Супутній товар',
              name: key.name,
              color: key.copyColor ? values.income[0].color : 'н/з',
              quantity: values.income[0].quantity                          
              })
          })
          setComplectErrorMessage(<span>Готово!</span>);
        } else {
          setComplectErrorMessage(<span className="errorMessage">Не обрано товар!</span>);
        }
      } else {
        setComplectErrorMessage(<span className="errorMessage">Не вказано кількість або колір!</span>);
      }      
    } else {
      setComplectErrorMessage(<span className="errorMessage">Не обрано товар!</span>);
    }
  }


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
        if (values.income.length < 1) {
          errors.income = 'Не внесено товару!'
        }
        values.income.map((line, index) => {
          if (!values.income[index].type) {
            errors.type = 'Категорія товару не обрана!'
          }
          if (!values.income[index].name || values.income[index].name === '--Обери назву--' ) {
            errors.name = 'Назва товару не обрана!'
          }
          if (isNaN(values.income[index].quantity) || values.income[index].quantity === 0 || values.income[index].quantity === '') {
            errors.quantity = 'Невірна кількість!'
          }
        })
        return errors;
      }}

      isSubmitting={false}

      onSubmit={(values, { setSubmitting, resetForm }, initialValues) => {
        values.time = new Date().toISOString().split('T')[0];
        axios.post('/inc.json?auth=' + props.idToken, values)
        .then(response => {
          console.log(response);
          setSubmitting(false);
          const newIncData = {
            ...props.incData,
            [response.data.name]: values
          };
          props.setDataInc(newIncData);
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
                <Row>
                  <Col xs={2}>
                    <label>
                      Ціна
                      <Field className="input-number" name="price" type="number"/>
                      <span className="errorMessage"><ErrorMessage name="price" /></span>
                      <span className="errorMessage"><ErrorMessage name="type"/></span>
                      <span className="errorMessage"><ErrorMessage name="name"/></span>
                      <span className="errorMessage"><ErrorMessage name="quantity"/></span>    
                    </label>
                  </Col>
                  <Col  xs={10}>
                    <button type="button" 
                      onClick={() => complectFormHandler(values)}
                    > Комплект </button>
                    {complectErrorMessage}
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
                                <Field component="select" name={`income.${index}.name`} >
                                  <option value={'--Обери назву--'}>--Обери назву--</option>
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
                            name: 'Обери назву',
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

const mapStateToProps = state => {
  return {
    incData: state.data.incData,
    lists: state.data.lists,
    complectsData: state.data.complectsData,
    idToken: state.auth.idToken
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDataInc: (incData) => dispatch(actions.setDataInc(incData)),
    showModal: (response) => dispatch(actions.showModal(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncForm);
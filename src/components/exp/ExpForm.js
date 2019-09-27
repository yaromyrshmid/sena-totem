import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';

const ExpForm = props => {
  
  const waresList = props.list.wares.map((item) => {
    return <option key={item} value={item} />
  });

  const subwaresList = props.list.subwares.map((item) => {
    return <option key={item} value={item} />
  });

  const expsList = props.list.exps.map((item) => {
    return <option key={item} value={item} />
  });

  const colorsList = props.list.colors.map((item) => {
    return <option key={item} value={item} />
  });

  return (
    <Formik
    initialValues={{ 
      type: '',
      name: '',
      color: '',
      quantity: '',
      totalPrice: ''
    }}
    validate={values => {
      let errors = {};
      if (!values.type) {
        errors.type = 'Необхідно обрати категорію!'
      }
      if (!values.name) {
        errors.name = 'Необхідно внести назву!'
      }
      if (isNaN(values.quantity) || ((values.quantity === 0 || values.quantity === '') && (values.type === 'Товар' || values.type === 'Супутній товар'))) {
        errors.quantity = 'Невірна кількість!'
      }
      if (!values.totalPrice || isNaN(values.totalPrice)) {
        errors.totalPrice = 'Невірна вартість!'
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting }, initialValues) => {
      values.time = new Date().toISOString().split('T')[0];
      if(values.color.trim() === '') {
        values.color = 'н/з';
      }
      values.quantity = Number(values.quantity);
      values.totalPrice = Number(values.totalPrice)
      props.formSubmitHandler(values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting, values, setFieldValue }) => (
      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>                  
                  <Field
                    className="radioInput"
                    type="radio"
                    name="type"
                    value="Товар"
                    checked={values.type === "Товар"}
                    onChange={() => setFieldValue("type", "Товар")}
                  />
                  <label>Товар</label>                  
                  <Field
                    className="radioInput"
                    type="radio"
                    name="type"
                    value="Супутній товар"
                    checked={values.type === "Супутній товар"}
                    onChange={() => setFieldValue("type", "Супутній товар")}
                  />
                  <label>Супутній товар</label>                  
                  <Field
                    className="radioInput"
                    type="radio"
                    name="type"
                    value="Витрата"
                    checked={values.type === "Витрата"}
                    onChange={() => setFieldValue("type", "Витрата")}
                  />
                  <label>Витрата</label>
                  <span className="errorMessage">
                    <ErrorMessage name="type" />
                  </span>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label>Назва</label>
                  <Field name="name" list="name" />              
                    <datalist id="name">
                      {values.type === 'Товар' && waresList}
                      {values.type === 'Супутній товар' && subwaresList}
                      {values.type === 'Витрата' && expsList}
                    </datalist>
                  <span className="errorMessage">
                    <ErrorMessage name="name" />
                  </span>                  
                  <label>Колір</label>
                  <Field name="color" list="color" />              
                    <datalist id="color">
                      {colorsList}
                    </datalist>        
                  
                  <label>Кількість</label>
                  <Field 
                    className="input-number"
                    name="quantity" 
                    type="number"         
                    disabled={values.type === 'Витрата'}/>  
                  <span className="errorMessage">
                    <ErrorMessage name="quantity" />
                  </span>                     
                  <label>Вартість</label>
                  <Field className="input-number" name="totalPrice" type="number"/>
                  <span className="errorMessage">
                    <ErrorMessage name="totalPrice" />
                  </span>                        
                  <label>Ціна за одиницю</label>
                  <Field 
                    className="input-number"
                    name="price" 
                    value={(isNaN(values.totalPrice / values.quantity) || values.type === 'Витрата') ? 0 : values.totalPrice / values.quantity} 
                    onChange={() => setFieldValue("price", values.totalPrice / values.quantity)}
                    disabled/>
                </Col>
              </Row>

              <Row>                            
                <Col xs={{span: 3, offset: 9}}>
                  <button className="submitData" type="submit" disabled={isSubmitting}>
                    Внести
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    )}
  </Formik>
  )
}

export default ExpForm;
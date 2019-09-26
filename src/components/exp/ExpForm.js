import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
      <Form>
        <div>
          <label>
            <Field
              type="radio"
              name="type"
              value="Товар"
              checked={values.type === "Товар"}
              onChange={() => setFieldValue("type", "Товар")}
            />Товар
          </label>
          <label>
            <Field
              type="radio"
              name="type"
              value="Супутній товар"
              checked={values.type === "Супутній товар"}
              onChange={() => setFieldValue("type", "Супутній товар")}
            />Супутній товар
          </label>
          <label>
            <Field
              type="radio"
              name="type"
              value="Витрата"
              checked={values.type === "Витрата"}
              onChange={() => setFieldValue("type", "Витрата")}
            />Витрата
          </label>
          <span className="errorMessage"><ErrorMessage name="type" /></span>
        </div>

        <label>
          Назва
          <Field name="name" list="name" />              
            <datalist id="name">
              {values.type === 'Товар' && waresList}
              {values.type === 'Супутній товар' && subwaresList}
              {values.type === 'Витрата' && expsList}
            </datalist>
            <span className="errorMessage"><ErrorMessage name="name" /></span>     
        </label>
        <label>
          Колір
          <Field name="color" list="color" />              
            <datalist id="color">
              {colorsList}
            </datalist>        
        </label>
        <label>
          Кількість
          <Field 
            name="quantity" 
            type="number"         
            disabled={values.type === 'Витрата'}/>                          
          <span className="errorMessage"><ErrorMessage name="quantity" /></span>   
        </label>
        <label>
          Вартість
          <Field name="totalPrice" type="number"/>
          <span className="errorMessage"><ErrorMessage name="totalPrice" /></span>
        </label>
        <label>
          Ціна за одиницю
          <Field 
            name="price" 
            value={(isNaN(values.totalPrice / values.quantity) || values.type === 'Витрата') ? 0 : values.totalPrice / values.quantity} 
            onChange={() => setFieldValue("price", values.totalPrice / values.quantity)}
            disabled/> 
        </label>
 
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
  )
}

export default ExpForm;
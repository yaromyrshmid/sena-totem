import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

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
      onSubmit={(values, { setSubmitting }, initialValues) => {
        values.time = new Date().toISOString().split('T')[0];
        props.formSubmitHandler(values);
        console.log(values)
        setSubmitting(false);
      }}
      render={({ isSubmitting, values, setFieldValue, errors }) => (
        <Form>
          <label>
            Ціна
            <Field name="price" type="number"/>
            <span className="errorMessage"><ErrorMessage name="price" /></span>
            <span className="errorMessage"><ErrorMessage name="type"/></span>
            <span className="errorMessage"><ErrorMessage name="name"/></span>
            <span className="errorMessage"><ErrorMessage name="quantity"/></span>    
          </label>
          <FieldArray
            name="income"
            render={arrayHelpers => (
              <div>
                {values.income && values.income.length > 0 ? (
                  values.income.map((line, index) => (
                    <div key={index}>

                      <label>
                        <Field
                          type="radio"
                          name={`income.${index}.type`}
                          value="Товар"
                          checked={values.income[index].type === "Товар"}
                          onChange={() => setFieldValue(`income.${index}.type`, "Товар")}
                        />Товар
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name={`income.${index}.type`}
                          value="Супутній товар"
                          checked={values.income[index].type === "Супутній товар"}
                          onChange={() => setFieldValue(`income.${index}.type`, "Супутній товар")}
                        />Супутній товар
                      </label>                 
                      <label>
                        Назва
                        <Field component="select" name={`income.${index}.name`}>
                          {values.income[index].type === 'Товар' && waresList}
                          {values.income[index].type === 'Супутній товар' && subwaresList}
                        </Field>    
                      </label>
                      <label>
                        Колір
                        <Field component="select" name={`income.${index}.color`}>
                          {colorsList}
                        </Field>
                      </label>
                      <label>
                        Кількість
                        <Field name={`income.${index}.quantity`} type="number"/>                          
                      </label>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        X
                      </button>
                    </div>
                  ))
                ) : null 
                }
                <div>
                  <button type="button" onClick={() => arrayHelpers.push({
                    type: '',
                    name: '',
                    color: 'н/з',
                    quantity: ''
                  })}>                    
                    Add new Line
                  </button>
                  <button type="submit" disabled={isSubmitting}>Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />

  )
}

export default ExpForm;
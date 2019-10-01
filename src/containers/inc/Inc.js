import React from 'react';

import IncForm from '../../components/inc/IncForm';
import IncTable from '../../components/inc/IncTable';

const Inc = props => {

  return (
    <React.Fragment>
      <IncForm 
        formSubmitHandler={props.onFormSubmitHandler}
        list={props.list}
        authData={props.authData}
        />
      <IncTable incData={props.incData} deleteRowHandler={props.onDeleteRowHandler} />
    </React.Fragment>
  )
}

export default Inc;
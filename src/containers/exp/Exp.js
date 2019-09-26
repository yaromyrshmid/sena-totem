import React, { useState, useEffect } from 'react';

import ExpForm from '../../components/exp/ExpForm';
import ExpTable from '../../components/exp/ExpTable';

const Exp = props => {


  useEffect(() => {
    
  }, [props])

  return (
    <React.Fragment>
      <ExpForm 
        formSubmitHandler={props.onFormSubmitHandler} 
        list={props.list}
        />
      <ExpTable expData={props.expData} deleteRowHandler={props.onDeleteRowHandler} />
    </React.Fragment>
  )
};

export default Exp;
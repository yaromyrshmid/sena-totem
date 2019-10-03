import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import axios from '../../axios';
import * as actions from '../../store/actions/index';


const ExpTable = props => {
  const deleteRowHandler = (event) => {
    const id = event.target.id;
    axios.delete('/exp/' + id + '.json?auth=' + props.idToken)
    .then( res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    })
    const newExpData = {};
    for (const key in props.expData) {
      if (key !== id) {
        newExpData[key] = props.expData[key]
      }
    }
    props.setDataExp(newExpData);
  }

  
  const table = (!props.expData) ? null : (
    Object.keys(props.expData).reverse().map((expKey, index) => {
      return (
        <tr key={expKey}>
          <td>{index+1}</td>
          <td>{props.expData[expKey].time}</td>
          <td>{props.expData[expKey].type}</td>
          <td>{props.expData[expKey].name}</td>
          <td>{props.expData[expKey].color}</td>
          <td>{props.expData[expKey].quantity}</td>
          <td>{props.expData[expKey].totalPrice}</td>
          <td>{(props.expData[expKey].totalPrice / props.expData[expKey].quantity).toFixed(2)}</td>
          <td><button id={expKey} onClick={deleteRowHandler}>x</button></td>
        </tr>
      )
    }) 
  )  
  
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Дата</th>
            <th>Тип</th>
            <th>Назва</th>
            <th>Колір</th>
            <th>Кількість</th>
            <th>Вартість</th>
            <th>Ціна за одиницю</th>
            <th>Видалити</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </Table>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    expData: state.data.expData,
    idToken: state.auth.idToken
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDataExp: (expData) => dispatch(actions.setDataExp(expData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpTable);
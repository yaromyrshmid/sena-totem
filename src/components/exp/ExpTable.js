import React from 'react';
import { Table } from 'react-bootstrap';


const ExpTable = props => {
  
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
          <td><button id={expKey} onClick={props.deleteRowHandler}>x</button></td>
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

export default ExpTable;
import React from 'react';
import { Table } from 'react-bootstrap';


const IncTable = props => {
  const table = (!props.incData) ? null : (
    Object.keys(props.incData).reverse().map((incKey, index) => {
      const complect = props.incData[incKey].income.map((line, index) => {
        return (
          <tr key={`${incKey}_${index}`}>
            <td></td>
            <td></td>
            <td>{line.type}</td>
            <td>{line.name}</td>
            <td>{line.color}</td>
            <td>{line.quantity}</td>
            <td></td>
            <td></td>
          </tr>
        )
      })
      return (
        <tbody key={incKey}>
          <tr>
            <td>{index+1}</td>
            <td>{props.incData[incKey].time}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{props.incData[incKey].price}</td>
            <td><button id={incKey} onClick={props.deleteRowHandler}>x</button></td>
          </tr>
          {complect}
        </tbody>
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
            <th>Ціна</th>
            <th>Видалити</th>           
          </tr>
        </thead>
        {table}
      </Table>
    </React.Fragment>
  )
}

export default IncTable;
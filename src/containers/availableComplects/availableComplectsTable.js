import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const AvailableComplectsTable = props => {
  console.log(props);

  const table = props.loaded
    ? props.availableComplectsData.reverse().map((ware, index) => {
        const topRow = (
          <tr>
            <th>{index + 1}</th>
            <th>{ware.name}</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        );
        const wareTable = ware.colors.map((coloredWare, wareIndex) => {
          const wareRow = (
            <tr key={`${index + 1}.${wareIndex + 1}`}>
              <th>{`${index + 1}.${wareIndex + 1}`}</th>
              <th>{ware.name}</th>
              <th>{coloredWare.color}</th>
              <th>{coloredWare.minQuantity}</th>
              <th>{coloredWare.quantity}</th>
            </tr>
          );

          const itemRows = coloredWare.items.map((item, itemIndex) => {
            return (
              <tr key={`${index + 1}.${wareIndex + 1}.${itemIndex}`}>
                <td></td>
                <td>{item.name}</td>
                <td></td>
                <td></td>
                <td>{item.quantity}</td>
              </tr>
            );
          });

          return [wareRow, itemRows];
        });
        return (
          <tbody key={index}>
            {topRow}
            {wareTable}
          </tbody>
        );
      })
    : null;

  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Товар</th>
            <th>Колір</th>
            <th>Кількість комплектів</th>
            <th>Кількість одиниць</th>
          </tr>
        </thead>
        {table}
      </Table>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    availableComplectsData: state.data.availableComplectsData,
    loaded: state.data.loaded
  };
};

export default connect(mapStateToProps)(AvailableComplectsTable);

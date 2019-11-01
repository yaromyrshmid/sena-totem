import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "../../axios";

import * as actions from "../../store/actions/index";

const ComplectsTable = props => {
  const deleteRowHandler = event => {
    const id = event.target.id;
    axios
      .delete("/balance/complects/" + id + ".json?auth=" + props.idToken)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        props.showModal(error.response);
      });
    const newComplectsData = {};
    for (const key in props.complectsData) {
      if (key !== id) {
        newComplectsData[key] = props.complectsData[key];
      }
    }
    props.setDataComplects(newComplectsData);
  };

  const table = props.loaded
    ? Object.keys(props.complectsData)
        .reverse()
        .map((complectKey, index) => {
          const complect = props.complectsData[complectKey].complect.map(
            (line, index) => {
              return (
                <tr key={`${complectKey}_${index}`}>
                  <td></td>
                  <td>{line.name}</td>
                  <td>{line.copyColor ? "Так" : "Ні"}</td>
                  <td></td>
                </tr>
              );
            }
          );
          return (
            <tbody key={complectKey}>
              <tr>
                <td>{index + 1}</td>
                <td>{props.complectsData[complectKey].name}</td>
                <td></td>
                <td>
                  <button id={complectKey} onClick={deleteRowHandler}>
                    x
                  </button>
                </td>
              </tr>
              {complect}
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
            <th>Назва</th>
            <th>Чи має колір</th>
            <th>Видалити</th>
          </tr>
        </thead>
        {table}
      </Table>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    complectsData: state.data.complectsData,
    loaded: state.data.loaded,
    idToken: state.auth.idToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDataComplects: complectsData =>
      dispatch(actions.setDataComplects(complectsData)),
    showModal: response => dispatch(actions.showModal(response))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComplectsTable);

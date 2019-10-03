import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import * as actions from '../../store/actions/index';
import TotalExpInc from './charts/TotalExpInc';
import './Statistics.css'

const Statistics = props => {
  const [tablesLoaded, setTablesLoaded] = useState(false);
  const [expIncProfitChartData, setExpIncProfitChartData] = useState({
    exp: 0,
    inc: 0,
    profit: 0
  })

  useEffect(() => {
    props.countTotalStats(props.expTable, props.incTable);
    props.checkForIncErrors(props.expTable, props.incTable);
    setTablesLoaded(true);
  }, [props.expTable, props.incTable] )

  useEffect(() => {
    if (tablesLoaded) {
      const newChartData = {
        exp: props.totalStatsTable.exp.ware + props.totalStatsTable.exp.subware + props.totalStatsTable.exp.exp,
        inc: props.totalStatsTable.inc.ware + props.totalStatsTable.inc.subware,
        profit: props.totalStatsTable.inc.ware + props.totalStatsTable.inc.subware - (props.totalStatsTable.exp.ware + props.totalStatsTable.exp.subware + props.totalStatsTable.exp.exp)
      }
      setExpIncProfitChartData(newChartData)
    }
  }, [tablesLoaded])

  const errors = tablesLoaded ? (
    props.incErrors.map((error, index) => {
      return (
        <p key={index}>
          <span className="errorMessage">{Object.keys(error).toString()}, колір: {error[Object.keys(error)].color}, кількість: {error[Object.keys(error)].quantity}, загальна вартість {error[Object.keys(error)].totalPrice}</span>
        </p>
        )
    })
  ) : null
  return (
    <Container>
      <Row>
        <Col>
          <div className="chart">
            <TotalExpInc chartData={expIncProfitChartData} />
          </div>
        </Col>
      </Row>
      {props.incErrors.length > 0 &&
        <Row>
          <Col>
            <h1>Виявлено помилки у доходах:</h1>
            {errors}
          </Col>
        </Row> }
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    expTable: state.tables.expTable,
    incTable: state.tables.incTable,
    totalStatsTable: state.tables.totalStatsTable,
    incErrors: state.tables.incErrors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    countTotalStats: (expTable, incTable) => dispatch(actions.countTotalStats(expTable, incTable)),
    checkForIncErrors: (expTable, incTable) => dispatch(actions.checkForIncErrors(expTable, incTable))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
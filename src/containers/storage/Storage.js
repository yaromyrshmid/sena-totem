import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import StorageTable from '../../components/storage/StorageTable';
import * as actions from '../../store/actions/index';

const Storage = props => {
  useEffect(() => {
    props.createExpTable(props.expData);
    props.createIncTable(props.incData);
  }, [props] )
  
  return (
    <React.Fragment>
      <StorageTable />
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    expData: state.data.expData,
    incData: state.data.incData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createExpTable: (expData) => dispatch(actions.createExpTable(expData)),
    createIncTable: (incData) => dispatch(actions.createIncTable(incData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Storage);
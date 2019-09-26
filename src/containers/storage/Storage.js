import React, { useState, useEffect } from 'react';

import StorageTable from '../../components/storage/StorageTable';

const Storage = props => {
  const [expTable, setExpTable] = useState(null);
  const [incTable, setIncTable] = useState(null);

  useEffect(() => {
    const tableE = countExpTable();
    const tableI = countIncTable();    
    setExpTable(tableE);
    setIncTable(tableI);
  }, [props] )
  
  const countIncTable = () => {
    const tableIncWares = {};
    const tablIncSubWares = {};
    //Check if incData received
    if (!props.incData || !props.expData) {
      return null
    } else {
      //Iteration through income instances
      Object.keys(props.incData).map((incKey, index) => {
        //Maping each income item
        props.incData[incKey].income.map((incItem, incIndex) => {
          //Creating object to push into income arrays
          const item = {type: incItem.type}
          const totalPrice = (incIndex === 0) ? props.incData[incKey].price : 0;
          item[incItem.name] = {
            color: incItem.color,
            quantity: incItem.quantity,
            totalPrice: totalPrice,
            price: incItem.quantity / totalPrice
          }
          //Checking if object is ware
          if (item.type === "Товар") {
            //Checking if ware already exists
            if (tableIncWares[props.incData[incKey].income[incIndex].name]) {
              let isColor = false;
              //Iterating through color of each ware
              for (let i = 0; i < tableIncWares[props.incData[incKey].income[incIndex].name].length; i++ ) {
                //Checking if color exists
                if (tableIncWares[props.incData[incKey].income[incIndex].name][i].color === item[incItem.name].color) {
                  //Amending item if color exist
                  tableIncWares[props.incData[incKey].income[incIndex].name][i].quantity += item[incItem.name].quantity;
                  tableIncWares[props.incData[incKey].income[incIndex].name][i].totalPrice += item[incItem.name].totalPrice;
                  tableIncWares[props.incData[incKey].income[incIndex].name][i].price = tableIncWares[props.incData[incKey].income[incIndex].name][i].totalPrice / tableIncWares[props.incData[incKey].income[incIndex].name][i].quantity;
                  isColor = true
                } 
              }
              //Adding array item if no such color
              if (!isColor) {
                tableIncWares[props.incData[incKey].income[incIndex].name].push(item[incItem.name])  
              }
              //Adding object if no such ware
            } else {
              tableIncWares[props.incData[incKey].income[incIndex].name] = []
              tableIncWares[props.incData[incKey].income[incIndex].name].push(item[incItem.name])
            }
            
          } else if (item.type === "Супутній товар") {
            if (tablIncSubWares[props.incData[incKey].income[incIndex].name]) {
              let isColor = false;
              for (let i = 0; i < tablIncSubWares[props.incData[incKey].income[incIndex].name].length; i++ ) {
                if (tablIncSubWares[props.incData[incKey].income[incIndex].name][i].color === item[incItem.name].color) {
                  tablIncSubWares[props.incData[incKey].income[incIndex].name][i].quantity += item[incItem.name].quantity;
                  tablIncSubWares[props.incData[incKey].income[incIndex].name][i].totalPrice += item[incItem.name].totalPrice;
                  tablIncSubWares[props.incData[incKey].income[incIndex].name][i].price = tablIncSubWares[props.incData[incKey].income[incIndex].name][i].totalPrice / tablIncSubWares[props.incData[incKey].income[incIndex].name][i].quantity;
                  isColor = true
                } 
              }
              if (!isColor) {
                tablIncSubWares[props.incData[incKey].income[incIndex].name].push(item[incItem.name])
              }
            } else {
              tablIncSubWares[props.incData[incKey].income[incIndex].name] = []
              tablIncSubWares[props.incData[incKey].income[incIndex].name].push(item[incItem.name])
            }
          }

        })

      })

    }
    const tableInc = {
      ware: tableIncWares,
      subware: tablIncSubWares
    }
    return tableInc;
  }

  const countExpTable = () => {
    const tableExpWares = {};
    const tableExpSubWares = {};
    const tableExpExp = {};
    if (!props.incData || !props.expData) {
      return null
    } else {
      // Iterating through expences
      Object.keys(props.expData).map((expKey, index) => {
        //Checking if is a ware
        if (props.expData[expKey].type === 'Товар') {
          //Checking if ware is in a table
          if (tableExpWares.hasOwnProperty(props.expData[expKey].name)) {
            let isColor = false;
            //Checking if ware color in a table
            for (let i = 0; i < tableExpWares[props.expData[expKey].name].length; i++ ) {
              //Adding to table if ware color is present
              if (props.expData[expKey].color === tableExpWares[props.expData[expKey].name][i].color) {
                tableExpWares[props.expData[expKey].name][i].quantity += props.expData[expKey].quantity;
                tableExpWares[props.expData[expKey].name][i].totalPrice += props.expData[expKey].totalPrice;
                tableExpWares[props.expData[expKey].name][i].price = tableExpWares[props.expData[expKey].name][i].totalPrice / tableExpWares[props.expData[expKey].name][i].quantity;
                isColor = true
              } 
            }
            //Adding to table if ware color is new
            if (!isColor) {
              const ware = {};
              ware.color = props.expData[expKey].color;
              ware.quantity = props.expData[expKey].quantity;
              ware.totalPrice = props.expData[expKey].totalPrice;
              ware.price = props.expData[expKey].totalPrice / props.expData[expKey].quantity;
              tableExpWares[props.expData[expKey].name].push(ware);
            }
          } 
          //Adding to table if ware is new
          else {
            tableExpWares[props.expData[expKey].name] = [];
            const ware = {};
            ware.color = props.expData[expKey].color;
            ware.quantity = props.expData[expKey].quantity;
            ware.totalPrice = props.expData[expKey].totalPrice;
            ware.price = props.expData[expKey].totalPrice / props.expData[expKey].quantity;
            tableExpWares[props.expData[expKey].name].push(ware);
          }
        }

        //Checking if is a subware
        if (props.expData[expKey].type === 'Супутній товар') {
          //Checking if ware is in a table
          if (tableExpSubWares.hasOwnProperty(props.expData[expKey].name)) {
            let isColor = false;
            //Checking if ware color in a table
            for (let i = 0; i < tableExpSubWares[props.expData[expKey].name].length; i++ ) {
              //Adding to table if ware color is present
              if (props.expData[expKey].color === tableExpSubWares[props.expData[expKey].name][i].color) {
                tableExpSubWares[props.expData[expKey].name][i].quantity += props.expData[expKey].quantity;
                tableExpSubWares[props.expData[expKey].name][i].totalPrice += props.expData[expKey].totalPrice;
                tableExpSubWares[props.expData[expKey].name][i].price = tableExpSubWares[props.expData[expKey].name][i].totalPrice / tableExpSubWares[props.expData[expKey].name][i].quantity;
                isColor = true
              } 
            }
            //Adding to table if ware color is new
            if (!isColor) {
              const ware = {};
              ware.color = props.expData[expKey].color;
              ware.quantity = props.expData[expKey].quantity;
              ware.totalPrice = props.expData[expKey].totalPrice;
              ware.price = props.expData[expKey].totalPrice / props.expData[expKey].quantity;
              tableExpSubWares[props.expData[expKey].name].push(ware);
            }
          } 
          //Adding to table if ware is new
          else {
            tableExpSubWares[props.expData[expKey].name] = [];
            const ware = {};
            ware.color = props.expData[expKey].color;
            ware.quantity = props.expData[expKey].quantity;
            ware.totalPrice = props.expData[expKey].totalPrice;
            ware.price = props.expData[expKey].totalPrice / props.expData[expKey].quantity;
            tableExpSubWares[props.expData[expKey].name].push(ware);
          }
        }

        //Checking if is an expence
        if (props.expData[expKey].type === 'Витрата') {
          //Checking if ware is in a table
          if (tableExpExp.hasOwnProperty(props.expData[expKey].name)) {
            let isColor = false;
            //Checking if ware color in a table
            for (let i = 0; i < tableExpExp[props.expData[expKey].name].length; i++ ) {
              //Adding to table if ware color is present
              if (props.expData[expKey].color === tableExpExp[props.expData[expKey].name][i].color) {
                tableExpExp[props.expData[expKey].name][i].quantity += props.expData[expKey].quantity;
                tableExpExp[props.expData[expKey].name][i].totalPrice += props.expData[expKey].totalPrice;
                tableExpExp[props.expData[expKey].name][i].price = tableExpExp[props.expData[expKey].name][i].totalPrice / tableExpExp[props.expData[expKey].name][i].quantity;
                isColor = true
              } 
            }
            //Adding to table if ware color is new
            if (!isColor) {
              const ware = {};
              ware.color = props.expData[expKey].color;
              ware.quantity = props.expData[expKey].quantity;
              ware.totalPrice = props.expData[expKey].totalPrice;
              ware.price = props.expData[expKey].totalPrice / props.expData[expKey].quantity;
              tableExpExp[props.expData[expKey].name].push(ware);
            }
          } 
          //Adding to table if ware is new
          else {
            tableExpExp[props.expData[expKey].name] = [];
            const ware = {};
            ware.color = props.expData[expKey].color;
            ware.quantity = props.expData[expKey].quantity;
            ware.totalPrice = props.expData[expKey].totalPrice;
            ware.price = props.expData[expKey].totalPrice / props.expData[expKey].quantity;
            tableExpExp[props.expData[expKey].name].push(ware);
          }
        }

        return '';          
      })      
    }
    const tableExp = {
      ware: tableExpWares,
      subware: tableExpSubWares,
      exp: tableExpExp
    }
    return tableExp;
  }

  return (
    <React.Fragment>
      <StorageTable expTable={expTable} incTable={incTable}/>
    </React.Fragment>
  )
}

export default Storage;
import * as actionTypes from './actionTypes';

export const createExpTable = (expData) => {
  const tableExpWares = {};
  const tableExpSubWares = {};
  const tableExpExp = {};
  const expTable = {};
  if (expData) {
    // Iterating through expences
    Object.keys(expData).map((expKey, index) => {
      //Checking if is a ware
      if (expData[expKey].type === 'Товар') {
        //Checking if ware is in a table
        if (tableExpWares.hasOwnProperty(expData[expKey].name)) {
          let isColor = false;
          //Checking if ware color in a table
          for (let i = 0; i < tableExpWares[expData[expKey].name].length; i++ ) {
            //Adding to table if ware color is present
            if (expData[expKey].color === tableExpWares[expData[expKey].name][i].color) {
              tableExpWares[expData[expKey].name][i].quantity += expData[expKey].quantity;
              tableExpWares[expData[expKey].name][i].totalPrice += expData[expKey].totalPrice;
              tableExpWares[expData[expKey].name][i].price = tableExpWares[expData[expKey].name][i].totalPrice / tableExpWares[expData[expKey].name][i].quantity;
              isColor = true
            } 
          }
          //Adding to table if ware color is new
          if (!isColor) {
            const ware = {};
            ware.color = expData[expKey].color;
            ware.quantity = expData[expKey].quantity;
            ware.totalPrice = expData[expKey].totalPrice;
            ware.price = expData[expKey].totalPrice / expData[expKey].quantity;
            tableExpWares[expData[expKey].name].push(ware);
          }
        } 
        //Adding to table if ware is new
        else {
          tableExpWares[expData[expKey].name] = [];
          const ware = {};
          ware.color = expData[expKey].color;
          ware.quantity = expData[expKey].quantity;
          ware.totalPrice = expData[expKey].totalPrice;
          ware.price = expData[expKey].totalPrice / expData[expKey].quantity;
          tableExpWares[expData[expKey].name].push(ware);
        }
      }

      //Checking if is a subware
      if (expData[expKey].type === 'Супутній товар') {
        //Checking if ware is in a table
        if (tableExpSubWares.hasOwnProperty(expData[expKey].name)) {
          let isColor = false;
          //Checking if ware color in a table
          for (let i = 0; i < tableExpSubWares[expData[expKey].name].length; i++ ) {
            //Adding to table if ware color is present
            if (expData[expKey].color === tableExpSubWares[expData[expKey].name][i].color) {
              tableExpSubWares[expData[expKey].name][i].quantity += expData[expKey].quantity;
              tableExpSubWares[expData[expKey].name][i].totalPrice += expData[expKey].totalPrice;
              tableExpSubWares[expData[expKey].name][i].price = tableExpSubWares[expData[expKey].name][i].totalPrice / tableExpSubWares[expData[expKey].name][i].quantity;
              isColor = true
            } 
          }
          //Adding to table if ware color is new
          if (!isColor) {
            const ware = {};
            ware.color = expData[expKey].color;
            ware.quantity = expData[expKey].quantity;
            ware.totalPrice = expData[expKey].totalPrice;
            ware.price = expData[expKey].totalPrice / expData[expKey].quantity;
            tableExpSubWares[expData[expKey].name].push(ware);
          }
        } 
        //Adding to table if ware is new
        else {
          tableExpSubWares[expData[expKey].name] = [];
          const ware = {};
          ware.color = expData[expKey].color;
          ware.quantity = expData[expKey].quantity;
          ware.totalPrice = expData[expKey].totalPrice;
          ware.price = expData[expKey].totalPrice / expData[expKey].quantity;
          tableExpSubWares[expData[expKey].name].push(ware);
        }
      }

      //Checking if is an expence
      if (expData[expKey].type === 'Витрата') {
        //Checking if ware is in a table
        if (tableExpExp.hasOwnProperty(expData[expKey].name)) {
          let isColor = false;
          //Checking if ware color in a table
          for (let i = 0; i < tableExpExp[expData[expKey].name].length; i++ ) {
            //Adding to table if ware color is present
            if (expData[expKey].color === tableExpExp[expData[expKey].name][i].color) {
              tableExpExp[expData[expKey].name][i].quantity += expData[expKey].quantity;
              tableExpExp[expData[expKey].name][i].totalPrice += expData[expKey].totalPrice;
              tableExpExp[expData[expKey].name][i].price = tableExpExp[expData[expKey].name][i].totalPrice / tableExpExp[expData[expKey].name][i].quantity;
              isColor = true
            } 
          }
          //Adding to table if ware color is new
          if (!isColor) {
            const ware = {};
            ware.color = expData[expKey].color;
            ware.quantity = expData[expKey].quantity;
            ware.totalPrice = expData[expKey].totalPrice;
            ware.price = expData[expKey].totalPrice / expData[expKey].quantity;
            tableExpExp[expData[expKey].name].push(ware);
          }
        } 
        //Adding to table if ware is new
        else {
          tableExpExp[expData[expKey].name] = [];
          const ware = {};
          ware.color = expData[expKey].color;
          ware.quantity = expData[expKey].quantity;
          ware.totalPrice = expData[expKey].totalPrice;
          ware.price = expData[expKey].totalPrice / expData[expKey].quantity;
          tableExpExp[expData[expKey].name].push(ware);
        }
      }    
    })      
    expTable.ware = tableExpWares;
    expTable.subware = tableExpSubWares;
    expTable.exp = tableExpExp;
  }
  return {
    type: actionTypes.CREATE_EXP_TABLE,
    expTable: expTable
  };
};

export const createIncTable = (incData) => {
  const tableIncWares = {};
  const tableIncSubWares = {};
  const incTable = {};
  //Check if incData received
  if (incData) {
    //Iteration through income instances
    Object.keys(incData).map((incKey, index) => {
      //Maping each income item
      incData[incKey].income.map((incItem, incIndex) => {
        //Creating object to push into income arrays
        const item = {type: incItem.type}
        const totalPrice = (incIndex === 0) ? incData[incKey].price : 0;
        item[incItem.name] = {
          color: incItem.color,
          quantity: incItem.quantity,
          totalPrice: totalPrice,
          price: incItem.quantity / totalPrice
        }
        //Checking if object is ware
        if (item.type === "Товар") {
          //Checking if ware already exists
          if (tableIncWares[incData[incKey].income[incIndex].name]) {
            let isColor = false;
            //Iterating through color of each ware
            for (let i = 0; i < tableIncWares[incData[incKey].income[incIndex].name].length; i++ ) {
              //Checking if color exists
              if (tableIncWares[incData[incKey].income[incIndex].name][i].color === item[incItem.name].color) {
                //Amending item if color exist
                tableIncWares[incData[incKey].income[incIndex].name][i].quantity += item[incItem.name].quantity;
                tableIncWares[incData[incKey].income[incIndex].name][i].totalPrice += item[incItem.name].totalPrice;
                tableIncWares[incData[incKey].income[incIndex].name][i].price = tableIncWares[incData[incKey].income[incIndex].name][i].totalPrice / tableIncWares[incData[incKey].income[incIndex].name][i].quantity;
                isColor = true
              } 
            }
            //Adding array item if no such color
            if (!isColor) {
              tableIncWares[incData[incKey].income[incIndex].name].push(item[incItem.name])  
            }
            //Adding object if no such ware
          } else {
            tableIncWares[incData[incKey].income[incIndex].name] = []
            tableIncWares[incData[incKey].income[incIndex].name].push(item[incItem.name])
          }
          
        } else if (item.type === "Супутній товар") {
          if (tableIncSubWares[incData[incKey].income[incIndex].name]) {
            let isColor = false;
            for (let i = 0; i < tableIncSubWares[incData[incKey].income[incIndex].name].length; i++ ) {
              if (tableIncSubWares[incData[incKey].income[incIndex].name][i].color === item[incItem.name].color) {
                tableIncSubWares[incData[incKey].income[incIndex].name][i].quantity += item[incItem.name].quantity;
                tableIncSubWares[incData[incKey].income[incIndex].name][i].totalPrice += item[incItem.name].totalPrice;
                tableIncSubWares[incData[incKey].income[incIndex].name][i].price = tableIncSubWares[incData[incKey].income[incIndex].name][i].totalPrice / tableIncSubWares[incData[incKey].income[incIndex].name][i].quantity;
                isColor = true
              } 
            }
            if (!isColor) {
              tableIncSubWares[incData[incKey].income[incIndex].name].push(item[incItem.name])
            }
          } else {
            tableIncSubWares[incData[incKey].income[incIndex].name] = []
            tableIncSubWares[incData[incKey].income[incIndex].name].push(item[incItem.name])
          }
        }
      })
    })
    incTable.ware = tableIncWares;
    incTable.subware = tableIncSubWares;
  }

  return {
    type: actionTypes.CREATE_INC_TABLE,
    incTable: incTable
  };
} 

export const countTotalStats = (expTable, incTable) => {
  const totalStatsTable = {
    exp: {
      ware: 0,
      subware: 0,
      exp: 0
    },
    inc: {
      ware: 0,
      subware: 0
    }
  };
  if (expTable && Object.keys(expTable).length > 0) {
    if (Object.keys(expTable.ware).length > 0 && Object.keys(expTable.subware).length > 0 && Object.keys(expTable.exp).length > 0) {
      Object.keys(expTable).map(type => {        
        Object.keys(expTable[type]).map(item => {
          expTable[type][item].map(coloredItem => {
            totalStatsTable.exp[type] += coloredItem.totalPrice
          })
        })
      })
    }
  }

  if (incTable && Object.keys(incTable).length > 0) {
    if (Object.keys(incTable.ware).length > 0 && Object.keys(incTable.subware).length > 0) {
      Object.keys(incTable).map(type => {        
        Object.keys(incTable[type]).map(item => {
          incTable[type][item].map(coloredItem => {
            totalStatsTable.inc[type] += coloredItem.totalPrice
          })
        })
      })
    }
  }
  return {
    type: actionTypes.COUNT_TOTAL_STATS,
    totalStatsTable: totalStatsTable
  }
}

export const checkForIncErrors = (expTable, incTable) => {
  const totalIncTable = {
    ...incTable.ware,
    ...incTable.subware
  }
  const totalExpTable = {
    ...expTable.ware,
    ...expTable.subware
  }
  const incErrors = [];

  Object.keys(totalIncTable).map(inc => {
    totalIncTable[inc].map((coloredInc, index) => {
      if (!totalExpTable[inc]) {
        incErrors.push({[`${inc}`]: 0})
      } else {
        let expNotIncluded = true
        totalExpTable[inc].map(coloredExp => {
          if (coloredExp.color === coloredInc.color) {
            expNotIncluded = false
          }
        })
        if (expNotIncluded) {
          incErrors.push({[`${inc}`]: coloredInc})
        }
      }  
    })
  })
  return {
    type: actionTypes.CHECK_FOR_INC_ERRORS,
    incErrors: incErrors
  }
}
import React from 'react';
import { Table } from 'react-bootstrap';


const StorageTable = props => {

  //Creating form for last summing row
  const lastRow = {
    quantityE: 0,
    totalPriceE: 0,
    quantityI: 0,
    totalPriceI: 0,
    quantityS: 0,
    totalPriceS: 0
  };

  //Creating storage table
  const table = (!props.expTable && !props.incTable) ? null : (
    //Iterating through wares in expTable
    Object.keys(props.expTable.ware).sort().map((wareName, wareIndex) => {
      //Creating new ware object
      const ware = {};
      ware.name = wareName;
      ware.colors = [];
      //Pushing colors into ware object
      for (let colorIndex = 0; colorIndex < props.expTable.ware[wareName].length; colorIndex++ ) {
        //Creating color object
        const coloredWare = {};
        coloredWare.color = props.expTable.ware[wareName][colorIndex].color;
        coloredWare.quantityE = props.expTable.ware[wareName][colorIndex].quantity;
        coloredWare.totalPriceE = props.expTable.ware[wareName][colorIndex].totalPrice;
        coloredWare.priceE = props.expTable.ware[wareName][colorIndex].price;
        //Checking if ware is in incTable
        if (props.incTable.ware[wareName]) {
          
          //Checking if ware has same color in incTable
          let incomeColorIndex = false;
          for (let i = 0; i < props.incTable.ware[wareName].length; i++) {
            if (props.incTable.ware[wareName][i].color === coloredWare.color) {
              incomeColorIndex = i;
            } 
          }
          //Passing income info to the colored ware
          //If color exists in income
          if (typeof incomeColorIndex == 'number') {
            coloredWare.quantityI = props.incTable.ware[wareName][incomeColorIndex].quantity;
            coloredWare.totalPriceI =  props.incTable.ware[wareName][incomeColorIndex].totalPrice;
            coloredWare.priceI = (props.incTable.ware[wareName][incomeColorIndex].price !== Infinity) ? props.incTable.ware[wareName][incomeColorIndex].price : 0;
            coloredWare.quantityS = coloredWare.quantityE - coloredWare.quantityI;
            coloredWare.priceS = coloredWare.priceI ? coloredWare.priceI : coloredWare.priceE;
            coloredWare.totalPriceS = coloredWare.priceS * coloredWare.quantityS;
          } 
          //If color doesn't exist in income
          else {
            coloredWare.quantityI = 0;
            coloredWare.totalPriceI = 0;
            coloredWare.priceI = 0;
            coloredWare.quantityS = coloredWare.quantityE;
            coloredWare.totalPriceS = coloredWare.totalPriceE;
            coloredWare.priceS = coloredWare.priceE;
          }          
        //If ware doesn't exist in income
        } else {
          coloredWare.quantityI = 0;
          coloredWare.totalPriceI = 0;
          coloredWare.priceI = 0;
          coloredWare.quantityS = coloredWare.quantityE;
          coloredWare.totalPriceS = coloredWare.totalPriceE;
          coloredWare.priceS = coloredWare.priceE;
        }        

        ware.colors.push(coloredWare);        
      }

      ware.quantityE = 0;
      ware.quantityI = 0;
      ware.quantityS = 0;
      ware.totalPriceE = 0;
      ware.totalPriceI = 0;
      ware.totalPriceS = 0;
      //Summing up data from colors
      ware.colors.map(colorWare => {
        ware.quantityE += colorWare.quantityE;
        ware.quantityI += colorWare.quantityI;
        ware.quantityS += colorWare.quantityS;
        ware.totalPriceE += colorWare.totalPriceE;
        ware.totalPriceI += colorWare.totalPriceI;
        ware.totalPriceS += colorWare.totalPriceS;
      })
      //Counting prices for ware
      ware.priceE = ware.totalPriceE / ware.quantityE;
      ware.priceI = (ware.totalPriceI === 0 || ware.quantityI === 0) ? 0 : ware.totalPriceI / ware.quantityI;
      ware.priceS = ware.totalPriceS / ware.quantityS;
      //Creating ware row
      const topRow = (
        <tr>
          <th>{wareIndex+1}</th>
          <th>{ware.name}</th>
          <th></th>
          <th>{ware.quantityE}</th>
          <th>{(ware.totalPriceE).toFixed(0)}</th>
          <th>{(ware.priceE).toFixed(2)}</th>
          <th>{ware.quantityI}</th>
          <th>{(ware.totalPriceI).toFixed(0)}</th>
          <th>{(ware.priceI).toFixed(2)}</th>
          <th>{ware.quantityS}</th>
          <th>{(ware.totalPriceS).toFixed(0)}</th>
          <th>{(ware.priceS).toFixed(2)}</th>
        </tr>
      )
      //Creating color rows
      const rows = ware.colors.map((wareColor, wareColorIndex) => {
        return (
          <tr key={`${ware.name}_${wareColor.color}`}> 
            <td>{`${wareIndex+1}.${wareColorIndex+1}`}</td>
            <td></td>
            <td>{wareColor.color}</td>
            <td>{wareColor.quantityE}</td>
            <td>{(wareColor.totalPriceE).toFixed(0)}</td>
            <td>{(wareColor.priceE).toFixed(2)}</td>
            <td>{wareColor.quantityI}</td>
            <td>{(wareColor.totalPriceI).toFixed(0)}</td>
            <td>{(wareColor.priceI).toFixed(2)}</td>
            <td>{wareColor.quantityS}</td>
            <td>{(wareColor.totalPriceS).toFixed(0)}</td>
            <td>{(wareColor.priceS).toFixed(2)}</td>
          </tr>
        )
      })
      //Amending total row
      lastRow.quantityE += ware.quantityE;
      lastRow.totalPriceE += ware.totalPriceE;
      lastRow.quantityI += ware.quantityI;
      lastRow.totalPriceI += ware.totalPriceI;
      lastRow.quantityS += ware.quantityS;
      lastRow.totalPriceS += ware.totalPriceS;

      return (
        <tbody key={wareName}>
          {topRow}
          {rows}
        </tbody>
      )    
    })
  )

    //Creating storage subwarestable
    const tableSubwares = (!props.expTable && !props.incTable) ? null : (
      //Iterating through wares in expTable
      Object.keys(props.expTable.subware).sort().map((wareName, wareIndex) => {
        //Creating new ware object
        const ware = {};
        ware.name = wareName;
        ware.colors = [];
        //Pushing colors into ware object
        for (let colorIndex = 0; colorIndex < props.expTable.subware[wareName].length; colorIndex++ ) {
          //Creating color object
          const coloredWare = {};
          coloredWare.color = props.expTable.subware[wareName][colorIndex].color;
          coloredWare.quantityE = props.expTable.subware[wareName][colorIndex].quantity;
          coloredWare.totalPriceE = props.expTable.subware[wareName][colorIndex].totalPrice;
          coloredWare.priceE = props.expTable.subware[wareName][colorIndex].price;
          //Checking if ware is in incTable
          if (props.incTable.ware[wareName]) {
            
            //Checking if ware has same color in incTable
            let incomeColorIndex = false;
            for (let i = 0; i < props.incTable.ware[wareName].length; i++) {
              if (props.incTable.ware[wareName][i].color === coloredWare.color) {
                incomeColorIndex = i;
              } 
            }
            //Passing income info to the colored ware
            //If color exists in income
            if (typeof incomeColorIndex == 'number') {
              coloredWare.quantityI = props.incTable.ware[wareName][incomeColorIndex].quantity;
              coloredWare.totalPriceI =  props.incTable.ware[wareName][incomeColorIndex].totalPrice;
              coloredWare.priceI = (props.incTable.ware[wareName][incomeColorIndex].price !== Infinity) ? props.incTable.ware[wareName][incomeColorIndex].price : 0;
              coloredWare.quantityS = coloredWare.quantityE - coloredWare.quantityI;
              coloredWare.priceS = coloredWare.priceI ? coloredWare.priceI : coloredWare.priceE;
              coloredWare.totalPriceS = coloredWare.priceS * coloredWare.quantityS;
            } 
            //If color doesn't exist in income
            else {
              coloredWare.quantityI = 0;
              coloredWare.totalPriceI = 0;
              coloredWare.priceI = 0;
              coloredWare.quantityS = coloredWare.quantityE;
              coloredWare.totalPriceS = coloredWare.totalPriceE;
              coloredWare.priceS = coloredWare.priceE;
            }          
          //If ware doesn't exist in income
          } else {
            coloredWare.quantityI = 0;
            coloredWare.totalPriceI = 0;
            coloredWare.priceI = 0;
            coloredWare.quantityS = coloredWare.quantityE;
            coloredWare.totalPriceS = coloredWare.totalPriceE;
            coloredWare.priceS = coloredWare.priceE;
          }        
  
          ware.colors.push(coloredWare);        
        }
  
        ware.quantityE = 0;
        ware.quantityI = 0;
        ware.quantityS = 0;
        ware.totalPriceE = 0;
        ware.totalPriceI = 0;
        ware.totalPriceS = 0;
        //Summing up data from colors
        ware.colors.map(colorWare => {
          ware.quantityE += colorWare.quantityE;
          ware.quantityI += colorWare.quantityI;
          ware.quantityS += colorWare.quantityS;
          ware.totalPriceE += colorWare.totalPriceE;
          ware.totalPriceI += colorWare.totalPriceI;
          ware.totalPriceS += colorWare.totalPriceS;
        })
        //Counting prices for ware
        ware.priceE = ware.totalPriceE / ware.quantityE;
        ware.priceI = (ware.totalPriceI === 0 || ware.quantityI === 0) ? 0 : ware.totalPriceI / ware.quantityI;
        ware.priceS = ware.totalPriceS / ware.quantityS;
        //Creating ware row
        const topRow = (
          <tr>
            <th>{wareIndex+1}</th>
            <th>{ware.name}</th>
            <th></th>
            <th>{ware.quantityE}</th>
            <th>{(ware.totalPriceE).toFixed(0)}</th>
            <th>{(ware.priceE).toFixed(2)}</th>
            <th>{ware.quantityI}</th>
            <th>{(ware.totalPriceI).toFixed(0)}</th>
            <th>{(ware.priceI).toFixed(2)}</th>
            <th>{ware.quantityS}</th>
            <th>{(ware.totalPriceS).toFixed(0)}</th>
            <th>{(ware.priceS).toFixed(2)}</th>
          </tr>
        )
        //Creating color rows
        const rows = ware.colors.map((wareColor, wareColorIndex) => {
          return (
            <tr key={`${ware.name}_${wareColor.color}`}> 
              <td>{`${wareIndex+1}.${wareColorIndex+1}`}</td>
              <td></td>
              <td>{wareColor.color}</td>
              <td>{wareColor.quantityE}</td>
              <td>{(wareColor.totalPriceE).toFixed(0)}</td>
              <td>{(wareColor.priceE).toFixed(2)}</td>
              <td>{wareColor.quantityI}</td>
              <td>{(wareColor.totalPriceI).toFixed(0)}</td>
              <td>{(wareColor.priceI).toFixed(2)}</td>
              <td>{wareColor.quantityS}</td>
              <td>{(wareColor.totalPriceS).toFixed(0)}</td>
              <td>{(wareColor.priceS).toFixed(2)}</td>
            </tr>
          )
        })
        //Amending total row
        lastRow.quantityE += ware.quantityE;
        lastRow.totalPriceE += ware.totalPriceE;
        lastRow.quantityI += ware.quantityI;
        lastRow.totalPriceI += ware.totalPriceI;
        lastRow.quantityS += ware.quantityS;
        lastRow.totalPriceS += ware.totalPriceS;
  
        return (
          <tbody key={wareName}>
            {topRow}
            {rows}
          </tbody>
        )    
      })
    )


  //Creating total row
  const lastRowTable = (
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th>{lastRow.quantityE}</th>
      <th>{lastRow.totalPriceE}</th>
      <th></th>
      <th>{lastRow.quantityI}</th>
      <th>{lastRow.totalPriceI}</th>
      <th></th>
      <th>{lastRow.quantityS}</th>
      <th>{(lastRow.totalPriceS).toFixed(2)}</th>
      <th></th>
    </tr>
  )
  
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Товар</th>
            <th>Колір</th>
            <th>Кількість виготовлено</th>
            <th>Вартість виготовлено</th>
            <th>Собівартість одиниці</th>
            <th>Кількість продано</th>
            <th>Вартість продано</th>
            <th>Ціна одиниці продано</th>
            <th>Кількість на складі</th>
            <th>Вартість на складі</th>
            <th>Ціна одиниці на складі</th>
          </tr>
        </thead>

          {table}
          {tableSubwares}
        <tbody>
          {lastRowTable}
        </tbody>
      </Table>
    </React.Fragment>
  )
}

export default StorageTable;
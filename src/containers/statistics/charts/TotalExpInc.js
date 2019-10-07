import React from 'react';
import { VictoryBar } from 'victory';

export const TotalExpInc = props => {
  return (
    <VictoryBar
      data={[
        {x: 1, y: props.chartData.exp, y0: 0, label: "Витрати", labelNumber: props.chartData.exp},
        {x: 2, y: props.chartData.inc, y0: 0, label: "Доходи", labelNumber: props.chartData.inc},     
        {x: 3, y: props.chartData.inc, y0: props.chartData.exp, label: "Прибуток", labelNumber: props.chartData.profit},        
      ]}
      events={[
        {
          target: "data",
          eventHandlers: {
            onClick: () => {
              return [{
                target: "labels",
                mutation: (props) => {
                  return props.text === `${props.datum.labelNumber.toFixed(0)} грн.` ?
                    null : { text: `${props.datum.labelNumber.toFixed(0)} грн.` }
                }
              }];
            }
          }
        }
      ]}
  />
  )
}

export default TotalExpInc;
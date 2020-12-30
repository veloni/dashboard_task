import React, { useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryScatter, VictoryAxis } from 'victory';

const Test = () => {

var data = [];

dateX.forEach(function(item, index){
  data[index] = {
    x: dateX[index],
    y: dateY[index]
  }
  
});

console.log(data);


const chartTheme = {
  axis: {
      style: {
      ticks: {
          size: 100,
      },
      grid: {
      },
      axis: {
      },
      tickLabels: {
          fontSize: 100
          },
      Labels: {
          },
      },
  },
};

  return (
    
    <VictoryChart 
                            height={ 1500 } 
                            width={ 1500 }
                            theme={ chartTheme }
                   >
                <VictoryAxis 
                        tickValues={[]}
                        width={500}
           
                   ></VictoryAxis>

                <VictoryAxis dependentAxis crossAxis
                
                        tickValues={[0,50,70]}
                />
                   <VictoryLine 
                        interpolation="natural"
                        style={{data: { stroke: "#7F7FD5", strokeWidth: 4 } }}
                        data={data}
                   />

               </VictoryChart>
   
  );
};

export default Test;
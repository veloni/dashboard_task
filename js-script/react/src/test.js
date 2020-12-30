import React, { useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryScatter, VictoryAxis, chartTheme } from 'victory';

const Test = () => {

var data = [];




dateX.forEach(function(item, index){
  data[index] = {
    x: dateX[index],
    y: dateY[index]
  }
  
});

console.log(data);

  return (
    
    <VictoryChart 
                            height={ 1500 } 
                            width={ 1500 }
                         
                   >
                <VictoryAxis 
                        tickValues={[]}
                        width={400}
                   ></VictoryAxis>

                <VictoryAxis dependentAxis crossAxis
                        tickValues={[]}
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
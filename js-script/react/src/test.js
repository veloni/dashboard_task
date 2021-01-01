import React, { useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const graphLineal = () => {

var data = [];

dateX.forEach(function(item, index){
  data[index] = {
    x: dateX[index],
    y: dateY[index]
  }
  
});

//console.log(data);

let maxNumberX = 0;
let minNumberX = 0;
let maxNumberY = 0;
let minNumberY = 0;
let labelX = [];

if (dateX.length === 12)
  {
    maxNumberX = 12;
    minNumberX = 0;
    labelX = monthMassiveRecutionForLinealGraph;
  }
else
{
  maxNumberX = Math.max.apply(Math, dateX);
  minNumberX = Math.min.apply(Math, dateX);
}

maxNumberY = Math.max.apply(Math, dateY);
minNumberY = Math.min.apply(Math, dateY);



const chartTheme = {
  axis: {
      style: {
      ticks: {
        size: 15,
        stroke: "white"
      },
      grid: {
        stroke: "#C4C4C4"
      },
      axis: {
        stroke: "#C4C4C4"
      },
      axisLabel: {
   
      },
      tickLabels: {
          fontSize: 40,
          stroke: "#C4C4C4"
         
          },
      Labels: {
          },
      },
  },
};

  return (
    
    <VictoryChart 
                            height={ 1000 } 
                            width={ 1250 }
                            theme={ chartTheme }

                   >
                <VictoryAxis 
                        tickValues={labelX}
                        domain={[minNumberX-minNumberX/1.5, maxNumberX+maxNumberX/50]}
                      
                   ></VictoryAxis>

                <VictoryAxis dependentAxis crossAxis
                    tickValues={[]}

                    domain={[minNumberY-minNumberY/1.5, maxNumberY+maxNumberY/50]}
                    
                />
                   <VictoryLine 
                        interpolation="natural"
                        style={{data: { stroke: "#109CF1", strokeWidth: 5 } }}
                        data={data}
                   />

               </VictoryChart>
   
  );
};

export default graphLineal;
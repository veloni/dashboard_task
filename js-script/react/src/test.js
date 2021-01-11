import React, { useEffect, useState} from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const graphLineal = () => {

  const [victoryData, setVictoryData] = useState(data);
  const [victoryMinNumberX, setVictoryMinNumberX] = useState(minNumberX);
  const [victoryMaxNumberX, setVictoryMaxNumberX] = useState(maxNumberX);
  const [victoryMinNumberY, setVictoryMinNumberY] = useState(minNumberY);
  const [victoryMaxNumberY, setVictoryMaxNumberY] = useState(maxNumberY);

  const getNewData = () =>{
    setVictoryData(data);
    setVictoryMinNumberX(minNumberX);
    setVictoryMaxNumberX(maxNumberX);
    setVictoryMinNumberY(minNumberY);
    setVictoryMaxNumberY(maxNumberY);
  }

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
              Labels: {},
          },
      },
  };
  
  return (
    <div>
      <button
        className="dn js-trigger-charts"
        onClick={() => getNewData()}
      />

      <VictoryChart 
        height={ 1000 } 
        width={ 1750 }
        theme={ chartTheme }
      >
          <VictoryAxis 
            tickValues={labelX}
            domain={[victoryMinNumberX, victoryMaxNumberX]}
          ></VictoryAxis>

          <VictoryAxis dependentAxis crossAxis
            tickValues={[]}
            domain={[victoryMinNumberY-victoryMinNumberY/1.5, victoryMaxNumberY+victoryMaxNumberY/50]}
          />
                    
          <VictoryLine 
            interpolation="natural"
            style={{data: { stroke: "#109CF1", strokeWidth: 5 } }}
            data={victoryData}
          />
      </VictoryChart>
    </div>
  );
};

export default graphLineal;
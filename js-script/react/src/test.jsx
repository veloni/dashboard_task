import React, { useEffect, useState} from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const graphLineal = () => {

  const [victoryData, setVictoryData] = useState(data);
  const [victoryMinNumberX, setVictoryMinNumberX] = useState(minNumberX);
  const [victoryMaxNumberX, setVictoryMaxNumberX] = useState(maxNumberX);
  const [victoryMinNumberY, setVictoryMinNumberY] = useState(minNumberY);
  const [victoryMaxNumberY, setVictoryMaxNumberY] = useState(maxNumberY);

  const [asideOpenState, setAsideOpenState] = useState(true);
  const [fontSize, setFontSize] = useState(30);
  const [addWidthGraph, setAddWidthGraph] = useState(1550);
  const [addHeightGraph, setAddHeightGraph] = useState(750);

  const getNewData = () =>{
    setVictoryData(data);
    setVictoryMinNumberX(minNumberX);
    setVictoryMaxNumberX(maxNumberX);
    setVictoryMinNumberY(minNumberY);
    setVictoryMaxNumberY(maxNumberY);
  }

  const reRenderForAsideMove = () =>{
    if (asideOpenState){
      setAddWidthGraph(1700);
      setFontSize(35);
      setAddHeightGraph(800);
    } else {
      setAddWidthGraph(1550);
      setFontSize(30);
      setAddHeightGraph(750);
    }
    setAsideOpenState(!asideOpenState);
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
                  fontSize: fontSize,
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

      <button
        className="dn js-trigger-aside"
        onClick={() => reRenderForAsideMove()}
      />

      <VictoryChart 
        height={ addHeightGraph } 
        width={ addWidthGraph}
        theme={ chartTheme }
      >
          <VictoryAxis 
            tickValues={labelX}
            domain={[victoryMinNumberX-victoryMinNumberX/100, victoryMaxNumberX + victoryMaxNumberX/100 ]}
          ></VictoryAxis>

          <VictoryAxis dependentAxis crossAxis
            tickValues={[]}
            domain={[victoryMinNumberY-victoryMinNumberY, victoryMaxNumberY + victoryMaxNumberY/4]}
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
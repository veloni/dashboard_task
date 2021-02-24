import React, { useEffect, useState} from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const Graph = () => {

  const [victoryData, setVictoryData] = useState(data);
  const [victoryMinNumberX, setVictoryMinNumberX] = useState(minNumberX);
  const [victoryMaxNumberX, setVictoryMaxNumberX] = useState(maxNumberX);
  const [victoryMinNumberY, setVictoryMinNumberY] = useState(minNumberY);
  const [victoryMaxNumberY, setVictoryMaxNumberY] = useState(maxNumberY);

  const [asideOpenState, setAsideOpenState] = useState(true);
  
  const [fontSize, setFontSize] = useState(40);
  const [addWidthGraph, setAddWidthGraph] = useState(window.innerWidth);
  const [addHeightGraph, setAddHeightGraph] = useState(window.innerHeight);

  const getNewData = () =>{
    setVictoryData(data);
    setVictoryMinNumberX(minNumberX);
    setVictoryMaxNumberX(maxNumberX);
    setVictoryMinNumberY(minNumberY);
    setVictoryMaxNumberY(maxNumberY);
  }

  window.addEventListener(`resize`, event => {
    if (asideOpen){
      setAddWidthGraph(window.innerWidth + 150);
      setFontSize(45);
      setAddHeightGraph(window.innerHeight + 50);
    } else {
      setAddWidthGraph(window.innerWidth);
      setFontSize(40);
      setAddHeightGraph(window.innerHeight);
    } 
  }, false);
  
  const reRenderForAsideMove = () =>{
    if (asideOpenState){
      setAddWidthGraph(window.innerWidth + 150);
      setFontSize(45);
      setAddHeightGraph(window.innerHeight + 50);
    } else {
      setAddWidthGraph(window.innerWidth);
      setFontSize(40);
      setAddHeightGraph(window.innerHeight);
    }
    setAsideOpenState(!asideOpenState);
    return;
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

export default Graph;
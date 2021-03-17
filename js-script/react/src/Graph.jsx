import React, { useState} from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const Graph = () => {
  const [victoryData, setVictoryData] = useState(_dataForGraph);
  const [victory_minNumberX, setVictory_minNumberX] = useState(_minNumberX);
  const [victory_maxNumberX, setVictory_maxNumberX] = useState(_maxNumberX);
  const [victory_minNumberY, setVictory_minNumberY] = useState(_minNumberY);
  const [victory_maxNumberY, setVictory_maxNumberY] = useState(_maxNumberY);
  const [asideOpenState, setAsideOpenState] = useState(true);

  const [fontSize, setFontSize] = useState(40);
  const [addWidthGraph, setAddWidthGraph] = useState(window.innerWidth);
  const [addHeightGraph, setAddHeightGraph] = useState(window.innerHeight);

  const getNewData = () =>{
    setVictoryData(_dataForGraph);
    setVictory_minNumberX(_minNumberX);
    setVictory_maxNumberX(_maxNumberX);
    setVictory_minNumberY(_minNumberY);
    setVictory_maxNumberY(_maxNumberY);
  };

  window.addEventListener(`resize`, event => {
    if (_asideOpen) {
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
        height={addHeightGraph} 
        width={addWidthGraph}
        theme={chartTheme}
      >
        <VictoryAxis 
          tickValues={_labelX}
          domain={[victory_minNumberX - victory_minNumberX / 100, victory_maxNumberX + victory_maxNumberX / 100]}
        />
        <VictoryAxis
          dependentAxis 
          crossAxis
          tickValues={[]}
          domain={[victory_minNumberY - victory_minNumberY, victory_maxNumberY + victory_maxNumberY / 4]}
        />
        <VictoryLine 
          interpolation="natural"
          style={{data: { stroke: "#109CF1", strokeWidth: 5}}}
          data={victoryData}
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;
import React, { useState, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const Graph = () => {
  const [victoryData, setVictoryData] = useState(_dataForGraph);
  const [victoryMinNumberX, setVictoryMinNumberX] = useState(_minNumberX);
  const [victoryMaxNumberX, setVictoryMaxNumberX] = useState(_maxNumberX);
  const [victoryMinNumberY, setVictoryMinNumberY] = useState(_minNumberY);
  const [victoryMaxNumberY, setVictoryMaxNumberY] = useState(_maxNumberY);
  const [asideOpenState, setAsideOpenState] = useState(true);

  const [fontSize, setFontSize] = useState(40);
  const [addWidthGraph, setAddWidthGraph] = useState(window.innerWidth);
  const [addHeightGraph, setAddHeightGraph] = useState(window.innerHeight);

  const getNewData = () =>{
    setVictoryData(_dataForGraph);
    setVictoryMinNumberX(_minNumberX);
    setVictoryMaxNumberX(_maxNumberX);
    setVictoryMinNumberY(_minNumberY);
    setVictoryMaxNumberY(_maxNumberY);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  const handleResize = () => {
    if (_asideOpen) {
      setAddWidthGraph(window.innerWidth + 150);
      setFontSize(45);
      setAddHeightGraph(window.innerHeight + 50);
      return;
    }
    setAddWidthGraph(window.innerWidth);
    setFontSize(40);
    setAddHeightGraph(window.innerHeight);
  }

  const reRenderForAsideMove = () => {
    handleResize();
    setAsideOpenState(!asideOpenState);
  }

  const chartTheme = {
    axis: {
      style: {
        ticks: {
          size: 15,
          stroke: "white",
        },
        grid: {
          stroke: "#C4C4C4",
        },
        axis: {
          stroke: "#C4C4C4",
        },
        tickLabels: {
          fontSize: fontSize,
          stroke: "#C4C4C4",
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
          domain={[victoryMinNumberX - victoryMinNumberX / 100, victoryMaxNumberX + victoryMaxNumberX / 100]}
        />
        <VictoryAxis
          dependentAxis
          crossAxis
          tickValues={[]}
          domain={[victoryMinNumberY - victoryMinNumberY, victoryMaxNumberY + victoryMaxNumberY / 4]}
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
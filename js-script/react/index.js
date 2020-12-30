import React from 'react';
import ReactDOM from 'react-dom';
import Test from './src/test';


function changePeriodLinealGraph(period){

    switch (period.trim()) {
    case 'This month'.trim():
        monthDataFromLinealGraph(monthDataSearch);
        break;
    case 'This week'.trim():
        monthDataFromLinealGraph(WeekDataSearch);
        break;
    case 'This year'.trim():
        yearDataFromLinealGraph();
        break;
        }
}


switchPeriodLinealGraphTwo.onclick = function () {
    changePeriodLinealGraph(switchPeriodLinealGraphTwo.textContent);
    savePeriodLinealGraph = switchPeriodLinealGraphOne.textContent
    switchPeriodLinealGraphOne.innerHTML = switchPeriodLinealGraphTwo.textContent;
    switchPeriodLinealGraphTwo.innerHTML = savePeriodLinealGraph;
    closeLinealGraphSwitch.classList.remove('dn');
    addDnLinealGraph();
    ReactDOM.render( <Test/>, document.querySelector('.lineal-graph-react'));
}


switchPeriodLinealGraphThree.onclick = function () {
    changePeriodLinealGraph(switchPeriodLinealGraphThree.textContent);
    savePeriodLinealGraph = switchPeriodLinealGraphOne.textContent
    switchPeriodLinealGraphOne.innerHTML = switchPeriodLinealGraphThree.textContent;
    switchPeriodLinealGraphThree.innerHTML = savePeriodLinealGraph;
    addDnLinealGraph();
    closeLinealGraphSwitch.classList.remove('dn');
    ReactDOM.render( <Test/>, document.querySelector('.lineal-graph-react'));
}


monthDataFromLinealGraph(WeekDataSearch);

ReactDOM.render( <Test/>, document.querySelector('.lineal-graph-react'));

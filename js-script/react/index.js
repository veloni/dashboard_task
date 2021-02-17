import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './src/Graph.jsx';

const reRender = () => {
    ReactDOM.render( <Graph/>, document.querySelector('.lineal-graph-react'));
}

window.globalRerender = reRender;










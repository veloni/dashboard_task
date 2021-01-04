import React from 'react';
import ReactDOM from 'react-dom';
import Test from './src/test';

const reRender = () => {
    ReactDOM.render( <Test/>, document.querySelector('.lineal-graph-react'));
}

window.globalRerender = reRender;










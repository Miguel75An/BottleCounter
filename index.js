import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './App1';
//import App from './App2';
//import App from './AllUpCase.'
//import FlavorForm from './Select'
//import Toggle from './Toggle'
//import App from './Search';
//import App from './Search1';
import BottleCounterDisplay from './EverySecond';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FlavorForm />, document.getElementById('root'));
//ReactDOM.render(<Toggle />, document.getElementById('root'));
ReactDOM.render(<BottleCounterDisplay />, document.getElementById('root'));

registerServiceWorker();

import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usestateprop from "./components/Usestateprop";
import Stateapp from "./components/Stateapp";

// Comment out to see different apps

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Usestateprop/>, document.getElementById('root-name'));
// ReactDOM.render(<Stateapp/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

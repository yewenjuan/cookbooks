import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./redux/store";

import './index.css';
// import App from './App';
// import App from "./hoc/App";
// import App from "./protal/App";
// import App from "./redux/App";
// import reportWebVitals from './reportWebVitals';
import App from "./lazy/App";
// 为什么要写<App>而不能写App,因为app是类 需要实例化，借用react去实例，就是用<App>
ReactDOM.render(  
  <Provider store={store}>
    <App/> 
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

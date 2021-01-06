import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App.jsx";
import store from "./store/store";
import "./assets/style/reset.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App></App>
    </Provider>
  </Router>,
  document.querySelector("#root")
)
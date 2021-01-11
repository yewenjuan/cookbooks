import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Home from "./Home/Home";
import List from "./List/List";
import Detail from "./Detail/Detail";

export default class App extends Component {
  render() {
    return (
      <CSSTransition
        in={true}
        timeout={1000}
      >
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      </CSSTransition>
    )
  }
}

import React, { Component } from 'react';

import From from "../From";
import List from "../List";

import store from "./store";

class App extends Component {  
  handleClick = () => {
    store.dispatch({type: 'increment'})
  }
  render() {
    return (
      <div>
        <From></From>
        <List></List>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

import From from "./From";
import List from "./List";

class TodoList extends Component {
  handleReceive = (value) => {
    console.log(value);
  }
  render() {
    return (
      <div>
        <From onReceive={this.handleReceive}></From>
        <List></List>
      </div>
    );
  }
}

export default TodoList;
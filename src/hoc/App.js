import React, { Component } from 'react';

import Hoc from "./Hoc";

@Hoc
class App extends Component {
  componentDidMount() {
    console.log(this);
  }
  render() {
    return (
      <div>
        1
      </div>
    );
  }
}

export default App;
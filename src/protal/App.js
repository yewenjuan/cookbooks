import React, { Component } from 'react';

import Modal from "./Modal";
import { withPortal } from "./withPortal";

// 用了装饰器 用了事件中的冒泡

@withPortal
class App extends Component {
  handleClick = () => {
    console.log(0);
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <Modal></Modal>
      </div>
    );
  }
}

export default App;
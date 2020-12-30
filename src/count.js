import React, { Component, createContext } from 'react';

const {
  Provider,
  Consumer
} = createContext();

class CountProvider extends Component {
  state = {
    count: 1
  }
  increment = (args) => {
    let count = this.state.count;
     count = count + args;
     this.setState({
       count
    })
  }
  decrement = (args) => {
    let count = this.state.count;
     count = count - args;
     this.setState({
       count
    })
  }
  render() {
    return (
      <div>
        <Provider value={{
          count: this.state.count,
          increment: this.increment,
          decrement: this.decrement
        }}>
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export {
  CountProvider,
  Consumer
};
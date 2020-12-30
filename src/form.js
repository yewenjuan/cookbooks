import React, { Component,createRef } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.file = createRef()
  }
  handleClick = () => {
    console.log(this.file.current.files[0].name);
  }
  render() {
    return (
      <div>
        <input type="file" ref={this.file}/>
        <button onClick={this.handleClick}>提交</button>
      </div>
    );
  }
}

export default App;
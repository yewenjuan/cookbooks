import { Component } from "react";

const Hoc =  (Com) => {
  return class extends Component {
    componentDidMount() {
      console.log(this);
    }
    render() {
      return (
        <Com title="hello" {...this.props}></Com>
      )
    }
  }
}

export default Hoc;
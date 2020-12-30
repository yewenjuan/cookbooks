import { Component } from "react";
import { createPortal } from "react-dom";

function  withPortal(Com) {
  return class extends Component {
    render() {
      return (
        createPortal(
          <Com {...this.props} />,
          document.querySelector("body")
        )
      )
    }
  }
}

export {
  withPortal
}
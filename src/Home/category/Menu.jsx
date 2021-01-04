import React, { Component } from 'react';

import MenuList from "@com/MenuList";
import {getData} from "@a/ajax.js"

export default class Menu extends Component {
  state = {
    category: null,
    type: "category",
    curcate: this.props.type === "category" ? "热门" : "肉类"
  }
 async componentDidMount() {
    let response = await getData("/api/category");
    this.setState({
      category: response.data.data
    })
  }
  static getDerivedStateFromProps(nextProps, preState) {
    if(nextProps.type === preState.type) {
      return null
    }else {
      return {
        curcate: nextProps.type === "category" ? "热门" : "肉类",
        type: nextProps.type
      }
    }
  }

  handleAsideClick = (value) => {
      this.setState({
        curcate: value
      })
  }
  render() {    
    return (
      <div>
        <MenuList
          handleAsideClick = {this.handleAsideClick}
          curcate = {this.state.curcate}
          category={this.state.category && this.state.category[this.props.type]}
      ></MenuList>
      </div>
    )
  }
}

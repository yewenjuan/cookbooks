import React, { Component } from 'react';
import {connect} from "react-redux";

import MenuList from "@com/MenuList";
import {getData} from "@a/ajax.js";
import {getAside} from "@store/actions.js";

class Menu extends Component {
  state = {
    category: null,
    // type: "category",
    // curcate: this.props.type === "category" ? "热门" : "肉类"
  }
 async componentDidMount() {
    let response = await getData("/api/category");
    this.setState({
      category: response.data.data
    })
    if(!this.props.cateAside) {
      this.props.getAside(this.props.cateType === "category" ? "热门" : "肉类");
    }
  }
  // static getDerivedStateFromProps(nextProps, preState) {
  //   if(nextProps.type === preState.type) {
  //     return null
  //   }else {
  //     return {
  //       curcate: nextProps.type === "category" ? "热门" : "肉类",
  //       type: nextProps.type
  //     }
  //   }
  // }

  handleAsideClick = (value) => {    
      this.props.getAside(value);
  }
  render() {        
    return (
      <div>
        <MenuList
          handleAsideClick = {this.handleAsideClick}
          curcate = {this.props.cateAside}
          category={this.state.category && this.state.category[this.props.cateType]}
      ></MenuList>
      </div>
    )
  }
}

export default connect(
  state => (
    {
      cateAside: state.info.routeInfo.cateAside,
      cateType: state.info.routeInfo.cateType
    }
  ),
  {getAside}
)(Menu)
import React, { Component } from 'react';
import { connect } from "react-redux";

import TopNav from "./TopNav";
import Search from "@com/Search.jsx";
import Menu from "./Menu";
import { getTopNavInfo, getAside } from "@store/actions.js"

class CateGory extends Component {
  state = {
    tabIndex: 0,
    type: "category"
  }
  handleTabClick = (type) => {
    // this.setState({
    //   tabIndex: index,
    //   // type: index === 0 ? "category" : "material"
    // })
    console.log(type);
    this.props.getTopNavInfo(type);
    this.props.getAside(type === "category" ? "热门" : "肉类")
  }
  render() {
    return (
      <div className="cate-contain">
        <TopNav handleTabClick={this.handleTabClick} cateType={this.props.cateType}></TopNav>
        <Search 
          outbg="#fff"
          innerbg="#efefef"
          hasBorder={false}
        ></Search>
        <Menu type={this.props.cateType}></Menu>
      </div>
    )
  }
}
export default connect(
  state => ({cateType: state.info.routeInfo.cateType}),
  {getTopNavInfo, getAside}
)(CateGory)
import React, { Component } from 'react';

import TopNav from "./TopNav";
import Search from "@com/Search.jsx";
import Menu from "./Menu";

export default class CateGory extends Component {
  state = {
    tabIndex: 0,
    type: "category"
  }
  handleTabClick = (index) => {
    this.setState({
      tabIndex: index,
      type: index === 0 ? "category" : "material"
    })
  }
  render() {
    return (
      <div className="cate-contain">
        <TopNav handleTabClick={this.handleTabClick}></TopNav>
        <Search 
          outbg="#fff"
          innerbg="#efefef"
          hasBorder={false}
        ></Search>
        <Menu type={this.state.type}></Menu>
      </div>
    )
  }
}

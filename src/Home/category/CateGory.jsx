import React, { Component } from 'react';

import TopNav from "./TopNav";
import Search from "@com/Search.jsx";
import Menu from "./Menu";

export default class CateGory extends Component {
  render() {
    return (
      <div className="cate-contain">
        <TopNav></TopNav>
        <Search 
          outbg="#fff"
          innerbg="#efefef"
          hasBorder={false}
        ></Search>
        <Menu></Menu>
      </div>
    )
  }
}

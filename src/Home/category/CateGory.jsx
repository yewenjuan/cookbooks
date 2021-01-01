import React, { Component } from 'react';

import TopNav from "./TopNav";
import Search from "@com/Search.jsx";

export default class CateGory extends Component {
  render() {
    return (
      <div>
        <TopNav></TopNav>
        <Search 
          outbg="#fff"
          innerbg="#efefef"
          hasBorder={false}
        ></Search>
      </div>
    )
  }
}

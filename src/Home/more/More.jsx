import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Switch,
  NavBar
} from "antd-mobile";

import { hasShowMap } from "@store/actions.js";

import { StyledMore,StyleNav } from "./StyledMore"

 class More extends Component {   
  handleMap = () => {
    let checked = !this.props.map.checked;
    // 本地存储将checked状态存储起来
    window.localStorage.setItem("checked", checked)
    this.props.hasShowMap(checked);
  }
  render() {
    let {checked} = this.props.map;
    return (
      <div>
        <StyleNav>
          <NavBar
            mode="light"      
          >更多</NavBar>
        </StyleNav>       
        <StyledMore>
          <span>显示地图:</span>
          <Switch 
            checked={checked}
            onChange={this.handleMap}
          ></Switch>
        </StyledMore>
      </div>
      
    )
  }
}

export default connect(
  state => ({map: state.map}),
  {
    hasShowMap
  }
)(More)

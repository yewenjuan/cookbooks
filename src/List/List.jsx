import React, { Component } from 'react';
import {NavBar, Icon} from "antd-mobile"

import { StyleNav } from "../Home/more/StyledMore";
import {StyleList} from "./StyleList"


import img from "@assets/images/c1.jpg";

export default class List extends Component {
  handleLeftClick = () => {
    console.log(this.props);
    let { history } = this.props;
    history.go(-1)
  }
  render() {
    return (
      <div>
        <StyleNav>
          <NavBar
            mode="dark"  
            icon={<Icon type="left" />} 
            onLeftClick={this.handleLeftClick}  
            style= {{backgroundColor: '#ee742f'}} 
          >
            {this.props.location.state.title}
          </NavBar>
        </StyleNav>   
        <StyleList>
          <li>
            <div>
              <img src={img} alt="" style={{width: '115px', height:"75px"}}/>
            </div>
            <div>
              <h3>红烧鱼</h3>
              <p className="show-text">辣椒、葱</p>
              <p>98888次浏览  83828次收藏</p>
            </div>
          </li>
        </StyleList>
      </div>
    )
  }
}

import React, { Component } from 'react';
import {NavBar, Icon} from "antd-mobile";

import { StyleNav } from "../Home/more/StyledMore";
import { StyledDetail } from "./StyleDetail"

import c1 from "../assets/images/c1.jpg"

export default class Detail extends Component {

  handleLeftClick = () => {
    let { history } = this.props;
    history.go(-1)
  }

  render() {
    return (
      <StyledDetail>
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
        <div>
          <div className="img-contain">
            <img src={c1} alt=""/>
          </div>
          <div className="text-contain">
            <p className="title">{this.props.location.state.title}</p>
            <p className="conn">28838次浏览 99999次收藏</p>
            <div className="draw">收藏</div>
          </div>
        </div>  
      </StyledDetail>
    )
  }
}

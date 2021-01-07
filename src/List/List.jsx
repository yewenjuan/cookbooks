import React, { Component } from 'react';
import {NavBar, Icon} from "antd-mobile";
import {connect} from "react-redux";

import { StyleNav } from "../Home/more/StyledMore";
import {StyleList} from "./StyleList";
import { getFoodListAsync } from "@store/actions.js";

class List extends Component {

  componentDidMount() {
    this.props.getFoodListAsync();
  }
  handleLeftClick = () => {
    let { history } = this.props;
    history.go(-1)
  }
  render() {
    let { hotCateList } = this.props.list.list;
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
        <ul>
          {
            hotCateList && hotCateList.map((value) => (
              <StyleList
                width="0 0 1px 0"
                color="#eee"
                key={value.id}
              >
                <div>
                  <img src={require(`../assets/images/${value.imgUrl}`).default} alt="" style={{width: '115px', height:"75px"}}/>
                </div>
                <div>
                  <h3>{value.foodName}</h3>
                  <p className="show-text">{value.dish.join("、")}</p>
                  <p>{value.browse}次浏览  {value.connect}次收藏</p>
                </div>
              </StyleList>  
            ))
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({list: state.list}),
  {
    getFoodListAsync
  }
)(List)

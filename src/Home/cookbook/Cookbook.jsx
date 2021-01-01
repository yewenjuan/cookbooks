import React, { Component } from 'react';
import {connect} from "react-redux";

import { Container } from "./StyleCookBook";
import Swiper from "./Swiper";
import Search from "@com/Search";
import HotCategory from "./HotCategory";
import TopFood from "./TopFood";

import {getFoodListAsync} from "../../store/actions"

 class Cookbook extends Component {
   componentDidMount() {
     this.props.getFoodListAsync();
   }
  render() {
    let {list} = this.props.list;
    return (
      <Container>
        <header>美食大全</header>
        <Swiper></Swiper>
        <Search
          outbg=""
          innerbg="#fff"
          hasBorder={true}
        ></Search>
        <HotCategory list={list}></HotCategory>
        <TopFood list={list}></TopFood>
      </Container>
    )
  }
}

export default connect(
  state => ({list: state.list}), {
    getFoodListAsync
  }
)(Cookbook)

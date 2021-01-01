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
        <Search></Search>
        <HotCategory list={list}></HotCategory>
        <TopFood></TopFood>
      </Container>
    )
  }
}

export default connect(
  state => ({list: state.list}), {
    getFoodListAsync
  }
)(Cookbook)

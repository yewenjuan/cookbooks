import React, { Component } from 'react';

import { Container } from "./StyleCookBook";
import Swiper from "./Swiper";
import Search from "@com/Search";
import HotCategory from "./HotCategory";

export default class Cookbook extends Component {
  render() {
    return (
      <Container>
        <header>美食大全</header>
        <Swiper></Swiper>
        <Search></Search>
        <HotCategory></HotCategory>
      </Container>
    )
  }
}

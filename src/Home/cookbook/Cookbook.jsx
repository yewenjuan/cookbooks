import React, { Component } from 'react';

import { Container } from "./StyleCookBook";
import Swiper from "./Swiper";

export default class Cookbook extends Component {
  render() {
    return (
      <Container>
        <header>美食大全</header>
        <Swiper></Swiper>
      </Container>
    )
  }
}

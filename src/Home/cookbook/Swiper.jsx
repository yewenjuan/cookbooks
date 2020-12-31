import React, { Component } from 'react';
import { Carousel } from "antd-mobile";

import img1 from "@assets/images/pic1.jpg";
import img2 from "@assets/images/pic2.jpg";
import img3 from "@assets/images/pic3.jpg";

import "./cookbook.css";

export default class Swiper extends Component {
  render() {
    return (
      <div className="swipe">
        <Carousel
          autoplay={true}
          infinite
        >
          <img src={img1} alt=""/>
          <img src={img2} alt=""/>
          <img src={img3} alt=""/>
        </Carousel>
      </div>
    )
  }
}

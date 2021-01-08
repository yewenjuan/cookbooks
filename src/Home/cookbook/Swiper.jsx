import React, { Component } from 'react';
import { Carousel } from "antd-mobile";
import {withRouter} from "react-router-dom";

import img1 from "@assets/images/pic1.jpg";
import img2 from "@assets/images/pic2.jpg";
import img3 from "@assets/images/pic3.jpg";

import "./cookbook.css";

class Swiper extends Component {
  handleClick = (title) => {
    this.props.history.push("/detail", {title})
  }
  render() {
    return (
      <div className="swipe">
        <Carousel
          autoplay={true}
          infinite
        >
          <img src={img1} alt="" onClick={() => this.handleClick("下午茶")}/>
          <img src={img2} alt="" onClick={() => this.handleClick("蛋糕")}/>
          <img src={img3} alt="" onClick={() => this.handleClick("水果")}/>
        </Carousel>
      </div>
    )
  }
}

export default withRouter(Swiper)

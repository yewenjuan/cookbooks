import React, { Component } from 'react'

export default class TopFood extends Component {
  render() {
    return (
      <div>
        <h3 className="top-text">精品分类</h3>
        <ul className="top-food">
          <li className="food-item">
            <div>
              <img src={require("@assets/images/c1.jpg").default} alt=""/>
            </div>
            <div>
              <p>爆炒牛肉</p>
              <p><span>1000</span>次浏览<span>10000</span>次收藏</p>
            </div>
          </li>
          <li className="food-item">
            <div>
              <img src={require("@assets/images/c1.jpg").default} alt=""/>
            </div>
            <div>
              <p>爆炒牛肉</p>
              <p><span>1000</span>次浏览<span>10000</span>次收藏</p>
            </div>
          </li>
          <li className="food-item">
            <div>
              <img src={require("@assets/images/c1.jpg").default} alt=""/>
            </div>
            <div>
              <p>爆炒牛肉</p>
              <p><span>1000</span>次浏览<span>10000</span>次收藏</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

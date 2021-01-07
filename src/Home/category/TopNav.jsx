import React, { Component } from 'react';

import "./category.css";

export default class TopNav extends Component {
  state = {
    tabIndex: 0
  }
  handleClick = (index) => {
    this.props.handleTabClick(index);
    this.setState({
      tabIndex: index
    })
  }
  render() {
    let {cateType} = this.props;
    return (
      <div>
        <nav>
          <ul className="nav">
            <li className={cateType === "category" ? "active" : ""} onClick={() => this.handleClick('category')}>分类</li>
            <li className={cateType === "material" ? "active" : ""} onClick={() => this.handleClick('material')}>食材</li>
            <li className={cateType === "category" ? 'slider' : "slider right"}></li>
          </ul>
        </nav>
      </div>
    )
  }
}

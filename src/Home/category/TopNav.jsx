import React, { Component } from 'react';

import "./category.css";

export default class TopNav extends Component {
  state = {
    tabIndex: 0
  }
  handleClick = (index) => {
    this.setState({
      tabIndex: index
    })
  }
  render() {
    return (
      <div>
        <nav>
          <ul className="nav">
            <li className={this.state.tabIndex === 0 ? "active" : ""} onClick={() => this.handleClick(0)}>分类</li>
            <li className={this.state.tabIndex === 1 ? "active" : ""} onClick={() => this.handleClick(1)}>食材</li>
            <li className={this.state.tabIndex === 0 ? 'slider' : "slider right"}></li>
          </ul>
        </nav>
      </div>
    )
  }
}

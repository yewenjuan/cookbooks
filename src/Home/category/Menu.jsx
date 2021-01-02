import React, { Component } from 'react';

import { MenuWrapper } from "./MenuStyle";
import {getData} from "@a/ajax.js"

export default class Menu extends Component {
  state = {
    category: null,
    curcate: "热门"
  }
 async componentDidMount() {
    let response = await getData("/api/category");
    this.setState({
      category: response.data.data
    })
  }
  handleAsideClick = (value) => {
    this.setState({
      curcate: value
    })
  }

  render() {
    let cate = this.state.category;
    return (
      <MenuWrapper>
        <aside>
          <ul>
            {
              cate && Object.keys(cate['category']).map(value => {
                return  <li 
                  className={this.state.curcate === value ? "active" : ""} 
                  key={value}
                  onClick={() => this.handleAsideClick(value)}
                  >
                    <span>{value}</span>
                </li>                
              })
            }       
         
          </ul>
        </aside>
        <section>
          <ul>
            {
              cate && cate['category'][this.state.curcate].map((value, index) => (
                <li key={index}>{value}</li>
              ))
            }
          </ul>
        </section>
      </MenuWrapper>
    )
  }
}

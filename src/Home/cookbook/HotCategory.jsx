import React, { Component } from "react";
import { Grid } from "antd-mobile";

export default class HotCategory extends Component {
  state = {
    columnNum: 4,    
  };
  componentDidMount() {
    let width = window.innerWidth;
    if(width < 375) {
      this.setState({
        columnNum: 3
      })
    }    
  }
  render() {   
    let {hotCateList} = this.props.list;  
    return (
      <div>
        <h3>热门分类</h3>
        <Grid
          data={hotCateList}
          columnNum={this.state.columnNum}
          renderItem={(dataItem) => (
            <div className="grid-item">
              <img
                src={require(`../../assets/images/${dataItem.imgUrl}`).default}
                alt=""
              />
              <div               
              >
                <span>{dataItem.title}</span>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

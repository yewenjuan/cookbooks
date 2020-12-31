import React, { Component } from "react";
import { Grid } from "antd-mobile";

export default class HotCategory extends Component {
  state = {
    columnNum: 4,
    hotCateList: [
      {        
        title: "盘古烤猪蹄",
        imgUrl: require("@assets/images/c1.jpg")
        
      },
      {        
        title: "名火汇烤肉",
        imgUrl:require("@assets/images/c2.jpg")  
      },
      {
       
        title: "南瓜车造型",
        imgUrl:require("@assets/images/c3.jpg")
      },     
      {
        
        title: "味多美",
        imgUrl:require("@assets/images/c4.jpg")
      },
      {
        
        title: "炙城烤肉",
        imgUrl:require("@assets/images/c5.jpg")
      },
      {
       
        title: "鑫海汇烤肉",
        imgUrl:require("@assets/images/c6.jpg")
      },
      {
        
        title: "上海1号私藏菜",
        imgUrl:require("@assets/images/c7.jpg")
      },
      {
        
        title: "一品鸡排",
        imgUrl:require("@assets/images/c8.jpg")
      },
      {
        
        title: "牛排自助餐厅",
        imgUrl:require("@assets/images/c9.jpg")
      },
      {
        
        title: "爱上自助火锅",
        imgUrl:require("@assets/images/c10.jpg")
      },      
      {        
        title: "炭香园烤肉",
        imgUrl:require("@assets/images/c11.jpg")
      },
      {        
        title: "更多...",
        imgUrl:require("@assets/images/pic1.jpg")
      },
    ],
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
    return (
      <div>
        <h3>热门分类</h3>
        <Grid
          data={this.state.hotCateList}
          columnNum={this.state.columnNum}
          renderItem={(dataItem) => (
            <div className="grid-item">
              <img
                src={dataItem.imgUrl.default}
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

import React, { Component } from "react";
import { Grid } from "antd-mobile";
import { withRouter } from "react-router-dom";

class HotCategory extends Component {
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
  // 跳转到列表页
  handleClick = ({title}) => {
    let { history } = this.props;
    history.push("/list", {title})
  }

  render() {   
    let {hotCateList} = this.props.list;  
    return (
      <div>
        <h3 className="hotcategory">热门分类</h3>
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
          onClick={(dataItem) => this.handleClick(dataItem)}
        />
      </div>
    );
  }
}

export default withRouter(HotCategory)
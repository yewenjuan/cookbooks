import React, { Component } from 'react';
import { connect } from "react-redux";

import { removeData, setData } from "./redux/action";

// 读状态
// (state) => ({list: state.list}改写下面
// const mapStateProps = (state) => {
//   return {
//     list: state.list
//   }
// }
// const mapDispatch = (dispatch) => {
//   return {
//     remove(index) {
//       dispatch(removeData(index))
//     }
//   }
// }
// @connect或者用装饰器或者用下面的方式都可以
@connect((state) => ({list: state.list}), {
  removeData,
  setData
})
class List extends Component {
  handleClick = (index) => {
    this.props.removeData(index)
  }
  componentDidMount() {
    this.props.setData()
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => {this.handleClick(index)}}>删除</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

// export default connect((state) => ({list: state.list}), {
//   removeData,
//   setData
// })(List);
export default List;
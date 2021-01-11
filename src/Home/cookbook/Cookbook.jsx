import React, { Component ,useEffect } from 'react';
import {connect, useSelector, useDispatch } from "react-redux";

import { Container } from "./StyleCookBook";
import Swiper from "./Swiper";
import Search from "@com/Search";
import HotCategory from "./HotCategory";
import TopFood from "./TopFood";
// const state = useSelector(state => state.state) 用来实现状态的跟踪和缓存
import {getFoodListAsync} from "../../store/actions"

//  class Cookbook extends Component {
//    componentDidMount() {
//      this.props.getFoodListAsync();
//    }
//   render() {
//     let {list} = this.props.list;
//     console.log(list);
//     return (
//       <Container>
//         <header>美食大全</header>
//         <Swiper></Swiper>
//         <Search
//           outbg=""
//           innerbg="#fff"
//           hasBorder={true}
//         ></Search>
//         <HotCategory list={list}></HotCategory>
//         <TopFood list={list}></TopFood>
//       </Container>
//     )
//   }
// }

// export default connect(
//   state => ({list: state.list}),
//   {getFoodListAsync}
// )(Cookbook);
// 函数组件用hooks的api去做
const Cookbook = (props) => {
  const state = useSelector(state => state.list);
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getFoodListAsync());
  }, [dispatch])
  return (    
    <Container>
      <header>美食大全</header>
      <Swiper></Swiper>
      <Search
        outbg=""
        innerbg="#fff"
        hasBorder={true}
      ></Search>
      <HotCategory list={state.list}></HotCategory>
      <TopFood list={state.list}></TopFood>
    </Container>
  )
}

export default Cookbook;

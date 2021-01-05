import React, { Component } from 'react';
import {connect} from "react-redux";
import { 
  TabBar
 } from "antd-mobile";

 import CookBook from "./cookbook/Cookbook";
 import CateGory from "./category/CateGory";
 import Map from "./map/map";
 import More from "./more/More";

 import cookbook from "@assets/images/img11.jpg";
 import cookbookActive from "@assets/images/img1.jpg";
 import category from "@assets/images/img22.jpg";
 import categoryActive from "@assets/images/img2.jpg";
 import map from "@assets/images/img33.jpg";
 import mapActive from "@assets/images/im3.jpg";
 import more from "@assets/images/img44.jpg";
 import moreActive from "@assets/images/img4.jpg";

class Home extends Component {
  state = {
    selectedTab: 'cookbook',
    hidden: false,
    fullScreen: true
  }
  // componentDidMount() {
  //   let {checked} = this.props.map;
  //   this.props.hasShowMap(checked);
  // }
  render() {
    let {checked} = this.props.map;
    // 因为是动态的，所以讲组件放到数组里，antd-mobile本身有bug只能采用这个方法
    let tabBarItems = [
      <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={<div style={{
              width: '26px',
              height: '26px',
              background: `url(${cookbook}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '26px',
              height: '26px',
              background: `url(${cookbookActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              });
            }}
            data-seed="logId"
          >
            <CookBook></CookBook>
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '26px',
                height: '26px',
                background: `url(${category}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '26px',
                height: '26px',
                background: `url(${categoryActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
            data-seed="logId1"
          >
            <CateGory></CateGory>
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '26px',
                height: '26px',
                background: `url(${map}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '26px',
                height: '26px',
                background: `url(${mapActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="地图"
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <Map></Map>
          </TabBar.Item>,
          <TabBar.Item
            icon={{ uri: `${more}` }}
            selectedIcon={{ uri: `${moreActive}` }}
            title="more"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <More></More>
          </TabBar.Item>
    ]
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#333"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            checked ? tabBarItems.map(v => v) : tabBarItems.filter((v, i) => i !== 2)
          }
        </TabBar>
      </div>
    )
  }
}

export default connect(state => ({map: state.map}))(Home)

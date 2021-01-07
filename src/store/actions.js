import { GET_DATA, SHOW_MAP, CHANGE_SELECTED, CHANGE_CATETYPE, CHANGE_ASIDE } from "./action-type";
import { getData } from "@a/ajax.js";

// 成功的同步分发
// 获取美食大全的数据
const getFoodList = (list) => ({type: GET_DATA, data: list});

// 是否显示地图
const hasShowMap = (data) => ({type: SHOW_MAP, data: data});

// 保存底部导航信息
const getSelectedTab = (selectedTab) => {  
  return {type: CHANGE_SELECTED, data: selectedTab}
}

// 分类美食顶部导航信息切换保存
const getTopNavInfo = (navinfo) => ({type: CHANGE_CATETYPE, data: navinfo});

// 侧边栏菜单信息保存
const getAside = (asideinfo) =>({type:CHANGE_ASIDE, data: asideinfo})

// 异步调用接口获取列表数据
const getFoodListAsync = () => {
  return async dispatch => {
    let response =  await getData("/api/list");
    let result = response.data;
    if(response.status === 200) {
      dispatch(getFoodList(result))
    }
  }
}

export {
  getFoodListAsync,
  hasShowMap,
  getSelectedTab,
  getTopNavInfo,
  getAside
}
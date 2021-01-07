import { combineReducers } from "redux";

import { 
  GET_DATA, 
  SHOW_MAP, 
  CHANGE_SELECTED,
  CHANGE_CATETYPE,
  CHANGE_ASIDE
} from "./action-type";
const defaultState = {
  list: []
}
const list = (state = defaultState, action) => {
  switch(action.type) {
    case GET_DATA:
      return {
        list:action.data
      }
    default:
      return state
  }
}

// 是否显示地图
const initMap = {
  checked: JSON.parse(localStorage.getItem('checked'))
}
const map = (state = initMap, action) => {
  switch(action.type) {
    case SHOW_MAP:
      return {
        ...initMap,
        checked: action.data
      }
    default:
      return state
  }
}

// 解决tabbar跳转不是用路由做，返回不能到指定位置
const initRouter = {
  routeInfo: {
    selectedTab: "cookbook",
    cateType: "category",
    cateAside: ""
  }
}

const info = (state = initRouter, action) => {
  switch(action.type) {
    case CHANGE_SELECTED:
      return {
        routeInfo: {
          ...state.routeInfo,
          selectedTab: action.data
        }
      }
    case CHANGE_CATETYPE: 
      return {
        routeInfo: {
          ...state.routeInfo,
          cateType: action.data
        }
      }
    case CHANGE_ASIDE: 
      return {
        routeInfo: {
          ...state.routeInfo,
          cateAside: action.data
        }
    }
    default:
      return state; 
  }
}

export default combineReducers({
  list,
  map,
  info
});
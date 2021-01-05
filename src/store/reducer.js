import { combineReducers } from "redux";

import { GET_DATA, SHOW_MAP} from "./action-type";
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

export default combineReducers({
  list,
  map
});
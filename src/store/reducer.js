import { combineReducers } from "redux";

import { GET_DATA } from "./action-type";
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

export default combineReducers({
  list
});
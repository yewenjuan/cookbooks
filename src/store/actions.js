import { GET_DATA } from "./action-type";
import { getData } from "@a/ajax.js";

// 成功的同步分发
// 获取美食大全的数据
const getFoodList = (list) => ({type: GET_DATA, data: list});

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
  getFoodListAsync
}
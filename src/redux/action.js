import axios from "axios";
export const removeData = (index) => ({
  type: "REMOVE_DATA",
  index
})

export const loadData = (result) => ({
  type: "SET_DATA",
  result
})

export const setData = () => {
  return dispatch => {
    axios.get("/list.json").then(res => {
      let result = res.data.result;
      result = result.map((value, index) => {
        return value.positionName        
      })
      // console.log(result);
      dispatch(loadData(result));
    })
  }
}

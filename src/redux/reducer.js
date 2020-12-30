const defaultState = {
  list: ["吃饭"]
}

const reducer = (state= defaultState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        list: action.result
      }
    case 'PUT_DATA':
      return {
        list: [
          ...state.list,
             action.task
        ]
    }
    case "REMOVE_DATA":
      let newList = state.list.filter((value, index) => {
        return index !== action.index
      })
      return {
        ...state,
        list: newList
      }
    default:
      return state;
  }
}

export default reducer
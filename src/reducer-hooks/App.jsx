import React, {useReducer} from 'react';

const initState = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case "add":
      return {
        count: state.count + 1
      }
    case "minus":
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  function handleAdd() {
    dispatch({
      type: "add"
    })
  }
  function handleMius() {
    dispatch({
      type: 'minus'
    })
  }
  return (
    <div>
      <span>{state.count}</span>
      <button onClick={handleAdd}> add </button>
      <button onClick={handleMius}> minus </button>
    </div>
  )
}

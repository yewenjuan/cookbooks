import React, {memo, useMemo, useState, useCallback} from 'react';

const Parent = function(props) {
  console.log("child run...");
  return (
    <div>child</div>
  )
}
export default function App() {
  const [count, setCount] = useState(0);
  
  const handlClick = useCallback(
    console.log('parent run...'),
    [count],
  )
  return (
    <div>
      <span>1</span>
      <Parent add={handlClick} a='aa' b='oo'></Parent>
      <button onClick={() => (setCount(count => count + 1))}>点击</button>
    </div>
  )
}

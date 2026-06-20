import React, { useState } from "react"

const ChildComponent = React.memo(({count}) => {
    console.log('ChildComponent rendered')
    return <h2>Count: {count}</h2>
})


function ReactMemo() {
  const [count, setCount] = useState(0)
  const [otherState, setOtherState] = useState(0)

  return (
    <div>
        <ChildComponent count={count}/>

        <button onClick={()=>setCount(count+1)}>Add Count</button>
        <button onClick={()=>setOtherState(otherState+1)}>Change Other State {otherState}</button>

        <p>Other State: {otherState}</p>
    </div>
  )
}

export default ReactMemo
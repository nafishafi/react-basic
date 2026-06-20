import { useState } from "react"

function HooksComponent() {
  const [count, setCount] = useState(0)

  const handleAddCount=(number)=>{
    setCount(prevState=>prevState+number)
  }

  return (
    <>
    <p>Count: {count}</p>
    <button onClick={()=>handleAddCount(1)}>Tambah +1</button>
    <button onClick={()=>handleAddCount(5)}>Tambah +5</button>
    </>
  )
}

export default HooksComponent
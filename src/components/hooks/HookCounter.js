import React, {useState} from 'react'

function HookCounter() {

  const [count, setCount] = useState(0) //destructiong method current and set value

  return (
    <div>
      <h3> Hooks Counter</h3>
      <button onClick={() => setCount(count + 1)}>Count {count}</button> {/* //set method cause to rerender this */}
    </div>
  )
}

export default HookCounter

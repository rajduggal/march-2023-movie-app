import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }
  
  // const tick = () => {
  //   setCount(prevCount => prevCount + 1)
  // } //if we can store prev value then count dependency not required in array bracket we can kept blank
  


// Note* - we can use multiple useEffect in single file

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
	},[count])

  // if we can put count as dependency so browser get to know we need to ignore this otherwise it will display 1 then stop if u will not provide count dependency

  return (
    <div>
      {count}
    </div>
  )
}
export default IntervalHookCounter

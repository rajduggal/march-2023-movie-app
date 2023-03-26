import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

//   const isEven = useMemo(() => {
//     let i = 0
//     while (i < 2000000000) i++
//     return counterOne % 2 === 0
//   }, [counterOne])

  const isEven = () => {
	let i = 0
	while (i < 2000000000) i++ //its realy slow and it will afftect to another counter value also this is because everytime state update and component rerender and even functional call again. we can tel to react not to calculate or change anything while we can click or change counter two values at this place useMemo(its cached the data) hook this is similar to useCallbak hook
    return counterOne % 2 === 0
  }

//Note* - isEven funtion with the help of useMemo hooo it using cached value 'even' and 'odd'

	return (
		<div>
			<div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        {/* <span>{isEven ? 'Even' : 'Odd'}</span> */}
		<span>{isEven() ? 'Even' : 'Odd'}</span>
			</div>
			<div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter

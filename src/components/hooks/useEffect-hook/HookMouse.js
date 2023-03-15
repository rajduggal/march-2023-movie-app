import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect called')
    	window.addEventListener('mousemove', logMousePosition)

    return () => { //for unmounting using return
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition) // this part we need to use to unmount otherwise it will show error after click on toggle button
    }
	},[]) //remv array bracket to chk multiple render, here we don't hv any dependency so we cn pass empty array there is no reason to call rerender
	return (
		<>
		<div>
			Hooks - X - {x} Y - {y}
		</div><hr/>
		</>
	)
}

export default HookMouse

import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null)

	useEffect(() => {
		//focus input element
		inputRef.current.focus()
	}, [])

	return (
		<>
			<div>
				<input ref={inputRef} type="text" />
			</div>
			<div>
				<input ref={inputRef} type="text" />
			</div>
			<hr/>
		</>
	)
}

export default FocusInput

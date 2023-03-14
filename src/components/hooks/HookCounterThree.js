import React, { useState } from 'react'

function HookCounterThree() {
	const [name, setName] = useState({ firstName: '', lastName: '' }) //state variable you can use any type string, number,boolean,object and array
	
	return (
		<>
			<h3> Hooks Counter with Object !</h3>
			<form>
				<input
					type="text"
					value={name.firstName}
					onChange={e => setName({...name, firstName: e.target.value })} 
					//  useState will not automatically merge n update but at the same time setState will merge the state using class comp, we can use spread operator to handle manual merge 
				/>&nbsp;&nbsp;
				<input
					type="text"
					value={name.lastName}
					onChange={e => setName({...name, lastName: e.target.value })}
				/>
				<h2>Your first name is - {name.firstName}</h2>
				<h2>Your last name is - {name.lastName}</h2>
				<h2>{JSON.stringify(name)}</h2>
				 {/* useState will not automatically merge n update but at the same time setState will merge the state using class comp*/}
			</form><hr/>
		</>
	)
}

export default HookCounterThree

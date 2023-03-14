import React, { Component } from 'react'

class ClassCounterOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			name: ''
		}
	}

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times` //initial value for title to set count value
	}

	componentDidUpdate(prevProps, prevState) { // it will work for updated count value, remv parameter n chk multiple time call same count value while wrting anything in input box
		// console.log('Updating document title')
		// document.title = `Clicked ${this.state.count} times`
		if (prevState.count !== this.state.count) {
			console.log('Updating document title')
			document.title = `Clicked ${this.state.count} times`
		}
	}

	render() {
		return (
			<div>
				<h3>Class counter using 2 lifecycle methos</h3>
				<input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click {this.state.count} times
				</button><hr/>
			</div>
		)
	}
}

export default ClassCounterOne

import React, { Component } from 'react'

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  decrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }
  render() {
    return (
      <div>
         <h3> Class counter prevState</h3>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
        <button onClick={this.decrementCount}>Count {this.state.count}</button>
        <hr/>
      </div>
    )
  }
}

export default ClassCounterTwo

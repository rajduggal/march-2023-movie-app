import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>
          <h3> Class Component counter</h3>
          <button onClick={this.incrementCount}>
            Count {this.state.count}
          </button>
          <hr />
        </div>
        {/* <Outlet /> */}
      </>
    );
  }
}

export default ClassCounter;

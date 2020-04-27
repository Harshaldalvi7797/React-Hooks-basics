import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const count = this.state.count;
    return (
      <div>
        <button onClick={this.incrementCount}>count{count}</button>
      </div>
    );
  }
}

export default ClassCounter;

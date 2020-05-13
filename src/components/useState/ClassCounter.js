import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
    // console.log("hello");
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState.count === this.state.count) {
      console.log("hello");
      document.title = `clicked ${this.state.count} times`;
    }
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const count = this.state.count;
    return (
      <div>
        <input
          type="text"
          value={this.state.count}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.incrementCount}>count{count}</button>
      </div>
    );
  }
}

export default ClassCounter;

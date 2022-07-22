import React, { Component } from "react";
import "./index.css";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  reset() {
    this.setState({
      count: this.state.count * 0,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 5,
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <section>
        <div>count - {this.state.count}</div>
        <button className="button" onClick={() => this.increment()}>
          Increment
        </button>
        <button className="button" onClick={() => this.reset()}>
          Reset
        </button>
        <button className="button" onClick={() => this.decrement()}>
          Decrement
        </button>
      </section>
    );
  }
}

export default counter;

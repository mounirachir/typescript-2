import React, { Component } from "react";

// Define type for state (count: number)
interface CounterState {
  count: number;
}

// Define class Counter extending Component with type parameters
class Counter extends Component<{}, CounterState> {
  // Initialize state with count: 0
  state: CounterState = {
    count: 0,
  };

  // Define increment method with arrow function syntax
  increment = () => {
    // Update state by incrementing count by 1
    this.setState({ count: this.state.count + 1 });
  };

  // Render method returning JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {/* Bind increment method to button onClick event */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

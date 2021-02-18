import React, { Component } from 'react'

export class Counter extends Component {
  // The current state of the counter component
  state = {
    counter: 0,
  }

  render() {
    return (
      <section>
        <p>Current Value: {this.state.counter}</p>
        <button>Increment</button>
      </section>
    )
  }
}

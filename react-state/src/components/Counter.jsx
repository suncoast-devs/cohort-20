import React, { Component } from 'react'

export class Counter extends Component {
  // The current state of the counter component
  state = {
    counter: 42,
  }

  handleClickButton = () => {
    // What do we really want to do?
    //
    // Algorithm?
    //
    // Get the current value of the counter from the state

    let currentCounterValue = this.state.counter

    // Increment it by 1
    currentCounterValue = currentCounterValue + 1

    // Update the state
    // Never, ever, never ever, directly change this.state
    // this.state.counter = currentCounterValue

    // React gives us a *special* way to update state so that it knows
    const newState = {
      counter: currentCounterValue,
    }
    this.setState(newState)
  }

  render() {
    return (
      <section>
        <p>Current Value: {this.state.counter}</p>
        <button onClick={this.handleClickButton}>Increment</button>
      </section>
    )
  }
}

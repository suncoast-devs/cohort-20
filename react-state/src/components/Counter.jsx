import React, { Component } from 'react'

export class Counter extends Component {
  // The current state of the counter component
  state = {
    counter: 0,
  }

  handleClickButton() {
    console.log('We did it!')
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

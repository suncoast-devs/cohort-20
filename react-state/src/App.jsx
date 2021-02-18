import React, { Component } from 'react'

export class Counter extends Component {
  render() {
    return (
      <section>
        <p>Current Value: 0</p>
        <button>Increment</button>
      </section>
    )
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <header>Welcome to my Counter</header>

        <Counter />

        <footer>Thanks for using my app!</footer>
      </div>
    )
  }
}

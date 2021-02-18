import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <header>Welcome to my Counter</header>

        <section>
          <p>Current Value: 0</p>
          <button>Increment</button>
        </section>

        <footer>Thanks for using my app!</footer>
      </div>
    )
  }
}

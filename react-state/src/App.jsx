import React, { Component } from 'react'
import { Counter } from './components/Counter'

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

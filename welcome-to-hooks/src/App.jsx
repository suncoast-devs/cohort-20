import React from 'react'

// export class App extends React.Component {
//   onClickWorld = () => {
//     console.log('you clicked')
//   }
//
//   render() {
//     return <div>Hello, <span onClick={this.onClickWorld}>World</span> from class!</div>
//   }
// }

class CounterClassStyle extends React.Component {
  state = {
    count: 0,
  }

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        The count is: {this.state.count}
        <button onClick={this.handleButtonClick}>Increment</button>
      </div>
    )
  }
}

function CounterFunctionStyle() {
  return (
    <div>
      The count is:
      <button>Increment</button>
    </div>
  )
}

export function HelloWorld() {
  function onClickWorld(event) {
    console.log('you clicked!')
  }

  return (
    <div>
      Hello, <span onClick={onClickWorld}>World</span> from function component
      <CounterClassStyle />
      <CounterFunctionStyle />
    </div>
  )
}

export function App() {
  return <HelloWorld />
}

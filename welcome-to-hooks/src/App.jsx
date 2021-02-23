import React, { useState } from 'react'

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
    name: 'Pierce',
  }

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <p>The count is: {this.state.count}</p>
        <p>The name is {this.state.name}</p>
        <button onClick={this.handleButtonClick}>Increment</button>
      </div>
    )
  }
}

// Handlers and useState *CANT* go here, outside of the function

function CounterFunctionStyle() {
  // // useState and click handlers go inside the function
  // // but *BEFORE* the return
  // const counterValueAndSetMethod = useState(0)

  // // The current state, which we will call `counter` is in the first element of the array
  // const counter = counterValueAndSetMethod[0]

  // // The function that can change the counter, which we will call `setCounter` is in the second element of the array
  // const setCounter = counterValueAndSetMethod[1]

  const [counter, setCounter] = useState(0)
  // const [person, setPerson] = useState(... initial value ...)
  // const [name, setName] = useState(... initial value ...)

  const [name, setName] = useState('Pierce')

  function handleButtonClick() {
    // This is much like `this.setState`
    const newCounterValue = counter + 1
    setCounter(newCounterValue)
  }

  return (
    <div>
      <p>The count is: {counter}</p>
      <p>The name is: {name}</p>
      <button onClick={handleButtonClick}>Increment</button>
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

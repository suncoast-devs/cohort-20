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

export function HelloWorld() {
  function onClickWorld(event) {
    console.log('you clicked!')
  }

  return (
    <div>
      Hello, <span onClick={onClickWorld}>World</span> from function component
    </div>
  )
}

export function App() {
  return <HelloWorld />
}

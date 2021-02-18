import React, { Component } from 'react'

export class App extends Component {
  state = {
    data: [
      ['_', '_', '_'],
      ['_', '_', '_'],
      ['_', '_', '_'],
    ],
  }

  handleClickOnCell = (theClickedRowIndex, theClickedColumnIndex) => {
    console.log(
      `I did it! clicked on ${theClickedRowIndex} and ${theClickedColumnIndex}`
    )
    // What I want to do is update the board!
    //
    // I need to know the row and the column index
    // where I was clicked!

    // Not the best way, but saving time.
    const newState = this.state
    newState.data[theClickedRowIndex][theClickedColumnIndex] = 'x'

    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <ul>
          {this.state.data.map((row, rowIndex) => {
            return row.map((cell, columnIndex) => {
              return (
                <li
                  key={columnIndex}
                  // If you have a handler function and need to pass data to it
                  // like the current row and column index, make a little arrow
                  // function -- OTHERWISE You'll be calling the handler AS YOU ARE RENDERING.
                  onClick={() => this.handleClickOnCell(rowIndex, columnIndex)}
                >
                  {cell}
                </li>
              )
            })
          })}

          {/* <li>{this.state.data[0][0]}</li>
          <li>{this.state.data[0][1]}</li>
          <li>{this.state.data[0][2]}</li>

          <li>{this.state.data[1][0]}</li>
          <li>{this.state.data[1][1]}</li>
          <li>{this.state.data[1][2]}</li>

          <li>{this.state.data[2][0]}</li>
          <li>{this.state.data[2][1]}</li>
          <li>{this.state.data[2][2]}</li> */}
        </ul>
      </div>
    )
  }
}

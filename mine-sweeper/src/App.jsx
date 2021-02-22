import React, { Component } from 'react'

export class App extends Component {
  state = {
    board: [
      ['*', '1', '4', ' ', ' ', ' ', ' ', '3'],
      [' ', 'F', ' ', ' ', '2', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', '8'],
    ],
  }

  render() {
    // Nested MAP loop (kind of like our old friend the nested for loop
    // ... all the way back to week 1 with suits and faces)

    return (
      <main>
        <h1>Mine Sweeper</h1>
        <ul>
          {this.state.board.map((row, rowIndex) => {
            return row.map((cell, colIndex) => {
              return <li key={colIndex}>{cell}</li>
            })
          })}
        </ul>
      </main>
    )
  }
}

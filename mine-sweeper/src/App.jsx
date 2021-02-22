import React, { Component } from 'react'

export class App extends Component {
  state = {
    board: [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
  }

  handleNewGame = async () => {
    const body = { difficulty: 0 }

    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      }
    )

    const game = await response.json()

    this.setState(game)
  }

  render() {
    // Nested MAP loop (kind of like our old friend the nested for loop
    // ... all the way back to week 1 with suits and faces)

    return (
      <main>
        <h1>Mine Sweeper</h1>
        <h2>
          <button onClick={this.handleNewGame}>New Easy Game</button>
        </h2>
        <h3>Mines: {this.state.mines}</h3>
        <h3>Game #: {this.state.id}</h3>
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

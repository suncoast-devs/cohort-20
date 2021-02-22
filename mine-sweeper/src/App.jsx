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
    difficulty: 0,
  }

  handleNewGame = async difficulty => {
    const body = { difficulty: difficulty }

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

  handleClickCell = async (event, rowIndex, colIndex) => {
    event.preventDefault()

    const body = { row: rowIndex, col: colIndex }

    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      }
    )

    const game = await response.json()

    this.setState(game)
  }

  handleRightClickCell = async (event, rowIndex, colIndex) => {
    event.preventDefault()

    const body = { row: rowIndex, col: colIndex }

    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      }
    )

    const game = await response.json()

    this.setState(game)
  }

  turnCellIntoLIClassName = cell => {
    switch (cell) {
      case 'F':
        return 'cell-flag'
      case '*':
        return 'cell-bomb'
      case '_':
        return 'cell-free'
      default:
        return 'cell-number'
    }
  }

  // transform a cell
  // e.g. 'F', or ' ', or '1' or '_'
  // into an `<i>` icon or any other value.
  turnCellValueIntoTheCorrectElement = cell => {
    switch (cell) {
      case 'F':
        return <i className="fas fa-flag"></i>
      case '*':
        return <i className="fas fa-bomb"></i>
      case '_':
        return ' '
      default:
        return cell
    }
  }

  render() {
    // Nested MAP loop (kind of like our old friend the nested for loop
    // ... all the way back to week 1 with suits and faces)

    return (
      <main>
        <h1>Mine Sweeper</h1>
        <h2>
          <button onClick={() => this.handleNewGame(0)}>New Easy Game</button>
          <button onClick={() => this.handleNewGame(1)}>
            New Intermediate Game
          </button>
          <button onClick={() => this.handleNewGame(2)}>
            New Difficult Game
          </button>
        </h2>
        <h3>Mines: {this.state.mines}</h3>
        <h3>Game #: {this.state.id}</h3>
        <h3>{this.state.state}</h3>

        <ul className={`difficulty-${this.state.difficulty}`}>
          {this.state.board.map((row, rowIndex) => {
            return row.map((cell, colIndex) => {
              return (
                <li
                  key={colIndex}
                  onClick={() =>
                    this.handleClickCell(event, rowIndex, colIndex)
                  }
                  onContextMenu={event =>
                    this.handleRightClickCell(event, rowIndex, colIndex)
                  }
                  className={this.turnCellIntoLIClassName(cell)}
                >
                  {this.turnCellValueIntoTheCorrectElement(cell)}
                </li>
              )
            })
          })}
        </ul>
      </main>
    )
  }
}

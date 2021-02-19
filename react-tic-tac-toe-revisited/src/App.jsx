import React, { Component } from 'react'

export class App extends Component {
  state = {
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    winner: null,
  }

  handleClickCell = (row, column) => {
    console.log(`I clicked on row ${row} and column ${column}`)
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <ul>
          <li onClick={() => this.handleClickCell(0, 0)}>
            {this.state.board[0][0]}
          </li>
          <li onClick={() => this.handleClickCell(0, 1)}>
            {this.state.board[0][1]}
          </li>
          <li onClick={() => this.handleClickCell(0, 2)}>
            {this.state.board[0][2]}
          </li>

          <li onClick={() => this.handleClickCell(1, 0)}>
            {this.state.board[1][0]}
          </li>
          <li onClick={() => this.handleClickCell(1, 1)}>
            {this.state.board[1][1]}
          </li>
          <li onClick={() => this.handleClickCell(1, 2)}>
            {this.state.board[1][2]}
          </li>

          <li onClick={() => this.handleClickCell(2, 0)}>
            {this.state.board[2][0]}
          </li>
          <li onClick={() => this.handleClickCell(2, 1)}>
            {this.state.board[2][1]}
          </li>
          <li onClick={() => this.handleClickCell(2, 2)}>
            {this.state.board[2][2]}
          </li>
        </ul>
      </div>
    )
  }
}

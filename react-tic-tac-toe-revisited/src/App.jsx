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

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <ul>
          <li>{this.state.board[0][0]}</li>
          <li>{this.state.board[0][1]}</li>
          <li>{this.state.board[0][2]}</li>

          <li>{this.state.board[1][0]}</li>
          <li>{this.state.board[1][1]}</li>
          <li>{this.state.board[1][2]}</li>

          <li>{this.state.board[2][0]}</li>
          <li>{this.state.board[2][1]}</li>
          <li>{this.state.board[2][2]}</li>
        </ul>
      </div>
    )
  }
}

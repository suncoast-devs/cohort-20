import React, { Component } from 'react'

export class Cell extends Component {
  handleClickCell = () => {
    console.log(`clicked on ${this.props.row} ${this.props.column}`)

    // this.props.recordMove is a function!
    // we were passed that function when we were created!
    // it expects a row and column to be passed
    this.props.recordMove(this.props.row, this.props.column)
  }

  render() {
    return (
      <li
        className={this.props.value === ' ' ? '' : 'taken'}
        onClick={this.handleClickCell}
      >
        {this.props.value}
      </li>
    )
  }
}

export class App extends Component {
  state = {
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    winner: null,
  }

  recordMove = async (row, column) => {
    if (
      this.state.id === undefined ||
      this.state.winner ||
      this.state.board[row][column] !== ' '
    ) {
      return
    }

    console.log(`I clicked on row ${row} and column ${column}`)

    const url = `https://sdg-tic-tac-toe-api.herokuapp.com/game/${this.state.id}`

    const body = { row: row, column: column }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })

    const game = await response.json()

    this.setState(game)
  }

  handleNewGame = async () => {
    const response = await fetch(
      'https://sdg-tic-tac-toe-api.herokuapp.com/game',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )

    const game = await response.json()

    this.setState(game)
  }

  render() {
    // dynamic
    // let header = 'Tic Tac Toe'

    // if (this.state.winner === 'O') {
    //   header = 'Tic Tac Toe - Winner is O'
    // }

    // if (this.state.winner === 'X') {
    //   header = 'Tic Tac Toe - Winner is X'
    // }

    // if (this.state.winner === 'TIE') {
    //   header = 'Tic Tac Toe - Winner is TIE'
    // }

    const header = this.state.winner
      ? `Winner is ${this.state.winner}`
      : 'Tic Tac Toe'

    return (
      <div>
        <h1>
          {header} - <button onClick={this.handleNewGame}>NEW GAME</button>
        </h1>
        <ul>
          <Cell
            row={0}
            column={0}
            value={this.state.board[0][0]}
            recordMove={this.recordMove}
          />
          <Cell
            row={0}
            column={1}
            value={this.state.board[0][1]}
            recordMove={this.recordMove}
          />
          <Cell
            row={0}
            column={2}
            value={this.state.board[0][2]}
            recordMove={this.recordMove}
          />

          <Cell
            row={1}
            column={0}
            value={this.state.board[1][0]}
            recordMove={this.recordMove}
          />
          <Cell
            row={1}
            column={1}
            value={this.state.board[1][1]}
            recordMove={this.recordMove}
          />
          <Cell
            row={1}
            column={2}
            value={this.state.board[1][2]}
            recordMove={this.recordMove}
          />

          <Cell
            row={2}
            column={0}
            value={this.state.board[2][0]}
            recordMove={this.recordMove}
          />
          <Cell
            row={2}
            column={1}
            value={this.state.board[2][1]}
            recordMove={this.recordMove}
          />
          <Cell
            row={2}
            column={2}
            value={this.state.board[2][2]}
            recordMove={this.recordMove}
          />
        </ul>
      </div>
    )
  }
}

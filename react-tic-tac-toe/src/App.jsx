import React, { Component } from 'react'

export class App extends Component {
  state = {
    data: [
      ['_', '_', '_'],
      ['_', '_', '_'],
      ['_', '_', '_'],
    ],
  }

  handleClickOnCell = () => {
    console.log('I did it!')
    // What I want to do is update the board!
    //
    // I need to know the row and the column index
    // where I was clicked!
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <ul>
          {this.state.data.map(row => {
            return row.map((cell, columnIndex) => {
              return (
                <li key={columnIndex} onClick={this.handleClickOnCell}>
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

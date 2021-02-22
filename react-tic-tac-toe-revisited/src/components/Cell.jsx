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

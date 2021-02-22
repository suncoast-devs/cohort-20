import React, { Component } from 'react'

export class Cell extends Component {
  handleClickCell = () => {
    const { row, column, recordMove } = this.props

    console.log(`clicked on ${row} ${column}`)

    // this.props.recordMove is a function!
    // we were passed that function when we were created!
    // it expects a row and column to be passed
    recordMove(row, column)
  }

  render() {
    const { value } = this.props

    return (
      <li
        className={value === ' ' ? '' : 'taken'}
        onClick={this.handleClickCell}
      >
        {value}
      </li>
    )
  }
}

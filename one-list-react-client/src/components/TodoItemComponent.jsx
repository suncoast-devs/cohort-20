import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

// This kinda looks like arguments to a function
// function(name) { console.log(name) }
//
// Except they are wrapped in a `{    }` -- that means destructuring
//
// Since props is the first argument, we are automatically destructuring props

export function TodoItemComponent({ id, text, complete, reloadItems }) {
  async function toggleCompleteStatus() {
    console.log(`I clicked on an item with id ${id}!`)
    // Call the API HERE to tell it that an item is complete (or incomplete)
    const response = await axios.put(
      `https://one-list-api.herokuapp.com/items/${id}?access_token=cohort20`,
      { item: { complete: !complete } }
    )

    console.log(response.data)

    // reloadItems is a prop
    // -- but it is a function the parent is giving me
    // -- so I can call it here, the appropriate time to reload the items
    reloadItems()
  }

  return (
    <li onClick={toggleCompleteStatus} className={complete ? 'completed' : ''}>
      {text}
      <Link to={`/items/${id}`}>Show</Link>
    </li>
  )
}

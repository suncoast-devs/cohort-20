import axios from 'axios'
import React, { useEffect, useState } from 'react'
import sdgLogo from './images/sdg-logo.png'

export function App() {
  const [todoItems, setTodoItems] = useState([])

  // useEffect takes two arguments, a function and an array
  // - The function is called ONCE at start
  // - The function is also called when the array's contents change
  //
  // But alas, our array is empty so we are called only once

  useEffect(
    async function () {
      console.log('Run once when the app mounts')

      // Right here is where we want our API fetching code to go
      const response = await axios.get(
        'https://one-list-api.herokuapp.com/items?access_token=illustriousvoyage'
      )

      // Don't even need to do   const json = await response.json()
      // axios does it for us automatically, we just ask for `data`

      setTodoItems(response.data)
    },
    // Because the second argument here is an empty array, there is nothing to watch
    []
  )

  useEffect(function () {
    console.log('this too is called only once when the app loads')
  }, [])

  // No API fetching here, otherwise it would happen on ever render

  return (
    <div className="app">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <ul>
          {todoItems.map(function (todoItem) {
            return (
              <li
                key={todoItem.id}
                className={todoItem.complete ? 'completed' : ''}
              >
                {todoItem.text}
              </li>
            )
          })}
        </ul>
        <form>
          <input type="text" placeholder="Whats up?" />
        </form>
      </main>
      <footer>
        <p>
          <img src={sdgLogo} height="42" alt="logo" />
        </p>
        <p>&copy; 2020 Suncoast Developers Guild</p>
      </footer>
    </div>
  )
}

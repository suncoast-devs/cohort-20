import axios from 'axios'
import React, { useEffect, useState } from 'react'
import sdgLogo from './images/sdg-logo.png'
import { TodoItemComponent } from './components/TodoItemComponent'

export function TodoList() {
  const [todoItems, setTodoItems] = useState([])
  const [newTodoText, setNewTodoText] = useState('')

  // useEffect takes two arguments, a function and an array
  // - The function is called ONCE at start
  // - The function is also called when the array's contents change
  //
  // But alas, our array is empty so we are called only once

  async function loadAllTodoItems() {
    // Right here is where we want our API fetching code to go
    const response = await axios.get(
      'https://one-list-api.herokuapp.com/items?access_token=cohort20'
    )

    // Don't even need to do   const json = await response.json()
    // axios does it for us automatically, we just ask for `data`

    setTodoItems(response.data)
  }

  useEffect(
    loadAllTodoItems,
    // Because the second argument here is an empty array, there is nothing to watch
    []
  )

  useEffect(function () {
    console.log('this too is called only once when the app loads')
  }, [])

  // No API fetching here, otherwise it would happen on ever render

  async function handleNewTodoItem(event) {
    event.preventDefault()

    // Use the API to create a new item

    const response = await axios.post(
      'https://one-list-api.herokuapp.com/items?access_token=cohort20',
      {
        item: {
          text: newTodoText,
        },
      }
    )

    // This code APPENDS to the list
    //
    // // Make a new array by taking all the elements of our current state
    // // (todoItems) and put them in the new array, FOLLOWED BY our new
    // // todo item
    // const newTodoItem = response.data
    // const newTodoItems = [...todoItems, newTodoItem]

    // // Put that new array back in the todoItems state
    // setTodoItems(newTodoItems)

    // This code REPLACES the list
    loadAllTodoItems()

    // Clear out the input so we can accept new text
    setNewTodoText('')
  }

  return (
    <>
      <ul>
        {todoItems.map(function (todoItem) {
          return (
            <TodoItemComponent
              key={todoItem.id}
              id={todoItem.id}
              complete={todoItem.complete}
              text={todoItem.text}
              reloadItems={loadAllTodoItems}
            />
            // <li
            //   key={todoItem.id}
            //   className={todoItem.complete ? 'completed' : ''}
            // >
            //   {todoItem.text}
            // </li>
          )
        })}
      </ul>
      <form onSubmit={handleNewTodoItem}>
        <input
          type="text"
          placeholder="Whats up?"
          value={newTodoText}
          onChange={function (event) {
            setNewTodoText(event.target.value)
          }}
        />
      </form>
    </>
  )
}

export function App() {
  return (
    <div className="app">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <TodoList />
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

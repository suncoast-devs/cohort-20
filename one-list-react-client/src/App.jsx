import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Switch, useParams } from 'react-router'
import sdgLogo from './images/sdg-logo.png'
import { TodoListPage } from './pages/TodoListPage'

export function TodoItemPage() {
  const [todoItem, setTodoItem] = useState({
    id: undefined,
    text: '',
    complete: false,
  })

  // this gives us back an *OBJECT* with neat properties
  const params = useParams()

  useEffect(
    async function () {
      // load the specific item from the API

      const response = await axios.get(
        `https://one-list-api.herokuapp.com/items/${params.id}?access_token=cohort20`
      )

      setTodoItem(response.data)
    },
    [params.id]
  )

  return (
    <div>
      <p className={todoItem.complete ? 'completed' : ''}>{todoItem.text}</p>
      <p>{todoItem.created_at}</p>
      <p>{todoItem.updated_at}</p>
      <button>Delete</button>
    </div>
  )
}

export function App() {
  return (
    <div className="app">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        {/* switch(what url?) */}
        <Switch>
          {/* case "/" */}
          {/* this matches EVERYTHING: <Route path="/"> */}
          <Route exact path="/">
            <TodoListPage />
          </Route>
          {/* This matches /items/42 and /items/9876 and anything else that starts with /items/ and has one part afterwards */}
          <Route path="/items/:id">
            <TodoItemPage />
          </Route>
          {/* this is like a default: <Route path="*"> */}
          <Route path="*">
            <p>Ooops, nothing found here</p>
          </Route>
        </Switch>
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

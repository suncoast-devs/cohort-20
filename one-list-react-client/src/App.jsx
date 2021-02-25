import React from 'react'
import { Route, Switch } from 'react-router'
import sdgLogo from './images/sdg-logo.png'
import { TodoListPage } from './pages/TodoListPage'

export function TodoItemPage() {
  return <p>This would be the details of item 42!</p>
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

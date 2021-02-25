import React from 'react'
import sdgLogo from './images/sdg-logo.png'
import { TodoListPage } from './pages/TodoListPage'

export function App() {
  return (
    <div className="app">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <TodoListPage />
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

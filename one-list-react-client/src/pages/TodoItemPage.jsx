import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'

export function TodoItemPage() {
  const [todoItem, setTodoItem] = useState({
    id: undefined,
    text: '',
    complete: false,
  })

  // This gives us the ability to navigate the browser
  const history = useHistory()

  // this gives us back an *OBJECT* with neat properties
  const { id } = useParams()
  const apiURL = `https://one-list-api.herokuapp.com/items/${id}?access_token=cohort20`

  useEffect(
    async function () {
      // load the specific item from the API
      const response = await axios.get(apiURL)

      setTodoItem(response.data)
    },
    [id]
  )

  async function deleteTodoItem() {
    const response = await axios.delete(apiURL)

    // But now we want to redirect to the home page
    history.push('/')
  }

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p className={todoItem.complete ? 'completed' : ''}>{todoItem.text}</p>
      <p>{todoItem.created_at}</p>
      <p>{todoItem.updated_at}</p>
      <button onClick={deleteTodoItem}>Delete</button>
    </div>
  )
}

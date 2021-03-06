import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function SignUp() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()

  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/')
    }
  }

  return (
    <main className="page">
      <nav>
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>
        <h2>Sign Up</h2>
      </nav>

      {errorMessage && <p>{errorMessage}</p>}
      <form action="#" onSubmit={handleFormSubmit}>
        <p className="form-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" onChange={handleStringFieldChange} />
        </p>
        <p className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </main>
  )
}

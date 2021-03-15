import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import avatar from '../images/avatar.png'

export function NewRestaurant() {
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedRestaurant = { ...newRestaurant, [fieldName]: value }

    setNewRestaurant(updatedRestaurant)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    // const response = await axios({ method: 'POST', url: '/api/Restaurants', data: newRestaurant})

    const response = await fetch('/api/Restaurants', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRestaurant),
    })

    const json = await response.json()

    if (response.status === 400) {
      setErrorMessage(Object.values(json.errors).join(' '))
    } else {
      history.push('/')
    }

    // This version clears the restaurant and sets a message
    // setNewRestaurant({
    //   name: '',
    //   description: '',
    //   address: '',
    //   telephone: '',
    // })
  }

  return (
    <main className="page">
      <nav>
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>
        <h2>Add a Restaurant</h2>
      </nav>
      <form action="#" onSubmit={handleFormSubmit}>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <p className="form-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleStringFieldChange}
            value={newRestaurant.name}
          />
        </p>
        <p className="form-input">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={newRestaurant.description}
            onChange={handleStringFieldChange}
          ></textarea>
          <span className="note">
            Enter a brief description of the restaurant.
          </span>
        </p>
        <p className="form-input">
          <label htmlFor="name">Address</label>
          <textarea
            name="address"
            onChange={handleStringFieldChange}
            value={newRestaurant.address}
          ></textarea>
        </p>
        <p className="form-input">
          <label htmlFor="name">Telephone</label>
          <input
            type="tel"
            name="telephone"
            onChange={handleStringFieldChange}
            value={newRestaurant.telephone}
          />
        </p>
        <p className="form-input">
          <label htmlFor="picture">Picture</label>
          <input type="file" name="picture" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </main>
  )
}

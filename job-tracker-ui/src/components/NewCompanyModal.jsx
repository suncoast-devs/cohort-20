import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function NewCompanyModal(props) {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const history = useHistory()

  async function submitNewCompany(event) {
    event.preventDefault()

    // Code to run to make a new company
    // use fetch to POST to the API to make a new company
    const newCompanyToSendToAPI = {
      companyName: name,
      url: url,
      description: description,
    }

    await fetch('http://localhost:5000/api/Companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCompanyToSendToAPI),
    })

    // Do something afterward...
    // Call whatever function our PARENT gave us
    // that we should do after we have added a company

    history.push('/')
    props.whenDoneWithAddingCompany()
  }

  return (
    <div className="modal">
      <form className="new-company">
        <header>New Company</header>
        <fieldset>
          <label>Name:</label>
          <input
            name="companyName"
            type="text"
            value={name}
            onChange={function (event) {
              setName(event.target.value)
            }}
          />
        </fieldset>

        <fieldset>
          <label>URL:</label>
          <input
            name="url"
            type="text"
            value={url}
            onChange={function (event) {
              setUrl(event.target.value)
            }}
          />
        </fieldset>

        <fieldset>
          <label>Description:</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={function (event) {
              setDescription(event.target.value)
            }}
          />
        </fieldset>

        <fieldset className="submit">
          <a href="#" onClick={submitNewCompany}>
            Submit
          </a>
          <Link to="/">Cancel</Link>
        </fieldset>
      </form>
    </div>
  )
}

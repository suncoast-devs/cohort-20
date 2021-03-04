import React, { useEffect, useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'

function NewCompanyModal() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  function submitNewCompany(event) {
    event.preventDefault()

    console.log(`Make a new company with ${name} ${url} ${description}`)
    // Code to run to make a new company
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
        </fieldset>
      </form>
    </div>
  )
}

export function Companies() {
  const [companiesAreLoaded, setCompaniesAreLoaded] = useState(false)
  const [companies, setCompanies] = useState([])
  const [userPressedNew, setUserPressedNew] = useState(true)

  // What would be nice is...
  //
  // Right here, before the render to *FETCH* the data from the API
  // but we want the data to be fetched ONCE, regardless of how many
  // times this component renders and re-renders

  // Enter useEffect

  useEffect(
    async function () {
      // Work
      // API Fetch

      const response = await fetch('http://localhost:5000/api/Companies')
      const json = await response.json()

      setCompanies(json)
      setCompaniesAreLoaded(true)
    },
    [
      /* array of things to watch for changes */
      /* for now, this is left empty */
    ]
  )

  // Until companies are loaded, show a spinner
  if (companiesAreLoaded === false) {
    return <Icon name="spinner" />
  }

  if (companies.length === 0) {
    return <div className="null-state">Get Working!</div>
  }

  return (
    <main className="companies">
      {userPressedNew ? <NewCompanyModal /> : <></>}
      <Panel
        title="Companies"
        headerAction={
          <a
            href="#new"
            onClick={function (event) {
              event.preventDefault()

              setUserPressedNew(true)
            }}
          >
            <Icon name="plus" />
          </a>
        }
      >
        {
          // Loop over the companies array and make new panelitem/company elements

          companies.map(function (company) {
            return (
              <PanelItem key={company.id}>
                <Company
                  name={company.companyName}
                  url={company.url}
                  description={company.description}
                ></Company>
              </PanelItem>
            )
          })
        }
      </Panel>
    </main>
  )
}

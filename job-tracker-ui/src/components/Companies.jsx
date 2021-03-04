import React, { useEffect, useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'
import sampleFakeCompanies from './sampleFakeCompanies.json'

export function Companies() {
  const [companiesAreLoaded, setCompaniesAreLoaded] = useState(false)
  const [companies, setCompanies] = useState([])

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
      <Panel
        title="Companies"
        headerAction={
          <a href="#new">
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

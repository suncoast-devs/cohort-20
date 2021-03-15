import React from 'react'
import { NewRestaurant } from './pages/NewRestaurant'

import './custom.scss'

import { Route, Switch } from 'react-router-dom'
import { Restaurants } from './pages/Restaurants'
import { Restaurant } from './pages/Restaurant'
import { WithHeaderAndFooter } from './components/WithHeaderAndFooter'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <WithHeaderAndFooter>
            <Restaurants />
          </WithHeaderAndFooter>
        </Route>
        <Route exact path="/new">
          <WithHeaderAndFooter>
            <NewRestaurant />
          </WithHeaderAndFooter>
        </Route>
        <Route exact path="/restaurants/:id">
          <WithHeaderAndFooter>
            <Restaurant />
          </WithHeaderAndFooter>
        </Route>
      </Switch>
    </>
  )
}

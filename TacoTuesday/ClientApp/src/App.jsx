import React from 'react'
import { NewRestaurant } from './pages/NewRestaurant'

import './custom.scss'
import { Route, Switch } from 'react-router-dom'
import { Restaurants } from './pages/Restaurants'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Restaurants />
      </Route>
      <Route exact path="/new">
        <NewRestaurant />
      </Route>
    </Switch>
  )
}

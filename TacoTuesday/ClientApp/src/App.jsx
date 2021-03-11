import React from 'react'
import { NewRestaurant } from './pages/NewRestaurant'

import './custom.scss'
import { Route, Switch } from 'react-router-dom'
import { Restaurants } from './pages/Restaurants'
import { Restaurant } from './pages/Restaurant'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Restaurants />
      </Route>
      <Route exact path="/new">
        <NewRestaurant />
      </Route>
      <Route exact path="/restaurants/:id">
        <Restaurant />
      </Route>
    </Switch>
  )
}

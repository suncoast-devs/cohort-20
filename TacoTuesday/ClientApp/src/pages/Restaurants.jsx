import React, { useEffect, useState } from 'react'
import avatar from '../images/avatar.png'
import tacoTuesday from '../images/taco-tuesday.svg'
import map from '../images/map.png'

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([])

  // BEFORE:
  // useEffect(async function () {
  //   // Perfect place to load our restaurants from the API!
  //   const response = await fetch('/api/Restaurants')
  //   const json = await response.json()

  //   setRestaurants(json)
  // }, [])

  // CORRECT:
  useEffect(function () {
    // This function runs ONCE when the component first appears on the screen

    async function fetchRestaurants() {
      // Perfect place to load our restaurants from the API!
      const response = await fetch('/api/Restaurants')
      const json = await response.json()

      setRestaurants(json)
    }

    fetchRestaurants()
  }, [])

  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              <a href="/">
                <i className="fa fa-plus"></i> Restaurant
              </a>
              <p>Welcome back, Steve!</p>
            </nav>
          </li>
          <li className="avatar">
            <img src={avatar} alt="Steve's Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>
      <main className="home">
        <h1>
          <img src={tacoTuesday} alt="Taco Tuesday" />
        </h1>
        <form className="search">
          <input type="text" placeholder="Search..." />
        </form>

        <section className="map">
          <img alt="Example Map" src={map} />
        </section>

        <ul className="results">
          {restaurants.map(function (restaurant) {
            return (
              <li key={restaurant.id}>
                <h2>{restaurant.name}</h2>
                <p>
                  <span
                    className="stars"
                    style={{ '--rating': 4.7 }}
                    aria-label="Star rating of this location is 4.7 out of 5."
                  ></span>
                  (2,188)
                </p>
                <address>{restaurant.address}</address>
              </li>
            )
          })}
        </ul>
      </main>
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}

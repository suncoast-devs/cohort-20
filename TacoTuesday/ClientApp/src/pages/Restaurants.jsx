import React, { useEffect, useState } from 'react'
import tacoTuesday from '../images/taco-tuesday.svg'
import map from '../images/map.png'
import { Link } from 'react-router-dom'

function SingleRestaurantFromList(props) {
  return (
    <li>
      <h2>
        <Link to={`/restaurants/${props.id}`}>{props.name}</Link>
      </h2>
      <p>
        <span
          className="stars"
          style={{ '--rating': 4.7 }}
          aria-label="Star rating of this location is 4.7 out of 5."
        ></span>
        ({props.reviewCount})
      </p>
      <address>{props.address}</address>
    </li>
  )
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([])
  const [filterText, setFilterText] = useState('')

  // BEFORE:
  // useEffect(async function () {
  //   // Perfect place to load our restaurants from the API!
  //   const response = await fetch('/api/Restaurants')
  //   const json = await response.json()

  //   setRestaurants(json)
  // }, [])

  // CORRECT:
  useEffect(
    function () {
      // This function runs ONCE when the component first appears on the screen

      async function fetchRestaurants() {
        const url =
          filterText.length === 0
            ? '/api/Restaurants'
            : `/api/Restaurants?filter=${filterText}`

        console.log(url)

        // Perfect place to load our restaurants from the API!
        const response = await fetch(url)
        const json = await response.json()

        setRestaurants(json)
      }

      console.log(`Fetching restaurants and the filter is ${filterText}`)
      fetchRestaurants()
    },
    [filterText]
  )

  return (
    <main className="home">
      <h1>
        <img src={tacoTuesday} alt="Taco Tuesday" />
      </h1>
      <form className="search">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={function (event) {
            setFilterText(event.target.value)
          }}
        />
      </form>

      <section className="map">
        <img alt="Example Map" src={map} />
      </section>

      <ul className="results">
        {restaurants.map(function (restaurant) {
          return (
            <SingleRestaurantFromList
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              address={restaurant.address}
              reviewCount={restaurant.reviews.length}
            />
          )
        })}
      </ul>
    </main>
  )
}

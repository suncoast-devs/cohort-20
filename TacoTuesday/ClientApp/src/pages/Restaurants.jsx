import React, { useEffect, useState } from 'react'
import avatar from '../images/avatar.png'
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
    <>
      <header>
        <ul>
          <li>
            <nav>
              <Link to="/new">
                <i className="fa fa-plus"></i> Restaurant
              </Link>
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
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}

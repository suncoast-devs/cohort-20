import React, { useEffect, useState } from 'react'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'

import tacoTuesday from '../images/taco-tuesday.svg'
import map from '../images/map.png'
import { Link } from 'react-router-dom'
import { Stars } from '../components/Stars'

function SingleRestaurantFromList(props) {
  return (
    <li>
      <h2>
        <Link to={`/restaurants/${props.restaurant.id}`}>
          {props.restaurant.name}
        </Link>
      </h2>
      <p>
        <Stars restaurant={props.restaurant} /> (
        {props.restaurant.reviews.length})
      </p>
      <address>{props.restaurant.address}</address>
    </li>
  )
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([])
  const [filterText, setFilterText] = useState('')
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 9.8,
  })
  const [selectedMapRestaurant, setSelectedMapRestaurant] = useState(null)

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
        <ReactMapGL
          style={{ position: 'absolute' }}
          {...viewport}
          onViewportChange={setViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          {selectedMapRestaurant && (
            <Popup
              latitude={selectedMapRestaurant.latitude}
              longitude={selectedMapRestaurant.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setSelectedMapRestaurant(null)}
              offsetTop={-5}
            >
              <div>
                <Link to={`/restaurants/${selectedMapRestaurant.id}`}>
                  <p>{selectedMapRestaurant.name}</p>
                </Link>
                <p>{selectedMapRestaurant.description}</p>
              </div>
            </Popup>
          )}

          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              latitude={restaurant.latitude}
              longitude={restaurant.longitude}
            >
              <span
                role="img"
                aria-label="taco"
                onClick={function () {
                  setSelectedMapRestaurant(restaurant)
                }}
              >
                🌮
              </span>
            </Marker>
          ))}

          <div style={{ position: 'absolute', right: 0 }}>
            <NavigationControl />
          </div>
        </ReactMapGL>
      </section>

      <ul className="results">
        {restaurants.map(function (restaurant) {
          return (
            <SingleRestaurantFromList
              key={restaurant.id}
              restaurant={restaurant}
            />
          )
        })}
      </ul>
    </main>
  )
}

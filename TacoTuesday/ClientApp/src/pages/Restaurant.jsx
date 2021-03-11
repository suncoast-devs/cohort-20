import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar.png'

export function Restaurant() {
  const params = useParams()
  const [restaurant, setRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
  })

  // This gives us the ID of the restaurant we are looking for
  const id = params.id

  useEffect(() => {
    async function fetchRestaurant() {
      // const response = await axios(`/api/Restaurants/${id}`)
      // const response = await axios({ method: 'GET', url: `/api/Restaurants/${id}`} )
      // setRestaurant(response.data)

      const response = await fetch(`/api/Restaurants/${id}`)
      const apiData = await response.json()

      setRestaurant(apiData)
    }

    fetchRestaurant()
  }, [id])

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
      <main className="page">
        <nav>
          <Link to="/">
            <i className="fa fa-home"></i>
          </Link>
          <h2>{restaurant.name}</h2>
        </nav>
        <p>
          <span
            className="stars"
            style={{ '--rating': 4.7 }}
            aria-label="Star rating of this location is 4.7 out of 5."
          ></span>
          (2,188)
        </p>
        <address>{restaurant.address}</address>
        <hr />
        <h3>Reviews for {restaurant.name}</h3>
        <ul className="reviews">
          <li>
            <div className="author">
              Gavin said: <em>Really good.</em>
            </div>
            <div className="body">
              <p>Yummy!</p>
            </div>
            <div className="meta">
              <span
                className="stars"
                style={{ '--rating': 3.2 }}
                aria-label="Star rating of this location is 4.7 out of 5."
              ></span>
              <time>Tuesday, July 7th, 2020 at 3:10 AM</time>
            </div>
          </li>
          <li>
            <div className="author">
              Jason said: <em>The tameles are to die for!</em>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, a? Voluptatibus quibusdam ratione ex minima corporis
                fugiat accusamus, atque, magni laboriosam voluptate molestiae
                expedita, reprehenderit perferendis! Fuga aspernatur aut minus.
              </p>
            </div>
            <div className="meta">
              <span
                className="stars"
                style={{ '--rating': 4.7 }}
                aria-label="Star rating of this location is 4.7 out of 5."
              ></span>
              <time>Tuesday, July 7th, 2020 at 3:10 AM</time>
            </div>
          </li>
        </ul>
        <h3>Enter your own review</h3>
        <form action="#">
          <p className="form-input">
            <label htmlFor="summary">Summary</label>
            <input type="text" name="summary" />
            <span className="note">
              Enter a brief summary of your review. Example:{' '}
              <strong>Great food, good prices.</strong>
            </span>
          </p>
          <p className="form-input">
            <label htmlFor="body">Review</label>
            <textarea name="body"></textarea>
          </p>
          <div className="rating">
            <input id="star-rating-1" type="radio" name="stars" value="1" />
            <label htmlFor="star-rating-1">1 star</label>
            <input id="star-rating-2" type="radio" name="stars" value="2" />
            <label htmlFor="star-rating-2">2 stars</label>
            <input id="star-rating-3" type="radio" name="stars" value="3" />
            <label htmlFor="star-rating-3">3 stars</label>
            <input id="star-rating-4" type="radio" name="stars" value="4" />
            <label htmlFor="star-rating-4">4 stars</label>
            <input id="star-rating-5" type="radio" name="stars" value="5" />
            <label htmlFor="star-rating-5">5 stars</label>

            <div className="star-rating">
              <label
                htmlFor="star-rating-1"
                aria-label="1 star"
                title="1 star"
              ></label>
              <label
                htmlFor="star-rating-2"
                aria-label="2 stars"
                title="2 stars"
              ></label>
              <label
                htmlFor="star-rating-3"
                aria-label="3 stars"
                title="3 stars"
              ></label>
              <label
                htmlFor="star-rating-4"
                aria-label="4 stars"
                title="4 stars"
              ></label>
              <label
                htmlFor="star-rating-5"
                aria-label="5 stars"
                title="5 stars"
              ></label>
            </div>
          </div>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}

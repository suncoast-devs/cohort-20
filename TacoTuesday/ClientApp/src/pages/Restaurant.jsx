import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
import format from 'date-fns/format'
import avatar from '../images/avatar.png'
import { authHeader, getUser, getUserId, isLoggedIn } from '../auth'
import { Stars } from '../components/Stars'

export function Restaurant() {
  const history = useHistory()

  // Uncomment this to use the `setTimeout` example down below
  // const history = useHistory()

  const params = useParams()
  const [restaurant, setRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
    photoURL: '',
    reviews: [],
  })

  // This gives us the ID of the restaurant we are looking for
  const id = Number(params.id)

  const [newReview, setNewReview] = useState({
    body: '',
    summary: '',
    stars: 0,
    restaurantId: id,
  })

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

  function handleNewReviewTextFieldChange(event) {
    const name = event.target.name
    const value = event.target.value

    setNewReview({ ...newReview, [name]: value })
  }

  function handleStarRadioButton(newStars) {
    setNewReview({ ...newReview, stars: newStars })
  }

  async function handleNewReviewSubmit(event) {
    event.preventDefault()

    // const response = await axios({
    //   method: 'POST',
    //   url: 'api/reviews',
    //   data: newReview,
    // })

    await fetch(`/api/Reviews`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newReview),
    })

    // if (response.status === 401) {
    //   setErrorMessage("Not Authorized");
    // }

    // setTimeout(function () {
    //   // Do this after a break
    //   history.push('/')
    // }, 5000)

    setNewReview({
      ...newReview,
      body: '',
      summary: '',
      stars: 0,
    })

    const restaurantsResponse = await fetch(`/api/Restaurants/${id}`)
    const apiData = await restaurantsResponse.json()

    setRestaurant(apiData)
  }

  async function handleDelete(event) {
    event.preventDefault()

    const response = await fetch(`/api/Restaurants/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    if (response.status === 200 || response.status === 204) {
      history.push('/')
    }
  }

  async function handleDeleteReview(event, reviewId) {
    event.preventDefault()

    await fetch(`/api/Reviews/${reviewId}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    const response = await fetch(`/api/Restaurants/${id}`)
    const apiData = await response.json()

    setRestaurant(apiData)
  }

  const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

  return (
    <main className="page">
      <nav>
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>
        <h2>{restaurant.name}</h2>
      </nav>
      <p>
        <Stars restaurant={restaurant} />({restaurant.reviews.length}){' '}
      </p>
      <address>{restaurant.address}</address>
      {restaurant.photoURL && (
        <img alt="Restaurant Photo" width={200} src={restaurant.photoURL} />
      )}
      {restaurant.userId === getUserId() && (
        <button onClick={handleDelete}>Delete</button>
      )}
      <hr />
      <h3>Reviews for {restaurant.name}</h3>
      <ul className="reviews">
        {restaurant.reviews.map(function (review) {
          return (
            <li key={review.id}>
              <div className="author">
                {review.user.fullName} said: <em>{review.summary}</em>
              </div>
              <div className="body">
                <p>{review.body}</p>
              </div>
              <div className="meta">
                <span
                  className="stars"
                  style={{ '--rating': review.stars }}
                  aria-label={`Star rating of this location is ${review.stars} out of 5.`}
                ></span>
                <time>{format(new Date(review.createdAt), dateFormat)}</time>
              </div>
              {review.user.id === getUserId() && (
                <div>
                  <button
                    className="small"
                    onClick={function (event) {
                      handleDeleteReview(event, review.id)
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          )
        })}
      </ul>

      {isLoggedIn() && (
        <>
          <h3>Enter your own review</h3>

          <form action="#" onSubmit={handleNewReviewSubmit}>
            <p className="form-input">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                name="summary"
                value={newReview.summary}
                onChange={handleNewReviewTextFieldChange}
              />
              <span className="note">
                Enter a brief summary of your review. Example:{' '}
                <strong>Great food, good prices.</strong>
              </span>
            </p>
            <p className="form-input">
              <label htmlFor="body">Review</label>
              <textarea
                name="body"
                value={newReview.body}
                onChange={handleNewReviewTextFieldChange}
              ></textarea>
            </p>
            <div className="rating">
              <input
                id="star-rating-1"
                type="radio"
                name="stars"
                value="1"
                checked={newReview.stars === 1}
                onChange={() => handleStarRadioButton(1)}
              />
              <label htmlFor="star-rating-1">1 star</label>
              <input
                id="star-rating-2"
                type="radio"
                name="stars"
                value="2"
                checked={newReview.stars === 2}
                onChange={() => handleStarRadioButton(2)}
              />
              <label htmlFor="star-rating-2">2 stars</label>
              <input
                id="star-rating-3"
                type="radio"
                name="stars"
                value="3"
                checked={newReview.stars === 3}
                onChange={() => handleStarRadioButton(3)}
              />
              <label htmlFor="star-rating-3">3 stars</label>
              <input
                id="star-rating-4"
                type="radio"
                name="stars"
                value="4"
                checked={newReview.stars === 4}
                onChange={() => handleStarRadioButton(4)}
              />
              <label htmlFor="star-rating-4">4 stars</label>
              <input
                id="star-rating-5"
                type="radio"
                name="stars"
                value="5"
                checked={newReview.stars === 5}
                onChange={() => handleStarRadioButton(5)}
              />
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
        </>
      )}
    </main>
  )
}

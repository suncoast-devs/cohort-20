import React from 'react'
import avatar from '../images/avatar.png'
import { Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout } from '../auth'

export function WithHeaderAndFooter(props) {
  function handleLogout() {
    logout()

    window.location.assign('/')
  }

  const user = getUser()

  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              {isLoggedIn() && (
                <Link to="/new">
                  <i className="fa fa-plus"></i> Restaurant
                </Link>
              )}
              {isLoggedIn() || <Link to="/signin">Sign In</Link>}
              {isLoggedIn() || <Link to="/signup">Sign Up</Link>}
              {isLoggedIn() && (
                <span className="link" onClick={handleLogout}>
                  Sign out
                </span>
              )}
              {isLoggedIn() && <p>Welcome back, {user.fullName}!</p>}
            </nav>
          </li>
          {isLoggedIn() && (
            <li className="avatar">
              <img
                src={avatar}
                alt={`${user.fullName} Avatar`}
                height="64"
                width="64"
              />
            </li>
          )}
        </ul>
      </header>
      {props.children}
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}

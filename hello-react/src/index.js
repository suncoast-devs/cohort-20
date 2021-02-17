// This pulls in the react code we need
import React from 'react'
import ReactDOM from 'react-dom'

// This pulls in our css file!
import './index.scss'

// This imports a class called `App` from
// a file named `App.jsx` in the current directory
import { App } from './App'

// Bootstraps react.
//
// It finds a component named App
//
// and puts it at the spot in the html
//
// where an element with the id of root is
//
// In our case, it becomes the entire page
ReactDOM.render(<App />, document.getElementById('root'))

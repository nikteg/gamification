import React from 'react'
import { Link } from 'react-router'

const NotFound = (props) => (
  <div className="container text-center">
    <h1>Oops! Something went wrong. Just keep calm and hate Sp*rs!</h1>
    <Link to="/">Back To Home</Link>
  </div>
)

export default NotFound

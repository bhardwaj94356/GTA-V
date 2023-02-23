import React from 'react'
import '../login/Login.css'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <>
      <div className="frost">
        <div className="left">
            <h1>Forgot Password</h1>
            <p>Did you forgot your password? Do not worry, we got you. Fill up the form and you will be given some kind of authentication to reset your password.</p>
        </div>
        <div className="right">
            <input type="email" name="email" id="email" placeholder="E Mail" />
            <input type="text" name="username" id="username" placeholder="Username" />
            <button type="submit">Forgot</button>
            <Link to="/"><a href="/">Back to Login</a></Link>
        </div>
      </div>
    </>
  )
}

export default Forgot
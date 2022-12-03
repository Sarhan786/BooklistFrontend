import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
  return (
    <div className='LoginPage'>
        <h1>Login</h1>
        <input
            className="input_fields"
            type="text"
            placeholder="UserName"
          ></input>
          <input
            className="input_fields"
            type="Password"
            placeholder="Password"
          ></input>
          <Link to="/Booklist"><button type="submit">Login</button></Link>
          <Link to="/Signup"><button type="submit">Signup</button></Link>
    </div>
  )
}

export default Login
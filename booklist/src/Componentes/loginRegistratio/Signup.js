import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='Signup'>
        <h1>Register</h1>
        <input
            className="input_fields"
            type="text"
            placeholder="UserName"
          ></input>
          <input
            className="input_fields"
            type="Password"
          ></input>
          <Link to="/"><button type="submit">Register</button></Link>
    </div>
  )
}

export default Signup
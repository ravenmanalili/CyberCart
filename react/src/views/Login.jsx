import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {

  const  onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    console.log('Form submitted')
  }
  
  return (
          <form onSubmit={onSubmit}>
            <h2 className='title'><strong>Log in</strong></h2>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button className='btn btn-block'>Login</button>
            <p className='message'>
              Not registered? <Link to='/signup'>Create an account
              </Link>            
              </p>
          </form>
      
  )
}

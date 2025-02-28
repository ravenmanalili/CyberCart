import {React, use, useRef} from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateContext} from '../context/ContextProvider';

export default function Signup() {

  const nameRef  = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const {
    setUser,
    setToken,
  } = useStateContext()


    const onSubmit = (e) => {
      e.preventDefault()
      const payload = {
        name: nameRef.current.value, 
        email: emailRef.current.value, 
        password: passwordRef.current.value, 
        confirmPassword: confirmPasswordRef.current.value
  }
  axiosClient.post('/signup', payload)
    .then(({data}) => {
      setUser(data.user)
      setToken (data.token)
    })
    .catch(error => {
      console.log(error)
    })
    console.log(payload)
    console.log('Form submitted')  
}

  return (
        <form onSubmit={onSubmit}>
          <h2 className='title'><strong>Sign Up</strong></h2>
          <input ref={nameRef} type='text' placeholder='Full Name' />
          <input ref={emailRef} type='email' placeholder='Email' />
          <input ref={passwordRef} type='password' placeholder='Password' />
          <input ref={confirmPasswordRef} type='password' placeholder='Confirm Password' />
          <button className='btn btn-block'>Sign Up</button>
          <p className='message'>
            Already registered?<Link to='/login'>
            Create an account
            </Link>            
            </p>
        </form>
  )
}
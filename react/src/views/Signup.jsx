import {React, useRef} from 'react'
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

  
//posting data to the server
  async function signup(payload) {
    try{
      const response = await axiosClient.post('/signup', payload)
      setUser(response.user);  
      setToken(response.token);
    }
    catch(error){
      const err = error.response
      console.log(error)
    }
  }

  //onSubmit function
    const onSubmit = (e) => {
      e.preventDefault()
      const payload = {
        name: nameRef.current.value, 
        email: emailRef.current.value, 
        password: passwordRef.current.value, 
        confirmPassword: confirmPasswordRef.current.value     
      }
      
  signup(payload)
  console.log(payload)
  console.log('Form submitted')
}

/*
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
*/

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
            Login!
            </Link>            
            </p>
        </form>
  )
}
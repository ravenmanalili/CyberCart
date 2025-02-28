import { Link } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import {React, useRef} from 'react'
import axiosClient from '../axios-client';

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const {
      setUser,
      setToken,
    } = useStateContext()

  async function login(payload) {
    try{
      const {data} = await axiosClient.post('/login', payload)
      setUser(data.user);  
      setToken(data.token);
    }
    catch(error){
      const err = error.response
      console.log(err)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const payload= {
      email: emailRef.current.value, 
        password: passwordRef.current.value, 
      
    }
    console.log(e)
   
    login(payload);
    console.log('Form submitted')
    console.log(payload)
  }
  
  return (
          <form onSubmit={onSubmit}>
            <h2 className='title'><strong>Log in</strong></h2>
            <input ref={emailRef} type='email' placeholder='Email' />
            <input ref={passwordRef}type='password' placeholder='Password' />
            <button type="submit"className='btn btn-block'>Login</button>
            <p className='message'>
              Not registered? <Link to='/signup'>Create an account
              </Link>            
              </p>
          </form>
      
  )
}

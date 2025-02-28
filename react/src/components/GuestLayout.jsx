import React from 'react'
import { Outlet } from 'react-router-dom'
import { ContextProvider, useStateContext } from '../context/ContextProvider'

export default function GuestLayout() {
    const token = useStateContext()
    if(!token){
        return <Navigate to="/"/>
    }
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
    <div><Outlet/></div>
    </div>
  </div>
  )
}
